-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  ven. 03 déc. 2021 à 14:57
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `HrentBd`
--

-- --------------------------------------------------------

--
-- Structure de la table `Annonce`
--

CREATE TABLE `Annonce` (
  `idAnnonce` int(11) NOT NULL,
  `adresse` varchar(60) NOT NULL,
  `prix` int(11) NOT NULL,
  `nom` varchar(60) NOT NULL,
  `dateMiseEnLigne` datetime NOT NULL,
  `idImage` int(11) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Document`
--

CREATE TABLE `Document` (
  `idDocument` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `cheminDocument` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Image`
--

CREATE TABLE `Image` (
  `idImage` int(11) NOT NULL,
  `chemin` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Reservations`
--

CREATE TABLE `Reservations` (
  `idReservation` int(11) NOT NULL,
  `dateDebut` datetime NOT NULL,
  `dateFin` datetime NOT NULL,
  `idClient` int(11) NOT NULL,
  `idAnnonce` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `TypeDocument`
--

CREATE TABLE `TypeDocument` (
  `typeDocument` varchar(40) NOT NULL,
  `idDocument` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateur`
--

CREATE TABLE `Utilisateur` (
  `id` int(11) NOT NULL,
  `nom` varchar(60) NOT NULL,
  `prenom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Annonce`
--
ALTER TABLE `Annonce`
  ADD PRIMARY KEY (`idAnnonce`),
  ADD KEY `idImage` (`idImage`),
  ADD KEY `idUser` (`idUser`);

--
-- Index pour la table `Document`
--
ALTER TABLE `Document`
  ADD PRIMARY KEY (`idDocument`),
  ADD KEY `idUser` (`idUser`);

--
-- Index pour la table `Image`
--
ALTER TABLE `Image`
  ADD PRIMARY KEY (`idImage`);

--
-- Index pour la table `Reservations`
--
ALTER TABLE `Reservations`
  ADD PRIMARY KEY (`idReservation`),
  ADD KEY `idClient` (`idClient`),
  ADD KEY `idAnnonce` (`idAnnonce`);

--
-- Index pour la table `TypeDocument`
--
ALTER TABLE `TypeDocument`
  ADD PRIMARY KEY (`typeDocument`),
  ADD KEY `idDocument` (`idDocument`);

--
-- Index pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Annonce`
--
ALTER TABLE `Annonce`
  ADD CONSTRAINT `annonce_ibfk_1` FOREIGN KEY (`idImage`) REFERENCES `Image` (`idImage`),
  ADD CONSTRAINT `annonce_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `Utilisateur` (`id`);

--
-- Contraintes pour la table `Document`
--
ALTER TABLE `Document`
  ADD CONSTRAINT `document_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `Utilisateur` (`id`);

--
-- Contraintes pour la table `Reservations`
--
ALTER TABLE `Reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `Utilisateur` (`id`),
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`idAnnonce`) REFERENCES `Annonce` (`idAnnonce`);

--
-- Contraintes pour la table `TypeDocument`
--
ALTER TABLE `TypeDocument`
  ADD CONSTRAINT `typedocument_ibfk_1` FOREIGN KEY (`idDocument`) REFERENCES `Document` (`idDocument`);
