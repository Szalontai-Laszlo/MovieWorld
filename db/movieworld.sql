-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Ápr 02. 07:42
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `movieworld`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `rovid_leiras` varchar(1000) NOT NULL,
  `hosszu_leiras` varchar(2500) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `movies`
--

INSERT INTO `movies` (`id`, `name`, `rovid_leiras`, `hosszu_leiras`, `img`) VALUES
(1, 'A Csodálatos Pókember', 'A Csodálatos Pókember 2012-ben bemutatott amerikai film, amely Marc Webb rendezésében az eredeti Marvel képregény alapján készült.', 'asdasd', './image/csodalatos_pokember.png'),
(2, 'A Csodálatos Pókember 2', 'A Csodálatos Pókember 2. 2014-es egész estés amerikai film, amelyet Marc Webb rendezett és Alex Kurtzman, Roberto Orci, valamint Jeff Pinkner írt.', 'Bővebb leírás: Peter Parker folytatja Pókemberként a bűnözés elleni harcot, miközben próbálja megvédeni Gwen Stacyt. Új ellenfelek jelennek meg: Electro, akit hatalmas elektromos erő hajt, és Harry Osborn, aki a Zöld Manóvá válik. A tragikus események Gwen halálához vezetnek, mélyen megrázva Petert.', './image/csodalatos_pok2.png'),
(3, 'Bosszúállók', 'A Bosszúállók 2012-ben bemutatott szuperhős-fantasy film. A történet alapja a Marvel Comics képregénykiadó által 1963-ban kitalált Bosszú Angyalai nevű szuperhőscsapat.', 'Nick Fury összehívja a szuperhősök csapatát – Vasembert, Amerika Kapitányt, Thort, Hulkot, Fekete Özvegyet és Sólyomszemet –, hogy megállítsák Lokit, aki a Tesseract segítségével a Föld elpusztítására készül. A hősök összefognak, legyőzik Lokit és seregeit, ezzel megalapozva a Bosszúállók szövetségét.', './image/avangers.png'),
(4, 'Five Nights at Freddys', 'Az Öt éjjel Freddy pizzázójában 2023-ban bemutatott amerikai horrorfilm, amelyet Emma Tammi rendezett, a 2014-es Five Nights at Freddy’s című videójátéksorozat alapján.', 'A játékos éjjeliőrként dolgozik Freddy Fazbear pizzériájában, ahol az éjszakánként életre kelő animatronikus figurák vadásznak rá. Az öt éjszaka során túl kell élni a támadásaikat, miközben biztonsági kamerák és korlátozott erőforrások segítik. A hátborzongató események mögött sötét titkok és gyilkosságok rejlenek.', './image/fnaf.png'),
(5, 'Másnaposok', 'A Másnaposok 2009-ben bemutatott amerikai filmvígjáték, melyet Todd Phillips rendezett.', 'Három barát Las Vegasba utazik Doug legénybúcsújára. Egy vad éjszaka után másnap semmire sem emlékeznek, Doug pedig eltűnt. Különös nyomok – egy tigris, egy csecsemő és Mike Tyson – vezetik őket az előző éjszaka eseményeinek felgöngyölítésében, miközben próbálják időben megtalálni Dougot az esküvőre.', './image/masnaposok.png'),
(6, 'Oppenheimer', 'Az Oppenheimer 2023-ban bemutatott amerikai életrajzi filmthriller, amelyet Christopher Nolan írt és rendezett az American Prometheus(wd) című könyv alapján.', 'A film J. Robert Oppenheimer életét követi, aki az atombomba kifejlesztéséért felelős Manhattan-terv vezetője volt. Oppenheimer belső konfliktusokkal küzdött, miközben a tudományos áttörés és a fegyverek pusztító ereje közötti határvonalon egyensúlyozott. A film a bomba létrejötte és annak következményeit is bemutatja.', './image/oppenheimer.png'),
(7, 'Pókember: Irány a Pókverzum!', 'A Pókember: Irány a Pókverzum! 2018-ban bemutatott amerikai 3D-s számítógépes animációs akciófilm, amelyet Phil Lord forgatókönyvéből Bob Persichetti, Peter Ramsey és Rodney Rothman rendezett.', 'Miles Morales, az új Pókember, felfedezi, hogy több párhuzamos univerzum létezik, mindegyik saját Pókemberével. Amikor egy univerzumbeli fenyegetés elpusztítja a multiverzum egyensúlyát, Miles és más Pókemberek – köztük Peter B. Parker és Spider-Gwen – összefognak, hogy megmentsék a világokat. A film a multiverzum és önazonosság kérdéseit is érinti.', './image/pokember_irany.png'),
(8, 'A Farkasember', 'A Farkasember 2025-ben bemutatott amerikai horrorfilm, amelyet Leigh Whannell rendezett.', 'A film egy férfit követ, aki egy elhagyatott erdőben találkozik egy szörnyeteggel, amely farkasemberré változtatja. Miközben próbálja megfejteni a titkot, szembesül saját belső démonjaival. A szörnyeteg átalakulását praktikus effektekkel jelenítik meg, tisztelegve a klasszikus farkasember-történetek előtt.', './image/thewolfman.png');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `vezeteknev` varchar(100) NOT NULL,
  `keresztnev` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL,
  `jelszo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
