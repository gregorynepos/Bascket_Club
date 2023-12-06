-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : db.3wa.io
-- Généré le : sam. 22 avr. 2023 à 23:40
-- Version du serveur :  5.7.33-0ubuntu0.18.04.1-log
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gregorynepos_basketball`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `nom` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `articles_id` int(11) NOT NULL,
  `password` varchar(150) NOT NULL,
  `stages_id` int(11) NOT NULL,
  `images_id` int(11) NOT NULL,
  `prenom` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `descriptions` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `images_articles` varchar(150) NOT NULL,
  `alt_articles` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `title`, `descriptions`, `date`, `images_articles`, `alt_articles`) VALUES
(1, 'loisir', 'Lorem ipsum dolor sit amet, consecte ', '2023-04-02 10:18:50', '../img/equipes/U17-M2.jpg', 'Lorem ipsum dolor sit amet, consecte '),
(2, 'ecole d\'arbitre', 'Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte ', '2023-04-02 10:19:02', '../img/equipes/U15-M2.jpg', 'gzvcjvvchLorem ipsum dolor sit amet, consecte '),
(3, 'entraînement', 'Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet', '2023-04-02 10:19:18', '../img/equipes/U11-M2.jpg', 'Lorem ipsum dolor sit amet, consecte '),
(4, 'test', 'Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet', '2023-04-21 22:44:44', '', ''),
(5, 'test', 'Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet', '2023-04-21 22:44:53', '', ''),
(6, 'test', 'Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet', '2023-04-21 22:45:02', '', ''),
(7, 'basket club allauch', 'super club !!! Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor ', '2023-04-21 22:47:10', '../img/equipes/U11-M1.jpg', 'photos du logo'),
(9, 'le ballon basket', 'Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte ', '2023-04-20 13:02:08', '../img/1.jpg', 'un ballon de basket'),
(10, 'audrey', 'secretaire Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte Lorem ipsum ', '2023-04-21 22:46:00', '../img/audrey.png', 'photo de la secretaire audrey'),
(11, 'basket club', 'basket club Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor ', '2023-04-21 22:46:31', '../img/7.jpg', 'basket'),
(12, 'basket 2', 'basket ballon Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor ', '2023-04-21 22:46:35', '../img/7.jpg', 'basket ballon'),
(13, 'résultas', 'résultats Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor ', '2023-04-21 22:46:39', '../img/12.png', 'photos des résultats'),
(14, 'résultats', 'résultats Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor ', '2023-04-21 22:46:47', '../img/13.png', 'photos du résultats'),
(15, 'calendrier', 'saison 22/23 Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor ', '2023-04-21 22:46:53', '../img/11.png', 'calendrier'),
(16, 'panier', 'panier Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor ', '2023-04-21 22:46:58', '../img/7.jpg', 'panier');

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `categoryName`) VALUES
(1, 'equipes Garçons'),
(2, 'equipes Filles'),
(3, 'Ecole de basket et loisir');

-- --------------------------------------------------------

--
-- Structure de la table `equipes`
--

CREATE TABLE `equipes` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `ref` varchar(150) NOT NULL,
  `images_equipes` varchar(150) NOT NULL,
  `id_category` int(11) NOT NULL,
  `alt_equipes` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `equipes`
--

INSERT INTO `equipes` (`id`, `name`, `ref`, `images_equipes`, `id_category`, `alt_equipes`) VALUES
(1, 'U-13', 'M1 benjamin ', '../img/equipes/U13-M1.jpg', 1, 'equipes ok'),
(2, 'U-13', 'M2 benjamin', '../img/equipes/U13-M2.jpg', 1, 'equipes U-13 M2 benjamin sur le terrain'),
(3, 'U-11', 'M1 ', '../img/equipes/U11-M1.jpg', 1, 'equipes U-11 M1'),
(4, 'U-11', 'M2 ', '../img/equipes/U11-M2-V.jpg', 1, 'equipes U-11 M2'),
(5, 'U-15', 'M1 ', '../img/equipes/U15-M1.jpg', 1, 'equipes U-15 M1'),
(6, 'U-15', 'M2 ', '../img/equipes/U15-M2.jpg', 1, 'equipes U-15 M2'),
(7, 'U-17', 'M1 ', '../img/equipes/U17-M1.jpg', 1, 'equipes U-17 M1'),
(8, 'U-17', 'M2 ', '../img/equipes/U17-M2.jpg', 1, 'equipes U-17 M2'),
(9, 'JUNIOR', 'PACA ', '', 1, 'equipes JUNIOR PACA'),
(10, 'U-18', 'filles ', '../img/equipes/U18-FILLES.jpg', 1, 'equipes U-18 filles'),
(11, 'SENIOR', 'M1 ', '../img/equipes/SENIORS-M1.jpg', 1, 'equipes SENIOR M1'),
(12, 'SENIOR', 'M2 ', '../img/equipes/SENIORS-M2.jpg', 1, 'equipes SENIOR M2'),
(13, 'SENIOR', 'FILLES ', '../img/equipes/SENIORS-FILLES.jpg', 1, 'equipes SENIOR FILLES'),
(14, 'U-7 U-9', '', '', 3, 'equipes U-7 U-9'),
(15, 'BENJAMINE', 'FILLES', '', 3, 'equipes benjamines filles '),
(16, 'MINIMES', 'FILLES', '', 3, 'equipes Minimes filles ');

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `alt` varchar(150) NOT NULL,
  `medias` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `name`, `alt`, `medias`) VALUES
(1, 'équipes U13-M1', 'victoire de l\'équipe U13-M1', '../img/equipes/U13-M1.jpg'),
(2, 'équipes U11-M1', ' équipes U11-M1', '../img/equipes/U11-M1.jpg'),
(3, ' équipes U15-M1', 'equipes qui gagne', '../img/equipes/U15-M1.jpg'),
(4, 'U17-M1 saison 2022/2023', 'équipes U17-M1', '../img/equipes/U17-M1.jpg'),
(5, 'U17-M2 saison 2022/2023', 'équipes U17-M1 saison 2022/2023', '../img/equipes/U17-M1.jpg'),
(6, 'SENIORS M1 saison 2022/2023', ' équipe SENIORS M1 saison 2022/2023', '../img/equipes/SENIORS-M1.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `stages`
--

CREATE TABLE `stages` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `descriptions` varchar(100) NOT NULL,
  `images` varchar(50) NOT NULL,
  `alt_stages` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `stages`
--

INSERT INTO `stages` (`id`, `title`, `descriptions`, `images`, `alt_stages`) VALUES
(1, 'stages d\'hiver', 'dhhhhhhhhhhiviviviviviviv', 'stages hiver', 'stages hiver logo'),
(2, 'stages de printemps', 'stages de printemps enhfbevxchd,cbdbcdjfcbcj,sk;d', 'stages de prlntemps 1', 'stages de printemps logos '),
(3, 'stages d\'été', 'stages d\'été hcvdkdkggd', 'stages d\'été 1', 'stages d\'été logo');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nom` varchar(150) NOT NULL,
  `prenom` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nom`, `prenom`, `email`, `password`) VALUES
(2, 'flau', 'lili', 'lili@gmail.com', '$2b$10$OENQfhPz5KxKlxvm//Uo9ePVG/5svynkhTdwLqAdO2TmV.b3yU5/y'),
(3, 'administrateur ', 'secretaire', 'bc.allaudien@gmail.com', '$2b$10$G69UgKTtWhOn6uOZWNjmk.eXkSruIbLARdd/5JzWTGgHu2DrthLNy'),
(4, 'gomez', 'fabrice', 'gomezfabrice@gmail.com', '$2b$10$HpL4r.f4klavABKKJle8.uiZ761sMaaA.WH7W5llGyLgo553jZPUG'),
(5, 'gigi', 'grego', 'loko@gmail.com', '$2b$10$5b3984jif42s2BzD0rB7yO4r27wyVueKahSDXPKnECYHeWhvRMQqC');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `articles_id` (`articles_id`),
  ADD KEY `stages_id` (`stages_id`),
  ADD KEY `images_id` (`images_id`);

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `equipes`
--
ALTER TABLE `equipes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `stages`
--
ALTER TABLE `stages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `equipes`
--
ALTER TABLE `equipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `stages`
--
ALTER TABLE `stages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`),
  ADD CONSTRAINT `admin_ibfk_2` FOREIGN KEY (`stages_id`) REFERENCES `stages` (`id`),
  ADD CONSTRAINT `admin_ibfk_3` FOREIGN KEY (`images_id`) REFERENCES `images` (`id`);

--
-- Contraintes pour la table `equipes`
--
ALTER TABLE `equipes`
  ADD CONSTRAINT `equipes_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
