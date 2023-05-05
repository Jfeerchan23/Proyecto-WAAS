-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-04-2023 a las 07:48:57
-- Versión del servidor: 8.0.31
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nimbo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

DROP TABLE IF EXISTS `citas`;
CREATE TABLE IF NOT EXISTS `citas` (
  `idPaciente` int NOT NULL,
  `idMedico` int NOT NULL,
  `modalidad` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `notasConsultas` varchar(500) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

DROP TABLE IF EXISTS `medicos`;
CREATE TABLE IF NOT EXISTS `medicos` (
  `idMedico` int NOT NULL AUTO_INCREMENT,
  `nombreMedico` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `CURPMedico` int NOT NULL,
  `fechaNacimientoMedico` date NOT NULL,
  `correoMedico` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `telefonoMedico` int NOT NULL,
  `direccionMedico` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `especialidadMedico` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `consultorio` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `cedulaProfesionalMedico` int NOT NULL,
  PRIMARY KEY (`idMedico`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
CREATE TABLE IF NOT EXISTS `pacientes` (
  `idPaciente` int NOT NULL AUTO_INCREMENT,
  `nombrePaciente` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `CURPPaciente` int NOT NULL,
  `fechaNacimientoPaciente` date NOT NULL,
  `correoPaciente` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `telefonoPaciente` int NOT NULL,
  `direccionPaciente` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `historialClinico` json NOT NULL,
  PRIMARY KEY (`idPaciente`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recepcionistas`
--

DROP TABLE IF EXISTS `recepcionistas`;
CREATE TABLE IF NOT EXISTS `recepcionistas` (
  `idRecepcionista` int NOT NULL AUTO_INCREMENT,
  `nombreRecepcionista` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `CURPRecepcionista` varchar(18) COLLATE utf8mb4_general_ci NOT NULL,
  `fechaNacimientoRecepcionista` date NOT NULL,
  `correoRecepcionista` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `telefonoRecepcionista` int NOT NULL,
  `Direccion` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idRecepcionista`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recepcionistas`
--

INSERT INTO `recepcionistas` (`idRecepcionista`, `nombreRecepcionista`, `CURPRecepcionista`, `fechaNacimientoRecepcionista`, `correoRecepcionista`, `telefonoRecepcionista`, `Direccion`) VALUES
(4, 'Fernando', 'CURPPrueba', '2001-01-02', 'fernando@recepcionistas.com', 1234567890, 'Enrique Segoviano'),
(3, 'Fernando', 'CURPPrueba', '2001-01-02', 'fernando@recepcionistas.com', 2147483647, 'Enrique Segoviano'),
(5, 'Fernando', 'CURPPrueba', '2001-01-02', 'fernando@recepcionistas.com', 999999999, 'Enrique Segoviano');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
