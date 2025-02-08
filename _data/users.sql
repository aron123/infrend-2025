-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3306
-- Létrehozás ideje: 2024. Már 24. 15:27
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
-- Adatbázis: `infrend2024_sz18`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customerId` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `idCard` varchar(255) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `customerId`, `name`, `address`, `phone`, `idCard`) VALUES
(1, '000001', 'Kovács János', '1012 Budapest, Kossuth Lajos utca 12. 1. em. 3.', '+36-20-123-4567', '123456AA'),
(2, '000002', 'Nagy Péter', '4026 Debrecen, Péterfia utca 8.', '+36-30-234-5678', '234567BB'),
(3, '000003', 'Kiss Anna', '6720 Szeged, Tisza Lajos körút 14.', '+36-70-345-6789', '345678CC'),
(4, '000004', 'Tóth Éva', '9022 Győr, Baross Gábor utca 6.', '+36-20-456-7890', '456789DD'),
(5, '000005', 'Szabó András', '3525 Miskolc, Széchenyi utca 22.', '+36-30-567-8901', '567890EE'),
(6, '000006', 'Horváth Zsuzsa', '7621 Pécs, Jókai utca 10.', '+36-70-678-9012', '678901FF'),
(7, '000007', 'Kovács Júlia', '8000 Székesfehérvár, Fő utca 4.', '+36-20-789-0123', '789012GG'),
(8, '000008', 'Nagy Gábor', '6000 Kecskemét, Kálvin tér 18. 2/3.', '+36-30-890-1234', '890123HH'),
(9, '000009', 'Kiss Mariann', '4400 Nyíregyháza, Szent István tér 20.', '+36-70-901-2345', '901234II'),
(10, '000010', 'Tóth József', '5000 Szolnok, Ady Endre út 16.', '+36-20-012-3456', '012345JJ'),
(11, '000011', 'Szabó Eszter', '2030 Érd, Bajcsy-Zsilinszky út 28. 1. em. 2.', '+36-30-123-4567', '123456KK'),
(12, '000012', 'Horváth Gergő', '2400 Dunaújváros, Ady Endre út 30. 4. em. 12.', '+36-70-234-5678', '234567LL'),
(13, '000013', 'Kovács Eszter', '9400 Sopron, Fő tér 24.', '+36-20-345-6789', '345678MM'),
(14, '000014', 'Nagy Ferenc', '9700 Szombathely, Berzsenyi Dániel tér 26. 3. em. 5.', '+36-30-456-7890', '456789NN'),
(15, '000015', 'Kiss Réka', '2800 Tatabánya, Fő tér 32.', '+36-70-567-8901', '567890OO'),
(16, '000016', 'Tóth Balázs', '8200 Veszprém, Fő tér 34.', '+36-20-678-9012', '678901PP'),
(17, '000017', 'Szabó Tamás', '8900 Zalaegerszeg, Petőfi Sándor utca 36.', '+36-30-789-0123', '789012QQ'),
(18, '000018', 'Horváth Emese', '3300 Eger, Dobó tér 38. 2. em. 7.', '+36-70-890-1234', '890123RR'),
(19, '000019', 'Kovács Katalin', '8800 Nagykanizsa, Fő tér 40.', '+36-20-901-2345', '901234SS'),
(20, '000020', 'Nagy István', '8000 Székesfehérvár, Fő utca 42.', '+36-30-012-3456', '012345TT'),
(21, '000021', 'Kovács János', '1012 Budapest, Kossuth Lajos utca 12. 1. em. 3.', '+36-20-123-4567', '123456UU'),
(22, '000022', 'Nagy Péter', '4026 Debrecen, Péterfia utca 8.', '+36-30-234-5678', '234567VV'),
(23, '000023', 'Kiss Anna', '6720 Szeged, Tisza Lajos körút 14.', '+36-70-345-6789', '345678WW'),
(24, '000024', 'Tóth Éva', '9022 Győr, Baross Gábor utca 6.', '+36-20-456-7890', '456789XX'),
(25, '000025', 'Szabó András', '3525 Miskolc, Széchenyi utca 22.', '+36-30-567-8901', '567890YY'),
(26, '000026', 'Horváth Zsuzsa', '7621 Pécs, Jókai utca 10.', '+36-70-678-9012', '678901ZZ'),
(27, '000027', 'Kovács Júlia', '8000 Székesfehérvár, Fő utca 4.', '+36-20-789-0123', '789012AB'),
(28, '000028', 'Nagy Gábor', '6000 Kecskemét, Kálvin tér 18. 2/3.', '+36-30-890-1234', '890123BC'),
(29, '000029', 'Kiss Mariann', '4400 Nyíregyháza, Szent István tér 20.', '+36-70-901-2345', '901234CD'),
(30, '000030', 'Tóth József', '5000 Szolnok, Ady Endre út 16.', '+36-20-012-3456', '012345DE'),
(31, '000031', 'Szabó Eszter', '2030 Érd, Bajcsy-Zsilinszky út 28. 1. em. 2.', '+36-30-123-4567', '123456EF'),
(32, '000032', 'Horváth Gergő', '2400 Dunaújváros, Ady Endre út 30. 4. em. 12.', '+36-70-234-5678', '234567FG'),
(33, '000033', 'Kovács Eszter', '9400 Sopron, Fő tér 24.', '+36-20-345-6789', '345678GH'),
(34, '000034', 'Nagy Ferenc', '9700 Szombathely, Berzsenyi Dániel tér 26. 3. em. 5.', '+36-30-456-7890', '456789HI'),
(35, '000035', 'Kiss Réka', '2800 Tatabánya, Fő tér 32.', '+36-70-567-8901', '567890IJ'),
(36, '000036', 'Tóth Balázs', '8200 Veszprém, Fő tér 34.', '+36-20-678-9012', '678901JK'),
(37, '000037', 'Szabó Tamás', '8900 Zalaegerszeg, Petőfi Sándor utca 36.', '+36-30-789-0123', '789012KL'),
(38, '000038', 'Horváth Emese', '3300 Eger, Dobó tér 38. 2. em. 7.', '+36-70-890-1234', '890123LM'),
(39, '000039', 'Kovács Katalin', '8800 Nagykanizsa, Fő tér 40.', '+36-20-901-2345', '901234MN'),
(40, '000040', 'Nagy István', '8000 Székesfehérvár, Fő utca 42.', '+36-30-012-3456', '012345NO'),
(41, '000041', 'Kovács János', '1012 Budapest, Kossuth Lajos utca 12. 1. em. 3.', '+36-20-123-4567', '123456OP'),
(42, '000042', 'Nagy Péter', '4026 Debrecen, Péterfia utca 8.', '+36-30-234-5678', '234567PQ'),
(43, '000043', 'Kiss Anna', '6720 Szeged, Tisza Lajos körút 14.', '+36-70-345-6789', '345678QR'),
(44, '000044', 'Tóth Éva', '9022 Győr, Baross Gábor utca 6.', '+36-20-456-7890', '456789RS'),
(45, '000045', 'Szabó András', '3525 Miskolc, Széchenyi utca 22.', '+36-30-567-8901', '567890ST'),
(46, '000046', 'Horváth Zsuzsa', '7621 Pécs, Jókai utca 10.', '+36-70-678-9012', '678901TU'),
(47, '000047', 'Kovács Júlia', '8000 Székesfehérvár, Fő utca 4.', '+36-20-789-0123', '789012UV'),
(48, '000048', 'Nagy Gábor', '6000 Kecskemét, Kálvin tér 18. 2/3.', '+36-30-890-1234', '890123VW'),
(49, '000049', 'Kiss Mariann', '4400 Nyíregyháza, Szent István tér 20.', '+36-70-901-2345', '901234WX'),
(50, '000050', 'Tóth József', '5000 Szolnok, Ady Endre út 16.', '+36-20-012-3456', '012345XY');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
