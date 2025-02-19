# Szoftverkövetelmények

## Szükséges szoftverek telepítése
0. Laborgép használata esetén jelentkezzünk be a `Coder` nevű felhasználóval!
1. [Visual Studio Code](https://code.visualstudio.com/) telepítése.
2. [Node.js v22.x.x](https://nodejs.org/download/release/v22.13.1/node-v22.13.1-x64.msi) telepítése.
3. Node.js telepítésének ellenőrzése, parancssorban: `node -v` (a verziószámnak `22.13.1`-nek kell lennie!)
4. **Csak a laborgépeken** szükséges lehet a `Path` rendszerváltozóhoz hozzáadni a következő útvonalat: `C:\Users\Coder\AppData\Roaming\npm`
5. Angular telepítése, parancssorban: `npm install -g @angular/cli@19.1.6`
6. Angular telepítésének ellenőrzése, parancssorban: `ng version`
7. [WAMPServer](https://sourceforge.net/projects/wampserver/files/WampServer%203/WampServer%203.0.0/wampserver3.3.0_x64.exe/download) telepítése.
8. WAMPServer indítása, majd adatbázis kapcsolat ellenőrzése: http://localhost/phpmyadmin/ (felhasználónév `root`, jelszót nem kell megadni)
9. [Postman](https://dl.pstmn.io/download/latest/win64) telepítése.

## Új Angular projekt létrehozása és elindítása
1. Parancssorban be kell lépni egy tetszőleges mappába, majd generálni egy új projektet: `ng new infrend`
    ```
    Which stylesheet format would you like to use? CSS
    Do you want to enable Server-Side Rendering (SSR) ...? No
    ```
    Ennek hatására egy `infrend` nevű mappa keletkezik, benne egy üres Angular-projekttel.

2. Visual Studio Code-ban meg kell nyitni a létrehozott projektet.
3. Terminal menü > New terminal

    ![kép](https://user-images.githubusercontent.com/14952854/220696206-66b76fe4-1b76-40fd-878f-5f7aa84379d8.png)

5. A megnyitott terminálablakban az ``npm run start`` parancsot kell futtatni.
6. Ha minden jól működik, a `http://localhost:4200/` címen elérhető a webalkalmazás.
