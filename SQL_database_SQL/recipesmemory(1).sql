-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 24 avr. 2023 à 13:56
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `recipesmemory`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `CATEGORY_ID` int(11) NOT NULL,
  `CATEGORY_NAME` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `contain`
--

CREATE TABLE `contain` (
  `INGREDIENT_ID` int(11) NOT NULL,
  `RECIPE_ID` int(11) NOT NULL,
  `SECTION_TITLE` varchar(255) NOT NULL,
  `INGREDIENT_QUANTITY` float NOT NULL,
  `MEASURE_UNITY` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `cooking`
--

CREATE TABLE `cooking` (
  `COOKING_ID` int(11) NOT NULL,
  `COOKING_TIME` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `cooking_type`
--

CREATE TABLE `cooking_type` (
  `COOKING_TYPE_ID` int(11) NOT NULL,
  `COOKING_TYPE_NAME` char(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `cooking_type`
--

INSERT INTO `cooking_type` (`COOKING_TYPE_ID`, `COOKING_TYPE_NAME`) VALUES
(1, 'à l\'eau'),
(2, 'à la vapeur'),
(3, ' à la poêle'),
(4, 'au four'),
(5, 'à la friture'),
(6, 'à la plancha'),
(7, 'sous vide'),
(8, 'à la broche'),
(9, 'à la pierre'),
(10, 'à la sauteuse'),
(11, 'à l\'étouffée'),
(12, 'à la salamandre'),
(13, 'au wok'),
(14, 'à l\'induction'),
(15, 'au micro-ondes'),
(16, 'à la cheminée'),
(17, 'à l\'autocuiseur'),
(18, 'à la rotissoire'),
(19, 'à la flamme'),
(20, 'en papillote'),
(21, 'à la braise'),
(23, 'Aucune');

-- --------------------------------------------------------

--
-- Structure de la table `diet_type`
--

CREATE TABLE `diet_type` (
  `DIET_TYPE_ID` int(11) NOT NULL,
  `DIET_TYPE_NAME` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `diet_type`
--

INSERT INTO `diet_type` (`DIET_TYPE_ID`, `DIET_TYPE_NAME`) VALUES
(1, 'Cétogène\r\n'),
(2, 'Dash'),
(3, 'Détox'),
(4, 'Hypocalorique\r\n'),
(5, 'Hyperprotéiné\r\n'),
(6, 'Low carb\r\n'),
(7, 'Mayo Clinic\r\n'),
(8, 'Méditerranéen\r\n'),
(9, 'Okinawa\r\n'),
(10, 'Ornish\r\n'),
(11, 'Paléo\r\n'),
(12, 'Pescétarien\r\n'),
(13, 'Sans gluten\r\n'),
(14, 'Sans lactose\r\n'),
(15, 'Végan\r\n'),
(16, 'Végétalien\r\n'),
(17, 'Végétarien'),
(35, 'Aucun');

-- --------------------------------------------------------

--
-- Structure de la table `ingredient`
--

CREATE TABLE `ingredient` (
  `INGREDIENT_ID` int(11) NOT NULL,
  `INGREDIENT_ENG_NAME` varchar(50) NOT NULL,
  `INGREDIENT_FR_NAME` varchar(50) NOT NULL,
  `INGREDIENT_ENG_SYNONYMOUS` varchar(155) NOT NULL,
  `INGREDIENT_FR_SYNONYMOUS` varchar(155) NOT NULL,
  `INGREDIENT_ICON` varchar(255) NOT NULL,
  `INGREDIENT_CATEGORY_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ingredient`
--

INSERT INTO `ingredient` (`INGREDIENT_ID`, `INGREDIENT_ENG_NAME`, `INGREDIENT_FR_NAME`, `INGREDIENT_ENG_SYNONYMOUS`, `INGREDIENT_FR_SYNONYMOUS`, `INGREDIENT_ICON`, `INGREDIENT_CATEGORY_ID`) VALUES
(1, 'Agar', 'Agar', 'agar', 'agar', '494_Agar.png', 1),
(2, 'Spirulina', 'Spiruline', 'spirulina', 'spiruline', '650_Spiruline.png', 1),
(3, 'Salt', 'Sel', 'salt', 'sel', '0778_Sel.png', 1),
(4, 'Sugar', 'Sucre', 'sugar', 'sucre', '0781_Sucre.png', 1),
(5, 'Casein', 'Caséine', 'casein', 'caséine', '0789_Caseine.png', 1),
(6, 'Leavening agent', 'Agent levant', 'leavening agent', 'agent levant', '0791_AgentLevant.png', 1),
(7, 'Gelatin', 'Gélatine', 'gelatin', 'gélatine', '0793_Gelatine.png', 1),
(8, 'Water', 'Eau', 'water; ice', 'eau ; glace', '0794_Eau.png', 1),
(9, 'Syrup', 'Sirop', 'syrup', 'sirop', '0803_Sirop.png', 1),
(10, 'Miso', 'Miso', 'miso', 'miso', '0822_Miso.png', 1),
(11, 'Icing', 'Glaçage', 'icing', 'glaçage', '0827_Glacage.png', 1),
(12, 'Topping', 'Garniture', 'topping', 'garniture', '0840_Topping.png', 1),
(13, 'Gelatin dessert', 'Dessert à la gélatine', 'gelatin', 'gélatine', '0850_DessertALaGelatine.png', 1),
(14, 'Pectin', 'Pectine', 'pectin', 'pectine', '0858_Pectine.png', 1),
(15, 'Spread', 'Tartinade', 'spread', 'tartinade', '0875_Tartinade.png', 1),
(16, 'Ketchup', 'Ketchup', '#ketchup#', '#ketchup#', '0880_Ketchup.png', 1),
(17, 'Cooking oil', 'Huile de cuisson', '#cooking oil#', '#huile de cuisson#', '0901_HuileDeCuisson.png', 1),
(18, 'Shortening', 'Shortening', 'shortening', 'shortening', '0905_Shortening.png', 1),
(19, 'Molasses', 'Mélasse', 'molasses; treacle', 'mélasse ; mélasse', '0908_Mélasse.png', 1),
(20, 'Stuffing', 'Farce', 'stuffing', 'farce', '0956_Farce.png', 1),
(21, 'Margarine', 'Margarine', 'margarine', 'margarine', '0961_Margarine.png', 1),
(22, 'Baking Powder', 'Poudre à lever', 'baking powder; baking soda', 'poudre à pâte ; bicarbonate de soude', '0996_PoudreALever.png', 1),
(23, 'Monosodium Glutamate', 'Glutamate monosodique', 'monosodium glutamate', 'glutamate monosodique', '0997_GlutamateMonosodique.png', 1),
(24, 'Citric Acid', 'Acide citrique', 'citric acid', 'acide citrique', '0998_AcideCitrique.png', 1),
(25, 'Cooking Spray', 'Spray de cuisson', 'cooking spray', 'spray de cuisson', '0999_SprayDeCuisson.png', 1),
(26, 'Gelatin', 'Gélatine', 'gelatin', 'gélatine', '1000_Gelatine.png', 1),
(27, 'Food Coloring', 'Colorant alimentaire', 'food coloring', 'colorant alimentaire', '1001_ColorantAlimentaire.png', 1),
(28, 'Liquid Smoke', 'Fumée liquide', 'liquid smoke', 'fumée liquide', '1002_FuméeLiquide.png', 1),
(29, 'Salt-Pepper', 'Sel et poivre', 'salt-pepper', 'sel et poivre', '2022_SelEtPoivre.png', 1),
(30, 'Cooking Oil', 'Huile de cuisson', 'cooking oil; vegetable oil', 'huile de cuisson ; huile végétale', '2089_HuileCuisson.png', 1),
(31, 'Pastry', 'Pâtisserie', 'pastry', 'pâtisserie', '', 5),
(32, 'Tortilla', 'Tortilla', 'tortilla', 'tortilla', '', 20),
(33, 'Nachos', 'Nachos', 'nachos', 'nachos', '0836_Nachos.png', 20),
(34, 'Salad', 'Salade', 'salad', 'salade', '0837_Salade.png', 20),
(35, 'Couscous', 'Couscous', 'couscous', 'couscous', '0864_Couscous.png', 20),
(36, 'Tostada', 'Tostada', 'tostada', 'tostada', '0871_Tostada.png', 20),
(37, 'Hot dog', 'Hot dog', 'hot-dog', 'hot-dog', '0874_HotDog.png', 20),
(38, 'Cold cut', 'Coupe froide', 'cold cut', 'coupe froide', '0893_ColdCut.png', 20),
(39, 'Pie', 'Tarte', 'pie', 'tarte', '0904_Tarte.png', 20),
(40, 'Ice cream cone', 'Cornet de crème glacée', 'ice cream cone', 'cornet de crème glacée', '0907_CornetDeCremeGlacee.png', 20),
(41, 'Ravioli', 'Ravioli', 'ravioli', 'ravioli', '0912_Ravioli.png', 20),
(42, 'Succotash', 'Succotash', 'succotash', 'succotash', '0915_Succotash.png', 20),
(43, 'Tamale', 'Tamale', 'tamale', 'tamale', '0916_Tamale.png', 20),
(44, 'Rice cake', 'Gâteau de riz', '#rice-cake#', '#rice-cake#', '0917_GateauDeRiz.png', 20),
(45, 'Empanada', 'Empanada', 'empanada', 'empanada', '0948_Empanada.png', 20),
(46, 'Arepa', 'Arepa', 'arepa', 'arepa', '0949_Arepa.png', 20),
(47, 'Gefilte fish', 'Poisson Gefilte', 'gefilte', 'gefilte', '0951_PoissonGefilte.png', 20),
(48, 'Mascarpone', 'Mascarpone', 'mascarpone', 'mascarpone', '2034_Mascarpone.png', 29),
(49, 'Barbeque Sauce', 'Sauce barbecue', 'barbeque sauce', 'sauce barbecue', '2040_SauceBarbecue.png', 28),
(50, 'Sponge Cake', 'Gâteau éponge', 'sponge cake', 'gâteau éponge', '2041_Genoise.png', 20),
(51, 'Baking Mix', 'Mélange à pâtisserie', 'baking mix', 'mélange à pâtisserie', '2042_FarinePatisserie.png', 20),
(52, 'Hot Sauce', 'Sauce piquante', 'hot sauce', 'sauce piquante', '2043_SaucePiquante.png', 28),
(53, 'Gulkand', 'Gulkand', 'gulkand', 'gulkand', '2046_Gulkand.png', 20),
(54, 'Tahini', 'Tahini', 'tahini', 'tahini', '2059_Tahini.png', 2),
(55, 'Tart Shell', 'Coquille de tarte', 'tart shell', 'fond de tarte', '2061_PateTarte.png', 5),
(56, 'Coffee', 'Café', 'coffee', 'café', '0046_Café.png', 3),
(57, 'Mate', 'Mate', 'mate; yerba', 'maté ; yerba', '0047_Mate.png', 3),
(58, 'Black Tea', 'Thé noir', 'tea-black', 'thé-noir', '0048_TheNoir.png', 3),
(59, 'Green Tea', 'Thé vert', 'tea-green', 'thé-vert', '0049_TheVert.png', 3),
(60, 'Roibos Tea', 'Thé Roibos', 'tea-rooibos; tea-bush', 'thé-rooibos ; thé-bush', '0050_TheRoibos.png', 3),
(61, 'Arabica coffee', 'Café Arabica', 'coffee-arabica', 'café-arabica', '419_CafeArabica.png', 3),
(62, 'Hibiscus tea', 'Thé à l\'hibiscus', '#tea-hibiscus#', '#tea-hibiscus#', '0848_TheALhibiscus.png', 3),
(63, 'Soy milk', 'Lait de soja', 'soy-milk; soya-milk', 'soja-laiton ; soja-laiton', '0861_LaitDeSoja.png', 3),
(64, 'Cocktail', 'Cocktail', 'cocktail', 'cocktail', '0863_Cocktail.png', 3),
(65, 'Coffee mocha', 'Café moka', 'mocha', 'moka', '0867_CaféMoka.png', 3),
(66, 'Fruit juice', 'Jus de fruits', 'fruit juice', 'jus de fruits', '0886_JusDeFruit.png', 3),
(67, 'Greenthread tea', 'Thé au fil vert', 'tea-greenthread', 'thé-fil de fer', '0939_ThéAuFilVert.png', 3),
(68, 'Vegetable juice', 'Jus de légumes', 'vegetable juice', 'jus de légumes', '0941_JusDeLegume.png', 3),
(69, 'Horchata', 'Horchata', 'horchata', 'horchata', '0942_Horchata.png', 3),
(70, 'Soft drink', 'Boisson gazeuse', 'soft drink', 'boisson gazeuse', '0943_SoftDrink.png', 3),
(71, 'Milkshake', 'Milkshake', 'milkshake', 'milkshake', '0944_Milkshake.png', 3),
(72, 'Coconut Milk', 'Lait de coco', 'coconut-milk', 'lait de coco', '0981_LaitDeCoco.png', 3),
(73, 'Lemon Juice', 'Jus de citron', 'lemon juice', 'jus de citron', '0984_JusDeCitron.png', 3),
(74, 'Tomato Juice', 'Jus de tomate', '#tomato-juice#', '#tomato-juice#', '0986_JusDeTomate.png', 3),
(75, 'Spirit', 'Esprit', 'spirit', 'esprit', '487_Spirit.png', 4),
(76, 'Madeira wine', 'Vin de Madère', 'madeira', 'madère', '0765_VinDeMadere.png', 4),
(77, 'Hops Beer', 'Bière au houblon', 'beer-hops', 'bière-houblon', '0983_BiereAuHoublon.png', 4),
(78, 'Tequila', 'Tequila', 'tequila', 'tequila', '0994_tequila.png', 4),
(79, 'Ale', 'Ale', 'ale', 'ale', '2018_Ale.png', 4),
(80, 'Wort', 'Wort', 'wort', 'moût', '0007_Wort.png', 3),
(81, 'Hot chocolate', 'Chocolat chaud', 'chocolate-hot; chocolate-heated', 'chocolat-chaud ; chocolat-chauffé', '0818_ChocolatChaud.png', 3),
(82, 'Arrack', 'Arrack', 'arrack; arak', 'arrack ; arak', '0008_Arrack.png', 4),
(83, 'Beer', 'Bière', 'beer; lager', 'bière ; lager', '0009_Biere.png', 4),
(84, 'Bantu Beer', 'Bière bantoue', 'bantu-beer; kaffir-beer', 'bière bantoue ; bière kaffir', '0010_BiereBantoue.png', 4),
(85, 'Brandy', 'Brandy', 'brandy', 'eau-de-vie', '0011_Brandy.png', 4),
(86, 'Anise Brandy', 'Eau-de-vie d\'anis', 'brandy-anise', 'brandy-anis', '0012_EauDeVieAnis.png', 4),
(87, 'Apple Brandy', 'Brandy de pomme', 'brandy-apple', 'brandy-pomme', '0013_BrandyDePomme.png', 4),
(88, 'Armagnac Brandy', 'Brandy d\'armagnac', 'armagnac-brandy', 'armagnac-brandy', '0014_BrandyDArmagnac.png', 4),
(89, 'Blackberry Brandy', 'Brandy de mûre', 'blackberry-brandy', 'brandy-mûre', '0015_BrandyDeMure.png', 4),
(90, 'Cherry Brandy', 'Brandy de cerise', 'brandy-cherry', 'brandy-cerise', '0016_BrandyDeCerise.png', 4),
(91, 'Cognac Brandy', 'Cognac Brandy', 'brandy-cognac', 'brandy-cognac', '0017_CognacBrandy.png', 4),
(92, 'Papaya Brandy', 'Brandy de papaye', 'brandy-papaya', 'brandy-papaye', '0018_BrandyDePapaye.png', 4),
(93, 'Pear Brandy', 'Poire Brandy', 'brandy-pear; palinka; poire williams; rakia', 'brandy-poire ; palinka ; poire williams ; rakia', '0019_BrandyDePoire.png', 4),
(94, 'Plum Brandy', 'Brandy de prune', 'brandy-plum; slivovitz; tuica; ljivovica; asliwowica; schlivowitz', 'brandy-prune ; slivovitz ; tuica ; ljivovica ; asliwowica ; schlivowitz', '0020_BrandyDePrune.png', 4),
(95, 'Raspberry Brandy', 'Brandy de framboise', 'raspberry-brandy', 'framboise-brandy', '0021_BrandyDeFramboise.png', 4),
(96, 'Weinbrand Brandy', 'Brandy Weinbrand', 'weinbrand-brandy', 'weinbrand-brandy', '0022_BrandyWeinbrand.png', 4),
(97, 'Gin', 'Gin', 'gin', 'gin', '0023_Gin.png', 4),
(98, 'Rum', 'Rhum', 'rum', 'rhum', '0024_Rhum.png', 4),
(99, 'Whisky', 'Whisky', 'whisky; whiskey', 'whisky ; whiskey', '0025_Whisky.png', 4),
(100, 'Bourbon Whisky', 'Whisky Bourbon', 'bourbon-whisky; bourbon-whiskey', 'bourbon-whisky ; bourbon-whiskey', '0026_WhiskyBourbon.png', 4),
(101, 'Canadian Whisky', 'Whisky canadien', 'canadian-whisky; canadian-whiskey', 'canadian-whisky ; canadian-whiskey', '0027_WhiskyCanadien.png', 4),
(102, 'Finnish Whisky', 'Whisky finlandais', 'finnish-whisky; finnish-whiskey', 'finnish-whisky ; finnish-whiskey', '0028_WhiskyFinlandais.png', 4),
(103, 'Japanese Whisky', 'Whisky japonais', 'japanese-whisky; japanese-whiskey', 'whisky japonais ; whisky japonais', '0029_WhiskyJaponais.png', 4),
(104, 'Malt Whisky', 'Whisky de malt', 'whisky-malt; whiskey-malt', 'whisky-malt ; whisky-malt', '0030_WhiskyDeMalt.png', 4),
(105, 'Scotch', 'Scotch', 'scotch', 'scotch', '0031_Scotch.png', 4),
(106, 'Wine', 'Vin', 'wine', 'vin', '0032_Vin.png', 4),
(107, 'Bilberry Wine', 'Vin de myrtille', 'bilberry-wine', 'vin de myrtille', '0033_VinDeMyrtille.png', 4),
(108, 'Botrytized Wine', 'Vin botrytisé', 'botrytized-wine', 'vin botrytisé', '0034_VinBotrytise.png', 4),
(109, 'Champagne', 'Champagne', 'champagne', 'champagne', '0035_Champagne.png', 4),
(110, 'Cider', 'Cidre', 'cider', 'cidre', '0036_Cidre.png', 4),
(111, 'Plum Wine', 'Vin de Prune', 'plum-wine', 'vin de prune', '0037_VindePrune.png', 4),
(112, 'Port Wine', 'Vin de Porto', 'port-wine; vinho do porto', 'porto-wine ; vinho do porto', '0038_VinDePorto.png', 4),
(113, 'Red Wine', 'Vin rouge', 'wine-red', 'vin-rouge', '0039_VinRouge.png', 4),
(114, 'Rose Wine', 'Vin rosé', 'rose-wine; rosada', 'rose-wine ; rosada', '0040_VinRosé.png', 4),
(115, 'Sake', 'Sake', 'sake', 'saké', '0041_Sake.png', 4),
(116, 'Sherry', 'Sherry', 'sherry', 'sherry', '0042_Sherry.png', 4),
(117, 'Sparkling Wine', 'Vin pétillant', 'sparkling-wine', 'vin mousseux', '0043_VinPetillant.png', 4),
(118, 'Strawberry Wine', 'Vin de fraise', 'strawberry-wine', 'vin de fraise', '0044_VinDeFraise.png', 4),
(119, 'White Wine', 'Vin blanc', 'wine-white', 'vin-blanc', '0045_VinBlanc.png', 4),
(120, 'Berry wine', 'Vin de baies', 'berry-wine', 'baies-vin', '0759_VinDeBaie.png', 4),
(121, 'Vodka', 'Vodka', 'vodka', 'vodka', '0762_Vodka.png', 4),
(122, 'Vermouth', 'Vermouth', 'vermouth', 'vermouth', '0764_Vermouth.png', 4),
(123, 'Bread', 'Pain', 'bread; bun', 'pain ; brioche', '0002_Pain.png', 5),
(124, 'Rye Bread', 'Pain de seigle', 'bread-rye', 'pain-rye', '0003_PainDeSegle.png', 5),
(125, 'Wheaten Bread', 'Pain de blé', 'bread-wheaten', 'pain-blé', '0004_PainDeBle.png', 5),
(126, 'White Bread', 'Pain blanc', 'bread-white; baguette', 'pain-blanc ; baguette', '0005_PainBlanc.png', 5),
(127, 'Wholewheat Bread', 'Pain de blé entier', 'bread-whole-wheat', 'pain-entier-blé', '0006_PainDeBleEntier.png', 5),
(128, 'Fried Potato', 'Pommes de terre frites', 'potato-fried', 'pomme de terre-frite', '0374_PommesDeTerreFrite.png', 5),
(129, 'Pasta', 'Pâtes', 'pasta', 'pâtes', '484_Pates.png', 5),
(130, 'Biscuit', 'Biscuit', 'biscuit', 'biscuit', '485_Biscuit.png', 5),
(131, 'Marshmallow', 'Guimauve', 'marshmallow', 'guimauve', '0792_Guimauve.png', 5),
(132, 'Meringue', 'Meringue', 'meringue', 'meringue', '0810_Meringue.png', 5),
(133, 'Potato chip', 'Chip de pomme de terre', 'potato-chip', 'pommes de terre-frites', '0845_ChipDePommeDeTerre.png', 5),
(134, 'Tortilla chip', 'Tortilla chip', 'tortilla-chip', 'tortilla-chip', '0846_TortillaChip.png', 5),
(135, 'Corn chip', 'Chip de maïs', 'corn-chip', 'puce de maïs', '0847_ChipDeMais.png', 5),
(136, 'Phyllo dough', 'Pâte phyllo', '#phyllo#', '#phyllo#', '0900_PatePhyllo.png', 5),
(137, 'Pie crust', 'Croûte à tarte', '#pie-crust#', '#pie-croute#', '0902_CrouteATarte.png', 5),
(138, 'Pita bread', 'Pain pita', '#bread-pita#', '#pain-pita#', '0923_PainPita.png', 5),
(139, 'Focaccia', 'Focaccia', 'focaccia', 'focaccia', '0924_Foccacia.png', 5),
(140, 'Bagel', 'Bagel', 'bagel', 'bagel', '0925_Bagel.png', 5),
(141, 'Piki bread', 'Pain piki', 'bread-piki', 'pain-piki', '0927_PainPiki.png', 5),
(142, 'French toast', 'Pain français', 'french toast', 'pain perdu', '0928_PainFrançais.png', 5),
(143, 'Oat bread', 'Pain d\'avoine', '#bread-oat#', '#pain-avoine', '0929_PaindAvoine.png', 5),
(144, 'Potato bread', 'Pain de pommes de terre', 'potato-bread', 'pain-pomme de terre', '0930_PainDePommesDeTerre.png', 5),
(145, 'Multigrain bread', 'Pain multigrains', '#bread-multigrain#', '#pain-multigrain#', '0933_PainMultigrains.png', 5),
(146, 'Rice bread', 'Pain de riz', 'bread-rice', 'pain-riz', '0934_PainDeRiz.png', 5),
(147, 'Pan dulce', 'Pan dulce', 'pan dulce', 'pan dulce', '0935_PanDulce.png', 5),
(148, 'Raisin bread', 'Pain aux raisins', '#bread-raisin#', '#pain-raisin#', '0936_PainAuxRaisins.png', 5),
(149, 'Wonton wrapper', 'Papier Wonton', 'wonton wrapper', 'emballage wonton', '0937_PapierWonton.png', 5),
(150, 'Chocolate mousse', 'Mousse au chocolat', 'chocolate-mousse', 'mousse au chocolat', '0945_MousseAuChocolat.png', 5),
(151, 'Fudge', 'Caramel', 'fudge', 'fudge', '0958_Caramel.png', 5),
(152, 'Candy bar', 'Barre chocolatée', 'candy bar', 'barre chocolatée', '0959_BarreChocolatée.png', 5),
(153, 'Oat Bread', 'Pain d\'avoine', 'bread-oat', 'pain-avoine', '2080_PainAvoine.png', 5),
(154, 'Pita Bread', 'Pain de pita', 'bread-pita', 'pain-pita', '2081_PainPita.png', 5),
(155, 'Raisin Bread', 'Pain aux raisins', 'bread-raisin', 'pain-raisin', '2082_PainRaisins.png', 5),
(156, 'Multigrain Bread', 'Pain multigrains', 'bread-multigrain', 'pain-multigrain', '2083_PainMultigrains.png', 5),
(157, 'Cornbread', 'Pain de maïs', 'corn-bread', 'pain de maïs', '2084_PainMais.png', 5),
(158, 'Rice Cake', 'Gâteau de riz', 'rice-cake', 'gâteau de riz', '2090_GateauRiz.png', 5),
(159, 'Sorghum', 'Sorgho', 'sorghum', 'sorgho', '448_Sorgho.png', 6),
(160, 'Barley', 'Orge', 'barley', 'orge', '0051_Orge.png', 6),
(161, 'Crispbread', 'Pain croustillant', 'crisp-bread', 'croustillant-pain', '0052_PainCroustillant.png', 6),
(162, 'Malt', 'Malt', 'malt', 'malt', '0053_Malt.png', 6),
(163, 'Oats', 'Avoine', 'oat', 'avoine', '0054_Avoine.png', 6),
(164, 'Rice', 'Riz', 'rice', 'riz', '0055_Riz.png', 6),
(165, 'Rye', 'Seigle', 'rye', 'seigle', '0320_Seigle.png', 6),
(166, 'Basmati Rice', 'Riz Basmati', 'basmati', 'basmati', '404_RizBasmati.png', 6),
(167, 'Tartary buckwheat', 'Sarrasin de Tartarie', 'buckwheat-tartary', 'sarrasin-tartare', '424_SarrasinTartarie.png', 6),
(168, 'Wheat', 'Blé', 'wheat', 'blé', '452_Ble.png', 6),
(169, 'Red rice', 'Riz rouge', 'rice-red', 'riz-rouge', '470_RizRouge.png', 6),
(170, 'Hard wheat', 'Blé dur', 'wheat-hard; spaghetti', 'blé-dur ; spaghetti', '473_BléDur.png', 6),
(171, 'Triticale', 'Triticale', 'triticale', 'triticale', '474_Triticale.png', 6),
(172, 'Breakfast cereal', 'Céréales pour petit-déjeuner', 'cereal', 'céréales', '482_CerealesPetitDejeuner.png', 6),
(173, 'Sourdough', 'Sourdough', 'sourdough', 'levain', '486_Sourdough.png', 6),
(174, 'Quinoa', 'Quinoa', 'quinoa', 'quinoa', '616_Quinoa.png', 6),
(175, 'Spelt', 'Epeautre', 'spelt', 'épeautre', '649_Epeautre.png', 6),
(176, 'Wild rice', 'Riz sauvage', 'rice-wild', 'riz sauvage', '670_RizSauvage.png', 6),
(177, 'Oriental wheat', 'Blé oriental', 'wheat-oriental', 'blé-oriental', '697_BleOriental.png', 6),
(178, 'Bulgur', 'Boulgour', 'bulgur', 'boulgour', '0865_Boulgour.png', 6),
(179, 'Semolina', 'Semoule', 'semolina; sooji', 'semoule ; sooji', '0869_Semoule.png', 6),
(180, 'Flour', 'Farine', '#flour#', '#flour#', '0920_Farine.png', 6),
(181, 'Brown Rice', 'Riz brun', 'rice-brown', 'riz brun', '0985_RizBrun.png', 6),
(182, 'Self Rising Flour', 'Farine auto levante', 'self rising flour', 'farine autoportante', '2020_FarineAutoLevante.png', 6),
(183, 'Phyllo', 'Phyllo', 'phyllo', 'phyllo', '2048_Phyllo.png', 6),
(184, 'Pie Crust', 'Croûte à tarte', 'pie-crust', 'pâte à tarte', '2049_CrouteTarte.png', 6),
(185, 'Flour', 'Farine', 'flour; atta', 'farine ; atta', '2056_Farine.png', 6),
(186, 'Abalone', 'Ormeau', 'abalone', 'ormeau', '489_Abalone.png', 7),
(187, 'Jew\'s ear', 'Oreille de juif', 'ear-jewâ€™s', 'oreille-jewâ€™s', '0703_OreilledeJudas.png', 7),
(188, 'Shiitake', 'Shiitake', 'shiitake', 'shiitake', '0704_Shiitake.png', 7),
(189, 'Enokitake', 'Enokitake', 'enokitake', 'enokitake', '0707_Enokitake.png', 7),
(190, 'Oyster mushroom', 'Pleurote en huître', 'mushroom-oyster', 'champignon-huître', '0709_PleuroteEnHuitre.png', 7),
(191, 'Cloud ear fungus', 'Champignon de l\'oreille des nuages', 'ear-cloud', 'oreille-nuage', '0710_ChampignonOreilleDeNuage.png', 7),
(192, 'Maitake', 'Maitake', 'maitake', 'maitake', '0711_Maitake.png', 7),
(193, 'Chanterelle', 'Chanterelle', 'chanterelle', 'chanterelle', '0723_Chanterelle.png', 7),
(194, 'Morchella', 'Morchella', 'morchella', 'morchella', '0856_Morchella.png', 7),
(195, 'Yeast', 'Levure', 'yeast', 'levure', '0993_Levure.png', 7),
(196, 'Mushroom', 'Champignon', 'mushroom; porcini', 'champignon ; porcini', '0246_Champignons.png', 7),
(197, 'Truffle', 'Truffe', 'truffle', 'truffe', '0247_Truffe.png', 7),
(198, 'Meatball', 'Boulette de viande', 'meatball', 'boulette de viande', '0783_BouletteDeViande.png', 8),
(199, 'Enchilada', 'Enchilada', 'enchilada', 'enchilada', '0876_Enchiladas.png', 8),
(200, 'Anise Hyssop', 'Anis hysope', 'anise-hyssop', 'anis-hysope', '0324_AnisHysope.png', 9),
(201, 'Star Anise', 'Anis étoilé', 'anise-star', 'anis étoilé', '0325_AnisEtoilé.png', 9),
(202, 'Caraway', 'Carvi', 'caraway', 'carvi', '0326_Carvi.png', 9),
(203, 'Cardamom', 'Cardamome', 'cardamom; cardamon', 'cardamome ; cardamone', '0327_Cardamome.png', 9),
(204, 'Cassia', 'Cassia', 'cassia', 'cassia', '0328_Cassia.png', 9),
(205, 'Celery', 'Céleri', 'celery', 'céleri', '0329_Céleri.png', 9),
(206, 'Cinnamon', 'Cannelle', 'cinnamon', 'cannelle', '0330_Cannelle.png', 9),
(207, 'Clove', 'Clou de girofle', 'clove', 'clou de girofle', '0331_ClouDeGirofle.png', 9),
(208, 'Cumin', 'Cumin', 'cumin; jeera', 'cumin ; jeera', '0332_Cumin.png', 9),
(209, 'Ginger', 'Gingembre', 'ginger', 'gingembre', '0333_Gingembre.png', 9),
(210, 'Mace', 'Macis', 'mace', 'macis', '0334_Macis.png', 9),
(211, 'Marjoram', 'Marjolaine', 'marjoram', 'marjolaine', '0335_Marjolaine.png', 9),
(212, 'Nutmeg', 'Noix de muscade', 'nutmeg', 'noix de muscade', '0336_NoixDeMuscade.png', 9),
(213, 'Oregano', 'Origan', 'oregano', 'origan', '0337_Origan.png', 9),
(214, 'Parsley', 'Persil', 'parsley', 'persil', '0338_Persil.png', 9),
(215, 'Pepper', 'Poivre', 'pepper; kaali-mirch', 'poivre ; kaali-mirch', '0339_Poivre.png', 9),
(216, 'Saffron', 'Safran', 'saffron', 'safran', '0340_Safran.png', 9),
(217, 'Turmeric', 'Curcuma', 'turmeric; tumeric', 'curcuma ; tumeric', '0341_Curcuma.png', 9),
(218, 'Asafoetida', 'Asafoetida', 'asafoetida; asafetida; hing; asant', 'asafoetida ; asafetida ; hing ; asant', '0376_Asafoetida.png', 9),
(219, 'Carom Seed', 'Graine de carome', 'carom seed; ajwain', 'graine de carome ; ajwain', '0381_GraineDeCarome.png', 9),
(220, 'White Pepper', 'Poivre blanc', 'pepper-white', 'poivre blanc ;', '0399_PoivreBlanc.png', 9),
(221, 'Cayenne', 'Cayenne', 'cayenne; chile powder; red chile; habanero; harissa; green chile; green chili; green chilli; green chily; red chily; red chili; red chilli', 'cayenne ; poudre de chile ; chile rouge ; habanero ; harissa ; chile vert ; chile vert ; chile vert ; chile vert ; chile vert ; chile rouge ; chile rouge ;', '0992_Cayenne.png', 9),
(222, 'Chaat Masala', 'Chaat Masala', 'chaat masala', 'chaat masala', '2003_ChaatMasala.png', 9),
(223, 'Sambar Powder', 'Poudre de Sambar', 'sambar powder', 'poudre de sambar', '2004_PoudreDeSambar.png', 9),
(224, 'Chole Masala', 'Chole Masala', 'chole masala', 'chole masala', '2005_CholeMassala.png', 9),
(225, 'Rasam Powder', 'Poudre de Rasam', 'rasam powder', 'poudre de rasam', '2006_PoudreDeRasam.png', 9),
(226, 'Tandoori Masala', 'Tandoori Masala', 'tandoori masala', 'masala tandoori', '2007_TandooriMasala.png', 9),
(227, 'Curry Powder', 'Poudre de curry', 'curry powder', 'poudre de curry', '2008_PoudreDeCurry.png', 9),
(228, 'Panch Pharon Seed', 'Graines de Pharon Panch', 'panch pharon seed', 'graine de pharon panch', '2009_GrainesDePharonPanch.png', 9),
(229, 'Chicken Masala Powder', 'Poudre de poulet Masala', 'chicken masala powder', 'poudre de poulet masala', '2010_PoudreDePouletMasala.png', 9),
(230, 'Goda Masala', 'Goda Masala', 'goda masala', 'goda masala', '2011_GodaMasala.png', 9),
(231, 'Jal Jeera Powder', 'Poudre de Jal Jeera', 'jal jeera powder', 'poudre de jal jeera', '2012_PoudreDeJalJeera.png', 9),
(232, 'Ginger Garlic Coriander Leaves', 'Gingembre, ail, feuilles de coriandre', 'ginger garlic coriander leaf', 'gingembre ail feuille de coriandre', '2013_GingembreAilCoriandre.png', 9),
(233, 'Pulao Masala', 'Pulao Masala', 'pulao masala', 'pulao masala', '2014_DabeliMasala.png', 9),
(234, 'Dabeli Masala', 'Dabeli Masala', 'dabeli masala', 'dabeli masala', '2015_PulaoMasala.png', 9),
(235, 'Green Chutney', 'Chutney vert', 'green chutney', 'chutney vert', '2025_ChutneyVert.png', 9),
(236, 'Cajun Seasoning', 'Assaisonnement Cajun', 'cajun seasoning', 'assaisonnement cajun', '2026_MelangeCajun.png', 9),
(237, 'Creole Seasoning', 'Assaisonnement créole', 'creole seasoning', 'assaisonnement créole', '2051_MelangeCreole.png', 9),
(238, 'Chinese Five Spice Powder', 'Poudre de cinq épices chinoises', 'chinese five spice', 'cinq épices chinoises', '2052_EpicesChinoises.png', 9),
(239, 'Old Bay Seasoning', 'Assaisonnement Old Bay', 'old-bay seasoning', 'assaisonnement old bay', '2053_EpicesCajun.png', 9),
(240, 'Ranch Dressing', 'Vinaigrette Ranch', 'dressing-ranch', 'vinaigrette-ranch', '2057_VinaigretteRanch.png', 9),
(241, 'Poultry Seasoning', 'Assaisonnement pour volaille', 'poultry seasoning', 'assaisonnement pour volaille', '2058_AssaisonnementVolaille.png', 9),
(242, 'Herbe de Provence', 'Herbe de Provence', 'herbe de provence', 'herbe de provence', '2060_HerbeProvence.png', 9),
(243, 'Anise', 'Anis', 'anise; saunf', 'anis ; saunf', '0323_Anis.png', 9),
(244, 'Allspice', 'Piment de la Jamaïque', 'allspice; pimenta; myrtle-pepper', 'piment de la Jamaïque ; pimenta ; myrte-poivre', '0375_PimentDeLaJamaique.png', 9),
(245, 'Jalapeno', 'Jalapeno', 'jalapeno', 'jalapeno', '0389_Jalapeno.png', 9),
(246, 'Poppy Seed', 'Graine de pavot', 'poppy-seed', 'coquelicot ; graine', '0395_GraineDePavot.png', 9),
(247, 'Garam Masala', 'Garam Masala', 'garam masala', 'garam masala', '2000_GaramMasala.png', 9),
(248, 'Ginger Garlic Paste', 'Gingembre Pâte d\'ail', 'ginger garlic paste', 'gingembre pâte d\'ail', '2001_GingembrePatedAil.png', 9),
(249, 'Coriander Cumin Seed Powder', 'Poudre de graines de coriandre et de cumin', 'coriander cumin seed powder', 'poudre de graines de coriandre et de cumin', '2002_PoudreDeGrainedeCoriandreEtDeCumin.png', 9),
(250, 'Italian Seasoning', 'Assaisonnement italien', 'italian style seasoning; italian herb seasoning; italian seasoning', 'assaisonnement à l\'italienne ; assaisonnement aux herbes italiennes ; assaisonnement à l\'italienne', '2036_MelangeItalien.png', 9),
(251, 'Artichoke', 'Artichauts', 'artichoke', 'artichaut', '0157_Artichaut.png', 10),
(252, 'Champaca', 'Champaca', 'champaca', 'champaca', '0158_Champaca.png', 10),
(253, 'Jasmine', 'Jasmin', 'jasmine', 'jasmin', '0159_Jasmin.png', 10),
(254, 'Lavendar', 'Lavande', 'lavendar', 'lavande', '0160_Lavande.png', 10),
(255, 'Rose', 'Rose', 'rose', 'rose', '0161_Rose.png', 10),
(256, 'Sunflower', 'Tournesol', 'sunflower', 'tournesol', '426_Tournesol.png', 10),
(257, 'Dandelion', 'Pissenlit', 'dandelion', 'pissenlit', '449_Pissenlit.png', 10),
(258, 'Garland chrysanthemum', 'Chrysanthème de Garlande', 'garland-chrysanthemum', 'guirlande-chrysanthème', '535_ChrysanthemeGarlande.png', 10),
(259, 'Sesbania flower', 'Fleur de Sesbania', 'sesbania-flower', 'fleur de sesbania', '642_FleurSesbania.png', 10),
(260, 'Sea Buckthorns', 'Argousier', 'sea-buckthorn', 'mer-épicorne', '0128_HuileArgousier.png', 11),
(261, 'Water Chestnut', 'Châtaigne d\'eau', 'water-chestnut; water-caltrop', 'eau-châtaigne ; eau-caltrop', '0398_ChataigneDeau.png', 11),
(262, 'Garcinia Indica', 'Garcinia Indica', 'kokum; garnicia-indica', 'kokum ; garnicia-indica', '0400_GarciniaIndica.png', 11),
(263, 'Pummelo', 'Pummelo', 'pummelo', 'pummelo', '418_Pummelo.png', 11),
(264, 'Japanese persimmon', 'Kaki japonais', 'persimmon-japanese', 'kaki-japonais', '421_KakiJaponais.png', 11),
(265, 'Black crowberry', 'Corneille noire', 'crowberry-black', 'camarine noire', '422_CamarineNoire.png', 11),
(266, 'Black huckleberry', 'Myrtille noire', 'huckleberry-black', 'myrtille-noire', '425_MyrtilleNoire.png', 11),
(267, 'Medlar', 'Mèfle', 'medlar', 'néflier', '433_Mefle.png', 11),
(268, 'Mulberry', 'Mûrier', 'mulberry', 'mûrier', '434_Mure.png', 11),
(269, 'Black mulberry', 'Mûrier noir', 'mulberry-black', 'mûrier-noir', '435_MureNoire.png', 11),
(270, 'Red raspberry', 'Framboise rouge', 'raspberry-red', 'framboise-rouge', '441_FramboiseRouge.png', 11),
(271, 'Black raspberry', 'Framboise noire', 'raspberry-black', 'framboise-noire', '442_FramboiseNoire.png', 11),
(272, 'Cherry tomato', 'Tomate cerise', 'cherry-tomato', 'cerise-tomate', '446_TomateCerise.png', 11),
(273, 'Rowanberry', 'Rowanberry', 'rowan-berry', 'sorbier-mûre', '447_Rowanberry.png', 11),
(274, 'Sparkleberry', 'Amélanchier', 'sparkleberry', 'fraise des bois', '453_Amelanchier.png', 11),
(275, 'Muscadine grape', 'Raisin muscadine', 'grape-muscadine', 'raisin-muscadine', '459_RaisinMuscadine.png', 11),
(276, 'Bayberry', 'Myrtille', 'bayberry', 'baie de laurier', '460_Myrtille.png', 11),
(277, 'Elliott\'s blueberry', 'Myrtille d\'Elliott', 'blueberry-elliot', 'myrtille-elliot', '461_MyrtilleElliott.png', 11),
(278, 'Canada blueberry', 'Myrtille du Canada', 'blueberry-canada', 'myrtille-canada', '462_MyrtilleDuCanada.png', 11),
(279, 'Buffalo currant', 'Groseille à maquereau', 'currant-buffalo', 'groseille-buffle', '463_GroseilleAMaquereau.png', 11),
(280, 'Deerberry', 'Raisin de cerf', 'deer-berry', 'cerf-mûre', '464_RaisinCerf.png', 11),
(281, 'Rambutan', 'Ramboutan', 'rambutan', 'ramboutan', '469_Ramboutan.png', 11),
(282, 'Jostaberry', 'Jostaberry', 'jostaberry', 'jostaberry', '477_Jostaberry.png', 11),
(283, 'Skunk currant', 'Groseille à maquereau', 'currant-skunk', 'groseille-skunk', '481_GroseilleMaquereau.png', 11),
(284, 'Acerola', 'Acérola', 'acerola', 'acérola', '491_Acerola.png', 11),
(285, 'Winter squash', 'Courge d\'hiver', 'squash-winter; squash-yellow', 'courge-hiver ; courge-jaune', '493_CourgeHiver.png', 11),
(286, 'Breadfruit', 'Fruit à pain', 'breadfruit', 'fruit à pain', '517_FruitAPain.png', 11),
(287, 'Squashberry', 'Courge', 'squash-berry', 'courge-mûre', '542_Courge.png', 11),
(288, 'Groundcherry', 'Groseille à maquereau', 'groundcherry', 'cerisier de terre', '564_GroseilleMaquereau.png', 11),
(289, 'Jujube', 'Jujube', 'jujube', 'jujube', '574_Jujube.png', 11),
(290, 'Mammee apple', 'Pomme Mammee', 'apple-mammee', 'pomme-mammee', '584_PommeMammee.png', 11),
(291, 'Purple mangosteen', 'Mangoustan pourpre', 'mangosteen', 'mangoustan', '585_MangoustanPourpre.png', 11),
(292, 'Ohelo berry', 'Ohelo berry', 'berry-ohelo', 'baie-ohelo', '598_OheloBerry.png', 11),
(293, 'Common persimmon', 'Kaki commun', '#persimmon-common#', '#persimmon-common#', '606_KakiCommun.png', 11),
(294, 'Pitanga', 'Pitanga', 'pitanga', 'pitanga', '611_Pitanga.png', 11),
(295, 'Malabar plum', 'Prune de Malabar', 'plum-malabar', 'prune-malabar', '621_PruneMalabar.png', 11),
(296, 'Rose hip', 'Cynorhodon', 'Rose-hip', 'Cynorhodon', '622_Cynorhodon.png', 11),
(297, 'Salmonberry', 'Salmonberry', 'salmon-berry', 'saumon-mûre', '632_Salmonberry.png', 11),
(298, 'Mexican groundcherry', 'Cachemire mexicain', 'groundcherry-mexican', 'cerise de terre-mexicaine', '660_GroundcherryMexicain.png', 11),
(299, 'Boysenberry', 'Mûre de Boysen', 'boysenberry', 'mûre de Boysen', '0701_MûreDeBoysen.png', 11),
(300, 'Persimmon', 'Persimmon', '#persimmon#', '#persimmon#', '0742_Persimmon.png', 11),
(301, 'Horned melon', 'Melon cornu', 'melon-horned', 'corne de melon', '0884_MelonCornu.png', 11),
(302, 'Nance', 'Nance', 'nance', 'nance', '0909_Nance.png', 11),
(303, 'Chinese bayberry', 'Laurier chinois', 'bayberry-chinese', 'bayberry-chinois', '0967_LaurierChinois.png', 11),
(304, 'Saskatoon berry', 'Amélanche', 'berry-saskatoon', 'baies-askatoon', '0970_Amélanche.png', 11),
(305, 'Nanking cherry', 'Cerise de Nankin', 'cherry-nanking', 'cerise-nankin', '0971_CeriseDeNankin.png', 11),
(306, 'Japanese pumpkin', 'Courge japonaise', 'pumpkin-japanese', 'citrouille-japonaise', '0972_CourgeJaponaise.png', 11),
(307, 'Anise Oil', 'Huile d\'anis', '#anise-oil#', '#huile d\'anis', '0979_HuileD\'Anis.png', 11),
(308, 'Apple Juice', 'Jus de pomme', 'apple-juice', 'jus de pomme', '0980_JusDePomme.png', 11),
(309, 'Coconut Oil', 'Huile de noix de coco', 'coconut-oil', 'huile de noix de coco', '0982_HuileDeNoixDeCoco.png', 11),
(310, 'Dried Mixed Fruit', 'Mélange de fruits séchés', 'dried mixed fruit', 'mélange de fruits secs', '2044_FruitsSeches.png', 11),
(311, 'Candied Mixed Fruit', 'Mélange de fruits confits', 'candied mixed fruit', 'mélange de fruits confits', '2045_FruitsConfits.png', 11),
(312, 'Apple', 'Pomme', 'apple', 'pomme', '0162_Pomme.png', 11),
(313, 'Apple Sauce', 'Sauce aux pommes', '#apple-sauce#', '#pomme-sauce#', '0163_SaucePomme.png', 28),
(314, 'Apricot', 'Abricot', 'apricot', 'abricot', '0164_Abricot.png', 11),
(315, 'Avocado', 'Avocat', 'avocado', 'avocat', '0165_Avocat.png', 11),
(316, 'Babaco', 'Babaco', 'babaco', 'babaco', '0166_Babaco.png', 11),
(317, 'Banana', 'Banane', 'banana', 'banane', '0167_Banane.png', 11),
(318, 'Beli', 'Beli', 'beli', 'beli', '0168_Beli.png', 11),
(319, 'Byrsonima crassifolia', 'Byrsonima crassifolia', 'byrsonima crassifolia; changunga; nanche; serette', 'byrsonima crassifolia ; changunga ; nanche ; serette', '0169_ByrsonimaCrassifolia.png', 11),
(320, 'Cashew Apple', 'Pomme de cajou', 'cashew-apple', 'noix de cajou-pomme', '0170_PommeDeCajou.png', 11),
(321, 'Cherimoya', 'Cherimoya', 'cherimoya; custard apple', 'cherimoya ; pomme de garde', '0171_Cherimoya.png', 11),
(322, 'Coconut', 'Noix de coco', 'coconut', 'noix de coco', '0172_NoixDeCoco.png', 11),
(323, 'Currant', 'Cassis', 'currant', 'groseille', '0173_Cassis.png', 11),
(324, 'Black Currant', 'Groseille noire', 'currant-black', 'groseille noire', '0174_GroseilleNoire.png', 11),
(325, 'Red Currant', 'Groseille rouge', 'currant-red', 'groseille-rouge', '0175_GroseilleRouge.png', 11),
(326, 'White Currant', 'Groseille blanche', 'currant-white', 'groseille-blanche', '0176_GroseilleBlanche.png', 11),
(327, 'Dates', 'Dattes', 'date', 'datte', '0177_Dattes.png', 11),
(328, 'Durian', 'Durian', 'durian', 'durian', '0178_Durian.png', 11),
(329, 'Elderberry', 'Sureau', 'elder-berry', 'sureau-mûre', '0179_Sureau.png', 11),
(330, 'Feijoa', 'Feijoa', 'feijoa', 'feijoa', '0180_Feijoa.png', 11),
(331, 'Fig', 'Figue', 'fig', 'figue', '0181_Figue.png', 11),
(332, 'Grape', 'Raisin', 'grape; merlot', 'raisin ; merlot', '0182_Raisin.png', 11),
(333, 'Guava', 'Goyave', 'guava', 'goyave', '0183_Goyave.png', 11),
(334, 'Hogplum', 'Hogplum', 'hogplum', 'hogplum', '0184_Hogplum.png', 11),
(335, 'Jackfruit', 'Fruit du jacquier', 'jackfruit', 'jacquier', '0185_FruitDuJacquier.png', 11),
(336, 'Kiwifruit', 'Kiwi', 'kiwi; kiwifruit', 'kiwi ; kiwi-fruit', '0186_Kiwi.png', 11),
(337, 'Litchi', 'Litchi', 'litchi; lychee; lichee', 'litchi ; litchi ; litchi', '0187_Litchi.png', 11),
(338, 'Loquat', 'Loquat', 'loquat', 'loquat', '0188_Loquat.png', 11),
(339, 'Malay Apple', 'Pomme malaise', 'malay-apple', 'malay-pomme', '0189_PommeMalaise.png', 11),
(340, 'Mango', 'Mangue', 'mango; amchoor; amchur', 'mangue ; amchoor ; amchur', '0190_Mangue.png', 11),
(341, 'Melon', 'Melon', 'melon', 'melon', '0191_Melon.png', 11),
(342, 'Musk Melon', 'Melon musqué', 'musk-melon; honeydew', 'musc-melon ; miellat', '0192_MelonMusque.png', 11),
(343, 'Naranjilla', 'Naranjilla', 'naranjilla', 'naranjilla', '0193_Naranjilla.png', 11),
(344, 'Orange', 'Orange', 'orange', 'orange', '0194_Orange.png', 11),
(345, 'Bitter Orange', 'Orange amère', 'orange-bitter; orange-sour', 'orange-amère ; orange-aigre', '0195_OrangeAmere.png', 11),
(346, 'Papaya', 'Papaye', 'papaya', 'papaye', '0196_Papaye.png', 11),
(347, 'Mountain Papaya', 'Papaye de montagne', 'Papaya-mountain', 'Papaye-montagne', '0197_PapayeDeMontagne.png', 11),
(348, 'Passionfruit', 'Fruit de la passion', 'passionfruit', 'fruit de la passion', '0198_FruitDeLaPassion.png', 11),
(349, 'Yellow Passionfruit', 'Fruit de la passion jaune', 'passionfruit-yellow', 'fruit de la passion-jaune', '0199_FruitDeLaPassionJaune.png', 11),
(350, 'Pawpaw', 'Pawpaw', 'pawpaw', 'papaye', '200_PawPaw.png', 11),
(351, 'Peach', 'Pêche', 'peach; nectarine', 'pêche ; nectarine', '0201_Peche.png', 11),
(352, 'Pear', 'Poire', 'pear', 'poire', '0202_Poire.png', 11),
(353, 'Bartlett Pear', 'Poire Bartlett', 'pear-barlett', 'poire-barlett', '0203_PoireBartlett.png', 11),
(354, 'Prickly Pear', 'Figue de Barbarie', 'pear-prickly', 'poire à épines', '0204_FigueDeBarbarie.png', 11),
(355, 'Pepino', 'Pepino', 'pepino; cucumber-sweet', 'pepino ; concombre-sucré', '0205_Pepino.png', 11),
(356, 'Pineapple', 'Ananas', 'pineapple; ananas', 'ananas ; ananas', '0206_Ananas.png', 11),
(357, 'Plum', 'Prune', 'plum; prune', 'prune ; pruneau', '0207_Prune.png', 11),
(358, 'Plumcot', 'Plumcot', 'plumcot; aprium', 'plumcot ; aprium', '0208_Plumcot.png', 11),
(359, 'Pumpkin', 'Citrouille', 'pumpkin', 'citrouille ;', '0209_Citrouille.png', 11),
(360, 'Quince', 'Coing', 'quince', 'coing', '0210_Coing.png', 11),
(361, 'Chinese Quince', 'Coing chinois', 'quince-chinese', 'coing-chinois', '0211_CoingChinois.png', 11),
(362, 'Raisin', 'Raisin', 'raisin; sultana', 'raisin sec ; sultanine', '0212_Raisin.png', 11),
(363, 'Roseapple', 'Ananas', 'rose-apple; java-apple', 'rose-pomme ; java-pomme', '0213_Roseapple.png', 11),
(364, 'Sapodilla', 'Sapodilla', 'sapodilla', 'sapodilla', '0214_Sapodilla.png', 11),
(365, 'Soursop', 'Soursop', 'soursop', 'corossol', '0215_Soursop.png', 11),
(366, 'Spineless Monkey Orange', 'Orange de singe sans épines', 'spineless-monkey-orange', 'spineless-monkey-orange', '0216_OrangeDeSingeSansEpine.png', 11),
(367, 'Starfruit', 'Starfruit', 'starfruit; carambola', 'carambole ; carambole', '0217_Starfruit.png', 11),
(368, 'Tamarind', 'Tamarinier', 'tamarind', 'tamarin', '0218_Tamarinier.png', 11),
(369, 'Woodapple', 'Ananas des bois', 'woodapple', 'ananas des bois', '0219_AnanasDesBois.png', 11),
(370, 'Bilberry', 'Myrtille', 'bilberry', 'myrtille', '0221_Myrtille.png', 11),
(371, 'Blackberry', 'Mûre', 'blackberry', 'mûre', '0222_Mûre.png', 11),
(372, 'Blueberry', 'Myrtille', 'blueberry', 'myrtille', '0223_Myrtille.png', 11),
(373, 'Cherry', 'Cerise', 'cherry', 'cerise', '0224_Cerise.png', 11),
(374, 'Bitter Cherry', 'Cerise amère', 'cherry-choke; cherry-bitter', 'cerise-framboise ; cerise-amère', '0225_CeriseAmère.png', 11),
(375, 'Sour Cherry', 'Cerise acide', 'cherry-morello; cherry-sour', 'cerise-morello ; cerise-aigre', '0226_CeriseAcide.png', 11),
(376, 'Sweet Cherry', 'Cerise douce', 'cherry-sweet; cherry-wild', 'cerise-sucrée ; cerise-sauvage', '0227_Cerisedouce.png', 11),
(377, 'Cloudberry', 'Myrtille', 'cloudberry', 'mûre des marais', '0228_Myrtille.png', 11),
(378, 'Cranberry', 'Canneberge', 'cranberry', 'canneberge', '0229_Canneberge.png', 11),
(379, 'Gooseberry', 'Groseille à maquereau', 'gooseberry', 'groseille à maquereau', '0230_GroseilleAMaquereau.png', 11),
(380, 'Lingonberry', 'Lingonberry', 'lingonberry', 'airelle rouge', '0231_Lingonberry.png', 11),
(381, 'Loganberry', 'Mûre de ronce', 'loganberry', 'mûre de Logan', '0232_MûreDeRonce.png', 11),
(382, 'Raspberry', 'Framboise', 'raspberry', 'framboise', '0233_Framboise.png', 11),
(383, 'Strawberry', 'Fraise', 'strawberry', 'fraise', '0234_Fraise.png', 11),
(384, 'Strawberry Jam', 'Confiture de fraises', 'strawberry-jam', 'confiture de fraises', '0235_ConfitureDeFraise.png', 11),
(385, 'Bergamot', 'Bergamote', 'bergamot', 'bergamote', '0236_Bergamote.png', 11),
(386, 'Citrus Fruits', 'Agrumes', 'citrus', 'agrume', '0237_Agrumes.png', 11),
(387, 'Grapefruit', 'Pamplemousse', 'grapefruit', 'pamplemousse', '0238_Pamplemousse.png', 11),
(388, 'Kumquat', 'Kumquat', 'kumquat', 'kumquat', '0239_Kumquat.png', 11),
(389, 'Lemon', 'Citron', 'lemon', 'citron', '0240_Citron.png', 11),
(390, 'Lime', 'Citron vert', 'lime', 'citron vert', '0241_CitronVert.png', 11),
(391, 'Mandarin Orange', 'Mandarine Orange', 'mandarin', 'mandarine', '0242_Mandarine.png', 11),
(392, 'Satsuma Orange', 'Orange Satsuma', 'mandarin-satsuma', 'mandarine-satsuma', '0243_OrangeSatsuma.png', 11),
(393, 'Tangerine', 'Mandarine', 'tangerine', 'mandarine', '0244_Mandarine.png', 11),
(394, 'Vanilla', 'Vanille', 'vanilla', 'vanille', '0245_Vanille.png', 11),
(395, 'Pomegranate', 'Grenade', 'pomegranate; anaardana', 'grenade ; anaardana', '0394_Grenade.png', 11),
(396, 'Butternut squash', 'Courge musquée', 'butternut-squash; butternut-pumpkin', 'courge musquée ; potiron musqué', '526_CourgeMusquee.png', 11),
(397, 'Natal plum', 'Prune du Natal', 'plum-natal', 'prune-natale', '529_PruneNatal.png', 11),
(398, 'Persimmon', 'Persimmon', 'persimmon', 'kaki', '2100_Persimmon.png', 11),
(399, 'Brazil Nut', 'Noix du Brésil', 'brazil-nut', 'brésilien-noisette', '0283_Cacao.png', 12),
(400, 'Clam', 'Palourde', 'clam', 'palourde', '0134_Palourde.png', 13),
(401, 'Crab', 'Crabe', 'crab', 'crabe', '0135_Crabe.png', 13),
(402, 'Crayfish', 'Écrevisse', 'cray-fish', 'crayons-poisson', '0136_Ecrevisse.png', 13),
(403, 'Kelp', 'Varech', 'kelp', 'varech', '0137_Varech.png', 13),
(404, 'Krill', 'Krill', 'krill', 'krill', '0138_Krill.png', 13),
(405, 'Lobster', 'Homard', '#lobster#', '#homard#', '0139_Homard.png', 13),
(406, 'Mollusc', 'Mollusque', 'mollusc; mussels', 'mollusque ; moules', '0140_Mollusque.png', 13),
(407, 'Oyster', 'Huître', 'oyster', 'huître', '0141_Huitre.png', 13),
(408, 'Prawn', 'Crevette', 'prawn', 'crevette', '0142_Crevette.png', 13),
(409, 'Scallop', 'Coquille Saint-Jacques', 'scallop', 'coquille Saint-Jacques', '0143_SaintJacques.png', 13),
(410, 'Shellfish', 'Mollusques et crustacés', 'shellfish', 'coquillage', '0144_MollusquesCrustaces.png', 13),
(411, 'Shrimp', 'Crevette', 'shrimp', 'crevette', '0145_Crevette.png', 13),
(412, 'Trassi', 'Trassi', 'shrimp-paste-dried; trassi', 'pâte de crevettes-séché ; trassi', '0146_Trassi.png', 13),
(413, 'Squid', 'Calmar', 'squid', 'calmar', '0147_Calamar.png', 13),
(414, 'Red king crab', 'Crabe royal rouge', '#crab-red-king#', '#crabe-rouge', '495_CrabeRoyalRouge.png', 13),
(415, 'Common octopus', 'Pieuvre commune', '#octopus#', '#octopus#', '538_PoulpeCommun.png', 13),
(416, 'Irish moss', 'Mousse d\'Irlande', 'moss-irish', 'mousse-irish', '570_MousseIrlande.png', 13),
(417, 'Leather chiton', 'Chiton cuir', 'chiton', 'chiton', '579_ChitonCuir.png', 13),
(418, 'North Pacific giant octopus', 'Pieuvre géante du Pacifique Nord', '#octopus-pacific#', '#octopus-pacific#', '597_PieuvrePacifique.png', 13),
(419, 'Spotted seal', 'Phoque tacheté', '#seal-spotted#', '#seal-spotted#', '602_PhoqueTachete.png', 13),
(420, 'Sea cucumber', 'Concombre de mer', 'cucumber-sea', 'concombre-mer', '637_ConcombreMer.png', 13),
(421, 'Steller sea lion', 'Otarie de Steller', 'sea-lion', 'oignon de mer', '638_OtarieSteller.png', 13),
(422, 'Bearded seal', 'Phoque barbu', '#seal-bearded#', '#phoque barbu#', '639_Phoque.png', 13),
(423, 'Ringed seal', 'Phoque annelé', '#seal-ringed#', '#phoque annelé#', '640_Phoque.png', 13),
(424, 'Whelk', 'Buccin', 'whelk', 'buccin', '665_Buccin.png', 13),
(425, 'Spiny lobster', 'Homard épineux', '#lobster-spiny#', '#lobster-spiny#', '684_HomardEpineux.png', 13),
(426, 'Bivalvia', 'Bivalvia', 'bivalvia', 'bivalves', '693_Bivalvia.png', 13),
(427, 'Walrus', 'Morses', 'walrus', 'morse', '695_Morse.png', 13),
(428, 'Purple laver', 'Lavande pourpre', 'laver', 'laver', '0705_LavandePourpre.png', 13),
(429, 'Wakame', 'Wakame', 'wakame', 'wakame', '0706_Wakame.png', 13),
(430, 'Jellyfish', 'Méduse', 'jellyfish', 'méduse', '0719_Meduse.png', 13),
(431, 'True seal', 'Phoque véritable', '#seal#', '#phoque#', '0748_Phoque.png', 13),
(432, 'Red algae', 'Algues rouges', 'algae-red', 'algue-rouge', '0749_AlguesRouges.png', 13),
(433, 'Kombu', 'Kombu', 'kombu', 'kombu', '0750_Kombu.png', 13),
(434, 'Ascidians', 'Ascidies', 'ascidians', 'ascidies', '0950_Ascidies.png', 13),
(435, 'Octopus', 'Pieuvre', 'octopus', 'poulpe', '2079_Pieuvre.png', 13),
(436, 'Crab', 'Crabe', 'crab; crabmeat', 'crabe ; chair de crabe', '2088_Crabe.png', 13),
(437, 'Lobster', 'Homard', 'lobster', 'homard', '2092_Homard.png', 13),
(438, 'Angelica', 'Angélique', 'angelica', 'angélique', '0248_Angélique.png', 14),
(439, 'Artemisia', 'Artemisia', 'artemisia', 'artemisia', '0249_Artémisia.png', 14),
(440, 'Basil', 'Basilic', 'basil', 'basilic', '0250_Basilic.png', 14),
(441, 'Buckwheat', 'Sarrasin', 'buckwheat', 'sarrasin', '0251_Sarrasin.png', 14),
(442, 'Calamus', 'Calamus', 'calamus', 'calamus', '0252_Calamus.png', 14),
(443, 'Alfalfa', 'Luzerne', 'alfalfa', 'luzerne', '496_Luzerne.png', 14),
(444, 'Chervil', 'Cerfeuil', 'chervil', 'cerfeuil', '0253_Cerfeuil.png', 14),
(445, 'Coriander', 'Coriandre', 'coriander; cilantro', 'coriandre ; cilantro', '0254_Coriandre.png', 14),
(446, 'Cornmint', 'Millepertuis', 'cornmint', 'menthe des champs', '0255_Millepertuis.png', 14),
(447, 'Dill', 'Aneth', 'dill', 'aneth', '0256_Aneth.png', 14),
(448, 'Fennel', 'Fenouil', 'fennel', 'fenouil', '0257_Fenouil.png', 14),
(449, 'Fenugreek', 'Fenugrec', 'fenugreek; methi', 'fenugrec ; methi', '0258_Fenugrec.png', 14),
(450, 'Garlic', 'Ail', 'garlic', 'ail', '0259_Ail.png', 14),
(451, 'Lemon Balm', 'Mélisse', 'lemon-balm', 'citron-balme', '0260_Mélisse.png', 14),
(452, 'Liqourice', 'Liqourice', 'liquorice', 'réglisse', '0261_Liquourice.png', 14),
(453, 'Mint', 'Menthe', 'mint', 'menthe', '0262_Menthe.png', 14),
(454, 'Rhubarb', 'Rhubarbe', 'rhubarb', 'rhubarbe', '0263_Rhubarbe.png', 14),
(455, 'Rosemary', 'Romarin', 'rosemary', 'romarin', '0264_Romarin.png', 14),
(456, 'Sage', 'Sauge', 'sage', 'sauge', '0265_Sauge.png', 14),
(457, 'Spearmint', 'Menthe verte', 'spearmint-oil', 'huile de menthe verte', '0266_MentheVerte.png', 14),
(458, 'Scotch Spearmint', 'Menthe verte écossaise', 'spearmint-scotch', 'spearmint-scotch', '0267_MentheVerteEcossaise.png', 14),
(459, 'Tarragon', 'Estragon', 'tarragon', 'estragon', '0268_Estragon.png', 14),
(460, 'Thyme', 'Thym', 'thyme', 'thym', '0269_Thym.png', 14),
(461, 'Peppermint', 'Menthe poivrée', 'peppermint', 'menthe poivrée', '0350_MentrePoivrée.png', 14),
(462, 'Curry Leaf', 'Feuille de curry', 'curry-leaf', 'curry-feuille', '0385_FeuilleDeCurry.png', 14),
(463, 'Silver linden', 'Tilleul argenté', 'linden-silver', 'tilleul-argenté', '408_TilleulArgente.png', 14),
(464, 'Lemon verbena', 'Verveine citronnée', 'verbena-lemon', 'verveine-citron', '410_VerveineCitronee.png', 14),
(465, 'Borage', 'Bourrache', 'borage', 'bourrache', '413_Bourrache.png', 14),
(466, 'Capers', 'Câpres', 'caper', 'câpre', '414_Capre.png', 14),
(467, 'Safflower', 'Carthame', 'saf-flower', 'saf-fleur', '415_Carthame.png', 14),
(468, 'Rocket salad', 'Salade de roquette', 'salad-rocket', 'salade-racine', '423_SaladeRoquette.png', 14),
(469, 'Garden cress', 'Cresson de jardin', 'cress', 'cresson', '430_CressonDeJardin.png', 14),
(470, 'Mexican oregano', 'Origan mexicain', 'oregano-mexican', 'oregano-mexicain', '431_OriganMexicain.png', 14),
(471, 'Evening primrose', 'Onagre', 'primrose', 'primevère', '436_Onagre.png', 14),
(472, 'Sorrel', 'Oseille', 'sorrel', 'oseille', '443_Oseille.png', 14),
(473, 'Summer savory', 'Sariette d\'été', 'savory-summer', 'sarriette-été', '444_SarietteEte.png', 14),
(474, 'Winter savory', 'Sarriette d\'hiver', 'savory-winter', 'sarriette-hiver', '445_SarietteHiver.png', 14),
(475, 'Linden', 'Tilleul', 'linden', 'tilleul', '450_Tilleul.png', 14),
(476, 'Common verbena', 'Verveine commune', 'vverbena; vervain', 'verveine ; verveine', '454_VerveineCommune.png', 14),
(477, 'Pineappple sage', 'Sauge ananas', 'pineappple-sage', 'ananas-sauce', '480_SaugeAnanas.png', 14),
(478, 'Amaranth', 'Amarante', 'amaranth', 'amarante', '497_Amarante.png', 14),
(479, 'Chia', 'Chia', 'chia', 'chia', '533_Chia.png', 14),
(480, 'Dock', 'Dock', 'dock', 'quai', '548_Dock.png', 14),
(481, 'Fireweed', 'Épilobe', 'fireweed', 'épilobe', '559_Epilobe.png', 14),
(482, 'American pokeweed', 'Pokeweed américain', 'pokeweed-american', 'pokeweed-american', '613_PokeweedAmericain.png', 14),
(483, 'Roselle', 'Roselle', 'roselle', 'roselle', '623_Roselle.png', 14),
(484, 'Teff', 'Teff', 'teff', 'teff', '658_Teff.png', 14),
(485, 'Tea leaf willow', 'Saule à feuilles de thé', 'tea-leaf-willow', 'thé-feuille de saule', '671_SauleFeuillesThe.png', 14),
(486, 'Epazote', 'Epazote', 'epazote', 'épazote', '0708_Epazote.png', 14),
(487, 'Sourdock', 'Sourdock', 'sourdock', 'sourdock', '0714_Sourdock.png', 14),
(488, 'Narrowleaf cattail', 'Quenouille à feuilles étroites', 'cattail', 'quenouille', '0718_QuenouilleAFeuillesEtroites.png', 14),
(489, 'Achilleas', 'Achilleas', 'achillea', 'achillea', '0095_HuileAchilleas.png', 15),
(490, 'Arar', 'Arar', 'arar', 'arar', '0096_HuileArar.png', 15),
(491, 'Buchu', 'Buchu', 'buchu', 'buchu', '0097_HuileBuchu.png', 15),
(492, 'Cajeput', 'Cajeput', 'cajeput', 'cajeput', '0098_HuileCajeput.png', 15),
(493, 'Camphor', 'Camphre', 'camphor', 'camphre', '0099_HuileCamphre.png', 15),
(494, 'Cascarilla', 'Cascarilla', 'cascarilla', 'cascarilla', '0100_HuileCascarilla.png', 15),
(495, 'Cedar', 'Cèdre', 'cedar', 'cèdre', '0101_HuileCedre.png', 15),
(496, 'Chamomile', 'Camomille', 'chamomile; camomile', 'camomille ; camomille', '0102_HuileCamomille.png', 15),
(497, 'Citronella Oil', 'Huile de citronnelle', 'citronella-oil', 'huile de citronnelle', '0103_HuileCitronnelle.png', 15),
(498, 'Citrus Peel Oil', 'Huile de zeste d\'agrumes', 'citrus-peel-oil', 'huile d\'écorce d\'agrume', '0104_HuileZestesAgrumes.png', 15),
(499, 'Eucalyptus Oil', 'Huile d\'Eucalyptus', 'eucalyptus-oil', 'huile d\'eucalyptus', '0105_HuileEucalyptus.png', 15),
(500, 'Fir', 'Sapin', 'fir', 'sapin', '0106_HuileSapin.png', 15),
(501, 'Geranium', 'Géranium', 'geranium', 'géranium', '0107_HuileGeranium.png', 15),
(502, 'Grapefruit Peel Oil', 'Huile d\'écorce de pamplemousse', 'grapefruit-peel-oil', 'pamplemousse-écorce-huile', '0108_HuilePamplemousse.png', 15),
(503, 'Grass', 'Herbe', 'grass', 'herbe', '0109_HuileHerbe.png', 15),
(504, 'Hops Oil', 'Huile de houblon', 'hops-oil', 'houblon-huile', '0110_HuileHoublon.png', 15),
(505, 'Hyacinth', 'Hyacinthe', 'hyacinth', 'jacinthe', '0111_HuileHyacinthe.png', 15),
(506, 'Hyssop Oil', 'Huile d\'hysope', 'hyssop-oil', 'huile d\'hysope', '0112_HuileHyssop.png', 15),
(507, 'Lemon Grass', 'Lemon Grass', 'lemon-grass', 'citron-herbe', '0113_HuileLemonGrass.png', 15),
(508, 'Lemon Peel Oil', 'Huile d\'écorce de citron', 'lemon-peel-oil', 'citron-peel-huile', '0114_HuileEcorceCitron.png', 15),
(509, 'Lime Peel Oil', 'Huile d\'écorce de citron vert', 'lime-peel-oil', 'citron-peel-huile', '0115_HuileEcorceCitronVert.png', 15),
(510, 'Lovage', 'Livèche', 'lovage', 'livèche', '0116_HuileLiveche.png', 15),
(511, 'Mandarin Orange Peel Oil', 'Huile d\'écorce de mandarine', 'mandarin-peel-oil', 'mandarine-peel-huile', '0117_HuileMandarine.png', 15),
(512, 'Mastic Gum', 'Mastic Gum', 'mastic', 'lentisque', '0118_HuileMasticGum.png', 15),
(513, 'Mentha Oil', 'Huile de menthe', 'mentha-oil', 'huile de menthe', '0119_HuileMenthe.png', 15),
(514, 'Myrrh', 'Myrrhe', 'myrrh', 'myrrhe', '0120_HuileMyrrhe.png', 15),
(515, 'Neroli Oil', 'Huile de Néroli', 'neroli-oil', 'huile de néroli', '0121_HuileNeroli.png', 15),
(516, 'Orange Oil', 'Huile d\'orange', 'orange-oil', 'huile d\'orange', '0122_HuileOrange.png', 15),
(517, 'Orris', 'Orris', 'orris', 'orris', '0123_HuileOrris.png', 15),
(518, 'Clary Sage', 'Sauge sclarée', 'clary-sage', 'sauge sclarée', '0124_HuileSaugeSarclee.png', 15),
(519, 'Red Sage', 'Sauge rouge', 'sage-red; sage-wild', 'sauge-rouge ; sauge-sauvage', '0125_HuileSaugeRouge.png', 15),
(520, 'Spanish Sage', 'Sauge espagnole', 'sage-spanish', 'sauge-espagnole', '0126_HuileSaugeEspagnole.png', 15),
(521, 'Sandalwood', 'Bois de santal', 'sandalwood', 'bois de santal', '0127_HuileBoisSantal.png', 15),
(522, 'Sweet Grass', 'Herbe douce', 'sweet-grass', 'doux-herbe', '0129_HuileHerbeDouce.png', 15),
(523, 'Valerian', 'Valériane', 'valerian', 'valériane', '0130_HuileValeriane.png', 15),
(524, 'Wattle', 'Acacia', 'wattle', 'acacia', '0131_HuileAcacia.png', 15),
(525, 'Yarrow', 'Achillée millefeuille', 'yarrow', 'achillée millefeuille', '0132_HuileAchillee.png', 15),
(526, 'Ylang-Ylang', 'Ylang-Ylang', 'ylang-ylang-oil', 'ylang-huile d\'ylang', '0133_HuileYlangYlang.png', 15),
(527, 'Canola Oil', 'Huile de canola', 'canola-oil', 'huile de canola', '0380_HuileDeCanola.png', 15),
(528, 'Kenaf', 'Kenaf', 'kenaf', 'kenaf', '0390_Kenaf.png', 15),
(529, 'Lotus', 'Lotus', 'lotus', 'lotus', '0391_Lotus.png', 15),
(530, 'Kewda', 'Kewda', 'kewda; kewra', 'kewda ; kewra', '0393_Kewda.png', 15),
(531, 'Ricotta Cheese', 'Fromage Ricotta', 'cheese-ricotta', 'fromage-ricotta', '405_FromageRicotta.png', 24),
(532, 'Eggplant', 'Aubergine', 'eggplant; aubergine; brinjal', 'aubergine ; aubergine ; brinjal', '0387_Aubergine.png', 16),
(533, 'Turkey Berry', 'Baie de dinde', 'turkey-berry', 'dinde-berry', '0397_BaieDeDinde.png', 16),
(534, 'Swamp cabbage', 'Chou des marais', 'cabbage-swamp', 'chou-champignon', '427_ChouDesMarais.png', 16),
(535, 'Welsh onion', 'Oignon gallois', 'onion-welsh; onion-spring; scallion', 'oignon-gallois ; oignon-ressort ; échalote', '472_OignonGallois.png', 16);
INSERT INTO `ingredient` (`INGREDIENT_ID`, `INGREDIENT_ENG_NAME`, `INGREDIENT_FR_NAME`, `INGREDIENT_ENG_SYNONYMOUS`, `INGREDIENT_FR_SYNONYMOUS`, `INGREDIENT_ICON`, `INGREDIENT_CATEGORY_ID`) VALUES
(536, 'Kai lan', 'Kai lan', 'kai-lan', 'kai-lan', '478_KaiLan.png', 16),
(537, 'Corn salad', 'Salade de maïs', 'salad-corn', 'salade-maïs', '539_SaladeMais.png', 16),
(538, 'Mountain yam', 'Moutarde de montagne', 'yam-mountain', 'igname-montagne', '591_MoutardeMontagne.png', 16),
(539, 'Prairie turnip', 'Navet des prairies', 'turnip-prairie', 'navet-prairie', '615_NavetPrairies.png', 16),
(540, 'Yam', 'Igname', 'yam', 'igname', '673_Igname.png', 16),
(541, 'Jicama', 'Jicama', 'jicama', 'jicama', '674_Jicama.png', 16),
(542, 'Cucurbita', 'Cucurbita', 'cucurbita', 'cucurbita', '0978_Cucurbita.png', 16),
(543, 'Green Beans', 'Haricots verts', 'bean-green; bean-field; bean-flageolet; bean-french; bean-garden; bean-haricot; bean-string; bean-snap', 'haricot vert ; champ de haricots ; haricot-flageolet ; haricot-français ; jardin de haricots ; haricot-haricot ; haricot-corde ; haricot-fraise', '0342_HaricotsVerts.png', 16),
(544, 'Chive', 'Ciboulette', 'chive', 'ciboulette', '0343_Ciboulette.png', 16),
(545, 'Lettuce', 'Laitue', 'lettuce', 'laitue', '0346_Laitue.png', 16),
(546, 'Okra', 'Gombo', 'okra; bhindi; lady-finger', 'okra ; bhindi ; lady-finger', '0347_Gombo.png', 16),
(547, 'Onion', 'Oignon', 'onion', 'oignon', '0348_OignonJaune.png', 16),
(548, 'Shallot', 'Échalote', 'shallot', 'échalote', '0349_Echalote.png', 16),
(549, 'Broccoli', 'Brocoli', 'broccoli; broccolini', 'brocoli ; broccolini', '0351_Brocoli.png', 16),
(550, 'Brussels Sprout', 'Chou de Bruxelles', 'brussels-sprout', 'chou de Bruxelles', '0352_ChouxDeBruxelles.png', 16),
(551, 'Cabbage', 'Chou', 'cabbage', 'chou', '0353_Chou.png', 16),
(552, 'Cauliflower', 'Chou-fleur', 'cauliflower', 'chou-fleur', '0354_ChouFleur.png', 16),
(553, 'Horseradish', 'Raifort', 'horseradish', 'raifort', '0355_Raifort.png', 16),
(554, 'Mustard', 'Moutarde', 'mustard', 'moutarde', '0356_Moutarde.png', 16),
(555, 'Radish', 'Radis', 'radish; daikon; mooli', 'radis ; daikon ; mooli', '0357_Radis.png', 16),
(556, 'Turnip', 'Navet', 'turnip', 'navet', '0358_Navet.png', 16),
(557, 'Kohlrabi', 'Chou-rave', 'kohlrabi', 'chou-rave', '0359_Chou-Rave.png', 16),
(558, 'Rutabaga', 'Rutabaga', 'rutabaga', 'rutabaga', '0360_Rutabaga.png', 16),
(559, 'Wasabi', 'Wasabi', 'wasabi', 'wasabi', '0361_Wasabi.png', 16),
(560, 'Capsicum', 'Capsicum', 'capsicum; paprika; pepper-bell; pepper-sweet', 'poivron ; paprika ; poivre en cloche ; poivre doux', '0362_Capsicum.png', 16),
(561, 'Cherry Pepper', 'Poivron cerise', 'pimiento; cherry-pepper', 'pimiento ; cerise-poivre', '0363_PoivronCerise.png', 16),
(562, 'Tomato', 'Tomate', 'tomato', 'tomate', '0364_Tomate.png', 16),
(563, 'Chayote', 'Chayotte', 'chayote', 'chayotte', '0365_Chayotte.png', 16),
(564, 'Cucumber', 'Concombre', 'cucumber', 'concombre', '0366_Concombre.png', 16),
(565, 'Beetroot', 'Betterave rouge', 'beetroot; beet', 'betterave ; betterave', '0367_Betterave.png', 16),
(566, 'Carrot', 'Carotte', 'carrot', 'carotte', '0368_Carotte.png', 16),
(567, 'Parsnip', 'Panais', 'parsnip', 'panais', '0369_Panais.png', 16),
(568, 'Sweet Potato', 'Patate douce', 'potato-sweet', 'pomme de terre douce', '0370_PatateDouce.png', 16),
(569, 'Asparagus', 'Asperge', 'asparagus', 'asperge', '0371_Asperge.png', 16),
(570, 'Cassava', 'Manioc', 'cassava', 'manioc', '0372_Magnoc.png', 16),
(571, 'Potato', 'Pomme de terre', 'potato', 'pomme de terre', '0373_PommeDeTerre.png', 16),
(572, 'Ashgourd', 'Courge cendrée', 'ash-gourd; white-gourd', 'cendre-courgeoise ; blanc-courgeoise', '0377_CourgeCendrée.png', 16),
(573, 'Bittergourd', 'Courge amère', 'bitter-gourd; squash-bitter', 'amer-courgeoise ; amer de courge', '0378_CourgeAmère.png', 16),
(574, 'Drumstick Leaf', 'Feuille de pilon', 'drumstick-leaf', 'feuille de pilon', '0386_FeuilleDePilon.png', 16),
(575, 'Redskin onion', 'Oignon à peau rouge', 'onion-red-skin; onion-red', 'oignon-rouge-peau ; oignon-rouge', '0409_OignonRouge.png', 16),
(576, 'Burdock', 'Bardane', 'burdock', 'bardane', '412_Bardane.png', 16),
(577, 'Komatsuna', 'Komatsuna', 'komatsuna', 'komatsuna', '475_Komatsuna.png', 16),
(578, 'Pak choy', 'Pak choy', 'pak-choy; pak-choi', 'pak-choy ; pak-choi', '476_PakChoy.png', 16),
(579, 'Arrowhead', 'Tête de flèche', 'arrowhead', 'tête de flèche', '498_Arrowhead.png', 16),
(580, 'Arrowroot', 'Arrowroot (racine de flèche)', 'arrowroot', 'arrowroot', '499_Arrowroot.png', 16),
(581, 'Rapini', 'Rapini', 'rapini', 'rapini', '519_BroccoliRabe.png', 16),
(582, 'Jerusalem artichoke', 'Topinambour', 'artichoke-jerusalen', 'artichaut-jérusalen', '573_Topinambour.png', 16),
(583, 'Kale', 'Chou frisé', 'kale', 'chou frisé', '576_ChouFrise.png', 16),
(584, 'Malabar spinach', 'Epinard de Malabar', 'spinach-malabar', 'épinard-malabar', '583_EpinardMalabar.png', 16),
(585, 'Hedge mustard', 'Moutarde des haies', 'mustard-hedge', 'moutarde-hedge', '647_MoutardeHaies.png', 16),
(586, 'Taro', 'Taro', 'taro', 'taro', '657_Taro.png', 16),
(587, 'Towel gourd', 'Courge de serviette', 'gourd-towel', 'gourde-towel', '661_TowelGourd.png', 16),
(588, 'Heart of palm', 'Coeur de palmier', 'heart of palm', 'cœur de palmier', '0843_CoeurDePalmier.png', 16),
(589, 'Tapioca pearl', 'Tapioca perlé', 'tapioca', 'tapioca', '0870_TapiocaPerle.png', 16),
(590, 'Green zucchini', 'Courgettes vertes', 'zucchini-green', 'courgette-verte', '0968_CourgettesVertes.png', 16),
(591, 'Zucchini', 'Courgettes', 'zucchini', 'courgette', '0969_Courgettes.png', 16),
(592, 'Tomato Paste', 'Pâte de tomate', '#tomato-paste#', '#pâte de tomate#', '0987_PatedeTomate.png', 16),
(593, 'Coriander Seed', 'Graines de coriandre', 'coriander-seed', 'graines de coriandre', '0989_GraineDeCoriandre.png', 16),
(594, 'Mixed Vegetables', 'Légumes mélangés', 'mixed vegetables', 'mélange de légumes', '2029_MelangeLegumes.png', 16),
(595, 'Vegetable Stock', 'Bouillon de légumes', 'vegetable stock', 'bouillon de légumes', '2033_BouillonLegumes.png', 16),
(596, 'Tomato Puree', 'Purée de tomates', 'tomato-puree', 'purée de tomates', '2063_PureeTomate.png', 16),
(597, 'Tomato Paste', 'Pâte de tomate', 'tomato-paste', 'purée de tomates', '2064_PateTomate.png', 16),
(598, 'Kidney Beans', 'Haricots rouges', 'bean-kidney; bean-red; bean-red-kidney; rajma', 'haricot-rognon ; haricot-rouge ; haricot-rouge-rognon ; rajma', '0287_Cacahuète.png', 17),
(599, 'Peas', 'Pois', 'pea', 'pois', '0289_Soja.png', 17),
(600, 'Soybean', 'Soja', 'soy-bean; soya-bean', 'soja-haricot ; soja-haricot', '0290_HuileDeSoja.png', 17),
(601, 'Soybean Oil', 'Huile de soja', 'soy-bean-oil; soya-bean-oil', 'soja-huile de soja ; soja-huile de soja', '0291_SauceDeSoja.png', 17),
(602, 'Cluster Bean', 'Haricot à grappes', 'bean-cluster; bean-guar', 'haricot-cluster ; haricot-guar', '401_HaricotGrappes.png', 17),
(603, 'Pigeon Pea', 'Pois d\'Angole', 'pea-pigeon; arhar; pea-no-eye; dal-toor; red-gram', 'pois-pigeon ; arhar ; pois-no-oeil ; dal-toor ; rouge-gramme', '403_PoisAngole.png', 17),
(604, 'Chickpea', 'Pois chiche', 'pea-chick; besan; chickpea; kabuli chana; kala chana; garbanzo', 'pois chiche ; besan ; pois chiche ; kabuli chana ; kala chana ; garbanzo', '417_PoisChiche.png', 17),
(605, 'Grass pea', 'Pois de senteur', 'pea-grass', 'pois-herbe', '428_PoisDeSenteur.png', 17),
(606, 'Lentils', 'Lentilles', 'lentil', 'lentille', '429_Lentilles.png', 17),
(607, 'Millet', 'Millet', 'millet', 'millet', '437_Millet.png', 17),
(608, 'Scarlet bean', 'Haricot écarlate', 'bean-scarlet', 'haricot-scarlette', '438_HaricotEcarlate.png', 17),
(609, 'Adzuki bean', 'Haricot Adzuki', 'bean-adzuki', 'haricot-adzuki', '455_HaricotAdzuki.png', 17),
(610, 'Gram bean', 'Haricot Gram', 'bean-gram', 'haricot-gramme', '456_HaricotGram.png', 17),
(611, 'Mung bean', 'Haricot mungo', 'bean-mung; bean-moong', 'haricot-mung ; haricot-moong', '457_HaricotMungo.png', 17),
(612, 'Climbing bean', 'Haricot grimpant', 'bean-climbing', 'haricot grimpant', '458_HaricotGrimpant.png', 17),
(613, 'Catjang pea', 'Pois Catjang', 'pea-catjang', 'pois-catjang', '541_PoisCatjang.png', 17),
(614, 'Hyacinth bean', 'Haricot jacinthe', 'bean-hyacinth', 'haricot-hyacinthe', '569_HaricotJacinthe.png', 17),
(615, 'Moth bean', 'Haricot papillon', 'bean-moth', 'mite à haricots', '590_HaricotPapillon.png', 17),
(616, 'Winged bean', 'Haricot ailé', 'bean-winged', 'haricot à ailes', '672_HaricotAile.png', 17),
(617, 'Yardlong bean', 'Haricot long', 'bean-yardlong', 'haricot-long', '698_HaricotLong.png', 17),
(618, 'Beans', 'Haricots', 'bean', 'haricot', '0285_HaricotDeLima.png', 17),
(619, 'Lima Beans', 'Haricot de Lima', 'bean-lima; bean-sieve; butter-bean', 'haricot-lima ; haricot-maïs ; haricot-beurre', '0286_HaricotRouge.png', 17),
(620, 'Black-eyed pea', 'Poison aux yeux noirs', 'pea-black-eyed', 'pois noir-yeux', '685_PoisonYeuxNoirs.png', 17),
(621, 'Corn', 'Maïs', 'corn; corn-flour; corn-starch; maize-flour', 'maïs ; maïs-farine ; maïs-amidon ; maïs-farine', '0056_Mais.png', 18),
(622, 'Corn Oil', 'Huile de maïs', 'corn oil', 'huile de maïs', '0057_HuileDeMais.png', 18),
(623, 'Popcorn', 'Popcorn', 'pop-corn', 'pop-maïs', '0058_PopCorn.png', 18),
(624, 'Sweetcorn', 'Maïs doux', 'sweet-corn', 'sucré-maïs', '0059_SweetCorn.png', 18),
(625, 'Corn grits', 'Gruaux de maïs', 'corn-grit', 'maïs-grain', '0932_GruauxDeMaïs.png', 18),
(626, 'Cornbread', 'Pain de maïs', '#corn-bread#', '#maïs-pain#', '0931_PainDeMaïs.png', 18),
(627, 'Almond', 'Amande', 'almond', 'amande', '0282_NoixDuBrésil.png', 12),
(628, 'Cocoa', 'Cacao', 'cocoa', 'cacao', '0284_Haricots.png', 12),
(629, 'Peanut', 'Cacahuète', 'peanut', 'arachide', '0288_Pois.png', 12),
(630, 'Filbert', 'Filbert', 'filbert', 'aveline', '0293_Noisette.png', 12),
(631, 'Hazelnut', 'Noisette', 'hazel-nut', 'noisetier-noisette', '0294_NoixDeMacadamia.png', 12),
(632, 'Macadamia Nut', 'Noix de Macadamia', 'macadamia-nut; bush-nut; hawaii-nut', 'macadamia-noisette ; brousse-noisette ; hawaii-noisette', '0296_NoixDePecan.png', 12),
(633, 'Pecans', 'Noix de pécan', 'pecan', 'noix de pécan', '0297_Noix.png', 12),
(634, 'Walnut', 'Noix', 'walnut', 'noix', '0298_Mousseron.png', 12),
(635, 'Muskmallow', 'Mousseron', 'musk-mallow', 'musc-mallow', '0299_Sésame.png', 12),
(636, 'Sesame', 'Sésame', 'sesame', 'sésame', '0300_Allium.png', 12),
(637, 'Flaxseed', 'Graine de lin', 'flax-seed', 'lin-graine', '0388_GraineDeLin.png', 12),
(638, 'Nigella Seed', 'Graine de Nigelle', 'nigella-seed; kalonji', 'graine de nigelle ; kalonji', '0392_GraineDeNigelle.png', 12),
(639, 'Cashew nut', 'Noix de cajou', 'cashew; cashew-nut', 'noix de cajou ; noix de cajou-noix', '411_NoixDeCajou.png', 12),
(640, 'Chestnut', 'Châtaigne', 'chestnut', 'châtaigne', '416_Chataigne.png', 12),
(641, 'Pistachio', 'Pistachier', 'pistachio', 'pistache', '439_Pistache.png', 12),
(642, 'Acorn', 'Gland', 'acorn', 'gland', '492_Gland.png', 12),
(643, 'Beech nut', 'Noix de hêtre', 'nut-beech', 'noix-hêtre', '508_BeechNut.png', 12),
(644, 'Butternut', 'Butternut', 'butternut', 'butternut', '525_Butternut.png', 12),
(645, 'Chinese chestnut', 'Châtaigne chinoise', 'chestnut-chinese', 'châtaigne-chinoise', '534_ChataigneChinoise.png', 12),
(646, 'European chestnut', 'Châtaigne européenne', 'chestnut-european', 'châtaigne-européenne', '557_ChataigneEuropeenne.png', 12),
(647, 'Ginkgo nuts', 'Noix de ginkgo', 'nut-ginkgo', 'noix-ginkgo', '561_NoixGinkgo.png', 12),
(648, 'Japanese chestnut', 'Châtaigne du Japon', 'chestnut-japanese', 'châtaigne-japonaise', '572_ChataigneJapon.png', 12),
(649, 'Pili nut', 'Noix de pili', 'nut-pili', 'noix-pili', '609_NoixPili.png', 12),
(650, 'Mixed nuts', 'Noix mélangées', 'mixed nut', 'noix mélangées', '0894_NoixMelangées.png', 12),
(651, 'Soybean Sauce', 'Sauce de soja', 'soy-bean-sauce; soya-bean-sauce; soy-sauce; soya-sauce', 'soja-sauce de soja ; soja-sauce de soja ; soja-sauce de soja ; soja-sauce de soja', '0292_Filbert.png', 19),
(652, 'Allium', 'Allium', 'allium', 'allium', '0301_Alpinia.png', 19),
(653, 'Alpinia', 'Alpinia', 'alpinia', 'alpinia', '0302_Ceriman.png', 19),
(654, 'Ceriman', 'Ceriman', 'ceriman', 'ceriman', '0303_Chicorée.png', 19),
(655, 'Chicory', 'Chicorée', 'chicory', 'chicorée', '0304_Houblon.png', 19),
(656, 'Hops', 'Houblon', 'hops', 'houblon', '0305_Laurier.png', 19),
(657, 'Laurel', 'Laurier', 'bay-laurel; bay-leaf', 'baie-laurel ; baie-feuille', '0306_Myrte.png', 19),
(658, 'Myrtle', 'Myrte', 'myrtle', 'myrte', '0307_Olive.png', 19),
(659, 'Olive', 'Olive', 'olive', 'olive', '0308_Pin.png', 19),
(660, 'Pine', 'Pin', 'pine', 'pin', '0309_Sassafras.png', 19),
(661, 'Sassafras', 'Sassafras', 'sassafras', 'sassafras', '0310_Thé.png', 19),
(662, 'Tea', 'Thé', 'tea', 'thé', '0311_ThéFermenté.png', 19),
(663, 'Fermented Tea', 'Thé fermenté', 'tea-fermented', 'thé fermenté', '0312_Tabac.png', 19),
(664, 'Tobacco', 'Tabac', 'tobacco', 'tabac', '0313_Crésson.png', 19),
(665, 'Watercress', 'Cresson', 'watercress', 'cresson', '0314_Créosote.png', 19),
(666, 'Creosote', 'Créosote', 'creosote', 'créosote', '0315_Miel.png', 19),
(667, 'Honey', 'Miel', 'honey', 'miel', '0316_Macaroni.png', 19),
(668, 'Macaroni', 'Macaroni', 'macaroni', 'macaroni', '0317_HuileDeMoutarde.png', 19),
(669, 'Mustard Oil', 'Huile de moutarde', 'mustard-oil', 'huile de moutarde', '0318_BeurreDarachide.png', 19),
(670, 'Peanut Butter', 'Beurre d\'arachide', 'peanut-butter', 'cacahuète-beurre', '0318_HuileTournesol.png', 19),
(671, 'Peanut Oil', 'Huile d\'arachide', 'peanut-oil', 'huile d\'arachide', '0319_HuileD\'arachide.png', 19),
(672, 'Storax', 'Storax', 'storax', 'storax', '0321_Storax.png', 19),
(673, 'Vinegar', 'Vinaigre', 'vinegar', 'vinaigre', '0322_Vinaigre.png', 19),
(674, 'Apple Cider Vinegar', 'Vinaigre de cidre de pomme', 'vinegar-cider; cider-vinegar', 'vinaigre-cidre ; cidre-vinaigre', '0383_VinaigreDeCridreDePomme.png', 19),
(675, 'Lupine', 'Lupin', 'lupine', 'lupin', '432_Lupin.png', 19),
(676, 'Purslane', 'Pourpier', 'purslane', 'pourpier', '440_Pourpier.png', 19),
(677, 'Small leaf linden', 'Tilleul à petites feuilles', 'linden-leaf', 'feuille de tilleul', '451_TilleulPetiteFeuille.png', 19),
(678, 'Longan', 'Longan', 'longan', 'longan', '466_Longan.png', 19),
(679, 'Abiyuch', 'Abiyuch', 'abiyuch', 'abiyuch', '490_Abiyuch.png', 19),
(680, 'Bamboo shoots', 'Pousses de bambou', 'bamboo-shoot', 'pousse de bambou', '505_PousseBambou.png', 19),
(681, 'Giant butterbur', 'Pétoncle géant', 'butterbur', 'pétasite', '523_PetoncleGeant.png', 19),
(682, 'Cardoon', 'Cardon', 'cardoon', 'cardon', '527_Cardon.png', 19),
(683, 'Carob', 'Caroube', 'carob', 'caroube', '530_Caroube.png', 19),
(684, 'Cottonseed', 'Graine de coton', 'cotton-seed', 'coton-graine', '540_GraineCoton.png', 19),
(685, 'Oregon yampah', 'Yampah de l\'Oregon', 'oregon-yampah', 'oregon-yampah', '555_YampahOregon.png', 19),
(686, 'Jute', 'Jute', 'jute', 'jute', '575_Jute.png', 19),
(687, 'Lambsquarters', 'Chénopode blanc', 'lambsquarters', 'chénopode blanc', '578_ChenopodeBlanc.png', 19),
(688, 'White lupine', 'Lupin blanc', 'lupine-white', 'lupin-blanc', '582_LupinBlanc.png', 19),
(689, 'Alpine sweetvetch', 'Mélilot des Alpes', 'sweetvetch', 'mélilot', '586_MelilotAlpes.png', 19),
(690, 'Nopal', 'Nopal', 'nopal', 'nopal', '595_Nopal.png', 19),
(691, 'French plantain', 'Plantain français', 'plantain-french', 'plantain-français', '612_PlantainFrancais.png', 19),
(692, 'Common salsify', 'Salsifis commun', 'salsify', 'salsifis', '633_SalsifisCommun.png', 19),
(693, 'Yautia', 'Yautia', 'yautia', 'yautia', '675_Yautia.png', 19),
(694, 'Rowal', 'Rowal', 'rowal', 'rollier', '0702_Rowal.png', 19),
(695, 'Ostrich fern', 'Fougère d\'autruche', 'ostrich-fern', 'fougère-autruche', '0712_FougereDautruche.png', 19),
(696, 'Agave', 'Agave', 'agave', 'agave', '0717_Agave.png', 19),
(697, 'Oil palm', 'Palmier à huile', 'palm-oil', 'huile de palme', '0740_HuileDePalme.png', 19),
(698, 'Sago palm', 'Palme de sagou', 'palm-sago', 'palmier-sago', '0741_PalmeDeSagou.png', 19),
(699, 'Black salsify', 'Salsifis noir', 'salsify-black', 'salsifis noir', '0747_SalsifisNoir.png', 19),
(700, 'Chocolate spread', 'Pâte à tartiner au chocolat', 'chocolate spread', 'pâte à tartiner au chocolat', '0806_PateATartinerAuChocolat.png', 19),
(701, 'Cocoa butter', 'Beurre de cacao', 'cocoa butter', 'beurre de cacao', '0814_BeurreDeCacao.png', 19),
(702, 'Soy yogurt', 'Yogourt de soja', 'soy yogurt; soya yogurt', 'yogourt de soja ; yogourt de soja', '0890_YoghourtDeSoja.png', 19),
(703, 'Babassu palm', 'Palmier babassu', 'palm-babassu', 'palme-babassu', '0895_PalmierBabassu.png', 19),
(704, 'Shea tree', 'Karité', 'shea', 'karité', '0897_Karité.png', 19),
(705, 'Oil-seed Camellia', 'Camélia oléagineux', 'camellia', 'camélia', '0898_CaméliaOléagineux.png', 19),
(706, 'Ucuhuba', 'Ucuhuba', 'ucuhuba', 'ucuhuba', '0899_Ucuhuba.png', 19),
(707, 'Tree fern', 'Fougère arboricole', 'fern-tree', 'arbre de fougère', '0918_FougereArboricole.png', 19),
(708, 'Yellow pond lily', 'Nénuphar jaune', 'yellow-pond lily', 'jaune-nénuphar', '0952_NenupharJaune.png', 19),
(709, 'Colorado pinyon', 'Pinsons du Colorado', 'pinyon', 'pinyon', '610_PignonColorado.png', 19),
(710, 'Alaska wild rhubarb', 'Rhubarbe sauvage d\'Alaska', 'rhubarb-alaska', 'rhubarbe-alaska', '696_RhubarbeSauvageAlaska.png', 19),
(711, 'Thistle', 'Chardon', 'thistle', 'chardon', '0754_Chardon.png', 19),
(712, 'Frankfurter Sausage', 'Saucisse de Francfort', 'frankfurter-sausage', 'saucisse de Francfort', '0274_Jambon.png', 20),
(713, 'Ice cream', 'Glace', 'ice cream', 'crème glacée', '0763_Glace.png', 20),
(714, 'Nougat', 'Nougat', 'nougat', 'nougat', '0766_Nougat.png', 20),
(715, 'Toffee', 'Caramel', 'toffee', 'caramel', '0767_Caramel.png', 20),
(716, 'Cake', 'Gâteau', 'cake', 'gâteau', '0768_Gateau.png', 20),
(717, 'Pizza', 'Pizza', 'pizza', 'pizza', '0769_Pizza.png', 20),
(718, 'DragÌ©e', 'DragÌ©e', 'dragÌ©e', 'dragÌ©e', '', 20),
(719, 'Chewing gum', 'Chewing-gum', 'chewing gum', 'chewing-gum', '0774_ChewinGum.png', 20),
(720, 'Marzipan', 'Massepain', 'marzipan', 'pâte d\'amande', '0775_Massepain.png', 20),
(721, 'Salad dressing', 'Sauce salade', 'salad dressing', 'vinaigrette', '0776_SauceSalade.png', 20),
(722, 'Meat bouillon', 'Bouillon de viande', 'bouillon', 'bouillon', '0786_BouillonDeViande.png', 20),
(723, 'Hamburger', 'Hamburger', 'hamburger', 'hamburger', '0832_Hamburger.png', 20),
(724, 'Taco', 'Taco', 'taco', 'taco', '0834_Taco.png', 20),
(725, 'Frybread', 'Pain frit', '#fry-bread#', '#fry-bread#', '0853_PainFrit.png', 20),
(726, 'Chimichanga', 'Chimichanga', 'chimichanga', 'chimichanga', '0868_Chimichanga.png', 20),
(727, 'Quesadilla', 'Quesadilla', 'quesadilla', 'quesadilla', '0872_Quesadilla.png', 20),
(728, 'Baked potato', 'Pomme de terre au four', 'potato-baked', 'pomme de terre au four', '0873_PommeDeTerreAuFour.png', 20),
(729, 'Fruit salad', 'Salade de fruits', 'fruit salad', 'salade de fruits', '0889_SaladeDeFruits.png', 20),
(730, 'Scrapple', 'Scrapple', 'scrapple', 'scrapple', '0913_Scrapple.png', 20),
(731, 'Fish burger', 'Burger de poisson', 'fish burger', 'burger de poisson', '0953_BurgerDePoisson.png', 20),
(732, 'Pot pie', 'Pâté en croûte', 'pot-pie', 'pot-tarte', '0955_PatéEnCroute.png', 20),
(733, 'Vermicelli', 'Vermicelles', 'vermicelli', 'vermicelle', '2019_Vermicelles.png', 20),
(734, 'Puff Pastry', 'Pâte feuilletée', 'puff pastry', 'pâte feuilletée', '2024_PateFeuilletee.png', 20),
(735, 'Tandoori Paste', 'Pâte Tandoori', 'tandoori paste', 'pâte tandoori', '2028_PateTandoori.png', 20),
(736, 'Salad Creme', 'Crème de salade', 'salad creme', 'crème de salade', '2030_SauceSalade.png', 20),
(737, 'Worcestershite Sauce', 'Sauce Worcestershite', 'worcestershire sauce', 'sauce worcestershire', '2031_SauceWorcestershire.png', 20),
(738, 'Coleslaw', 'Salade de chou', 'coleslaw', 'salade de chou', '2032_SaladeChou.png', 20),
(739, 'Fettuccine', 'Fettuccine', 'fettuccine', 'fettuccine', '2035_Fettucine.png', 20),
(740, 'Ketchup', 'Ketchup', 'ketchup', 'ketchup', '2037_Ketchup.png', 20),
(741, 'Spinach Fettuccine', 'Fettuccine aux épinards', 'spinach fettuccine', 'fettuccine aux épinards', '2038_FettuciniEpinards.png', 20),
(742, 'Hoisin Sauce', 'Sauce Hoisin', 'hoisin sauce', 'sauce hoisin', '2039_SauceHoisin.png', 20),
(743, 'Pancetta', 'Pancetta', 'pancetta', 'pancetta', '2047_Pancetta.png', 20),
(744, 'Cracker Crumb', 'Miettes de biscuits', 'cracker crumb; graham cracker', 'chapelure de biscuit ; biscuit graham', '2055_MiettesBiscuit.png', 20),
(745, 'Adobo', 'Adobo', 'adobo', 'adobo', '2062_Adobo.png', 20),
(746, 'Frybread', 'Frybread', 'fry-bread', 'alevins', '2075_FriturePoissons.png', 20),
(747, 'Hibiscus Tea', 'Thé à l\'hibiscus', 'tea-hibiscus', 'thé-hibiscus', '2077_TheHibiscus.png', 20),
(748, 'Apple Sauce', 'Sauce aux pommes', 'apple-sauce', 'compote de pommes', '2101_CompotePommes.png', 20),
(749, 'Cider Vinegar', 'Vinaigre de cidre', 'soy cream; soya cream', 'crème de soja ; crème de soja', '2102_VinaigreCidre.png', 20),
(750, 'Soup', 'Soupe', 'soup', 'soupe', '0800_Soupe.png', 20),
(751, 'Cake Mix', 'Mélange de gâteaux', 'cake mix', 'mélange à gâteau', '2016_MelangeDeGateaux.png', 20),
(752, 'Fruit gum', 'Gomme aux fruits', 'fruit gum', 'gomme de fruit', '0807_GommeAuxFruits.png', 21),
(753, 'Snack bar', 'Snack bar', 'snack bar', 'snack', '0828_SnackBar.png', 21),
(754, 'Burrito', 'Burrito', 'burrito', 'burrito', '0831_Burrito.png', 21),
(755, 'Falafel', 'Falafel', 'falafel', 'falafel', '0852_Falafel.png', 21),
(756, 'Pudding', 'Pudding', 'pudding', 'pudding', '0859_Pudding.png', 21),
(757, 'Hushpuppy', 'Hushpuppy', 'hushpuppy', 'hushpuppy', '0885_Hushpuppy.png', 21),
(758, 'Relish', 'Relish', 'relish', 'relish', '0887_Relish.png', 21),
(759, 'Bonito', 'Bonito', 'bonito', 'bonite', '0148_Bonito.png', 22),
(760, 'Caviar', 'Caviar', 'caviar', 'caviar', '0149_Caviar.png', 22),
(761, 'Codfish', 'Morue', 'codfish; cod', 'morue ; cabillaud', '0150_Morue.png', 22),
(762, 'Fish', 'Poisson', 'fish; pomfret', 'poisson ; pomfret', '0151_Poisson.png', 22),
(763, 'Fatty Fish', 'Poisson gras', 'fish-fatty', 'poisson gras', '0152_PoissonGras.png', 22),
(764, 'Lean Fish', 'Poisson maigre', 'fish-lean', 'poisson maigre', '0153_PoissonMaigre.png', 22),
(765, 'Fish Oil', 'Huile de poisson', 'fish-oil', 'huile de poisson', '0154_HuileDePoisson.png', 22),
(766, 'Smoked Fish', 'Poisson fumé', 'fish-smoked', 'poisson-fumé', '0155_PoissonFume.png', 22),
(767, 'Salmon', 'Saumon', '#salmon#', '#saumon', '0156_Saumon.png', 22),
(768, 'Atlantic herring', 'Hareng de l\'Atlantique', '#herring-atlantic#', '#hareng-atlantique#', '500_HarengAtlantique.png', 22),
(769, 'Atlantic mackerel', 'Maquereau de l\'Atlantique', '#mackerel-atlantic#', '#mackerel-atlantique#', '501_MaquereauAtlantique.png', 22),
(770, 'Painted comber', 'Mérou de l\'Atlantique', 'comber', 'combe', '502_MérouAtlantique.png', 22),
(771, 'Atlantic pollock', 'Loup atlantique', '#pollock-atlantic#', '#pollock-atlantique#', '503_LoupAtlantique.png', 22),
(772, 'Atlantic wolffish', 'Loup atlantique', 'wolffish', 'loup de mer', '504_AtlanticWolfish.png', 22),
(773, 'Striped bass', 'Bar rayé', 'bass', 'bar', '506_BarRaye.png', 22),
(774, 'Beluga whale', 'Béluga', '#whale-beluga#', '#baleine-béluga', '509_Beluga.png', 22),
(775, 'Alaska blackfish', 'Poisson noir d\'Alaska', 'blackfish', 'poisson noir', '512_PoissonNoirAlaska.png', 22),
(776, 'Northern bluefin tuna', 'Thon rouge du Nord', '#tuna-bluefin#', '#thon rouge#', '513_ThonRougeNord.png', 22),
(777, 'Bluefish', 'Poisson bleu', 'bluefish', 'poisson bleu', '514_Bluefish.png', 22),
(778, 'Bowhead whale', 'Baleine boréale', '#whale-bowhead#', '#whale-bowhead#', '516_BaleineBoreale.png', 22),
(779, 'Burbot', 'lotte', 'burbot', 'lotte', '522_Lotte.png', 22),
(780, 'American butterfish', 'Papillon d\'Amérique', 'butterfish', 'papillon', '524_AmericanButterfish.png', 22),
(781, 'Common carp', 'Carpe commune', 'carp', 'carpe', '531_CarpeCommune.png', 22),
(782, 'Channel catfish', 'Chien-chat de rivière', '#catfish-channel#', '#carpe-canal#', '532_PoissonChatRiviere.png', 22),
(783, 'Cisco', 'Cisco', '#cisco#', '#cisco#', '536_Cisco.png', 22),
(784, 'Nuttall cockle', 'Coque de Nuttall', 'nuttall-cockle', 'châtaigne-cockle', '537_CoqueNuttall.png', 22),
(785, 'Atlantic croaker', 'Croak de l\'Atlantique', '#croaker-atlantic#', '#croaker-atlantique#', '543_CroakAtlantique.png', 22),
(786, 'Cusk', 'Brosme', 'cusk', 'brosme', '544_Brosme.png', 22),
(787, 'Cuttlefish', 'Seiche', 'cuttle-fish', 'seiche-poisson', '545_Seiche.png', 22),
(788, 'Devilfish', 'Poisson diable', 'devil-fish', 'diable-poisson', '547_PoissonDiable.png', 22),
(789, 'Dolphin fish', 'Poisson dauphin', 'dolphin', 'dauphin', '549_PoissonDauphin.png', 22),
(790, 'Freshwater drum', 'Tambour d\'eau douce', 'drum', 'tambour', '550_TambourEauDouce.png', 22),
(791, 'Freshwater eel', 'Anguille d\'eau douce', 'eel', 'anguille', '552_AnguilleEauDouce.png', 22),
(792, 'European anchovy', 'Anchois d\'Europe', '#anchovy-european#', '#anchovy-european#', '556_AnchoisEurope.png', 22),
(793, 'Turbot', 'Turbot', 'turbot', 'turbot', '558_Turbot.png', 22),
(794, 'Florida pompano', 'Pompano de Floride', 'pompano', 'pompano', '560_PompanoFloride.png', 22),
(795, 'Greenland halibut', 'Flétan du Groenland', '#halibut-greenland#', '#flétan du Groenland', '563_FletanGroeland.png', 22),
(796, 'Grouper', 'Mérou', 'grouper', 'mérou', '565_Merou.png', 22),
(797, 'Haddock', 'Haddock', '#haddock#', '#haddock#', '566_Haddock.png', 22),
(798, 'Hippoglossus', 'Hippoglosse', 'hippoglossus', 'hippoglosse', '567_Hippoglosse.png', 22),
(799, 'Pacific jack mackerel', 'Maquereau du Pacifique', '#mackerel-pacific#', '#mackerel-pacifique#', '571_MaquereauPacifique.png', 22),
(800, 'King mackerel', 'Maquereau royal', '#mackerel-king#', '#maquereau-roi#', '577_MaquereauRoyal.png', 22),
(801, 'Common ling', 'Lingue commune', 'ling', 'lingue', '580_Lingue.png', 22),
(802, 'Lingcod', 'Morue-lingue', 'lingcod', 'morue-lingue', '581_MorueLingue.png', 22),
(803, 'Milkfish', 'Milkfish', 'milk-fish', 'lait-poisson', '587_Milkfish.png', 22),
(804, 'Monkfish', 'Baudroie', 'monk-fish', 'moine-poisson', '588_Baudroie.png', 22),
(805, 'Striped mullet', 'Mouton rayé', 'mullet', 'mulet', '592_MulletRaye.png', 22),
(806, 'Ocean pout', 'Tacaud de mer', '#pout-ocean#', '#pout-ocean#', '596_TacaudMer.png', 22),
(807, 'Pacific herring', 'Hareng du Pacifique', '#herring-pacific#', '#hareng-pacifique#', '603_HarengPacifique.png', 22),
(808, 'Pacific rockfish', 'Sébaste du Pacifique', 'rockfish', 'sébaste', '604_SebastePacifique.png', 22),
(809, 'Northern pike', 'Brochet du Nord', 'pike-northern', 'brochet-nord', '608_BrochetNord.png', 22),
(810, 'Rainbow smelt', 'Éperlan arc-en-ciel', '#smelt-rainbow#', '#smelt-rainbow#', '619_EperlanArcEnCiel.png', 22),
(811, 'Rainbow trout', 'Truite arc-en-ciel', '#trout-rainbow#', '#trout-arc-en-ciel#', '620_TruiteArcEnCiel.png', 22),
(812, 'Orange roughy', 'Hoplostète orange', 'orange-roughy', 'orange-rugueux', '624_HopsoleteOrange.png', 22),
(813, 'Sablefish', 'Morue charbonnière', 'sable-fish', 'zibeline-poisson', '625_MorueCharbonniere.png', 22),
(814, 'Pink salmon', 'Saumon rose', '#salmon-pink#', '#salmon-pink#', '626_SaumonRose.png', 22),
(815, 'Chum salmon', 'Saumon kéta', '#salmon-chum#', '#salmon-chum#', '627_SaumonKeta.png', 22),
(816, 'Coho salmon', 'Le saumon coho', '#salmon-coho#', '#saumon-coho#', '628_SaumonCoho.png', 22),
(817, 'Sockeye salmon', 'Saumon sockeye', '#salmon-sockeye#', '#saumon-sockeye#', '629_SaumonSockeye.png', 22),
(818, 'Chinook salmon', 'Le saumon Chinook', '#salmon-chinook#', '#saumon-chinook#', '630_SaumonChinook.png', 22),
(819, 'Atlantic salmon', 'Saumon atlantique', '#salmon-atlantic#', '#saumon-atlantique#', '631_SaumonAtlantique.png', 22),
(820, 'Spanish mackerel', 'Maquereau espagnol', '#mackerel-spanish#', '#mackerel-espagnol#', '634_MaquereauEspagnol.png', 22),
(821, 'Pacific sardine', 'Sardine du Pacifique', 'sardine', 'sardine', '635_SardinePacifique.png', 22),
(822, 'Scup', 'Morue charbonnière', 'scup', 'scup', '636_MorueCharbonniere.png', 22),
(823, 'Sea trout', 'Truite de mer', '#trout-sea#', '#trout-mer#', '641_TruiteMer.png', 22),
(824, 'American shad', 'Alose savoureuse', 'shad', 'alose', '643_AloseSavoureuse.png', 22),
(825, 'Shark', 'Requin', 'shark', 'requin', '644_Requin.png', 22),
(826, 'Sheefish', 'Poisson de fond', 'sheefish', 'sheefish', '645_PoissonFond.png', 22),
(827, 'Sheepshead', 'Tête de mouton', 'sheepshead', 'tête de mouette', '646_TeteMouton.png', 22),
(828, 'Snapper', 'Vivaneau', 'snapper', 'vivaneau', '648_Vivaneau.png', 22),
(829, 'Greater sturgeon', 'Grand esturgeon', '#sturgeon-greater#', '#esturgeon-gros', '653_Esturgeon.png', 22),
(830, 'White sucker', 'Meunier noir', 'sucker-white', 'meunier-blanc', '654_MeunierNoir.png', 22),
(831, 'Pumpkinseed sunfish', 'Crapet sac-à-lait', 'sunfish', 'crapet-soleil', '655_CrapetSacALait.png', 22),
(832, 'Swordfish', 'Espadon', 'swordfish', 'espadon', '656_Espadon.png', 22),
(833, 'Tilefish', 'Tilefish', 'tile-fish', 'tuile-poisson', '659_Tilefish.png', 22),
(834, 'Salmonidae', 'Salmonidae', '#salmonidae#', '#salmonidae#', '662_Saumon.png', 22),
(835, 'Walleye', 'Doré jaune', 'walleye', 'doré jaune', '663_DoreJaune.png', 22),
(836, 'Alaska pollock', 'Colin d\'Alaska', '#pollock-alaska#', '#pollock-alaska#', '664_ColinAlaska.png', 22),
(837, 'Broad whitefish', 'Corégone large', '#whitefish-broad#', '#poisson-blanc-rouge#', '667_CoregoneLarge.png', 22),
(838, 'Whitefish', 'Corégone', '#whitefish#', '#poissonblanc#', '668_Coregone.png', 22),
(839, 'Whiting', 'Merlan', '#whiting#', '#whiting#', '669_Merlan.png', 22),
(840, 'Yellowfin tuna', 'Thon à nageoires jaunes', '#tuna-yellowfin#', '#tuna-yellowfin#', '676_ThonNageoireJaune.png', 22),
(841, 'Yellowtail amberjack', 'Sériole à queue jaune', 'amberjack', 'sériole', '677_SerioleQueueJaune.png', 22),
(842, 'Pollock', 'Goberge', '#pollock#', '#pollock#', '678_Goberge.png', 22),
(843, 'Albacore tuna', 'Thon albacore', '#tuna-albacore#', '#tuna-albacore#', '679_ThonAlbacore.png', 22),
(844, 'Atlantic halibut', 'Flétan de l\'Atlantique', '#halibut-atlantic#', '#halibut-atlantique#', '680_FletanAtlantique.png', 22),
(845, 'Smelt', 'Éperlan', '#smelt#', '#éperlan#', '682_Eperlan.png', 22),
(846, 'Clupeinae', 'Clupeinae', 'clupeinae', 'clupeinae', '683_Clupeinae.png', 22),
(847, 'Percoidei', 'Percoidei', 'percoidei', 'percoidei', '687_Percoidei.png', 22),
(848, 'Perciformes', 'Perciformes', 'perciformes', 'perciformes', '688_Perciforme.png', 22),
(849, 'Flatfish', 'Poissons plats', 'flatfish', 'poisson plat', '694_PoissonPlat.png', 22),
(850, 'Spot croaker', 'Croque-mouche', '#croaker-spot#', '#croaker-spot#', '0713_CroqueMouche.png', 22),
(851, 'Atlantic menhaden', 'Menhaden de l\'Atlantique', 'menhaden', 'menhaden', '0716_MenhadendeLatlantique.png', 22),
(852, 'Anchovy', 'Anchois', '#anchovy#', '#anchovy#', '0720_Anchois.png', 22),
(853, 'Blue whiting', 'Merlan bleu', '#whiting-blue#', '#blanc-bleu#', '0721_MerlanBleu.png', 22),
(854, 'Carp bream', 'Carpe d\'eau douce', 'bream', 'brème', '0722_CarpeDeauDouce.png', 22),
(855, 'Sturgeon', 'Esturgeon', '#sturgeon#', '#Esturgeon#', '0724_Esturgeon.png', 22),
(856, 'Charr', 'Omble', 'charr', 'omble', '0725_Omble.png', 22),
(857, 'Common dab', 'Limande commune', 'dab', 'limande', '0726_LimandeCommune.png', 22),
(858, 'Spiny dogfish', 'Aiguillat commun', 'dogfish', 'roussette', '0727_AiguillatCommun.png', 22),
(859, 'Anguilliformes', 'Anguilliformes', 'anguilliformes', 'anguilliformes', '0730_Grenouille.png', 22),
(860, 'Garfish', 'Garfish', 'garfish', 'orphie', '', 22),
(861, 'Gadiformes', 'Gadiformes', 'gadiformes', 'gadiformes', '0732_Gadiformes.png', 22),
(862, 'Lake trout', 'Truite grise', '#trout-lake#', '#trout-lake#', '0734_TruiteGrise.png', 22),
(863, 'Lemon sole', 'Limande sole', 'lemon-sole', 'semelle de citron', '0735_LimandeSole.png', 22),
(864, 'Lumpsucker', 'Lumpsucker', 'lumpsucker', 'lombricomane', '0736_Lumpsucker.png', 22),
(865, 'Scombridae', 'Scombridae', 'scombridae', 'scombridae', '0737_Scombridae.png', 22),
(866, 'Norway haddock', 'Églefin de Norvège', '#haddock-norway#', '#haddock-norway#', '0738_EglefinDeNorvege.png', 22),
(867, 'Norway pout', 'Tacaud norvégien', '#pout-norway#', '#pout-norway#', '0739_TacaudNorvegien.png', 22),
(868, 'Pikeperch', 'Sandre', '#perch-pike#', '#perch-pike#', '0743_Sandre.png', 22),
(869, 'Pleuronectidae', 'Pleuronectidae', 'pleuronectidae', 'pleuronectidae', '0744_Pleuronectidae.png', 22),
(870, 'Pacific ocean perch', 'Perche du Pacifique', '#perch-pacific#', '#perche-pacifique#', '0746_PercheDuPafifique.png', 22),
(871, 'True sole', 'Vraie sole', 'sole', 'sole', '0752_VraiSole.png', 22),
(872, 'Catfish', 'Poisson-chat', '#catfish#', '#poisson-chat', '0753_PoissonChat.png', 22),
(873, 'Common Tuna', 'Thon commun', '#tuna#', '#thon', '0755_ThonCommun.png', 22),
(874, 'Cetacea', 'Cetacea', 'cetacea', 'cétacés', '0756_Cetacea.png', 22),
(875, 'Conch', 'Conque', 'conch', 'conque', '0758_Conque.png', 22),
(876, 'Roe', 'Roe', 'roe', 'œufs de poisson', '0825_Roe.png', 22),
(877, 'Cichlidae', 'Cichlidae', 'cichlidae', 'cichlidés', '0826_Cichlidae.png', 22),
(878, 'Whale', 'Baleine', 'whale', 'baleine', '2066_Baleine.png', 22),
(879, 'Whitefish', 'Corégone', 'whitefish', 'corégone', '2067_Coregone.png', 22),
(880, 'Seal', 'Phoque', 'seal', 'phoque', '2068_Phoque.png', 22),
(881, 'Tuna', 'Thon', 'tuna', 'thon', '2069_Thon.png', 22),
(882, 'Croaker', 'Croaçon', 'croaker', 'crochet', '2070_PoissonCapitaine.png', 22),
(883, 'Mackerel', 'Maquereau', 'mackerel', 'maquereau', '2071_Maquereau.png', 22),
(884, 'Pollock', 'Goberge', 'pollock', 'goberge', '2072_Goberge.png', 22),
(885, 'Anchovy', 'Anchois', 'anchovy', 'anchois', '2073_Anchois.png', 22),
(886, 'Perch', 'Perche', 'perch', 'perche', '2074_Perche.png', 22),
(887, 'Sturgeon', 'Esturgeon', 'sturgeon', 'esturgeon', '2076_Esturgeon.png', 22),
(888, 'Pout', 'Pout', 'pout', 'pout', '2085_Pout.png', 22),
(889, 'Herring', 'Hareng', 'herring', 'hareng', '2086_Hareng.png', 22),
(890, 'Smelt', 'Éperlan', 'smelt', 'éperlan', '2087_Eperlan.png', 22),
(891, 'Trout', 'Truite', 'trout', 'truite', '2091_Truite.png', 22),
(892, 'Halibut', 'Flétan', 'halibut', 'flétan', '2093_Fletan.png', 22),
(893, 'Whiting', 'Merlan', 'whiting', 'merlan', '2094_Merlan.png', 22),
(894, 'Catfish', 'Poisson-chat', 'catfish', 'poisson-chat', '2096_PoissonChat.png', 22),
(895, 'Salmon', 'Saumon', 'salmon; arctic char; cisco; salmonidae', 'saumon ; omble chevalier ; cisco ; salmonidés', '2097_Saumon.png', 22),
(896, 'Haddock', 'Haddock', 'haddock', 'églefin', '2099_Haddock.png', 22),
(897, 'Butter', 'Beurre', 'butter', 'beurre', '0060_Beurre.png', 23),
(898, 'Buttermilk', 'Babeurre', 'buttermilk', 'babeurre', '0061_Babeurre.png', 23),
(899, 'Cheese', 'Fromage', 'cheese', 'fromage', '0062_Fromage.png', 23),
(900, 'Blue Cheese', 'Fromage bleu', 'cheese-blue', 'fromage-bleu', '0063_FromageBleu.png', 23),
(901, 'Camembert Cheese', 'Fromage Camembert', 'cheese-camembert', 'fromage-camembert', '0064_FromageCamembert.png', 23),
(902, 'Cheddar Cheese', 'Fromage Cheddar', 'cheese-cheddar', 'fromage-cheddar', '0065_FromageCheddar.png', 23),
(903, 'Comte Cheese', 'Fromage Comte', 'cheese-comte', 'fromage-comte', '0066_FromageComte.png', 23),
(904, 'Cottage Cheese', 'Fromage blanc', 'cheese-cottage', 'fromage-cottage', '0067_FromageBlanc.png', 23),
(905, 'Cream Cheese', 'Fromage à la crème', 'cheese-cream', 'fromage-crème', '0068_FromageCreme.png', 23),
(906, 'Domiati Cheese', 'Fromage Domiati', 'cheese-white; cheese-domiati', 'fromage-blanc ; fromage-domiati', '0069_FromageDomiati.png', 23),
(907, 'Emmental Cheese', 'Fromage Emmental', 'cheese-emmental', 'fromage-emmental', '0070_FromageEmmental.png', 23),
(908, 'Feta Cheese', 'Fromage Feta', 'cheese-feta', 'fromage-feta', '0071_FromageFeta.png', 23),
(909, 'Goat Cheese', 'Fromage de chèvre', 'cheese-goat', 'fromage-chèvre', '0072_FromagedeChevre.png', 23),
(910, 'Gruyere Cheese', 'Fromage Gruyère', 'cheese-gruyere', 'fromage-gruyère', '0073_FromageGruyere.png', 23),
(911, 'Limburger Cheese', 'Fromage Limburger', 'cheese-limburger', 'fromage-limburger', '0074_FromageLimburger.png', 23),
(912, 'Mozzarella Cheese', 'Fromage Mozzarella', 'cheese-mozzarella', 'fromage-mozzarella', '0075_FromageMozzarella.png', 23),
(913, 'Munster Cheese', 'Fromage Munster', 'cheese-munster', 'fromage-munster', '0076_FromageMunster.png', 23),
(914, 'Parmesan Cheese', 'Fromage Parmesan', 'cheese-parmesan', 'fromage-parmesan', '0078_FromageParmesan.png', 23),
(915, 'Provolone Cheese', 'Fromage Provolone', 'cheese-provolone', 'fromage-provolone', '0079_FromageProvolone.png', 23),
(916, 'Romano Cheese', 'Fromage Romano', 'cheese-romano', 'fromage-romano', '0080_FromageRomano.png', 23),
(917, 'Roquefort Cheese', 'Fromage Roquefort', 'cheese-roquefort', 'fromage-roquefort', '0081_FromageRoquefort.png', 23),
(918, 'Russian Cheese', 'Fromage russe', 'cheese-russia', 'fromage-russe', '0082_FromageRusse.png', 23),
(919, 'Sheep Cheese', 'Fromage de brebis', 'cheese-sheep', 'fromage-mouton', '0083_FromageDeBrebis.png', 23),
(920, 'Swiss Cheese', 'Fromage suisse', 'cheese-swiss', 'fromage-suisse', '0084_FromageSuisse.png', 23),
(921, 'Tilsit Cheese', 'Fromage Tilsit', 'cheese-tilsit', 'fromage-tilsit', '0085_FromageTilsit.png', 23),
(922, 'Ghee', 'Ghee', 'ghee', 'ghee', '0087_Ghee.png', 23),
(923, 'Milk', 'Lait', 'milk', 'lait', '0088_Lait.png', 23),
(924, 'Milk Fat', 'Graisse de lait', 'milk-fat; cream', 'lait-gras ; crème', '0089_GraisseDeLait.png', 23),
(925, 'Goat Milk', 'Lait de chèvre', 'goat-milk', 'lait de chèvre', '0090_LaitdeChevre.png', 23),
(926, 'Milk Powder', 'Poudre de lait', 'milk-powder', 'lait-poudre', '0091_PoudreDeLait.png', 23),
(927, 'Sheep Milk', 'Lait de Mouton', 'sheep-milk', 'lait de brebis', '0092_LaitDeMouton.png', 23),
(928, 'Skimmed Milk', 'Lait écrémé', 'milk-skimmed', 'lait écrémé', '0093_LaitEcreme.png', 23),
(929, 'Yogurt', 'Yogourt', 'yogurt; curd; yoghurt', 'yaourt ; caillé ; yaourt', '0094_Yogourt.png', 23),
(930, 'Paneer', 'Paneer', 'paneer', 'paneer', '402_Panneer.png', 23),
(931, 'Ymer', 'Ymer', 'ymer', 'ymer', '', 23),
(932, 'Cream', 'Crème', 'cream', 'crème', '0780_Creme.png', 23),
(933, 'Whey', 'Lactosérum', 'whey', 'petit-lait', '0788_Lactoserum.png', 23),
(934, 'Milk Human', 'Lait Humain', 'human milk', 'lait humain', '0796_LaitHumain.png', 23),
(935, 'Kefir', 'Kéfir', 'kefir', 'kéfir', '0820_Kefir.png', 23),
(936, 'Dulce de leche', 'Dulce de leche', 'dulce de leche', 'dulce de leche', '0839_DulceDeLeche.png', 23),
(937, 'Sweet custard', 'Flan sucré', 'custard', 'crème anglaise', '0841_FlanSucré.png', 23),
(938, 'Junket', 'Junket', 'junket', 'junket', '0851_Junket.png', 23),
(939, 'Evaporated milk', 'Lait évaporé', 'milk-evaporated', 'lait-évaporé', '0919_LaitEvapore.png', 23),
(940, 'Condensed milk', 'Lait condensé', 'milk-condensed', 'lait condensé', '0960_LaitCondensé.png', 23),
(941, 'Half Half', 'Moitié-moitié', 'half half', 'moitié moitié', '2017_Moitié-Moitié.png', 23),
(942, 'Cocoa powder', 'Poudre de cacao', 'cocoa-powder', 'poudre de cacao', '0815_PoudreDeCacao.png', 24),
(943, 'Chocolate', 'Chocolat', 'chocolate', 'chocolat', '0817_Chocolat.png', 24),
(944, 'Tofu', 'Tofu', 'tofu', 'tofu', '0823_Tofu.png', 24),
(945, 'Sausage', 'Saucisse', 'sausage', 'saucisse', '0782_Saucisse.png', 27),
(946, 'Pate', 'Pate', 'pate', 'pâté', '0784_Pate.png', 27),
(947, 'Dumpling', 'Boulette', 'dumpling', 'boulette', '0799_Boulette.png', 27),
(948, 'Remoulade', 'Rémoulade', 'remoulade', 'rémoulade', '0805_Remoulade.png', 28),
(949, 'Zwieback', 'Zwieback', 'zwieback', 'zwieback', '0824_Zwieback.png', 5),
(950, 'Egg roll', 'Roulé aux oeufs', 'egg roll', 'nems', '0842_Eggroll.png', 20),
(951, 'Stew', 'Ragoût', 'stew', 'ragoût', '0849_Ragout.png', 20),
(952, 'Lasagna', 'Lasagnes', 'lasagna', 'lasagnes', '0855_Lasagnes.png', 20),
(953, 'Pancake', 'Pancake', 'pancake', 'crêpe', '0857_Pancake.png', 20),
(954, 'Waffle', 'Gaufre', 'waffle', 'gaufre', '', 20),
(955, 'Meatloaf', 'Pain de viande', 'meat-loaf', 'viande-pain', '0862_PainDeViande.png', 20),
(956, 'Adobo', 'Adobo', '#adobo#', '#adobo#', '0882_Adobo.png', 20),
(957, 'Soy cream', 'Crème de soja', '#soy cream#', '#crème soja', '0906_CremeDeSoja.png', 29),
(958, 'Natto', 'Natto', 'natto', 'natto', '0911_Natto.png', 20),
(959, 'Akutaq', 'Akutaq', 'akutaq', 'akutaq', '0921_Akutaq.png', 20),
(960, 'Trail mix', 'Mélange de fruits et légumes', 'trail mix', 'mélange de sentiers', '0938_MelangeDeFruitsEtLegumes.png', 20),
(961, 'Pupusa', 'Pupusa', 'pupusa', 'pupusa', '0947_Pupusa.png', 20),
(962, 'Hummus', 'Houmous', 'hummus', 'houmous', '0963_Houmous.png', 20),
(963, 'Potato puffs', 'Feuilletés de pommes de terre', 'potato-puff', 'potato-puff', '0964_FeuilletéDePommesDeTerre.png', 20),
(964, 'Potato gratin', 'Gratin de pommes de terre', 'potato-gratin', 'gratin de pommes de terre', '0965_GratinDePommeDeTerre.png', 20),
(965, 'Mayonnaise', 'Mayonnaise', 'mayonnaise', 'mayonnaise', '2021_Mayonnaise.png', 28),
(966, 'Croissant', 'Croissant', 'croissant', 'croissant', '2023_Croissant.png', 20),
(967, 'Vegetable Broth', 'Bouillon de légumes', 'vegetable broth', 'bouillon de légumes', '2027_BouillonLegumes.png', 20),
(968, 'Adobo Sauce', 'Sauce Adobo', 'adobo sauce', 'sauce adobo', '2054_SauceAdobo.png', 28),
(969, 'Chard', 'Bette à carde', 'chard', 'blette', '0382_BetteACarde.png', 16),
(970, 'Colocasia', 'Colocasia', 'colocasia', 'colocasia', '0384_Colocasia.png', 30),
(971, 'Spinach', 'Epinards', 'spinach; palak', 'épinard ; palak', '0396_Epinards.png', 16),
(972, 'Ginseng', 'Ginseng', 'ginseng', 'ginseng', '465_Ginseng.png', 19),
(973, 'Tinda', 'Tinda', 'tinda', 'tinda', '0715_Tinda.png', 20),
(974, 'Tomato Puree', 'Purée de tomate', '#tomato-puree#', '#Purée de tomate', '0988_PuréeDeTomate.png', 28),
(975, 'Sauerkraut', 'Choucroute', 'sauerkraut', 'choucroute', '0995_Choucroute.png', 20),
(976, 'Endive', 'Endive', 'endive', 'endive', '0344_Endive.png', 16),
(977, 'Leek', 'Poireau', 'leek', 'poireau', '0345_Poireau.png', 16),
(978, 'Bottlegourd', 'Gourmandise', 'bottle-gourd', 'bouteille-courgeoise', '0379_Gourmandise.png', 4),
(979, 'New Zealand spinach', 'Epinard de Nouvelle-Zélande', 'spinach-new-zealand', 'épinard-new-zealand', '594_EpinardNouvelleZelande.png', 16),
(980, 'Egg', 'Œuf', 'egg', 'œuf', '0000_Oeuf.png', 27),
(981, 'Beef', 'Bœuf', 'beef; steak; veal; sirloin', 'bœuf ; steak ; veau ; aloyau', '0270_Boeuf.png', 27),
(982, 'Beef Processed', 'Bœuf transformé', 'beef-processed', 'bœuf transformé', '0272_Poulet.png', 27),
(983, 'Chicken', 'Poulet', 'chicken', 'poulet', '0273_SaucisseDeFrancfort.png', 27),
(984, 'Ham', 'Jambon', 'ham', 'jambon', '0275_Agneau.png', 27),
(985, 'Lamb', 'Agneau', 'lamb; keema', 'agneau ; keema', '0276_Viande.png', 27),
(986, 'Meat', 'Viande', 'meat', 'viande', '0277_Mouton.png', 27),
(987, 'Mutton', 'Mouton', 'mutton', 'mouton', '0278_Porc.png', 27),
(988, 'Pork', 'Porc', 'pork; pig; bacon', 'porc ; cochon ; lard', '0279_Sukiyaki.png', 27),
(989, 'Sukiyaki', 'Sukiyaki', 'sukiyaki', 'sukiyaki', '0280_Dinde.png', 27),
(990, 'Turkey', 'Dinde', 'turkey', 'dinde', '0281_Amande.png', 27),
(991, 'Beaver', 'Castor', 'beaver', 'castor', '507_Castor.png', 27),
(992, 'Bison', 'Bison', 'bison', 'bison', '510_Bison.png', 27),
(993, 'Black bear', 'Ours noir', '#bear-black#', '#ours-noir', '511_OursNoir.png', 27),
(994, 'Wild boar', 'Sanglier', 'boar', 'sanglier', '515_Sanglier.png', 27),
(995, 'Brown bear', 'Ours brun', '#bear-brown#', '#Ours brun', '520_OursBrun.png', 27),
(996, 'Buffalo', 'Buffle', '#buffalo#', '#buffalo#', '521_Buffle.png', 27),
(997, 'Caribou', 'Caribou', 'caribou', 'caribou', '528_Caribou.png', 27),
(998, 'Mule deer', 'Cerf mulet', '#mule deer#', '#cerf-mulet#', '546_CerfMulet.png', 27),
(999, 'Wild duck', 'Canard sauvage', 'duck', 'canard', '551_CanardSauvage.png', 27),
(1000, 'Elk', 'Elan', '#elk#', '#elk#', '553_Elan.png', 27),
(1001, 'Emu', 'Émeu', 'emu', 'émeu', '554_Emeu.png', 27),
(1002, 'Greylag goose', 'Oie cendrée', 'goose', 'oie', '562_OieCendree.png', 27),
(1003, 'Horse', 'Cheval', 'horse', 'cheval', '568_Cheval.png', 27),
(1004, 'Moose', 'Orignal', 'moose', 'élan', '589_Orignal.png', 27),
(1005, 'Muskrat', 'Rat musqué', 'muskrat', 'rat musqué', '593_RatMusque.png', 27),
(1006, 'Opossum', 'Opossum', 'opossum', 'opossum', '600_Opossum.png', 27),
(1007, 'Ostrich', 'Autruche', 'ostrich', 'autruche', '601_Autruche.png', 27),
(1008, 'Pheasant', 'Faisan', 'pheasant', 'faisan', '607_Faisan.png', 27),
(1009, 'Polar bear', 'Ours polaire', '#bear-polar#', '#ours-polaire', '614_PolarBear.png', 27),
(1010, 'European rabbit', 'Lapin d\'Europe', '#rabbit-european#', '#Lapin-européen#', '617_LapinEurope.png', 27),
(1011, 'Raccoon', 'Raton laveur', 'raccoon', 'raton laveur', '618_RatonLaveur.png', 27),
(1012, 'Squab', 'Écureuil', 'squab', 'pigeonneau', '651_Pigeonneau.png', 27),
(1013, 'Squirrel', 'Écureuil', 'squirrel', 'écureuil', '652_Ecureuil.png', 27),
(1014, 'Deer', 'Chevreuil', '#deer#', '#deer#', '686_Chevreuil.png', 27),
(1015, 'Rabbit', 'Lapin', '#rabbit#', '#lapin#', '690_Lapin.png', 27),
(1016, 'Beefalo', 'Bœuf', 'beefalo', 'bœuf', '691_Boeuf.png', 27),
(1017, 'Great horned owl', 'Grand-duc d\'Amérique', 'owl', 'hibou', '699_GrandDuc.png', 27),
(1018, 'Quail', 'Caille', 'quail', 'caille', '700_Caille.png', 27),
(1019, 'Anatidae', 'Anatidae', 'anatidae', 'anatidae', '0729_Anguilliformes.png', 27),
(1020, 'True frog', 'Grenouille véritable', 'frog', 'grenouille', '0731_Garfish.png', 27),
(1021, 'Mountain hare', 'Lièvre variable', 'hare', 'lièvre', '0733_Lievre.png', 27),
(1022, 'Rock ptarmigan', 'Lagopède des rochers', 'ptarmigan', 'lagopède', '0745_LagopedeDesrochers.png', 27),
(1023, 'Snail', 'Escargot', 'snail', 'escargot', '0751_Escargot.png', 27),
(1024, 'Columbidae', 'Columbidae', 'columbidae', 'columbidae', '0757_Columbidae.png', 27),
(1025, 'Green turtle', 'Tortue verte', 'turtle', 'tortue', '0829_ViandeDeTortue.png', 27),
(1026, 'Guinea hen', 'Poule de Guinée', 'guinea-hen', 'pintade-poule', '0977_PouleDeGuinée.png', 27),
(1027, 'Lard', 'Lard', 'pork-fat; lard', 'graisse de porc ; saindoux', '0990_Lard.png', 27),
(1028, 'Cured Ham', 'Jambon cru', '#ham-cured#', '#ham-cured#', '0991_JambonCru.png', 27),
(1029, 'Prosciutto', 'Prosciutto', 'prosciutto', 'prosciutto', '2050_Prosciutto.png', 27),
(1030, 'Bear', 'Ours', 'bear', 'ours', '2065_Ours.png', 27),
(1031, 'Deer', 'Cerf', 'deer; elk', 'cerf ; élan', '2078_Cerf.png', 27),
(1032, 'Buffalo', 'Buffle', 'buffalo', 'bison', '2095_Buffle.png', 27),
(1033, 'Rabbit', 'Lapin', 'rabbit', 'lapin', '2098_Lapin.png', 27);

-- --------------------------------------------------------

--
-- Structure de la table `ingredient_category`
--

CREATE TABLE `ingredient_category` (
  `INGREDIENT_CATEGORY_ID` int(11) NOT NULL,
  `INGREDIENT_CATEGORY_NAME` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ingredient_category`
--

INSERT INTO `ingredient_category` (`INGREDIENT_CATEGORY_ID`, `INGREDIENT_CATEGORY_NAME`) VALUES
(1, 'Additif'),
(2, 'Assiette'),
(3, 'Boisson'),
(4, 'Boisson Alcoolisée'),
(5, 'Boulangerie'),
(6, 'Céréales'),
(7, 'Champignon'),
(8, 'Dish'),
(9, 'Épices'),
(10, 'Fleur'),
(11, 'Fruit'),
(12, 'Fruits à coque, noix  et graines'),
(13, 'Fruits de mer'),
(14, 'Herbe'),
(15, 'Huile essentielle'),
(16, 'Légume'),
(17, 'Légumineuse'),
(18, 'Maïs'),
(19, 'Plante'),
(20, 'Plat'),
(21, 'Plats cuisinés'),
(22, 'Poisson'),
(23, 'Produits laitiers'),
(24, 'Usine'),
(25, 'Vaisselle'),
(26, 'Végétal'),
(27, 'Viande'),
(28, 'Sauce'),
(29, 'Crème'),
(30, 'tuberculeuse');

-- --------------------------------------------------------

--
-- Structure de la table `love`
--

CREATE TABLE `love` (
  `USER_ID` int(11) NOT NULL,
  `RECIPE_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `meal_type`
--

CREATE TABLE `meal_type` (
  `MEAL_TYPE_ID` int(11) NOT NULL,
  `MEAL_TYPE_NAME` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `meal_type`
--

INSERT INTO `meal_type` (`MEAL_TYPE_ID`, `MEAL_TYPE_NAME`) VALUES
(1, 'Allemande'),
(2, 'Américaine'),
(3, 'Argentine'),
(4, 'Australienne'),
(5, 'Belge'),
(6, 'Brésilienne'),
(7, 'Canadienne'),
(8, 'Chinoise'),
(9, 'Coréenne'),
(10, 'Cubaine'),
(11, 'Égyptienne'),
(12, 'Espagnole'),
(13, 'Française'),
(14, 'Grecque'),
(15, 'Indienne'),
(16, 'Italienne'),
(17, 'Japonaise'),
(18, 'Libanaise'),
(19, 'Jamaïcaine'),
(20, 'Marocaine'),
(21, 'Mexicaine'),
(22, 'Péruvienne'),
(23, 'Portugaise'),
(24, 'Russe'),
(25, 'Sud-Africaine'),
(26, 'Suisse'),
(27, 'Thaïlandaise'),
(28, 'Turque'),
(29, 'Vietnamienne');

-- --------------------------------------------------------

--
-- Structure de la table `notice`
--

CREATE TABLE `notice` (
  `NOTICE_ID` int(11) NOT NULL,
  `NOTICE_STAR_NUMBER` tinyint(4) DEFAULT NULL,
  `NOTICE_RECIPE` text DEFAULT NULL,
  `NOTICE_TRICK_RECIPE` text DEFAULT NULL,
  `RECIPE_ID` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `photo`
--

CREATE TABLE `photo` (
  `PHOTO_ID` int(11) NOT NULL,
  `PHOTO_NAME` varchar(500) NOT NULL,
  `PHOTO_PRIORITY` varchar(20) DEFAULT NULL,
  `RECIPE_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `photo`
--

INSERT INTO `photo` (`PHOTO_ID`, `PHOTO_NAME`, `PHOTO_PRIORITY`, `RECIPE_ID`) VALUES
(2, 'hachis-parmentier-a-la-joue-de-boeuf.jpeg', 'principale', 70),
(3, 'dan-gold-4_jhDO54BYg-unsplash3.jpg', 'principale', 69),
(4, 'grooveland-designs-fhuPrCwAzaw-unsplash.jpg', 'principale', 68),
(5, 'hachiP.jpg', 'principale', 67),
(6, 'hachis-parmentier-vege.jpg', 'principale', 66),
(7, 'mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg', 'principale', 65),
(8, 'nadine-primeau-sOMcKlIUiGA-unsplash.jpg', 'principale', 64),
(9, 'Soupe-aux-5-legumes.jpg', 'principale', 63),
(10, 'mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg', 'principale', 61),
(11, 'coucous.jpg', 'principale', 62);

-- --------------------------------------------------------

--
-- Structure de la table `preparation`
--

CREATE TABLE `preparation` (
  `PREP_ID` int(11) NOT NULL,
  `PREP_TIME` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `recipe`
--

CREATE TABLE `recipe` (
  `RECIPE_ID` int(11) NOT NULL,
  `RECIPE_TITLE` varchar(100) NOT NULL,
  `RECIPE_DESCRIPTION` varchar(100) DEFAULT NULL,
  `RECIPE_PUBLICATION_DATE` datetime DEFAULT NULL,
  `RECIPE_NUMBER_PLATE` int(11) DEFAULT NULL,
  `RECIPE_DIFFICULTY` int(11) DEFAULT NULL,
  `RECIPE_PRICE` int(11) DEFAULT NULL,
  `PREP_TIME` varchar(20) NOT NULL,
  `COOKING_TIME` varchar(20) NOT NULL,
  `USER_ID` int(11) DEFAULT NULL,
  `ID_TYPE_DE_REPAS` int(11) DEFAULT NULL,
  `MEAL_TYPE_ID` int(11) DEFAULT NULL,
  `DIET_TYPE_ID` int(11) DEFAULT NULL,
  `CATEGORY_ID` int(11) DEFAULT NULL,
  `SEASON_ID` int(11) DEFAULT NULL,
  `COOKING_TYPE_ID` int(11) DEFAULT NULL,
  `PREP_ID` int(11) DEFAULT NULL,
  `COOKING_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `recipe`
--

INSERT INTO `recipe` (`RECIPE_ID`, `RECIPE_TITLE`, `RECIPE_DESCRIPTION`, `RECIPE_PUBLICATION_DATE`, `RECIPE_NUMBER_PLATE`, `RECIPE_DIFFICULTY`, `RECIPE_PRICE`, `PREP_TIME`, `COOKING_TIME`, `USER_ID`, `ID_TYPE_DE_REPAS`, `MEAL_TYPE_ID`, `DIET_TYPE_ID`, `CATEGORY_ID`, `SEASON_ID`, `COOKING_TYPE_ID`, `PREP_ID`, `COOKING_ID`) VALUES
(61, 'Préparation végan en bocaux', 'Préparer vos bocaux végan rapidemment en suivant ma recette', '2023-04-20 22:19:00', 2, 2, 2, '0h20min', '0 h10 min', NULL, 1, 3, 16, NULL, 2, 1, NULL, NULL),
(62, 'couscous', 'recette vegan du coucous', '2023-04-21 11:14:34', 2, 2, 2, '0h10min', '0 h20 min', NULL, 3, 16, 5, NULL, 2, 14, NULL, NULL),
(63, 'velouté de potiron', 'simple et efficace', '2023-04-21 11:19:33', 2, 2, 2, '0h10min', '0 h20 min', NULL, 3, 16, 5, NULL, 2, 14, NULL, NULL),
(64, 'salade de légume', 'accompagnement ou comme plat principal', '2023-04-21 11:21:21', 2, 2, 2, '0h10min', '0h10min', NULL, 3, 10, 11, NULL, 2, 8, NULL, NULL),
(65, 'superbe hachis parmentier', 'Boeuf et petit légume', '2023-04-21 11:30:11', 2, 2, 2, '00h10min', '0 h10 min', NULL, 4, 4, 16, NULL, 2, 3, NULL, NULL),
(66, 'superbe hachis parmentier ', 'Boeuf et petits légumes', '2023-04-21 11:47:04', 3, 3, 3, '0h20min', '0 h20 min', NULL, 3, 27, 15, NULL, 4, 3, NULL, NULL),
(67, 'Hachis parmentier Simple', 'Plat familiale, une recette de Dédé', '2023-04-21 11:52:47', 2, 3, 3, '0h10min', '0 h10 min', NULL, 4, 14, 5, NULL, 1, 14, NULL, NULL),
(68, 'salade de tomate', 'Vive l\'été, vive les tomates', '2023-04-21 12:00:13', 2, 2, 2, '0h10min', '0 h10 min', NULL, 2, 4, 15, NULL, 3, 3, NULL, NULL),
(69, 'Buffet froid', 'Légumes à volonté', '2023-04-21 12:00:56', 2, 3, 3, '0h10min', '0 h10 min', NULL, 2, 3, 16, NULL, 1, 3, NULL, NULL),
(70, 'hachis parmentier', 'revisité par Maïté', '2023-04-21 12:01:54', 2, 2, 2, '0h10min', '0 h10 min', NULL, 4, 16, 15, NULL, 2, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `season`
--

CREATE TABLE `season` (
  `SEASON_ID` int(11) NOT NULL,
  `SEASON_NAME` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `season`
--

INSERT INTO `season` (`SEASON_ID`, `SEASON_NAME`) VALUES
(1, 'Printemps'),
(2, 'Eté'),
(3, 'Automne'),
(4, 'Hiver'),
(5, 'Toutes');

-- --------------------------------------------------------

--
-- Structure de la table `stage`
--

CREATE TABLE `stage` (
  `STAGE_ID` int(11) NOT NULL,
  `STAGE_NUM` int(11) NOT NULL,
  `STAGE_PHOTO` varchar(255) NOT NULL,
  `STAGE_RECIPE_EXPLICATION` text NOT NULL,
  `RECIPE_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `type_de_repas`
--

CREATE TABLE `type_de_repas` (
  `ID_TYPE_DE_REPAS` int(11) NOT NULL,
  `NOM_TYPE_DE_REPAS` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `type_de_repas`
--

INSERT INTO `type_de_repas` (`ID_TYPE_DE_REPAS`, `NOM_TYPE_DE_REPAS`) VALUES
(1, 'Entrée'),
(2, 'Plat'),
(3, 'Dessert'),
(4, 'Cocktail'),
(5, 'Apéritif'),
(6, 'Sauce'),
(7, 'Soupe et potage');

-- --------------------------------------------------------

--
-- Structure de la table `used`
--

CREATE TABLE `used` (
  `USTENSIL_ID` int(11) NOT NULL,
  `RECIPE_ID` int(11) NOT NULL,
  `SECTION_TITLE` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `used`
--

INSERT INTO `used` (`USTENSIL_ID`, `RECIPE_ID`, `SECTION_TITLE`) VALUES
(1, 70, ''),
(2, 67, ''),
(2, 68, ''),
(2, 69, ''),
(5, 66, ''),
(8, 61, ''),
(10, 70, ''),
(11, 64, ''),
(11, 69, ''),
(12, 61, ''),
(12, 64, ''),
(12, 65, ''),
(12, 66, ''),
(12, 67, ''),
(13, 61, ''),
(13, 64, ''),
(13, 65, ''),
(13, 66, ''),
(13, 67, ''),
(13, 68, ''),
(13, 69, ''),
(14, 68, ''),
(80, 70, '');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `USER_ID` int(11) NOT NULL,
  `USER_NAME` varchar(50) DEFAULT NULL,
  `USER_FIRSTNAME` varchar(50) DEFAULT NULL,
  `USER_PSEUDO` varchar(50) NOT NULL,
  `USER_BIRTHDAY` datetime DEFAULT NULL,
  `USER_PHOTO` varchar(100) DEFAULT NULL,
  `USER_PASSWORD` varchar(50) NOT NULL,
  `USER_EMAIL` varchar(50) NOT NULL,
  `USER_ROLE` varchar(15) DEFAULT NULL,
  `USER_NEWSLETTER` tinyint(4) DEFAULT NULL,
  `USER_UTILISATION_CONDITION` tinyint(4) NOT NULL,
  `USER_DATETIME_CREATION` datetime NOT NULL,
  `USER_GENDER_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`USER_ID`, `USER_NAME`, `USER_FIRSTNAME`, `USER_PSEUDO`, `USER_BIRTHDAY`, `USER_PHOTO`, `USER_PASSWORD`, `USER_EMAIL`, `USER_ROLE`, `USER_NEWSLETTER`, `USER_UTILISATION_CONDITION`, `USER_DATETIME_CREATION`, `USER_GENDER_ID`) VALUES
(1, 'det', 'david', 'wqlpc20104', NULL, NULL, 'kokoo', 'det@yahoo.fr', NULL, NULL, 0, '2023-04-06 13:56:44', NULL),
(2, 'Dethoor', 'David', 'burza40042', NULL, NULL, '123456', 'dethhh@yahoo.fr', NULL, NULL, 0, '2023-04-23 12:34:31', NULL),
(3, 'ffdbfdb', 'hnbf', 'dgjwf11400', NULL, NULL, '123456', 'dede@de.mp', NULL, NULL, 0, '2023-04-23 20:03:14', NULL),
(4, 'dbdfbfdb', 'hbgrd', 'llyhr11030', NULL, NULL, '123456', 'dede@aol.fr', NULL, NULL, 0, '2023-04-23 20:06:11', NULL),
(5, 'zadzadza', 'cazeczae', 'eohja04322', NULL, NULL, '123456', 'dethheeeh@yahoo.fr', NULL, NULL, 0, '2023-04-24 07:46:19', NULL),
(6, 'zedzedez', 'zefz', 'cgzft00434', NULL, NULL, '123456', 'gre@ge.ge', NULL, NULL, 0, '2023-04-24 07:49:04', NULL),
(7, 'fzefzf', 'zefzefze', 'nxeji23141', NULL, NULL, 'dede59', 'gee@ge.ge', NULL, NULL, 0, '2023-04-24 07:50:35', NULL),
(8, 'deeded', 'd\"edzed', 'gjxou14130', NULL, NULL, '$2b$10$hF2L7obYbDl.7uA2P9.tX.vBB/J8Bapg0RpatUQT/85', 'geyy@ge.ge', NULL, NULL, 0, '2023-04-24 07:52:46', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user_gender`
--

CREATE TABLE `user_gender` (
  `USER_GENDER_ID` int(11) NOT NULL,
  `USER_GENDER_NAME` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `user_likes`
--

CREATE TABLE `user_likes` (
  `USER_ID` int(11) NOT NULL,
  `USER_ID_LIKE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ustensil`
--

CREATE TABLE `ustensil` (
  `USTENSIL_ID` int(11) NOT NULL,
  `USTENSIL_NAME` varchar(200) NOT NULL,
  `USTENSIL_ICON` varchar(255) NOT NULL,
  `USTENSIL_CATEGORY_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ustensil`
--

INSERT INTO `ustensil` (`USTENSIL_ID`, `USTENSIL_NAME`, `USTENSIL_ICON`, `USTENSIL_CATEGORY_ID`) VALUES
(1, 'Billig', 'waffle-iron-3493106-2922476.png', 2),
(2, 'Bol', 'icons8-saladier-100.png', 6),
(3, 'Bol mélangeur', 'icons8-mixing-bowl-64.png', 6),
(4, 'Bouilloire', 'icons8-bouilloire-60.png', 2),
(5, 'Bouteille', 'icons8bouteilledeau30.png', 6),
(6, 'Braisière', 'icons8-marmite-50.png', 2),
(7, 'Brasero', 'icons8-brazier-64.png', 2),
(8, 'Briquet', 'icons8-lighter-48.png', 2),
(9, 'Broyeur d\'ail', 'garlicCrusher.png', 4),
(10, 'Canneleur', 'canneleur.jpg', 4),
(11, 'Caquelon', 'icons8-fondue-48.png', 2),
(12, 'Casse-noix', 'Nutcracker.jpg', 6),
(13, 'Casserole', 'icons8-pan-64.png', 2),
(14, 'Cataplana', 'cataplana.png', 2),
(15, 'Cellule de refroidissement', 'icons8-refroidissement-64.png', 3),
(16, 'Centrifugeuse', 'centrifugeuse.jpg', 3),
(17, 'Chaudron', 'icons8-chaudron-64.png', 2),
(18, 'Chauffe-assiette', 'chauffe-plat.png', 3),
(19, 'Chauffe-plat', 'chauffe-plat2.png', 2),
(20, 'Chinois', 'icons8-strainer-64.png', 6),
(21, 'Ciseaux de cuisine', 'icons8-ciseaux-30.png', 4),
(22, 'Cocotte (faitout)', 'icons8-pressure-cooker-64(1).png', 2),
(23, 'Cocotte minute', 'icons8-pressure-cooker-64(1).png', 2),
(24, 'Congélateur', 'icons8-ice-cream-freezer-48.png', 3),
(25, 'Conteneurs en plastique', 'icons8-plastic-food-container-48.png', 6),
(26, 'Corne', 'corne.jpg', 5),
(27, 'Coupe-frites', 'coupe-frites.jpg', 4),
(28, 'Coupe-œuf', 'coupe_oeuf.jpg', 4),
(30, 'Coupe-pâte', 'coupe_pate.jpg', 5),
(31, 'Couperet', 'icons8-couperet-64.png', 4),
(32, 'Couscoussier', 'icons8-marmite-30-Copie.png', 2),
(33, 'Couteau', 'icons8-kitchen-knife-48.png', 4),
(34, 'Couteau à beurre', 'icons8-couteau-64.png', 4),
(35, 'Couteau à découper (ou demi-chef)', 'icons8-couteau-67(1).png', 4),
(36, 'Couteau à éplucher', 'icons8-couteau-64.png', 4),
(37, 'Couteau à pain', 'icons8-kitchen-knife-48.png', 4),
(38, 'couteau à pizza', 'icons8-pizza-cutter-48.png', 4),
(39, 'Couteau à tomates', 'icons8-couteau-64.png', 4),
(40, 'Couteau à viande', 'icons8-couteau-67.png', 4),
(41, 'Couteau d\'office', 'icons8-couteau-64.png', 4),
(42, 'Couteau du chef', 'icons8-kitchen-knife-48.png', 4),
(43, 'Couteau électrique', 'icons8-electric-plug-48.png', 3),
(44, 'Couteau filet de sole', 'icons8-couteau-64.png', 4),
(45, 'Couteau sashimi', 'icons8-couteau-64.png', 4),
(46, 'Couteau scie', 'icons8-couteau-64.png', 4),
(47, 'Couvercle', 'icons8-couvercle-64.png', 2),
(48, 'Crêpière', 'waffle-iron-3493106-2922476.png', 2),
(49, 'Cruche', 'icons8-cruche-48.png', 6),
(50, 'Cuillère (en bois, en buis ou en métal, à dessert)', 'icons8-cuillère-64.png', 6),
(51, 'Cuillère à café', 'icons8-cuillère-64.png', 6),
(52, 'Cuillère à glace', 'icons8-cuillère-à-crème-glacée-30.png', 6),
(53, 'Cuillère à pommes parisienne', 'icons8-cuillère-48.png', 4),
(54, 'Cuillère à soupe', 'icons8-cuillère-64.png', 6),
(55, 'Cuillère fendue', 'icons8-cuillère-48.png', 6),
(56, 'Cuillère perforée', 'icons8-cuillère-48.png', 6),
(57, 'Cuillères à mesurer', 'icons8-cuillère-64.png', 6),
(58, 'Cuiseur de riz', 'icons8-rice-cooker-60.png', 2),
(59, 'Cuiseur vapeur', 'icons8-vapeur-d’eau-48.png', 2),
(60, 'Cuisinière', 'icons8-cuisinière-100.png', 2),
(61, 'Cuisinière à gaz', 'icons8-cuisinière-100.png', 2),
(62, 'Cul de poule', 'icons8-bowl-32.png', 6),
(63, 'Cuvette', 'icons8-bowl-32.png', 6),
(64, 'Décapsuleur', 'icons8-bottle-opener-60.png', 6),
(65, 'Désosseur', 'desosseur.png', 4),
(66, 'Douille (pâtisserie)', 'icons8-poche-à-douille-pâtissière-40.png', 5),
(67, 'Écailleur', 'icons8-scaler-64.png', 4),
(68, 'Écumoire', 'icons8-skimmer-64.png', 6),
(69, 'Éminceur', 'icons8-kitchen-knife-48.png', 4),
(70, 'Emporte-pièce (pâtisserie)', 'emporte.jpg', 5),
(71, 'Entonnoir', 'icons8-filtre-rempli-64.png', 6),
(72, 'Épluche-légumes (Couteau-économe)', 'icons8-peeler-64.png', 4),
(73, 'Essoreuse à salade', 'icons8-salade-60.png', 6),
(74, 'Flamboir', 'icons8-élément-feu-96.png', 2),
(75, 'Fouet', 'fouet.jpg', 6),
(76, 'Four', 'icons8-oven-64.png', 2),
(77, 'Four à pain', 'icons8-oven-64(1).png', 2),
(78, 'Four à vapeur', 'icons8-oven-64.png', 2),
(79, 'Fourchette', 'fork.png', 6),
(80, 'Friteuse', 'friteuse.png', 2),
(82, 'Gants de four', 'gantDifficulte.png', 6),
(83, 'Girafe', 'icons8-mixeur-642.png', 3),
(84, 'Grattoir', 'icons8-scraper-64.png', 1),
(85, 'Gril (salamandre)', 'icons8-gril-30.png', 2),
(87, 'Grille-pain', 'icons8-grille-pain-48.png', 2),
(88, 'Hachoir', 'hachoir.png', 3),
(89, 'Hachoir à viande', 'icons8-couperet-80.png', 4),
(92, 'Jambonnière', 'jambonniere.png', 2),
(93, 'Kalou (mortier réunionnais)', '', 6),
(94, 'Kanoun', '', 2),
(95, 'Lélé (agitateur antillais)', '', 6),
(96, 'Louche', '', 6),
(97, 'Machine à pain', '', 3),
(98, 'Machine à pâtes', '', 6),
(99, 'Mandoline', '', 4),
(100, 'Maniques', '', 6),
(101, 'Marguerite', '', 2),
(102, 'Marmite', '', 2),
(103, 'Marmite en fonte', '', 2),
(104, 'Maryse', '', 5),
(105, 'Mehraz (broyeur marocain)', '', 6),
(106, 'Micro-onde', '', 2),
(107, 'Minuterie, Minuteur', 'icons8-passé-48.png', 1),
(108, 'Mixeur (ou blender)', '', 3),
(109, 'Mortier et pilon', 'icons8-mortier-et-pilon-100.png', 6),
(110, 'Moule (à fromage, à baba, à cake, à madeleine, à tourte tourtière)', '', 6),
(111, 'Moule à gaufres', '', 5),
(112, 'Moule à manqué', '', 5),
(113, 'Moule à tarte', '', 5),
(114, 'Moulin à légumes', '', 6),
(115, 'Moulin à poivre ou poivrier', 'icons8-moulin-à-poivre-48.png', 6),
(116, 'Œufrier', '', 6),
(117, 'Organisateur d\'outils de cuisine', '', 6),
(118, 'Ouvre-boîtes', '', 6),
(119, 'Ouvre-bouteille', '', 6),
(120, 'Panier à salade', '', 6),
(121, 'Papier sulfurisé', '', 6),
(122, 'Passe-vite', '', 6),
(123, 'Passoire', '', 6),
(124, 'Pèle-pomme', '', 4),
(125, 'Pellicule plastique/film alimentaire', '', 6),
(126, 'Percolateur', '', 3),
(127, 'Pétrin', '', 3),
(128, 'Pierrade', '', 2),
(129, 'Pince à chiqueter', '', 5),
(130, 'Pinceau à dorer', '', 5),
(131, 'Pinces', '', 6),
(132, 'Plancha', '', 2),
(133, 'Planche (cuisine)', '', 2),
(134, 'Planche à découper', '', 4),
(135, 'Plaque à induction', '', 2),
(136, 'Plaque de cheminée', '', 2),
(137, 'Plaque de four en tôle', '', 2),
(138, 'Plaque électrique', '', 2),
(139, 'Plat à rôtir', '', 2),
(140, 'Plat allant au four', '', 2),
(141, 'Plateau', '', 6),
(142, 'Poche à douilles', '', 5),
(143, 'Poêle', '', 2),
(144, 'Poêle à frire/poêlon', '', 2),
(145, 'Poêle à poisson', '', 2),
(146, 'Potager', '', 2),
(147, 'Poubelle', '', 6),
(148, 'Presse à tortillas', '', 6),
(149, 'Presse-agrumes', '', 6),
(150, 'Presse-ail', '', 6),
(151, 'Presse-citron', '', 6),
(152, 'Presse-purée', '', 6),
(153, 'Râpe', 'icons8-râpe-53.png', 4),
(154, 'Râpe à pommes de terre', 'icons8-râpe-53.png', 4),
(155, 'Réfrigérateur', '', 3),
(156, 'Robot de cuisine', '', 3),
(157, 'Rondeau', '', 2),
(158, 'Rôtissoire', '', 2),
(159, 'Rouleau à pâtisserie', '', 5),
(160, 'Roulette à découper', '', 6),
(161, 'Russe', '', 2),
(162, 'Sacs en plastique à fermeture', '', 6),
(163, 'Saladier', 'icons8-saladier-64.png', 6),
(164, 'Salamandre (cuisine)', '', 2),
(165, 'Salière', '', 6),
(166, 'Sauteuse', '', 2),
(167, 'Sautoir', '', 2),
(168, 'Serviette de cuisine', '', 6),
(169, 'Serviette de table', '', 6),
(170, 'Siphon', '', 6),
(171, 'Sorbetière', '', 3),
(172, 'Spatule', '', 6),
(174, 'Tablier', '', 6),
(175, 'Tamis', '', 6),
(176, 'Tandoor', '', 2),
(179, 'Tchouchkopek', '', 2),
(180, 'Terrine', '', 2),
(181, 'Théière', 'icons8-théière-48.png', 2),
(182, 'Thermomètre de cuisson', '', 2),
(185, 'Torchons', '', 6),
(186, 'Tournebroche', '', 2),
(187, 'Tranche-tomates', '', 4),
(189, 'Turbotière (ustensile)', '', 2),
(190, 'Un tire-bouchon', '', 6),
(191, 'Verre doseur', '', 6),
(193, 'Vitaliseur de Marion', 'icons8-pressure-cooker-64(1).png', 2),
(194, 'Wok', '', 2),
(195, 'Zesteur', 'icons8-râpe-53.png', 4);

-- --------------------------------------------------------

--
-- Structure de la table `ustensil_category`
--

CREATE TABLE `ustensil_category` (
  `USTENSIL_CATEGORY_ID` int(11) NOT NULL,
  `USTENSIL_CATEGORY_NAME` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ustensil_category`
--

INSERT INTO `ustensil_category` (`USTENSIL_CATEGORY_ID`, `USTENSIL_CATEGORY_NAME`) VALUES
(1, 'Autre'),
(2, 'Matériel de cuisson'),
(3, 'Matériel électrique'),
(4, 'Outils de découpe'),
(5, 'Ustensiles de pâtisserie'),
(6, 'Ustensiles divers');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CATEGORY_ID`);

--
-- Index pour la table `contain`
--
ALTER TABLE `contain`
  ADD PRIMARY KEY (`INGREDIENT_ID`,`RECIPE_ID`),
  ADD KEY `CONTAIN_RECIPE0_FK` (`RECIPE_ID`);

--
-- Index pour la table `cooking`
--
ALTER TABLE `cooking`
  ADD PRIMARY KEY (`COOKING_ID`);

--
-- Index pour la table `cooking_type`
--
ALTER TABLE `cooking_type`
  ADD PRIMARY KEY (`COOKING_TYPE_ID`);

--
-- Index pour la table `diet_type`
--
ALTER TABLE `diet_type`
  ADD PRIMARY KEY (`DIET_TYPE_ID`);

--
-- Index pour la table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`INGREDIENT_ID`),
  ADD KEY `INGREDIENT_INGREDIENT_CATEGORY_FK` (`INGREDIENT_CATEGORY_ID`);

--
-- Index pour la table `ingredient_category`
--
ALTER TABLE `ingredient_category`
  ADD PRIMARY KEY (`INGREDIENT_CATEGORY_ID`);

--
-- Index pour la table `love`
--
ALTER TABLE `love`
  ADD PRIMARY KEY (`USER_ID`,`RECIPE_ID`),
  ADD KEY `LOVE_RECIPE0_FK` (`RECIPE_ID`);

--
-- Index pour la table `meal_type`
--
ALTER TABLE `meal_type`
  ADD PRIMARY KEY (`MEAL_TYPE_ID`);

--
-- Index pour la table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`NOTICE_ID`),
  ADD KEY `NOTICE_RECIPE_FK` (`RECIPE_ID`),
  ADD KEY `NOTICE_USER0_FK` (`USER_ID`);

--
-- Index pour la table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`PHOTO_ID`),
  ADD KEY `PHOTO_RECIPE_FK` (`RECIPE_ID`);

--
-- Index pour la table `preparation`
--
ALTER TABLE `preparation`
  ADD PRIMARY KEY (`PREP_ID`);

--
-- Index pour la table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`RECIPE_ID`),
  ADD KEY `RECIPE_USER_FK` (`USER_ID`),
  ADD KEY `RECIPE_TYPE_DE_REPAS0_FK` (`ID_TYPE_DE_REPAS`),
  ADD KEY `RECIPE_MEAL_TYPE1_FK` (`MEAL_TYPE_ID`),
  ADD KEY `RECIPE_DIET_TYPE2_FK` (`DIET_TYPE_ID`),
  ADD KEY `RECIPE_CATEGORY3_FK` (`CATEGORY_ID`),
  ADD KEY `RECIPE_SEASON4_FK` (`SEASON_ID`),
  ADD KEY `RECIPE_COOKING_TYPE5_FK` (`COOKING_TYPE_ID`),
  ADD KEY `RECIPE_PREPARATION6_FK` (`PREP_ID`),
  ADD KEY `RECIPE_COOKING7_FK` (`COOKING_ID`);

--
-- Index pour la table `season`
--
ALTER TABLE `season`
  ADD PRIMARY KEY (`SEASON_ID`);

--
-- Index pour la table `stage`
--
ALTER TABLE `stage`
  ADD PRIMARY KEY (`STAGE_ID`),
  ADD KEY `STAGE_RECIPE_FK` (`RECIPE_ID`);

--
-- Index pour la table `type_de_repas`
--
ALTER TABLE `type_de_repas`
  ADD PRIMARY KEY (`ID_TYPE_DE_REPAS`);

--
-- Index pour la table `used`
--
ALTER TABLE `used`
  ADD PRIMARY KEY (`USTENSIL_ID`,`RECIPE_ID`),
  ADD KEY `USES_RECIPE_FK` (`RECIPE_ID`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`USER_ID`),
  ADD KEY `USER_USER_GENDER_FK` (`USER_GENDER_ID`);

--
-- Index pour la table `user_gender`
--
ALTER TABLE `user_gender`
  ADD PRIMARY KEY (`USER_GENDER_ID`);

--
-- Index pour la table `user_likes`
--
ALTER TABLE `user_likes`
  ADD PRIMARY KEY (`USER_ID`,`USER_ID_LIKE`),
  ADD KEY `USER_LIKES_USER_LIKE_FK` (`USER_ID_LIKE`);

--
-- Index pour la table `ustensil`
--
ALTER TABLE `ustensil`
  ADD PRIMARY KEY (`USTENSIL_ID`),
  ADD KEY `USTENSIL_USTENSIL_CATEGORY_FK` (`USTENSIL_CATEGORY_ID`);

--
-- Index pour la table `ustensil_category`
--
ALTER TABLE `ustensil_category`
  ADD PRIMARY KEY (`USTENSIL_CATEGORY_ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `CATEGORY_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cooking`
--
ALTER TABLE `cooking`
  MODIFY `COOKING_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cooking_type`
--
ALTER TABLE `cooking_type`
  MODIFY `COOKING_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `diet_type`
--
ALTER TABLE `diet_type`
  MODIFY `DIET_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT pour la table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `INGREDIENT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1034;

--
-- AUTO_INCREMENT pour la table `ingredient_category`
--
ALTER TABLE `ingredient_category`
  MODIFY `INGREDIENT_CATEGORY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `meal_type`
--
ALTER TABLE `meal_type`
  MODIFY `MEAL_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `notice`
--
ALTER TABLE `notice`
  MODIFY `NOTICE_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `photo`
--
ALTER TABLE `photo`
  MODIFY `PHOTO_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `preparation`
--
ALTER TABLE `preparation`
  MODIFY `PREP_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `RECIPE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT pour la table `season`
--
ALTER TABLE `season`
  MODIFY `SEASON_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `stage`
--
ALTER TABLE `stage`
  MODIFY `STAGE_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `type_de_repas`
--
ALTER TABLE `type_de_repas`
  MODIFY `ID_TYPE_DE_REPAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `USER_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `user_gender`
--
ALTER TABLE `user_gender`
  MODIFY `USER_GENDER_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ustensil`
--
ALTER TABLE `ustensil`
  MODIFY `USTENSIL_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=196;

--
-- AUTO_INCREMENT pour la table `ustensil_category`
--
ALTER TABLE `ustensil_category`
  MODIFY `USTENSIL_CATEGORY_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `contain`
--
ALTER TABLE `contain`
  ADD CONSTRAINT `CONTAIN_INGREDIENT_FK` FOREIGN KEY (`INGREDIENT_ID`) REFERENCES `ingredient` (`INGREDIENT_ID`),
  ADD CONSTRAINT `CONTAIN_RECIPE0_FK` FOREIGN KEY (`RECIPE_ID`) REFERENCES `recipe` (`RECIPE_ID`);

--
-- Contraintes pour la table `ingredient`
--
ALTER TABLE `ingredient`
  ADD CONSTRAINT `INGREDIENT_INGREDIENT_CATEGORY_FK` FOREIGN KEY (`INGREDIENT_CATEGORY_ID`) REFERENCES `ingredient_category` (`INGREDIENT_CATEGORY_ID`);

--
-- Contraintes pour la table `love`
--
ALTER TABLE `love`
  ADD CONSTRAINT `LOVE_RECIPE0_FK` FOREIGN KEY (`RECIPE_ID`) REFERENCES `recipe` (`RECIPE_ID`),
  ADD CONSTRAINT `LOVE_USER_FK` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`);

--
-- Contraintes pour la table `notice`
--
ALTER TABLE `notice`
  ADD CONSTRAINT `NOTICE_RECIPE_FK` FOREIGN KEY (`RECIPE_ID`) REFERENCES `recipe` (`RECIPE_ID`),
  ADD CONSTRAINT `NOTICE_USER0_FK` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`);

--
-- Contraintes pour la table `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `PHOTO_RECIPE_FK` FOREIGN KEY (`RECIPE_ID`) REFERENCES `recipe` (`RECIPE_ID`);

--
-- Contraintes pour la table `recipe`
--
ALTER TABLE `recipe`
  ADD CONSTRAINT `RECIPE_CATEGORY3_FK` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `category` (`CATEGORY_ID`),
  ADD CONSTRAINT `RECIPE_COOKING7_FK` FOREIGN KEY (`COOKING_ID`) REFERENCES `cooking` (`COOKING_ID`),
  ADD CONSTRAINT `RECIPE_COOKING_TYPE5_FK` FOREIGN KEY (`COOKING_TYPE_ID`) REFERENCES `cooking_type` (`COOKING_TYPE_ID`),
  ADD CONSTRAINT `RECIPE_DIET_TYPE2_FK` FOREIGN KEY (`DIET_TYPE_ID`) REFERENCES `diet_type` (`DIET_TYPE_ID`),
  ADD CONSTRAINT `RECIPE_MEAL_TYPE1_FK` FOREIGN KEY (`MEAL_TYPE_ID`) REFERENCES `meal_type` (`MEAL_TYPE_ID`),
  ADD CONSTRAINT `RECIPE_PREPARATION6_FK` FOREIGN KEY (`PREP_ID`) REFERENCES `preparation` (`PREP_ID`),
  ADD CONSTRAINT `RECIPE_SEASON4_FK` FOREIGN KEY (`SEASON_ID`) REFERENCES `season` (`SEASON_ID`),
  ADD CONSTRAINT `RECIPE_TYPE_DE_REPAS0_FK` FOREIGN KEY (`ID_TYPE_DE_REPAS`) REFERENCES `type_de_repas` (`ID_TYPE_DE_REPAS`),
  ADD CONSTRAINT `RECIPE_USER_FK` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`);

--
-- Contraintes pour la table `stage`
--
ALTER TABLE `stage`
  ADD CONSTRAINT `STAGE_RECIPE_FK` FOREIGN KEY (`RECIPE_ID`) REFERENCES `recipe` (`RECIPE_ID`);

--
-- Contraintes pour la table `used`
--
ALTER TABLE `used`
  ADD CONSTRAINT `USES_RECIPE_FK` FOREIGN KEY (`RECIPE_ID`) REFERENCES `recipe` (`RECIPE_ID`),
  ADD CONSTRAINT `USES_USTENSIL_FK` FOREIGN KEY (`USTENSIL_ID`) REFERENCES `ustensil` (`USTENSIL_ID`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `USER_USER_GENDER_FK` FOREIGN KEY (`USER_GENDER_ID`) REFERENCES `user_gender` (`USER_GENDER_ID`);

--
-- Contraintes pour la table `user_likes`
--
ALTER TABLE `user_likes`
  ADD CONSTRAINT `USER_LIKES_USER_FK` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`),
  ADD CONSTRAINT `USER_LIKES_USER_LIKE_FK` FOREIGN KEY (`USER_ID_LIKE`) REFERENCES `user` (`USER_ID`);

--
-- Contraintes pour la table `ustensil`
--
ALTER TABLE `ustensil`
  ADD CONSTRAINT `USTENSIL_USTENSIL_CATEGORY_FK` FOREIGN KEY (`USTENSIL_CATEGORY_ID`) REFERENCES `ustensil_category` (`USTENSIL_CATEGORY_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
