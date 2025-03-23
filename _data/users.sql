-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3306
-- Létrehozás ideje: 2025. Már 23. 13:43
-- Kiszolgáló verziója: 8.0.31
-- PHP verzió: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `infrend2025_typeorm`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `balance` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `name`, `address`, `balance`) VALUES
(2, 'Kiss Péter', '1053 Budapest, Kossuth Lajos utca 12.', 150000),
(3, 'Nagy Éva', '4024 Debrecen, Petőfi tér 5.', 230000),
(4, 'Tóth Gábor', '6720 Szeged, Rákóczi út 8.', 175000),
(5, 'Szabó Anna', '7621 Pécs, Ady Endre utca 3.', 120000),
(6, 'Farkas Dániel', '9021 Győr, Bartók Béla út 25.', 198000),
(7, 'Molnár László', '3530 Miskolc, Dózsa György utca 14.', 210000),
(8, 'Horváth Zoltán', '3300 Eger, Széchenyi tér 7.', 142000),
(9, 'Varga Mária', '6000 Kecskemét, Arany János utca 6.', 187000),
(10, 'Balogh István', '8000 Székesfehérvár, Deák Ferenc utca 9.', 160000),
(11, 'Szilágyi Tamás', '4400 Nyíregyháza, Kertész utca 11.', 190000),
(12, 'Lakatos Brigitta', '9700 Szombathely, Móra Ferenc utca 20.', 140000),
(13, 'Fehér András', '2800 Tatabánya, Táncsics Mihály út 3.', 175500),
(14, 'Kovács Norbert', '8200 Veszprém, Kálvin tér 22.', 220000),
(15, 'Juhász Csilla', '5600 Békéscsaba, Madách Imre utca 18.', 165000),
(16, 'Takács Balázs', '8900 Zalaegerszeg, Kossuth tér 2.', 155000),
(17, 'Oláh Katalin', '2400 Dunaújváros, Hunyadi út 9.', 172000),
(18, 'Bognár Sándor', '3100 Salgótarján, Jókai Mór utca 17.', 135000),
(19, 'Gál Ferenc', '2500 Esztergom, Rákóczi tér 5.', 195000),
(20, 'Sándor Erzsébet', '6500 Baja, Kinizsi Pál utca 16.', 143000),
(21, 'Barta Attila', '8600 Siófok, Rózsa utca 8.', 168000),
(22, 'Majoros Eszter', '4200 Hajdúszoboszló, József Attila út 4.', 175000),
(23, 'Pintér Gergely', '2900 Komárom, Szabadság tér 19.', 185000),
(24, 'Rácz Anikó', '7100 Szekszárd, Táncsics Mihály utca 2.', 200000),
(25, 'Fodor Lilla', '2700 Cegléd, Kőrösi út 7.', 137000),
(26, 'Vass Zsolt', '5700 Gyula, Petőfi Sándor utca 10.', 182000),
(27, 'Simon Roland', '5900 Orosháza, Bem József utca 21.', 154000),
(28, 'Boros Gábor', '7400 Kaposvár, Kossuth Lajos tér 3.', 145000),
(29, 'Béres Krisztián', '2030 Érd, Dombóvári út 13.', 178000),
(30, 'Hegedűs Tamara', '2600 Vác, Szent István tér 14.', 190500),
(31, 'Török Ádám', '2750 Nagykőrös, Ady Endre út 22.', 157500),
(32, 'Fekete Levente', '2100 Gödöllő, Béke tér 6.', 162000),
(33, 'Bíró Nóra', '2000 Szentendre, Árpád fejedelem út 9.', 170000),
(34, 'Dömötör László', '3000 Hatvan, Sárkány utca 18.', 148000),
(35, 'Benedek Laura', '2370 Dabas, Radnóti Miklós út 5.', 158000),
(36, 'Katona Zsombor', '3400 Mezőkövesd, Árpád tér 11.', 175500),
(37, 'Gulyás Petra', '2890 Tata, Kinizsi utca 13.', 141000),
(38, 'Somogyi Márk', '9400 Sopron, Hunyadi út 7.', 159000),
(39, 'Veres Réka', '7150 Bonyhád, Béke utca 16.', 132000),
(40, 'Kelemen Ákos', '7700 Mohács, Hunyadi tér 4.', 195500),
(41, 'Hollósi Judit', '7200 Dombóvár, József Attila tér 21.', 165500),
(42, 'Lantos Lilla', '2510 Dorog, Kossuth tér 12.', 144000),
(43, 'Pálfi Tibor', '6300 Kalocsa, Kinizsi utca 10.', 178500),
(44, 'Havasi Tamás', '8400 Ajka, Fő tér 9.', 188000),
(45, 'Tarján Dénes', '3700 Kazincbarcika, Széchenyi út 15.', 155500),
(46, 'Medgyesi Patrik', '3580 Tiszaújváros, Béke tér 14.', 160500),
(47, 'Zsiga Virág', '8380 Hévíz, Deák tér 11.', 199000),
(48, 'Karácsonyi Gábor', '6900 Makó, Táncsics Mihály tér 8.', 153000),
(49, 'Magyar Zita', '8230 Balatonfüred, Kossuth tér 17.', 166000),
(50, 'Bujdosó Orsolya', '5630 Békés, Ady Endre tér 5.', 172500);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
