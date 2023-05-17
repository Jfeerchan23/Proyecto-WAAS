-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2023 a las 08:32:42
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
(1507, 7, 1, '1', '2023-05-13', '07:00:00', '07:30:00', NULL),
(1508, NULL, 1, NULL, '2023-05-15', '07:30:00', '08:00:00', NULL),
(1509, NULL, 1, NULL, '2023-05-15', '08:00:00', '08:30:00', NULL),
(1510, NULL, 1, NULL, '2023-05-15', '08:30:00', '09:00:00', NULL),
(1511, 8, 1, '2', '2023-05-14', '09:00:00', '09:30:00', NULL),
(1512, NULL, 1, NULL, '2023-05-15', '09:30:00', '10:00:00', NULL),
(1513, NULL, 1, NULL, '2023-05-15', '10:00:00', '10:30:00', NULL),
(1514, NULL, 1, NULL, '2023-05-15', '10:30:00', '11:00:00', NULL),
(1515, NULL, 1, NULL, '2023-05-15', '11:00:00', '11:30:00', NULL),
(1516, 8, 1, '3', '2023-05-15', '11:30:00', '12:00:00', NULL),
(1517, NULL, 1, NULL, '2023-05-15', '12:00:00', '12:30:00', NULL),
(1518, 7, 1, '3', '2023-05-15', '12:30:00', '13:00:00', NULL),
(1519, NULL, 1, NULL, '2023-05-15', '14:00:00', '14:30:00', NULL),
(1520, 7, 1, '1', '2023-05-15', '14:30:00', '15:00:00', NULL),
(1521, 7, 1, '3', '2023-05-15', '15:00:00', '15:30:00', NULL),
(1522, 7, 1, '2', '2023-05-15', '17:00:00', '17:30:00', NULL),
(1523, NULL, 1, NULL, '2023-05-16', '07:00:00', '07:30:00', NULL),
(1524, 7, 1, '3', '2023-05-16', '07:30:00', '08:00:00', NULL),
(1525, 7, 1, '1', '2023-05-16', '08:00:00', '08:30:00', NULL),
(1526, 8, 1, '1', '2023-05-16', '08:30:00', '09:00:00', NULL),
(1527, 8, 1, '1', '2023-05-16', '09:00:00', '09:30:00', NULL),
(1528, NULL, 1, NULL, '2023-05-16', '09:30:00', '10:00:00', NULL),
(1529, NULL, 1, NULL, '2023-05-16', '10:00:00', '10:30:00', NULL),
(1530, NULL, 1, NULL, '2023-05-16', '10:30:00', '11:00:00', NULL),
(1531, NULL, 1, NULL, '2023-05-16', '11:00:00', '11:30:00', NULL),
(1532, NULL, 1, NULL, '2023-05-16', '11:30:00', '12:00:00', NULL),
(1533, 8, 1, '1', '2023-05-16', '12:00:00', '12:30:00', NULL),
(1534, NULL, 1, NULL, '2023-05-16', '12:30:00', '13:00:00', NULL),
(1535, NULL, 1, NULL, '2023-05-16', '14:00:00', '14:30:00', NULL),
(1536, NULL, 1, NULL, '2023-05-16', '14:30:00', '15:00:00', NULL),
(1537, NULL, 1, NULL, '2023-05-16', '15:00:00', '15:30:00', NULL),
(1538, 7, 1, '3', '2023-05-16', '15:30:00', '16:00:00', NULL),
(1539, NULL, 1, NULL, '2023-05-17', '07:00:00', '07:30:00', NULL),
(1540, NULL, 1, NULL, '2023-05-17', '07:30:00', '08:00:00', NULL),
(1541, NULL, 1, NULL, '2023-05-17', '08:00:00', '08:30:00', NULL),
(1542, NULL, 1, NULL, '2023-05-17', '08:30:00', '09:00:00', NULL),
(1543, NULL, 1, NULL, '2023-05-17', '09:00:00', '09:30:00', NULL),
(1544, NULL, 1, NULL, '2023-05-17', '09:30:00', '10:00:00', NULL),
(1545, NULL, 1, NULL, '2023-05-17', '10:00:00', '10:30:00', NULL),
(1546, NULL, 1, NULL, '2023-05-17', '10:30:00', '11:00:00', NULL),
(1547, 7, 1, '2', '2023-05-17', '11:00:00', '11:30:00', NULL),
(1548, NULL, 1, NULL, '2023-05-17', '11:30:00', '12:00:00', NULL),
(1549, NULL, 1, NULL, '2023-05-17', '12:00:00', '12:30:00', NULL),
(1550, NULL, 1, NULL, '2023-05-17', '12:30:00', '13:00:00', NULL),
(1551, NULL, 1, NULL, '2023-05-17', '14:00:00', '14:30:00', NULL),
(1552, NULL, 1, NULL, '2023-05-17', '14:30:00', '15:00:00', NULL),
(1553, NULL, 1, NULL, '2023-05-17', '15:00:00', '15:30:00', NULL),
(1554, 8, 1, '3', '2023-05-18', '15:30:00', '16:00:00', 'shhshd');

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
  `contrasenaMedico` varchar(30) NOT NULL,
  `bloqueadoMedico` tinyint(1) DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medicos`
--

INSERT INTO `medicos` (`idMedico`, `nombreMedico`, `CURPMedico`, `fechaNacimientoMedico`, `correoMedico`, `telefonoMedico`, `direccionMedico`, `especialidadMedico`, `consultorioMedico`, `cedulaProfesionalMedico`, `contrasenaMedico`, `bloqueadoMedico`) VALUES
(1, 'Jesús Vázquez', '2323', '2023-05-25', 'sds', 111, 'sdsd', 1, 'H1', 13223, '12345', 0),
(3, 'Julio Díaz', 'sfds', '2023-05-25', 'sfds', 2323, 'sfds', 1, 'CC3', 0, '', 1),
(4, 'Erick Puc', 'sdjdsm', '2023-05-18', 'njsdmnds', 23783, 'jsjmd', 3, 'H4', 0, '', 0),
(5, 'Mario Villanueva', 'fdsdfs', '2023-05-24', 'sfdsfd', 0, 'sdf', 1, 'D1', 0, '', 0);

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
  `edadPaciente` int(11) NOT NULL,
  `generoPaciente` tinyint(1) NOT NULL,
  `contrasenaPaciente` varchar(20) NOT NULL,
  `bloqueadoPaciente` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`idPaciente`, `nombrePaciente`, `CURPPaciente`, `fechaNacimientoPaciente`, `correoPaciente`, `telefonoPaciente`, `direccionPaciente`, `edadPaciente`, `generoPaciente`, `contrasenaPaciente`, `bloqueadoPaciente`) VALUES
(7, 'Alexis Ake', 'hola', '2023-05-11', 'sdfsf', 300, 'sdaff', 21, 1, '12345', 0),
(8, 'Fernando Chan', 'como', '2023-05-10', 'a19216297@alumnos.uady.mx', 376, 'sdmmds', 19, 1, '', 0);

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
  `contrasenaRecepcionista` varchar(20) NOT NULL,
  `bloqueadoRecepcionista` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recepcionistas`
--

INSERT INTO `recepcionistas` (`idRecepcionista`, `nombreRecepcionista`, `CURPRecepcionista`, `fechaNacimientoRecepcionista`, `correoRecepcionista`, `telefonoRecepcionista`, `direccionRecepcionista`, `contrasenaRecepcionista`, `bloqueadoRecepcionista`) VALUES
(3, 'Fernando', 'CURPPrueba2', '2023-05-11', 'fernando@recepcionistas.com', 2147483647, 'Enrique Segoviano', '123', 0),
(5, 'Fernando', 'CURPPrueba', '2001-01-02', 'fernando@recepcionistas.com', 999999999, 'Enrique Segoviano', '', 0),
(13, 'zfsf', 'sd', '2023-05-19', 'sds', 323, 'sds', '', 0),
(8, 'gfhg', 'ghj', '2023-05-25', 'dafv', 0, 'sff', '', 0),
(9, 'zfdgzfg', 'sfsfg', '2023-05-11', 'sdgfdg', 234, 'sfdgsfg', '', 0),
(11, 'nuevo', 'rafref', '2023-05-10', 'fsdf', 3243214, 'rgg', '', 0),
(12, 'Fernando nuevo', 'CURPPrueba', '2001-01-02', 'fernando@recepcionistas.com', 123456780, 'Enrique Segoviano', '', 0),
(15, 'efzxd', 'zfdzd', '2023-05-17', 'zfd', 3234, 'zfdzd', '', 0);

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
  MODIFY `idCita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1555;

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
