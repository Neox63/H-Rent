-- MySQL dump 10.13  Distrib 8.0.28, for macos12.2 (x86_64)
--
-- Host: localhost    Database: HrentDb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Announce`
--

DROP TABLE IF EXISTS `Announce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Announce` (
  `idAnnounce` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `postalCode` int DEFAULT NULL,
  `max` int DEFAULT NULL,
  `caution` float DEFAULT NULL,
  `city`VARCHAR(60) DEFAULT NULL,
  `zipcode` VARCHAR(5),
  PRIMARY KEY (`idAnnounce`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Announce`
--

LOCK TABLES `Announce` WRITE;
/*!40000 ALTER TABLE `Announce` DISABLE KEYS */;
/*!40000 ALTER TABLE `Announce` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `Document`
--

DROP TABLE IF EXISTS `Document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Document` (
  `idDocument` int NOT NULL AUTO_INCREMENT,
  `idUser` varchar(45) NOT NULL,
  `docLocation` varchar(45) DEFAULT NULL,
  `idDocumentType` int NOT NULL,
  PRIMARY KEY (`idDocument`,`idUser`),
  KEY `fk_Document_DocumentType1_idx` (`idDocumentType`),
  CONSTRAINT `fk_Document_DocumentType1` FOREIGN KEY (`idDocumentType`) REFERENCES `DocumentType` (`idDocumentType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Document`
--

LOCK TABLES `Document` WRITE;
/*!40000 ALTER TABLE `Document` DISABLE KEYS */;
/*!40000 ALTER TABLE `Document` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DocumentType`
--

DROP TABLE IF EXISTS `DocumentType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DocumentType` (
  `idDocumentType` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idDocumentType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DocumentType`
--

LOCK TABLES `DocumentType` WRITE;
/*!40000 ALTER TABLE `DocumentType` DISABLE KEYS */;
INSERT INTO `DocumentType` VALUES (1,'passeport'),(2,'Carte d\'identité'),(3,'Permis de conduire');
/*!40000 ALTER TABLE `DocumentType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Picture`
--

DROP TABLE IF EXISTS `Picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Picture` (
  `idPicture` int NOT NULL AUTO_INCREMENT,
  `location` varchar(45) DEFAULT NULL,
  `Announce_idAnnounce` int NOT NULL,
  PRIMARY KEY (`idPicture`,`Announce_idAnnounce`),
  KEY `fk_Picture_Announce1_idx` (`Announce_idAnnounce`),
  CONSTRAINT `fk_Picture_Announce1` FOREIGN KEY (`Announce_idAnnounce`) REFERENCES `Announce` (`idAnnounce`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Picture`
--

LOCK TABLES `Picture` WRITE;
/*!40000 ALTER TABLE `Picture` DISABLE KEYS */;
/*!40000 ALTER TABLE `Picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reservation`
--

DROP TABLE IF EXISTS `Reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reservation` (
  `idReservation` int NOT NULL,
  `User_idUser` int NOT NULL,
  `Announce_idAnnounce` int NOT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  PRIMARY KEY (`idReservation`,`User_idUser`,`Announce_idAnnounce`),
  KEY `fk_Reservation_User1_idx` (`User_idUser`),
  KEY `fk_Reservation_Announce1_idx` (`Announce_idAnnounce`),
  CONSTRAINT `fk_Reservation_Announce1` FOREIGN KEY (`Announce_idAnnounce`) REFERENCES `Announce` (`idAnnounce`),
  CONSTRAINT `fk_Reservation_User1` FOREIGN KEY (`User_idUser`) REFERENCES `User` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reservation`
--

LOCK TABLES `Reservation` WRITE;
/*!40000 ALTER TABLE `Reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `Reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `passwdHash` varchar(255) DEFAULT NULL,
  `registeredAt` datetime DEFAULT NULL,
  `city` varchar(60) DEFAULT NULL,
  `zipcode` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'Thomas','Prezot','tprezot@gmail.com','$2b$10$TnEZHmWzGuqhcTAChVVts.qmZkOG1aVj0f1dS9GWOThXxMgTfbuPO',NULL,NULL,NULL),(8,'Quentin','Lecompte','quentin@gmail.com','$2b$10$D6/XEPW9Xc5q3GyOU5cnVOvVMzC4D92bAQ8ommsdzl7siA7t9w.5q','2022-03-28 14:52:00',NULL,NULL),(10,'Marc','Pornaleff','pornaleff@gmail.com','$2b$10$jNlr8MMZPjEQBCk5JWdBTeao1OPCAtD227kt1ad3JkaWFBmEWnYQW','2022-04-01 10:40:34','Cournon d\'Auvergne','63800');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `WishList`
--

DROP TABLE IF EXISTS `WishList`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `WishList` (
  `User_idUser` int NOT NULL,
  `Announce_idAnnounce` int NOT NULL,
  PRIMARY KEY (`User_idUser`,`Announce_idAnnounce`),
  KEY `fk_User_has_Announce_Announce1_idx` (`Announce_idAnnounce`),
  KEY `fk_User_has_Announce_User1_idx` (`User_idUser`),
  CONSTRAINT `fk_User_has_Announce_Announce1` FOREIGN KEY (`Announce_idAnnounce`) REFERENCES `Announce` (`idAnnounce`),
  CONSTRAINT `fk_User_has_Announce_User1` FOREIGN KEY (`User_idUser`) REFERENCES `User` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WishList`
--

LOCK TABLES `WishList` WRITE;
/*!40000 ALTER TABLE `WishList` DISABLE KEYS */;
/*!40000 ALTER TABLE `WishList` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-06 14:32:16
