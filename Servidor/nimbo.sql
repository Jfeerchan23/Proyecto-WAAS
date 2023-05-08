-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2023 a las 07:30:22
-- Versión del servidor: 10.4.21-MariaDB-log
-- Versión de PHP: 8.2.4

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

CREATE TABLE `citas` (
  `idCita` int(11) NOT NULL,
  `idPaciente` int(11) DEFAULT NULL,
  `idMedico` int(11) NOT NULL,
  `modalidad` varchar(30) DEFAULT NULL,
  `fecha` date NOT NULL,
  `horaInicio` time NOT NULL,
  `horaTermino` time NOT NULL,
  `notasConsultas` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`idCita`, `idPaciente`, `idMedico`, `modalidad`, `fecha`, `horaInicio`, `horaTermino`, `notasConsultas`) VALUES
(496, 7, 1, '1', '2023-05-07', '11:56:00', '12:06:00', 'NULL'),
(497, NULL, 3, NULL, '2023-05-07', '12:06:00', '12:16:00', NULL),
(498, NULL, 4, NULL, '2023-05-07', '12:16:00', '12:26:00', NULL),
(499, NULL, 5, NULL, '2023-05-07', '12:26:00', '12:36:00', NULL),
(500, 7, 1, NULL, '2023-05-07', '12:36:00', '12:46:00', NULL),
(501, NULL, 1, NULL, '2023-05-07', '12:46:00', '12:56:00', NULL),
(502, NULL, 4, NULL, '2023-05-08', '11:56:00', '12:06:00', NULL),
(503, 7, 3, NULL, '2023-05-08', '12:06:00', '12:16:00', NULL),
(504, NULL, 4, NULL, '2023-05-08', '12:16:00', '12:26:00', NULL),
(505, 7, 1, NULL, '2023-05-08', '12:26:00', '12:36:00', NULL),
(506, NULL, 3, NULL, '2023-05-08', '12:36:00', '12:46:00', NULL),
(507, NULL, 4, NULL, '2023-05-08', '12:46:00', '12:56:00', NULL),
(508, NULL, 1, NULL, '2023-05-09', '11:56:00', '12:06:00', NULL),
(509, NULL, 3, NULL, '2023-05-09', '12:06:00', '12:16:00', NULL),
(510, 7, 1, NULL, '2023-05-09', '12:16:00', '12:26:00', NULL),
(511, NULL, 3, NULL, '2023-05-09', '12:26:00', '12:36:00', NULL),
(512, NULL, 1, NULL, '2023-05-09', '12:36:00', '12:46:00', NULL),
(513, NULL, 4, NULL, '2023-05-09', '12:46:00', '12:56:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `idEspecialidad` int(11) NOT NULL,
  `nombreEspecialidad` varchar(20) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`idEspecialidad`, `nombreEspecialidad`) VALUES
(1, 'Anestesiología'),
(2, 'Cardiología'),
(3, 'Cirugía General'),
(4, 'Dermatología');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicos`
--

CREATE TABLE `medicos` (
  `idMedico` int(11) NOT NULL,
  `nombreMedico` varchar(150) NOT NULL,
  `CURPMedico` varchar(20) NOT NULL,
  `fechaNacimientoMedico` date NOT NULL,
  `correoMedico` varchar(150) NOT NULL,
  `telefonoMedico` int(11) NOT NULL,
  `direccionMedico` varchar(250) NOT NULL,
  `especialidadMedico` int(150) NOT NULL,
  `consultorioMedico` varchar(30) NOT NULL,
  `cedulaProfesionalMedico` int(11) NOT NULL,
  `bloqueadoMedico` tinyint(1) DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medicos`
--

INSERT INTO `medicos` (`idMedico`, `nombreMedico`, `CURPMedico`, `fechaNacimientoMedico`, `correoMedico`, `telefonoMedico`, `direccionMedico`, `especialidadMedico`, `consultorioMedico`, `cedulaProfesionalMedico`, `bloqueadoMedico`) VALUES
(1, 'oliwis', '2323', '2023-05-25', 'sds', 0, 'sdsd', 1, 'sds', 13223, 0),
(3, 'dfsfs', 'sfds', '2023-05-25', 'sfds', 2323, 'sfds', 1, 'sdfs', 0, 1),
(4, 'bwenb', 'sdjdsm', '2023-05-18', 'njsdmnds', 23783, 'jsjmd', 3, 'hsdj', 0, 0),
(5, 'dffd', 'fdsdfs', '2023-05-24', 'sfdsfd', 0, 'sdf', 1, 'fdsfs', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `idPaciente` int(11) NOT NULL,
  `nombrePaciente` varchar(150) NOT NULL,
  `CURPPaciente` varchar(20) NOT NULL,
  `fechaNacimientoPaciente` date NOT NULL,
  `correoPaciente` varchar(150) NOT NULL,
  `telefonoPaciente` int(11) NOT NULL,
  `direccionPaciente` varchar(250) NOT NULL,
  `bloqueadoPaciente` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`idPaciente`, `nombrePaciente`, `CURPPaciente`, `fechaNacimientoPaciente`, `correoPaciente`, `telefonoPaciente`, `direccionPaciente`, `bloqueadoPaciente`) VALUES
(7, 'sdfs', 'sdfd', '2023-05-11', 'sdfsf', 300, 'sdaff', 0),
(8, 'jdsjdk', 'dnmm', '2023-05-10', 'jsdmdms', 376, 'sdmmds', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recepcionistas`
--

CREATE TABLE `recepcionistas` (
  `idRecepcionista` int(11) NOT NULL,
  `nombreRecepcionista` varchar(150) NOT NULL,
  `CURPRecepcionista` varchar(18) NOT NULL,
  `fechaNacimientoRecepcionista` date NOT NULL,
  `correoRecepcionista` varchar(150) NOT NULL,
  `telefonoRecepcionista` int(11) NOT NULL,
  `direccionRecepcionista` varchar(250) NOT NULL,
  `bloqueadoRecepcionista` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recepcionistas`
--

INSERT INTO `recepcionistas` (`idRecepcionista`, `nombreRecepcionista`, `CURPRecepcionista`, `fechaNacimientoRecepcionista`, `correoRecepcionista`, `telefonoRecepcionista`, `direccionRecepcionista`, `bloqueadoRecepcionista`) VALUES
(3, 'Fernando', 'CURPPrueba2', '2023-05-11', 'fernando@recepcionistas.com', 2147483647, 'Enrique Segoviano', 0),
(5, 'Fernando', 'CURPPrueba', '2001-01-02', 'fernando@recepcionistas.com', 999999999, 'Enrique Segoviano', 0),
(13, 'zfsf', 'sd', '2023-05-19', 'sds', 323, 'sds', 0),
(8, 'gfhg', 'ghj', '2023-05-25', 'dafv', 0, 'sff', 0),
(9, 'zfdgzfg', 'sfsfg', '2023-05-11', 'sdgfdg', 234, 'sfdgsfg', 0),
(11, 'nuevo', 'rafref', '2023-05-10', 'fsdf', 3243214, 'rgg', 0),
(12, 'Fernando nuevo', 'CURPPrueba', '2001-01-02', 'fernando@recepcionistas.com', 123456780, 'Enrique Segoviano', 0),
(15, 'efzxd', 'zfdzd', '2023-05-17', 'zfd', 3234, 'zfdzd', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`idCita`);

--
-- Indices de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`idEspecialidad`);

--
-- Indices de la tabla `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`idMedico`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`idPaciente`);

--
-- Indices de la tabla `recepcionistas`
--
ALTER TABLE `recepcionistas`
  ADD PRIMARY KEY (`idRecepcionista`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `idCita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=514;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `idEspecialidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `medicos`
--
ALTER TABLE `medicos`
  MODIFY `idMedico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `idPaciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `recepcionistas`
--
ALTER TABLE `recepcionistas`
  MODIFY `idRecepcionista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
