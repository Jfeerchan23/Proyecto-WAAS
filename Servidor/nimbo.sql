-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-05-2023 a las 22:50:36
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
(1877, NULL, 1, NULL, '2023-06-07', '08:00:00', '08:30:00', NULL),
(1878, NULL, 1, NULL, '2023-06-07', '08:30:00', '09:00:00', NULL),
(1879, NULL, 1, NULL, '2023-06-07', '11:00:00', '11:30:00', NULL),
(1876, NULL, 1, NULL, '2023-06-07', '07:30:00', '08:00:00', NULL),
(1875, NULL, 1, NULL, '2023-06-07', '07:00:00', '07:30:00', NULL),
(1874, NULL, 1, NULL, '2023-06-06', '11:30:00', '12:00:00', NULL),
(1873, NULL, 1, NULL, '2023-06-06', '11:00:00', '11:30:00', NULL),
(1872, NULL, 1, NULL, '2023-06-06', '08:30:00', '09:00:00', NULL),
(1871, NULL, 1, NULL, '2023-06-06', '08:00:00', '08:30:00', NULL),
(1870, NULL, 1, NULL, '2023-06-06', '07:30:00', '08:00:00', NULL),
(1869, NULL, 1, NULL, '2023-06-06', '07:00:00', '07:30:00', NULL),
(1868, NULL, 1, NULL, '2023-06-05', '11:30:00', '12:00:00', NULL),
(1867, NULL, 1, NULL, '2023-06-05', '11:00:00', '11:30:00', NULL),
(1866, NULL, 1, NULL, '2023-06-05', '08:30:00', '09:00:00', NULL),
(1865, NULL, 1, NULL, '2023-06-05', '08:00:00', '08:30:00', NULL),
(1864, NULL, 1, NULL, '2023-06-05', '07:30:00', '08:00:00', NULL),
(1863, NULL, 1, NULL, '2023-06-05', '07:00:00', '07:30:00', NULL),
(1821, 8, 1, '2', '2023-05-20', '07:00:00', '07:30:00', NULL),
(1822, 8, 1, '3', '2023-05-20', '07:30:00', '08:00:00', NULL),
(1823, 8, 1, '2', '2023-05-20', '08:00:00', '08:30:00', NULL),
(1824, 8, 1, '1', '2023-05-20', '08:30:00', '09:00:00', NULL),
(1825, NULL, 1, NULL, '2023-05-20', '11:00:00', '11:30:00', NULL),
(1826, NULL, 1, NULL, '2023-05-20', '11:30:00', '12:00:00', NULL),
(1827, NULL, 1, NULL, '2023-05-21', '07:00:00', '07:30:00', NULL),
(1828, NULL, 1, NULL, '2023-05-21', '07:30:00', '08:00:00', NULL),
(1829, NULL, 1, NULL, '2023-05-21', '08:00:00', '08:30:00', NULL),
(1830, 8, 1, '1', '2023-05-19', '08:30:00', '09:00:00', NULL),
(1831, NULL, 1, NULL, '2023-05-21', '11:00:00', '11:30:00', NULL),
(1832, NULL, 1, NULL, '2023-05-21', '11:30:00', '12:00:00', NULL),
(1833, NULL, 1, NULL, '2023-05-22', '07:00:00', '07:30:00', NULL),
(1834, 9, 1, '2', '2023-05-22', '07:30:00', '08:00:00', NULL),
(1835, 8, 1, '3', '2023-05-22', '08:00:00', '08:30:00', NULL),
(1836, 7, 1, '1', '2023-05-22', '08:30:00', '09:00:00', NULL),
(1837, NULL, 1, NULL, '2023-05-22', '11:00:00', '11:30:00', NULL),
(1838, NULL, 1, NULL, '2023-05-22', '11:30:00', '12:00:00', NULL),
(1839, NULL, 1, NULL, '2023-05-23', '07:00:00', '07:30:00', NULL),
(1840, NULL, 1, NULL, '2023-05-23', '07:30:00', '08:00:00', NULL),
(1841, NULL, 1, NULL, '2023-05-23', '08:00:00', '08:30:00', NULL),
(1842, NULL, 1, NULL, '2023-05-23', '08:30:00', '09:00:00', NULL),
(1843, NULL, 1, NULL, '2023-05-23', '11:00:00', '11:30:00', NULL),
(1844, NULL, 1, NULL, '2023-05-23', '11:30:00', '12:00:00', NULL),
(1845, NULL, 1, NULL, '2023-05-24', '07:00:00', '07:30:00', NULL),
(1846, NULL, 1, NULL, '2023-05-24', '07:30:00', '08:00:00', NULL),
(1847, NULL, 1, NULL, '2023-05-24', '08:00:00', '08:30:00', NULL),
(1848, NULL, 1, NULL, '2023-05-24', '08:30:00', '09:00:00', NULL),
(1849, NULL, 1, NULL, '2023-05-24', '11:00:00', '11:30:00', NULL),
(1850, NULL, 1, NULL, '2023-05-24', '11:30:00', '12:00:00', NULL),
(1851, NULL, 1, NULL, '2023-05-30', '07:00:00', '07:30:00', NULL),
(1852, NULL, 1, NULL, '2023-05-30', '07:30:00', '08:00:00', NULL),
(1853, NULL, 1, NULL, '2023-05-30', '08:00:00', '08:30:00', NULL),
(1854, NULL, 1, NULL, '2023-05-30', '08:30:00', '09:00:00', NULL),
(1855, NULL, 1, NULL, '2023-05-30', '11:00:00', '11:30:00', NULL),
(1856, NULL, 1, NULL, '2023-05-30', '11:30:00', '12:00:00', NULL),
(1857, NULL, 1, NULL, '2023-05-31', '07:00:00', '07:30:00', NULL),
(1858, NULL, 1, NULL, '2023-05-31', '07:30:00', '08:00:00', NULL),
(1859, NULL, 1, NULL, '2023-05-31', '08:00:00', '08:30:00', NULL),
(1860, NULL, 1, NULL, '2023-05-31', '08:30:00', '09:00:00', NULL),
(1861, NULL, 1, NULL, '2023-05-31', '11:00:00', '11:30:00', NULL),
(1862, NULL, 1, NULL, '2023-05-31', '11:30:00', '12:00:00', NULL),
(1880, NULL, 1, NULL, '2023-06-07', '11:30:00', '12:00:00', NULL),
(1881, NULL, 1, NULL, '2023-05-25', '07:00:00', '07:30:00', NULL),
(1882, NULL, 1, NULL, '2023-05-25', '07:30:00', '08:00:00', NULL),
(1883, NULL, 1, NULL, '2023-05-25', '08:00:00', '08:30:00', NULL),
(1884, NULL, 1, NULL, '2023-05-25', '08:30:00', '09:00:00', NULL),
(1885, NULL, 1, NULL, '2023-05-25', '11:00:00', '11:30:00', NULL),
(1886, NULL, 1, NULL, '2023-05-25', '11:30:00', '12:00:00', NULL),
(1887, NULL, 1, NULL, '2023-05-26', '07:00:00', '07:30:00', NULL),
(1888, NULL, 1, NULL, '2023-05-26', '07:30:00', '08:00:00', NULL),
(1889, NULL, 1, NULL, '2023-05-26', '08:00:00', '08:30:00', NULL),
(1890, NULL, 1, NULL, '2023-05-26', '08:30:00', '09:00:00', NULL),
(1891, NULL, 1, NULL, '2023-05-26', '11:00:00', '11:30:00', NULL),
(1892, NULL, 1, NULL, '2023-05-26', '11:30:00', '12:00:00', NULL),
(1893, NULL, 1, NULL, '2023-05-27', '07:00:00', '07:30:00', NULL),
(1894, NULL, 1, NULL, '2023-05-27', '07:30:00', '08:00:00', NULL),
(1895, NULL, 1, NULL, '2023-05-27', '08:00:00', '08:30:00', NULL),
(1896, NULL, 1, NULL, '2023-05-27', '08:30:00', '09:00:00', NULL),
(1897, NULL, 1, NULL, '2023-05-27', '11:00:00', '11:30:00', NULL),
(1898, NULL, 1, NULL, '2023-05-27', '11:30:00', '12:00:00', NULL),
(1899, NULL, 1, NULL, '2023-06-12', '07:00:00', '07:30:00', NULL),
(1900, NULL, 1, NULL, '2023-06-12', '07:30:00', '08:00:00', NULL),
(1901, NULL, 1, NULL, '2023-06-12', '11:00:00', '11:30:00', NULL),
(1902, NULL, 1, NULL, '2023-06-12', '11:30:00', '12:00:00', NULL),
(1903, NULL, 1, NULL, '2023-06-13', '07:00:00', '07:30:00', NULL),
(1904, NULL, 1, NULL, '2023-06-13', '07:30:00', '08:00:00', NULL),
(1905, NULL, 1, NULL, '2023-06-13', '11:00:00', '11:30:00', NULL),
(1906, NULL, 1, NULL, '2023-06-13', '11:30:00', '12:00:00', NULL),
(1907, NULL, 1, NULL, '2023-06-14', '07:00:00', '07:30:00', NULL),
(1908, NULL, 1, NULL, '2023-06-14', '07:30:00', '08:00:00', NULL),
(1909, NULL, 1, NULL, '2023-06-14', '11:00:00', '11:30:00', NULL),
(1910, NULL, 1, NULL, '2023-06-14', '11:30:00', '12:00:00', NULL),
(1911, NULL, 1, NULL, '2023-06-19', '07:00:00', '07:30:00', NULL),
(1912, NULL, 1, NULL, '2023-06-19', '07:30:00', '08:00:00', NULL),
(1913, NULL, 1, NULL, '2023-06-19', '10:00:00', '10:30:00', NULL),
(1914, NULL, 1, NULL, '2023-06-19', '10:30:00', '11:00:00', NULL),
(1915, NULL, 1, NULL, '2023-06-19', '11:00:00', '11:30:00', NULL),
(1916, NULL, 1, NULL, '2023-06-19', '11:30:00', '12:00:00', NULL),
(1917, NULL, 1, NULL, '2023-06-20', '07:00:00', '07:30:00', NULL),
(1918, NULL, 1, NULL, '2023-06-20', '07:30:00', '08:00:00', NULL),
(1919, NULL, 1, NULL, '2023-06-20', '10:00:00', '10:30:00', NULL),
(1920, NULL, 1, NULL, '2023-06-20', '10:30:00', '11:00:00', NULL),
(1921, NULL, 1, NULL, '2023-06-20', '11:00:00', '11:30:00', NULL),
(1922, NULL, 1, NULL, '2023-06-20', '11:30:00', '12:00:00', NULL),
(1923, NULL, 1, NULL, '2023-06-21', '07:00:00', '07:30:00', NULL),
(1924, NULL, 1, NULL, '2023-06-21', '07:30:00', '08:00:00', NULL),
(1925, NULL, 1, NULL, '2023-06-21', '10:00:00', '10:30:00', NULL),
(1926, NULL, 1, NULL, '2023-06-21', '10:30:00', '11:00:00', NULL),
(1927, NULL, 1, NULL, '2023-06-21', '11:00:00', '11:30:00', NULL),
(1928, NULL, 1, NULL, '2023-06-21', '11:30:00', '12:00:00', NULL),
(1929, NULL, 1, NULL, '2023-06-27', '07:00:00', '07:30:00', NULL),
(1930, NULL, 1, NULL, '2023-06-27', '07:30:00', '08:00:00', NULL),
(1931, NULL, 1, NULL, '2023-06-27', '11:00:00', '11:30:00', NULL),
(1932, NULL, 1, NULL, '2023-06-27', '11:30:00', '12:00:00', NULL),
(1933, NULL, 1, NULL, '2023-06-28', '07:00:00', '07:30:00', NULL),
(1934, NULL, 1, NULL, '2023-06-28', '07:30:00', '08:00:00', NULL),
(1935, NULL, 1, NULL, '2023-06-28', '11:00:00', '11:30:00', NULL),
(1936, NULL, 1, NULL, '2023-06-28', '11:30:00', '12:00:00', NULL),
(1937, NULL, 1, NULL, '2023-06-29', '07:00:00', '07:30:00', NULL),
(1938, NULL, 1, NULL, '2023-06-29', '07:30:00', '08:00:00', NULL),
(1939, NULL, 1, NULL, '2023-06-29', '11:00:00', '11:30:00', NULL),
(1940, NULL, 1, NULL, '2023-06-29', '11:30:00', '12:00:00', NULL),
(1941, NULL, 1, NULL, '2023-06-30', '07:00:00', '07:30:00', NULL),
(1942, NULL, 1, NULL, '2023-06-30', '07:30:00', '08:00:00', NULL),
(1943, NULL, 1, NULL, '2023-06-30', '11:00:00', '11:30:00', NULL),
(1944, NULL, 1, NULL, '2023-06-30', '11:30:00', '12:00:00', NULL),
(1945, NULL, 1, NULL, '2023-06-01', '07:00:00', '07:30:00', NULL),
(1946, NULL, 1, NULL, '2023-06-01', '07:30:00', '08:00:00', NULL),
(1947, NULL, 1, NULL, '2023-06-01', '10:00:00', '10:30:00', NULL),
(1948, NULL, 1, NULL, '2023-06-01', '10:30:00', '11:00:00', NULL),
(1949, NULL, 1, NULL, '2023-06-01', '11:00:00', '11:30:00', NULL),
(1950, NULL, 1, NULL, '2023-06-01', '11:30:00', '12:00:00', NULL),
(1951, NULL, 1, NULL, '2023-06-02', '07:00:00', '07:30:00', NULL),
(1952, NULL, 1, NULL, '2023-06-02', '07:30:00', '08:00:00', NULL),
(1953, NULL, 1, NULL, '2023-06-02', '10:00:00', '10:30:00', NULL),
(1954, NULL, 1, NULL, '2023-06-02', '10:30:00', '11:00:00', NULL),
(1955, NULL, 1, NULL, '2023-06-02', '11:00:00', '11:30:00', NULL),
(1956, NULL, 1, NULL, '2023-06-02', '11:30:00', '12:00:00', NULL),
(1957, NULL, 1, NULL, '2023-06-03', '07:00:00', '07:30:00', NULL),
(1958, NULL, 1, NULL, '2023-06-03', '07:30:00', '08:00:00', NULL),
(1959, NULL, 1, NULL, '2023-06-03', '10:00:00', '10:30:00', NULL),
(1960, NULL, 1, NULL, '2023-06-03', '10:30:00', '11:00:00', NULL),
(1961, NULL, 1, NULL, '2023-06-03', '11:00:00', '11:30:00', NULL),
(1962, NULL, 1, NULL, '2023-06-03', '11:30:00', '12:00:00', NULL),
(1963, NULL, 1, NULL, '2023-07-01', '07:00:00', '07:30:00', NULL),
(1964, NULL, 1, NULL, '2023-07-01', '07:30:00', '08:00:00', NULL),
(1965, NULL, 1, NULL, '2023-07-01', '11:00:00', '11:30:00', NULL),
(1966, NULL, 1, NULL, '2023-07-01', '11:30:00', '12:00:00', NULL),
(1967, NULL, 1, NULL, '2023-07-02', '07:00:00', '07:30:00', NULL),
(1968, NULL, 1, NULL, '2023-07-02', '07:30:00', '08:00:00', NULL),
(1969, NULL, 1, NULL, '2023-07-02', '11:00:00', '11:30:00', NULL),
(1970, NULL, 1, NULL, '2023-07-02', '11:30:00', '12:00:00', NULL),
(1971, NULL, 1, NULL, '2023-07-03', '07:00:00', '07:30:00', NULL),
(1972, NULL, 1, NULL, '2023-07-03', '07:30:00', '08:00:00', NULL),
(1973, NULL, 1, NULL, '2023-07-03', '11:00:00', '11:30:00', NULL),
(1974, NULL, 1, NULL, '2023-07-03', '11:30:00', '12:00:00', NULL),
(1975, NULL, 1, NULL, '2023-09-01', '07:00:00', '07:30:00', NULL),
(1976, NULL, 1, NULL, '2023-09-01', '07:30:00', '08:00:00', NULL),
(1977, NULL, 1, NULL, '2023-09-01', '08:00:00', '08:30:00', NULL),
(1978, NULL, 1, NULL, '2023-09-01', '08:30:00', '09:00:00', NULL),
(1979, NULL, 1, NULL, '2023-09-01', '11:00:00', '11:30:00', NULL),
(1980, NULL, 1, NULL, '2023-09-01', '11:30:00', '12:00:00', NULL),
(1981, NULL, 1, NULL, '2023-09-02', '07:00:00', '07:30:00', NULL),
(1982, NULL, 1, NULL, '2023-09-02', '07:30:00', '08:00:00', NULL),
(1983, NULL, 1, NULL, '2023-09-02', '08:00:00', '08:30:00', NULL),
(1984, NULL, 1, NULL, '2023-09-02', '08:30:00', '09:00:00', NULL),
(1985, NULL, 1, NULL, '2023-09-02', '11:00:00', '11:30:00', NULL),
(1986, NULL, 1, NULL, '2023-09-02', '11:30:00', '12:00:00', NULL),
(1987, NULL, 1, NULL, '2023-09-03', '07:00:00', '07:30:00', NULL),
(1988, NULL, 1, NULL, '2023-09-03', '07:30:00', '08:00:00', NULL),
(1989, NULL, 1, NULL, '2023-09-03', '08:00:00', '08:30:00', NULL),
(1990, NULL, 1, NULL, '2023-09-03', '08:30:00', '09:00:00', NULL),
(1991, NULL, 1, NULL, '2023-09-03', '11:00:00', '11:30:00', NULL),
(1992, NULL, 1, NULL, '2023-09-03', '11:30:00', '12:00:00', NULL),
(1993, NULL, 1, NULL, '2023-09-04', '07:00:00', '07:30:00', NULL),
(1994, NULL, 1, NULL, '2023-09-04', '07:30:00', '08:00:00', NULL),
(1995, NULL, 1, NULL, '2023-09-04', '08:00:00', '08:30:00', NULL),
(1996, NULL, 1, NULL, '2023-09-04', '08:30:00', '09:00:00', NULL),
(1997, NULL, 1, NULL, '2023-09-04', '11:00:00', '11:30:00', NULL),
(1998, NULL, 1, NULL, '2023-09-04', '11:30:00', '12:00:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidades`
--

CREATE TABLE `especialidades` (
  `idEspecialidad` int(11) NOT NULL,
  `siglaEspecialidad` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `nombreEspecialidad` varchar(20) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `especialidades`
--

INSERT INTO `especialidades` (`idEspecialidad`, `siglaEspecialidad`, `nombreEspecialidad`) VALUES
(1, 'ANS', 'Anestesiología'),
(2, 'CDG', 'Cardiología'),
(3, 'CG', 'Cirugía General'),
(4, 'DTG', 'Dermatología');

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
(1, 'Jesús Vázquez', '2323', '2023-05-25', 'sds', 112, 'sdsd', 1, 'H1', 13224, '12345', 0),
(3, 'Julio Díaz', 'sfds', '2023-05-25', 'sfds', 2323, 'sfds', 1, 'CC3', 0, '', 1),
(4, 'Erick Puc', 'sdjdsm', '2023-05-18', 'njsdmnds', 23783, 'jsjmd', 3, 'H4', 0, '', 0),
(5, 'Mario Villanueva', 'fdsdfs', '2023-05-24', 'sfdsfd', 0, 'sdf', 1, 'D1', 0, '', 0),
(6, 'jajaj', 'hola', '2023-05-18', 'shjds', 2333, 'dshjd', 3, 'djjs', 0, '$2b$10$C3jXHtEm5R6mmhNDso0Gqe6', 0),
(7, 'jsdjd', 'sjdjs', '2023-05-19', 'hola', 123, 'sds', 3, 'h5', 0, '$2b$10$s6lJiDQx.iMjz73aJDpAaOS', 0);

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
  `contrasenaPaciente` varchar(50) NOT NULL,
  `bloqueadoPaciente` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`idPaciente`, `nombrePaciente`, `CURPPaciente`, `fechaNacimientoPaciente`, `correoPaciente`, `telefonoPaciente`, `direccionPaciente`, `edadPaciente`, `generoPaciente`, `contrasenaPaciente`, `bloqueadoPaciente`) VALUES
(7, 'Alexis Ake', 'hola', '2023-05-11', 'jfeerchan23warrior@gmail.com', 300, 'sdaff', 21, 1, '12345', 0),
(8, 'Fernando Chan', 'como', '2023-05-10', 'a19216297@alumnos.uady.mx', 376, 'sdmmds', 19, 1, '', 1),
(9, 'Fernando Chimal', 'estas', '2023-05-27', 'jferchan23@gmail.com', 988191, 'colonia centro', 18, 1, '$2b$10$jbZG5A2I1IGSwtpj1p4mIeCimt68K.U0tzd.umtXLf5', 0);

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
(3, 'Fernando', 'CURPPrueba2', '2023-05-11', 'fernando@recepcionistas.com', 55556, 'Enrique Segoviano', '123', 0),
(5, 'Fernando', 'CURPPrueba', '2001-01-02', 'fernando@recepcionistas.com', 999999999, 'Enrique Segoviano', '', 0),
(13, 'zfsf', 'sd', '2023-05-19', 'sds', 323, 'sds', '', 0),
(8, 'gfhg', 'ghj', '2023-05-25', 'dafv', 0, 'sff', '', 0),
(9, 'zfdgzfg', 'sfsfg', '2023-05-11', 'sdgfdg', 234, 'sfdgsfg', '', 0),
(11, 'nuevo', 'rafref', '2023-05-10', 'fsdf', 3243214, 'rgg', '', 0),
(12, 'Fernando nuevo', 'CURPPrueba', '2001-01-02', 'fernando@recepcionistas.com', 123456780, 'Enrique Segoviano', '', 0),
(15, 'efzxd', 'zfdzd', '2023-05-17', 'zfd', 3234, 'zfdzd', '', 0),
(16, 'Selene Dzib', 'ashaj', '2023-05-18', 'fer_chan23@hotmail.com', 37823, 'ajsja', '$2b$10$JM05ZEU0k6Oy/', 0),
(17, 'rodrigo', 'nhsjs', '2023-05-20', 'jsj', 738, 'nss', '$2b$10$RaS56CdPWkG1Q', 0);

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
  MODIFY `idCita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1999;

--
-- AUTO_INCREMENT de la tabla `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `idEspecialidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `medicos`
--
ALTER TABLE `medicos`
  MODIFY `idMedico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `idPaciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `recepcionistas`
--
ALTER TABLE `recepcionistas`
  MODIFY `idRecepcionista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
