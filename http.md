# HTTP protokoll

A HTTP _(**H**yper**T**ext **T**ransfer **P**rotocol)_ egy TCP feletti, alkalmazási rétegbeli protokoll, melyet széleskörben használnak webalkalmazásokban.

## Működése

* A HTTP egy **kliens-szerver** protokoll, amely kapcsolatot teremt egy kliens (például egy webböngésző) és egy szerver (például egy webszerver) között.
* A HTTP egy **állapotmentes** protokoll, ami azt jelenti, hogy nem emlékszik a korábbi kommunikációra a kliens és a szerver között. Minden kérés/válasz csere független az előző adatcseréktől.
* A HTTP **kérés-válasz modellt** használ. A kliens küld egy kérést a szervernek, majd a szerver választ küld a kliensnek.
    * A HTTP **kérések** egy metódusból, egy URL-ből, opcionális fejlécekből és törzsből állnak. A leggyakoribb HTTP metódusok a GET, POST, PUT és DELETE.
    * A HTTP **válaszok** egy állapotkódból, valamint opcionális fejlécekből és választörzsből állnak. Az állapotkód jelzi, hogy a kérés sikeres volt-e, és a válasz törzse tartalmazza a kért adatokat (vagy adott esetben a hiba okát).

### Kérés

Egy példa kérés felépítése a következő:

```http
GET /template/web/img/logo-uni-miskolc.png HTTP/1.1
User-Agent: curl/7.35.0
Host: www.uni-miskolc.hu
Accept: */*
```

A kérés első sora jelöli meg az elérni kívánt erőforrást. Ezt a kéréshez tartozó, tetszőleges számú **fejléc** (header) követi, `Fejléc: érték` alakban.

Ezt követi az opcionális **törzs** (body) rész, melyben a kérés teljesítéséhez szükséges adatokat helyezhetünk el tetszőleges formátumban (pl. egy új felhasználó adatait JSON formátumban).

#### Metódusok
A leggyakrabban alkalmazott metódusok és szimbolikus jelentésük:

- GET: Adatok lekérdezése
- POST: Új adat hozzáadása
- PUT: Meglévő adat módosítása
- DELETE: Meglévő adat törlése

#### GET kérés paraméterei
A GET kérés speciális, mert törzs részt nem tartalmazhat. Helyette - amennyiben szükséges - a kéréshez tartozó paramétereket ún. **query paraméter**ekként adhatjuk meg.

Példa: `/template/web/img/logo-uni-miskolc.png?time=2020-05-01&thumb=true`

A paraméterek `név=érték` formában adhatóak meg. A paramétereket egymástól `&` jel, az URL-től `?` választja el.

#### Egyéb kérések paraméterei
POST, PUT, DELETE kéréseknél opcionálisan a törzs rész is kitölthető.

Például a következő kérés egy felhasználó létrehozására szolgál:

```http
POST /users HTTP/1.1
User-Agent: curl/7.35.0
Host: api.example.com
Accept: */*
Content-Type: application/json
Content-Length: 28

{ "name": "feri", "gender": "male", "age": 15 }
```

### Válasz

A kliens kéréseire a szerver válaszokat ad. Egy kéréshez legfeljebb egy válasz tartozhat.

A HTTP válasz a következőképpen épül fel:

```http
HTTP/1.1 200 OK
Date: Thu, 18 Mar 2021 13:02:06 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 29
Connection: keep-alive
X-Powered-By: Express
X-Ratelimit-Limit: 1000
X-Ratelimit-Remaining: 999
X-Ratelimit-Reset: 1616072536
Cache-Control: no-cache
Pragma: no-cache

{ "id": 101, "name": "feri", "gender": "male", "age": 15 }
```

A válasz egyebek mellett tartalmaz egy **státuszkódot**, ami a művelet sikerességéről ad információt.<br>

Ezt követik a válaszhoz tartozó fejlécek.

A törzs rész opcionális: a fenti válaszban a szerver visszaküldte az adatbázishoz hozzáadott felhasználó adatait.

#### HTTP státuszkódok
Az egyes HTTP státuszkódok jelentését a HTTP specifikációja tartalmazza, általánosságban a következők írhatóak le róluk:

- 1xx: Informatív üzenet (pl. 101 Switching Protocols)
- 2xx: A kérést a szerver sikeresen megkapta, értelmezte, teljesítette (pl. 200 OK, 201 Created)
- 3xx: Átirányítás (pl. 301 Moved Permanently)
- 4xx: Kliens hiba (pl. 400 Bad Request, 404 Not found)
- 5xx: Szerver hiba (pl. 503 Service Unavailable)

_([Elérhető státuszkódok](https://tools.ietf.org/html/rfc2616#section-10))_
