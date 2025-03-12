# TypeORM

A TypeORM egy objektum-relációs leképező eszköz, aminek segítségével TypeScript osztályokat különböző adatbázisokkal tudjuk anélkül használni, hogy konkrét adatbázis-kezelő specifikus parancsokat használnánk (TypeORM segítségével nem csak relációs adatbázist lehet kezelni, hanem NoSQL-t - pl. MongoDB-t - is).

Használatát egy példán keresztül érdemes megismerni.

* Table of Contents
{:toc}

## Globális függőségek telepítése

A következő parancsot egyszer kell futtatni, ennek hatására rendszer szinten települnek a szükséges csomagok:
```
npm install -g typeorm
```

## Projekt inicializálás

- Meglévő projektbe történő telepítéskor [ezt az útmutatót](https://typeorm.io/#installation) érdemes követni.
- Új, MySQL alapú projekt létrehozásakor elég ezt a parancsot futtatni: `typeorm init --name typeorm-tutorial --database mysql`

## Projekt struktúra

A projektben a következő fájlstruktúra jött létre:

```
.
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── data-source.ts
│   ├── entity
│   │   └── User.ts
│   ├── migration
│   └── index.ts
└── tsconfig.json
```

Nézzünk bele a létrejött fájlok tartalmába!

- `data-source.ts`: A TypeORM konfigurációs fájlja.
- `entity`: Ez a könyvtár tartalmazza az adatbázis modelleket.
- `migration`: Ez a könyvtár tartalmazza az adatbázis migrációs szkripteket. Ez elsősorban éles rendszerek fejlesztésekor szükséges, mert minden DB módosításnál ebben lesznek megadva azok az adatbázis-specifikus parancsok, amik megvalósítják a konkrét struktúrákat és/vagy azok változtatását.
- `index.ts`: Az alkalmazás belépési pontja, ez a .ts fájl indul el futtatáskor.
- `tsconfig.json`: A TypeScript compiler beállításai.

A MySQL-ben hozzunk létre egy `infrend2024_typeorm` adatbázist, majd nyissuk meg a `data-source.ts`-t, és módosítsuk a beállításokat az alábbiak szerint:

```ts
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root", // in case of no password, set it to undefined, or delete this row
    database: "infrend2024_typeorm",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
});
```

> **FIGYELEM!** A belépési adatok (username / password) mindenkinél eltérőek lehetnek. Jelszó nélküli kapcsolódás esetén a jelszót tartalmazó sort törölni kell!

## Projekt indítása

Futtassuk az `npm start` parancsot!

Ha hiba nélkül lefutott, akkor a PHPMyAdmin felületén megtekinthetjük a létrejött 1 sort az adatbázisban.

## Entitások és relációk

A tábláink gyakran kapcsolatban vannak egymással. Három alap relációt különböztetünk meg:

- **One-to-One**: 1:1 reláció, ahol két táblát úgy kapcsolunk össze, hogy 1 rekord csak 1 másik rekordnak felelhet meg egy másik táblában. Például ha az _Országok_ és a _Fővárosok_ táblákat tekintjük, egy országnak egy fővárosa lehet és minden főváros csak egy országnak lehet a fővárosa.
- **One-to-Many**: 1:N reláció, ahol 1 rekord több másik táblabeli rekorddal is össze lehet kapcsolva. Példaként tekintsük a _Kutyák_ és _Gazdák_ táblát, ahol 1 kutyának csak 1 gazdája van, de egy gazdának több kutyája is lehet.
- **Many-to-Many**: N:M reláció, ahol 1 rekord több másik táblabeli rekorddal is össze lehet kapcsolva, és ez fordítva is teljesül. Ilyen pl. a _Felhasználók_ és _Szerepkörök_ tábla, ahol egy felhasználónak több szerepköre is lehet és egy szerepkör több felhasználóhoz is tartozhat.

## One-to-Many példa

Adjunk hozzá két entitást az `src/entity/` mappához, `Dog.ts` és `Owner.ts` elnevezéssel!

Az 1:N relációt mindkét osztályban jelölnünk kell, a `ManyToOne` és `OneToMany` dekorátorokkal.

```ts
// Dog.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Owner } from "./Owner";

@Entity()
export class Dog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Owner, owner => owner.dogs)
    owner: Owner;
}
```

Az osztály `owner` adattagja feletti dekorátor jelzi, hogy „több kutyának egy tulajdonosa is lehet”. Az első paraméter jelzi, hogy a reláció az `Owner` osztályra mutat. A második paraméter jelzi, hogy az `Owner` osztályban a `dogs` adattaggal lesz összekapcsolva.

```ts
// Owner.ts
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Dog } from "./Dog";

@Entity()
export class Owner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Dog, dog => dog.owner)
    dogs: Dog[];
}
```

Az `Owner` osztály `dogs` adattagja feletti dekorátor jelzi, hogy „egy gazdának több kutyája is lehet”. Az első paraméter jelzi, hogy a reláció a `Dog` osztályra mutat. A második paraméter jelzi, hogy a `Dog` osztályban az `owner` adattaggal lesz összekapcsolva.

Módosítsuk a `data-source.ts` fájlt, az `entities` tömbhöz adjuk hozzá az új entitásokat: `entities: [Dog, Owner]`.

Módosítsuk továbbá az `index.ts` fájlt!

```ts
import { AppDataSource } from "./data-source"
import { Dog } from "./entity/Dog";
import { Owner } from "./entity/Owner";

AppDataSource.initialize().then(async () => {
    const dog1 = new Dog();
    dog1.name = 'Bodri';

    const dog2 = new Dog();
    dog2.name = 'Buksi';

    const owner = new Owner();
    owner.name = "Kovács Lajos";
    owner.dogs = [ dog1, dog2 ];

    await AppDataSource.manager.save(owner);
    console.log("Owner is saved.");

    AppDataSource.destroy();
}).catch(error => {
    console.log(error);
    AppDataSource.destroy();
});
```

Futtassuk le a kódot (`npm start`), és nézzük meg, hogy mi jött létre az adatbázisban!

Látható, hogy az ORM rendszer létrehozta a táblákat, a `dog` táblában az `owner`-re mutató id-vel. Láthatjuk még azt is, hogy az `owner` táblában 1 sor van, de a `dog` táblában nem jött létre semmi.

Azért, hogy létrejöjjenek a kutyákhoz tartozó rekordok is, az `Owner.ts`-ben módosítsuk az 1:N relációt leíró dekorátort:

```ts
@OneToMany(type => Dog, dog => dog.owner, { cascade: true })
```

A `cascade: true` engedélyezi, hogy a gazda létrehozásakor a kutya is létrejöjjön. Mi történik viszont törlés esetén, ha egy gazdát törlünk? Próbáljuk ki!

Az `index.ts`-ben a save() után rögtön tegyük be a következő sort, és futtassuk újra az alkalmazást (`npm start`):

```ts
await AppDataSource.manager.remove(owner);
```

A kapott hibaüzenet azt jelenti, hogy a TypeORM nem tudja letörölni a gazdát, mert a `dog` táblában van olyan idegen kulcs, ami a törlendő gazdára mutat.

```
Cannot delete or update a parent row: a foreign key constraint fails (`infrend2024_typeorm`.`dog`, CONSTRAINT `FK_2cd931b431fa086ee81e43ec5da` FOREIGN KEY (`ownerId`) REFERENCES `owner` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION)
```

A problémát megoldhatjuk úgy, hogy a kutyák tulajdonosát a törlés előtt `null`-ra állítjuk, de az alábbi módon beállítható az is, hogy a gazdával együtt a kutyák is törlésre kerüljenek (azaz „kaszkádolt törlés” történjen):

```ts
// Dog.ts

@ManyToOne(type => Owner, owner => owner.dogs, { onDelete: 'CASCADE' })
owner: Owner;
```

## Many-to-Many példa

Az ORM-ek erőssége akkor válik érezhetőbbé, ha több-több reláció esetén kapcsolótáblát is létre kell hoznunk.

Klasszikus példa a _Felhasználó_ - _Szerepkör_ reláció.

Az `src/entity` mappában hozzuk létre a `Role.ts` fájlt a következő tartalommal:

```ts
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
```

Látható, hogy ebben a kódban semmi újdonság nincs. Most hozzuk létre a `User.ts` fájlt!

```ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Role } from "./Role";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Role, { cascade: true })
    @JoinTable()
    roles: Role[];
}
```

A fenti kódban látható, hogyan lehet több-több kapcsolatot létrehozni. A `User` osztály esetében most rögtön `cascade` típusú kapcsolatot definiáltunk a szerepkörökre nézve.

Az újonnan létrehozott entitásokra hivatkozzunk a `data-source.ts` fájl megfelelő pontján: `entities: [User, Role, Dog, Owner]`.

Ezt követően írjuk át az `index.ts` fájl tartalmát a következőre:

```ts
import { AppDataSource } from "./data-source"
import { Role } from "./entity/Role";
import { User } from "./entity/User";

AppDataSource.initialize().then(async () => {
    const roleAdmin = new Role();
    roleAdmin.name = "admin";

    const roleUser = new Role();
    roleUser.name = "user";

    const user = new User();
    user.name = "administrator";
    user.roles = [roleAdmin, roleUser];

    await AppDataSource.manager.save(user);
    console.log("User is saved.");

    AppDataSource.destroy();
}).catch(error => {
    console.log(error);
    AppDataSource.destroy();
});
```

Futtassuk a kódot (`npm start`), majd a PHPMyAdmin felületén ellenőrizzük, hogy mi történt az adatbázisban:

Létrejött egy `user` és egy `role` tábla a felhasználók és a szerepkörök tárolásához, valamint létrejött egy `user_roles_role` elnevezésű kapcsolótábla is, mely a több-több kapcsolatot valósítja meg az entitások között.
