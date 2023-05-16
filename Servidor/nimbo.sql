-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2023 a las 04:02:02
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
(514, 7, 1, '1', '2023-05-13', '07:00:00', '07:20:00', NULL),
(515, 7, 3, '2', '2023-05-13', '07:20:00', '07:40:00', NULL),
(516, 7, 4, '3', '2023-05-13', '07:40:00', '08:00:00', NULL),
(517, NULL, 5, NULL, '2023-05-13', '08:00:00', '08:20:00', NULL),
(518, NULL, 1, NULL, '2023-05-13', '08:20:00', '08:40:00', NULL),
(519, NULL, 3, NULL, '2023-05-13', '08:40:00', '09:00:00', NULL),
(520, NULL, 4, NULL, '2023-05-13', '09:00:00', '09:20:00', NULL),
(521, NULL, 1, NULL, '2023-05-13', '09:20:00', '09:40:00', NULL),
(522, NULL, 1, NULL, '2023-05-13', '09:40:00', '10:00:00', NULL),
(523, NULL, 5, NULL, '2023-05-13', '10:00:00', '10:20:00', NULL),
(524, NULL, 1, NULL, '2023-05-13', '10:20:00', '10:40:00', NULL),
(525, NULL, 1, NULL, '2023-05-13', '10:40:00', '11:00:00', NULL),
(526, NULL, 3, NULL, '2023-05-13', '11:00:00', '11:20:00', NULL),
(527, NULL, 1, NULL, '2023-05-13', '11:20:00', '11:40:00', NULL),
(528, NULL, 1, NULL, '2023-05-13', '11:40:00', '12:00:00', NULL),
(529, NULL, 4, NULL, '2023-05-13', '12:00:00', '12:20:00', NULL),
(530, NULL, 1, NULL, '2023-05-13', '12:20:00', '12:40:00', NULL),
(531, NULL, 1, NULL, '2023-05-14', '07:00:00', '07:20:00', NULL),
(532, NULL, 5, NULL, '2023-05-14', '07:20:00', '07:40:00', NULL),
(533, NULL, 1, NULL, '2023-05-14', '07:40:00', '08:00:00', NULL),
(534, NULL, 1, NULL, '2023-05-14', '08:00:00', '08:20:00', NULL),
(535, NULL, 1, NULL, '2023-05-14', '08:20:00', '08:40:00', NULL),
(536, 7, 1, '2', '2023-05-14', '08:40:00', '09:00:00', NULL),
(537, NULL, 1, NULL, '2023-05-14', '09:00:00', '09:20:00', NULL),
(538, NULL, 1, NULL, '2023-05-14', '09:20:00', '09:40:00', NULL),
(539, NULL, 1, NULL, '2023-05-14', '09:40:00', '10:00:00', NULL),
(540, NULL, 1, NULL, '2023-05-14', '10:00:00', '10:20:00', NULL),
(541, NULL, 1, NULL, '2023-05-14', '10:20:00', '10:40:00', NULL),
(542, NULL, 1, NULL, '2023-05-14', '10:40:00', '11:00:00', NULL),
(543, NULL, 1, NULL, '2023-05-14', '11:00:00', '11:20:00', NULL),
(544, NULL, 1, NULL, '2023-05-14', '11:20:00', '11:40:00', NULL),
(545, NULL, 1, NULL, '2023-05-14', '11:40:00', '12:00:00', NULL),
(546, NULL, 1, NULL, '2023-05-14', '12:00:00', '12:20:00', NULL),
(547, NULL, 1, NULL, '2023-05-14', '12:20:00', '12:40:00', NULL),
(548, NULL, 1, NULL, '2023-05-15', '07:00:00', '07:20:00', NULL),
(549, NULL, 1, NULL, '2023-05-15', '07:20:00', '07:40:00', NULL),
(550, NULL, 1, NULL, '2023-05-15', '07:40:00', '08:00:00', NULL),
(551, NULL, 1, NULL, '2023-05-15', '08:00:00', '08:20:00', NULL),
(552, NULL, 1, NULL, '2023-05-15', '08:20:00', '08:40:00', NULL),
(553, NULL, 1, NULL, '2023-05-15', '08:40:00', '09:00:00', NULL),
(554, NULL, 1, NULL, '2023-05-15', '09:00:00', '09:20:00', NULL),
(555, NULL, 1, NULL, '2023-05-15', '09:20:00', '09:40:00', NULL),
(556, NULL, 1, NULL, '2023-05-15', '09:40:00', '10:00:00', NULL),
(557, NULL, 1, NULL, '2023-05-15', '10:00:00', '10:20:00', NULL),
(558, NULL, 1, NULL, '2023-05-15', '10:20:00', '10:40:00', NULL),
(559, NULL, 1, NULL, '2023-05-15', '10:40:00', '11:00:00', NULL),
(560, 7, 1, '3', '2023-05-15', '11:00:00', '11:20:00', NULL),
(561, NULL, 1, NULL, '2023-05-15', '11:20:00', '11:40:00', NULL),
(562, NULL, 1, NULL, '2023-05-15', '11:40:00', '12:00:00', NULL),
(563, NULL, 1, NULL, '2023-05-15', '12:00:00', '12:20:00', NULL),
(564, NULL, 1, NULL, '2023-05-15', '12:20:00', '12:40:00', NULL),
(565, NULL, 1, NULL, '2023-05-16', '07:00:00', '07:20:00', NULL),
(566, NULL, 1, NULL, '2023-05-16', '07:20:00', '07:40:00', NULL),
(567, NULL, 1, NULL, '2023-05-16', '07:40:00', '08:00:00', NULL),
(568, NULL, 1, NULL, '2023-05-16', '08:00:00', '08:20:00', NULL),
(569, NULL, 1, NULL, '2023-05-16', '08:20:00', '08:40:00', NULL),
(570, NULL, 1, NULL, '2023-05-16', '08:40:00', '09:00:00', NULL),
(571, NULL, 1, NULL, '2023-05-16', '09:00:00', '09:20:00', NULL),
(572, NULL, 1, NULL, '2023-05-16', '09:20:00', '09:40:00', NULL),
(573, NULL, 1, NULL, '2023-05-16', '09:40:00', '10:00:00', NULL),
(574, NULL, 1, NULL, '2023-05-16', '10:00:00', '10:20:00', NULL),
(575, NULL, 1, NULL, '2023-05-16', '10:20:00', '10:40:00', NULL),
(576, NULL, 1, NULL, '2023-05-16', '10:40:00', '11:00:00', NULL),
(577, NULL, 1, NULL, '2023-05-16', '11:00:00', '11:20:00', NULL),
(578, NULL, 1, NULL, '2023-05-16', '11:20:00', '11:40:00', NULL),
(579, NULL, 1, NULL, '2023-05-16', '11:40:00', '12:00:00', NULL),
(580, NULL, 1, NULL, '2023-05-16', '12:00:00', '12:20:00', NULL),
(581, NULL, 1, NULL, '2023-05-16', '12:20:00', '12:40:00', NULL),
(582, NULL, 1, NULL, '2023-05-17', '07:00:00', '07:20:00', NULL),
(583, NULL, 1, NULL, '2023-05-17', '07:20:00', '07:40:00', NULL),
(584, NULL, 1, NULL, '2023-05-17', '07:40:00', '08:00:00', NULL),
(585, NULL, 1, NULL, '2023-05-17', '08:00:00', '08:20:00', NULL),
(586, NULL, 1, NULL, '2023-05-17', '08:20:00', '08:40:00', NULL),
(587, NULL, 1, NULL, '2023-05-17', '08:40:00', '09:00:00', NULL),
(588, NULL, 1, NULL, '2023-05-17', '09:00:00', '09:20:00', NULL),
(589, NULL, 1, NULL, '2023-05-17', '09:20:00', '09:40:00', NULL),
(590, NULL, 1, NULL, '2023-05-17', '09:40:00', '10:00:00', NULL),
(591, NULL, 1, NULL, '2023-05-17', '10:00:00', '10:20:00', NULL),
(592, NULL, 1, NULL, '2023-05-17', '10:20:00', '10:40:00', NULL),
(593, NULL, 1, NULL, '2023-05-17', '10:40:00', '11:00:00', NULL),
(594, NULL, 1, NULL, '2023-05-17', '11:00:00', '11:20:00', NULL),
(595, NULL, 1, NULL, '2023-05-17', '11:20:00', '11:40:00', NULL),
(596, NULL, 1, NULL, '2023-05-17', '11:40:00', '12:00:00', NULL),
(597, NULL, 1, NULL, '2023-05-17', '12:00:00', '12:20:00', NULL),
(598, NULL, 1, NULL, '2023-05-17', '12:20:00', '12:40:00', NULL),
(599, NULL, 1, NULL, '2023-05-18', '07:00:00', '07:20:00', NULL),
(600, NULL, 1, NULL, '2023-05-18', '07:20:00', '07:40:00', NULL),
(601, NULL, 1, NULL, '2023-05-18', '07:40:00', '08:00:00', NULL),
(602, NULL, 1, NULL, '2023-05-18', '08:00:00', '08:20:00', NULL),
(603, NULL, 1, NULL, '2023-05-18', '08:20:00', '08:40:00', NULL),
(604, NULL, 1, NULL, '2023-05-18', '08:40:00', '09:00:00', NULL),
(605, NULL, 1, NULL, '2023-05-18', '09:00:00', '09:20:00', NULL),
(606, NULL, 1, NULL, '2023-05-18', '09:20:00', '09:40:00', NULL),
(607, NULL, 1, NULL, '2023-05-18', '09:40:00', '10:00:00', NULL),
(608, NULL, 1, NULL, '2023-05-18', '10:00:00', '10:20:00', NULL),
(609, 7, 1, NULL, '2023-05-18', '10:20:00', '10:40:00', NULL),
(610, NULL, 1, NULL, '2023-05-18', '10:40:00', '11:00:00', NULL),
(611, NULL, 1, NULL, '2023-05-18', '11:00:00', '11:20:00', NULL),
(612, NULL, 1, NULL, '2023-05-18', '11:20:00', '11:40:00', NULL),
(613, NULL, 1, NULL, '2023-05-18', '11:40:00', '12:00:00', NULL),
(614, NULL, 1, NULL, '2023-05-18', '12:00:00', '12:20:00', NULL),
(615, NULL, 1, NULL, '2023-05-18', '12:20:00', '12:40:00', NULL),
(616, NULL, 1, NULL, '2023-05-19', '07:00:00', '07:20:00', NULL),
(617, NULL, 1, NULL, '2023-05-19', '07:20:00', '07:40:00', NULL),
(618, NULL, 1, NULL, '2023-05-19', '07:40:00', '08:00:00', NULL),
(619, NULL, 1, NULL, '2023-05-19', '08:00:00', '08:20:00', NULL),
(620, NULL, 1, NULL, '2023-05-19', '08:20:00', '08:40:00', NULL),
(621, 7, 1, NULL, '2023-05-19', '08:40:00', '09:00:00', NULL),
(622, NULL, 1, NULL, '2023-05-19', '09:00:00', '09:20:00', NULL),
(623, NULL, 1, NULL, '2023-05-19', '09:20:00', '09:40:00', NULL),
(624, NULL, 1, NULL, '2023-05-19', '09:40:00', '10:00:00', NULL),
(625, NULL, 1, NULL, '2023-05-19', '10:00:00', '10:20:00', NULL),
(626, NULL, 1, NULL, '2023-05-19', '10:20:00', '10:40:00', NULL),
(627, NULL, 1, NULL, '2023-05-19', '10:40:00', '11:00:00', NULL),
(628, NULL, 1, NULL, '2023-05-19', '11:00:00', '11:20:00', NULL),
(629, NULL, 1, NULL, '2023-05-19', '11:20:00', '11:40:00', NULL),
(630, NULL, 1, NULL, '2023-05-19', '11:40:00', '12:00:00', NULL),
(631, NULL, 1, NULL, '2023-05-19', '12:00:00', '12:20:00', NULL),
(632, NULL, 1, NULL, '2023-05-19', '12:20:00', '12:40:00', NULL),
(633, NULL, 1, NULL, '2023-05-20', '07:00:00', '07:20:00', NULL),
(634, NULL, 1, NULL, '2023-05-20', '07:20:00', '07:40:00', NULL),
(635, NULL, 1, NULL, '2023-05-20', '07:40:00', '08:00:00', NULL),
(636, NULL, 1, NULL, '2023-05-20', '08:00:00', '08:20:00', NULL),
(637, NULL, 1, NULL, '2023-05-20', '08:20:00', '08:40:00', NULL),
(638, NULL, 1, NULL, '2023-05-20', '08:40:00', '09:00:00', NULL),
(639, NULL, 1, NULL, '2023-05-20', '09:00:00', '09:20:00', NULL),
(640, NULL, 1, NULL, '2023-05-20', '09:20:00', '09:40:00', NULL),
(641, NULL, 1, NULL, '2023-05-20', '09:40:00', '10:00:00', NULL),
(642, NULL, 1, NULL, '2023-05-20', '10:00:00', '10:20:00', NULL),
(643, NULL, 1, NULL, '2023-05-20', '10:20:00', '10:40:00', NULL),
(644, NULL, 1, NULL, '2023-05-20', '10:40:00', '11:00:00', NULL),
(645, NULL, 1, NULL, '2023-05-20', '11:00:00', '11:20:00', NULL),
(646, NULL, 1, NULL, '2023-05-20', '11:20:00', '11:40:00', NULL),
(647, NULL, 1, NULL, '2023-05-20', '11:40:00', '12:00:00', NULL),
(648, NULL, 1, NULL, '2023-05-20', '12:00:00', '12:20:00', NULL),
(649, NULL, 1, NULL, '2023-05-20', '12:20:00', '12:40:00', NULL),
(650, NULL, 1, NULL, '2023-05-21', '07:00:00', '07:20:00', NULL),
(651, NULL, 1, NULL, '2023-05-21', '07:20:00', '07:40:00', NULL),
(652, NULL, 1, NULL, '2023-05-21', '07:40:00', '08:00:00', NULL),
(653, NULL, 1, NULL, '2023-05-21', '08:00:00', '08:20:00', NULL),
(654, NULL, 1, NULL, '2023-05-21', '08:20:00', '08:40:00', NULL),
(655, NULL, 1, NULL, '2023-05-21', '08:40:00', '09:00:00', NULL),
(656, NULL, 1, NULL, '2023-05-21', '09:00:00', '09:20:00', NULL),
(657, NULL, 1, NULL, '2023-05-21', '09:20:00', '09:40:00', NULL),
(658, NULL, 1, NULL, '2023-05-21', '09:40:00', '10:00:00', NULL),
(659, NULL, 1, NULL, '2023-05-21', '10:00:00', '10:20:00', NULL),
(660, NULL, 1, NULL, '2023-05-21', '10:20:00', '10:40:00', NULL),
(661, NULL, 1, NULL, '2023-05-21', '10:40:00', '11:00:00', NULL),
(662, NULL, 1, NULL, '2023-05-21', '11:00:00', '11:20:00', NULL),
(663, NULL, 1, NULL, '2023-05-21', '11:20:00', '11:40:00', NULL),
(664, NULL, 1, NULL, '2023-05-21', '11:40:00', '12:00:00', NULL),
(665, NULL, 1, NULL, '2023-05-21', '12:00:00', '12:20:00', NULL),
(666, NULL, 1, NULL, '2023-05-21', '12:20:00', '12:40:00', NULL),
(667, NULL, 1, NULL, '2023-05-22', '07:00:00', '07:20:00', NULL),
(668, NULL, 1, NULL, '2023-05-22', '07:20:00', '07:40:00', NULL),
(669, NULL, 1, NULL, '2023-05-22', '07:40:00', '08:00:00', NULL),
(670, NULL, 1, NULL, '2023-05-22', '08:00:00', '08:20:00', NULL),
(671, NULL, 1, NULL, '2023-05-22', '08:20:00', '08:40:00', NULL),
(672, NULL, 1, NULL, '2023-05-22', '08:40:00', '09:00:00', NULL),
(673, NULL, 1, NULL, '2023-05-22', '09:00:00', '09:20:00', NULL),
(674, NULL, 1, NULL, '2023-05-22', '09:20:00', '09:40:00', NULL),
(675, NULL, 1, NULL, '2023-05-22', '09:40:00', '10:00:00', NULL),
(676, NULL, 1, NULL, '2023-05-22', '10:00:00', '10:20:00', NULL),
(677, NULL, 1, NULL, '2023-05-22', '10:20:00', '10:40:00', NULL),
(678, NULL, 1, NULL, '2023-05-22', '10:40:00', '11:00:00', NULL),
(679, NULL, 1, NULL, '2023-05-22', '11:00:00', '11:20:00', NULL),
(680, NULL, 1, NULL, '2023-05-22', '11:20:00', '11:40:00', NULL),
(681, 7, 1, NULL, '2023-05-22', '11:40:00', '12:00:00', NULL),
(682, NULL, 1, NULL, '2023-05-22', '12:00:00', '12:20:00', NULL),
(683, NULL, 1, NULL, '2023-05-22', '12:20:00', '12:40:00', NULL),
(684, NULL, 1, NULL, '2023-05-23', '07:00:00', '07:20:00', NULL),
(685, NULL, 1, NULL, '2023-05-23', '07:20:00', '07:40:00', NULL),
(686, NULL, 1, NULL, '2023-05-23', '07:40:00', '08:00:00', NULL),
(687, NULL, 1, NULL, '2023-05-23', '08:00:00', '08:20:00', NULL),
(688, NULL, 1, NULL, '2023-05-23', '08:20:00', '08:40:00', NULL),
(689, NULL, 1, NULL, '2023-05-23', '08:40:00', '09:00:00', NULL),
(690, NULL, 1, NULL, '2023-05-23', '09:00:00', '09:20:00', NULL),
(691, NULL, 1, NULL, '2023-05-23', '09:20:00', '09:40:00', NULL),
(692, NULL, 1, NULL, '2023-05-23', '09:40:00', '10:00:00', NULL),
(693, NULL, 1, NULL, '2023-05-23', '10:00:00', '10:20:00', NULL),
(694, NULL, 1, NULL, '2023-05-23', '10:20:00', '10:40:00', NULL),
(695, NULL, 1, NULL, '2023-05-23', '10:40:00', '11:00:00', NULL),
(696, NULL, 1, NULL, '2023-05-23', '11:00:00', '11:20:00', NULL),
(697, NULL, 1, NULL, '2023-05-23', '11:20:00', '11:40:00', NULL),
(698, NULL, 1, NULL, '2023-05-23', '11:40:00', '12:00:00', NULL),
(699, NULL, 1, NULL, '2023-05-23', '12:00:00', '12:20:00', NULL),
(700, NULL, 1, NULL, '2023-05-23', '12:20:00', '12:40:00', NULL),
(701, NULL, 1, NULL, '2023-05-24', '07:00:00', '07:20:00', NULL),
(702, NULL, 1, NULL, '2023-05-24', '07:20:00', '07:40:00', NULL),
(703, NULL, 1, NULL, '2023-05-24', '07:40:00', '08:00:00', NULL),
(704, NULL, 1, NULL, '2023-05-24', '08:00:00', '08:20:00', NULL),
(705, NULL, 1, NULL, '2023-05-24', '08:20:00', '08:40:00', NULL),
(706, NULL, 1, NULL, '2023-05-24', '08:40:00', '09:00:00', NULL),
(707, NULL, 1, NULL, '2023-05-24', '09:00:00', '09:20:00', NULL),
(708, NULL, 1, NULL, '2023-05-24', '09:20:00', '09:40:00', NULL),
(709, NULL, 1, NULL, '2023-05-24', '09:40:00', '10:00:00', NULL),
(710, NULL, 1, NULL, '2023-05-24', '10:00:00', '10:20:00', NULL),
(711, NULL, 1, NULL, '2023-05-24', '10:20:00', '10:40:00', NULL),
(712, NULL, 1, NULL, '2023-05-24', '10:40:00', '11:00:00', NULL),
(713, NULL, 1, NULL, '2023-05-24', '11:00:00', '11:20:00', NULL),
(714, NULL, 1, NULL, '2023-05-24', '11:20:00', '11:40:00', NULL),
(715, NULL, 1, NULL, '2023-05-24', '11:40:00', '12:00:00', NULL),
(716, 7, 1, NULL, '2023-05-24', '12:00:00', '12:20:00', NULL),
(717, NULL, 1, NULL, '2023-05-24', '12:20:00', '12:40:00', NULL),
(718, NULL, 1, NULL, '2023-05-25', '07:00:00', '07:20:00', NULL),
(719, NULL, 1, NULL, '2023-05-25', '07:20:00', '07:40:00', NULL),
(720, NULL, 1, NULL, '2023-05-25', '07:40:00', '08:00:00', NULL),
(721, NULL, 1, NULL, '2023-05-25', '08:00:00', '08:20:00', NULL),
(722, NULL, 1, NULL, '2023-05-25', '08:20:00', '08:40:00', NULL),
(723, NULL, 1, NULL, '2023-05-25', '08:40:00', '09:00:00', NULL),
(724, NULL, 1, NULL, '2023-05-25', '09:00:00', '09:20:00', NULL),
(725, NULL, 1, NULL, '2023-05-25', '09:20:00', '09:40:00', NULL),
(726, NULL, 1, NULL, '2023-05-25', '09:40:00', '10:00:00', NULL),
(727, NULL, 1, NULL, '2023-05-25', '10:00:00', '10:20:00', NULL),
(728, NULL, 1, NULL, '2023-05-25', '10:20:00', '10:40:00', NULL),
(729, NULL, 1, NULL, '2023-05-25', '10:40:00', '11:00:00', NULL),
(730, NULL, 1, NULL, '2023-05-25', '11:00:00', '11:20:00', NULL),
(731, NULL, 1, NULL, '2023-05-25', '11:20:00', '11:40:00', NULL),
(732, NULL, 1, NULL, '2023-05-25', '11:40:00', '12:00:00', NULL),
(733, NULL, 1, NULL, '2023-05-25', '12:00:00', '12:20:00', NULL),
(734, NULL, 1, NULL, '2023-05-25', '12:20:00', '12:40:00', NULL),
(735, NULL, 1, NULL, '2023-05-26', '07:00:00', '07:20:00', NULL),
(736, NULL, 1, NULL, '2023-05-26', '07:20:00', '07:40:00', NULL),
(737, NULL, 1, NULL, '2023-05-26', '07:40:00', '08:00:00', NULL),
(738, NULL, 1, NULL, '2023-05-26', '08:00:00', '08:20:00', NULL),
(739, NULL, 1, NULL, '2023-05-26', '08:20:00', '08:40:00', NULL),
(740, NULL, 1, NULL, '2023-05-26', '08:40:00', '09:00:00', NULL),
(741, NULL, 1, NULL, '2023-05-26', '09:00:00', '09:20:00', NULL),
(742, 7, 1, NULL, '2023-05-26', '09:20:00', '09:40:00', NULL),
(743, NULL, 1, NULL, '2023-05-26', '09:40:00', '10:00:00', NULL),
(744, NULL, 1, NULL, '2023-05-26', '10:00:00', '10:20:00', NULL),
(745, NULL, 1, NULL, '2023-05-26', '10:20:00', '10:40:00', NULL),
(746, NULL, 1, NULL, '2023-05-26', '10:40:00', '11:00:00', NULL),
(747, NULL, 1, NULL, '2023-05-26', '11:00:00', '11:20:00', NULL),
(748, NULL, 1, NULL, '2023-05-26', '11:20:00', '11:40:00', NULL),
(749, NULL, 1, NULL, '2023-05-26', '11:40:00', '12:00:00', NULL),
(750, NULL, 1, NULL, '2023-05-26', '12:00:00', '12:20:00', NULL),
(751, NULL, 1, NULL, '2023-05-26', '12:20:00', '12:40:00', NULL),
(752, NULL, 1, NULL, '2023-05-27', '07:00:00', '07:20:00', NULL),
(753, NULL, 1, NULL, '2023-05-27', '07:20:00', '07:40:00', NULL),
(754, NULL, 1, NULL, '2023-05-27', '07:40:00', '08:00:00', NULL),
(755, NULL, 1, NULL, '2023-05-27', '08:00:00', '08:20:00', NULL),
(756, NULL, 1, NULL, '2023-05-27', '08:20:00', '08:40:00', NULL),
(757, NULL, 1, NULL, '2023-05-27', '08:40:00', '09:00:00', NULL),
(758, NULL, 1, NULL, '2023-05-27', '09:00:00', '09:20:00', NULL),
(759, NULL, 1, NULL, '2023-05-27', '09:20:00', '09:40:00', NULL),
(760, 7, 1, NULL, '2023-05-27', '09:40:00', '10:00:00', NULL),
(761, NULL, 1, NULL, '2023-05-27', '10:00:00', '10:20:00', NULL),
(762, NULL, 1, NULL, '2023-05-27', '10:20:00', '10:40:00', NULL),
(763, NULL, 1, NULL, '2023-05-27', '10:40:00', '11:00:00', NULL),
(764, NULL, 1, NULL, '2023-05-27', '11:00:00', '11:20:00', NULL),
(765, NULL, 1, NULL, '2023-05-27', '11:20:00', '11:40:00', NULL),
(766, NULL, 1, NULL, '2023-05-27', '11:40:00', '12:00:00', NULL),
(767, NULL, 1, NULL, '2023-05-27', '12:00:00', '12:20:00', NULL),
(768, NULL, 1, NULL, '2023-05-27', '12:20:00', '12:40:00', NULL),
(769, NULL, 1, NULL, '2023-05-28', '07:00:00', '07:20:00', NULL),
(770, NULL, 1, NULL, '2023-05-28', '07:20:00', '07:40:00', NULL),
(771, NULL, 1, NULL, '2023-05-28', '07:40:00', '08:00:00', NULL),
(772, NULL, 1, NULL, '2023-05-28', '08:00:00', '08:20:00', NULL),
(773, NULL, 1, NULL, '2023-05-28', '08:20:00', '08:40:00', NULL),
(774, NULL, 1, NULL, '2023-05-28', '08:40:00', '09:00:00', NULL),
(775, NULL, 1, NULL, '2023-05-28', '09:00:00', '09:20:00', NULL),
(776, NULL, 1, NULL, '2023-05-28', '09:20:00', '09:40:00', NULL),
(777, NULL, 1, NULL, '2023-05-28', '09:40:00', '10:00:00', NULL),
(778, NULL, 1, NULL, '2023-05-28', '10:00:00', '10:20:00', NULL),
(779, NULL, 1, NULL, '2023-05-28', '10:20:00', '10:40:00', NULL),
(780, NULL, 1, NULL, '2023-05-28', '10:40:00', '11:00:00', NULL),
(781, NULL, 1, NULL, '2023-05-28', '11:00:00', '11:20:00', NULL),
(782, NULL, 1, NULL, '2023-05-28', '11:20:00', '11:40:00', NULL),
(783, NULL, 1, NULL, '2023-05-28', '11:40:00', '12:00:00', NULL),
(784, NULL, 1, NULL, '2023-05-28', '12:00:00', '12:20:00', NULL),
(785, NULL, 1, NULL, '2023-05-28', '12:20:00', '12:40:00', NULL),
(786, NULL, 1, NULL, '2023-05-29', '07:00:00', '07:20:00', NULL),
(787, NULL, 1, NULL, '2023-05-29', '07:20:00', '07:40:00', NULL),
(788, NULL, 1, NULL, '2023-05-29', '07:40:00', '08:00:00', NULL),
(789, NULL, 1, NULL, '2023-05-29', '08:00:00', '08:20:00', NULL),
(790, NULL, 1, NULL, '2023-05-29', '08:20:00', '08:40:00', NULL),
(791, NULL, 1, NULL, '2023-05-29', '08:40:00', '09:00:00', NULL),
(792, NULL, 1, NULL, '2023-05-29', '09:00:00', '09:20:00', NULL),
(793, NULL, 1, NULL, '2023-05-29', '09:20:00', '09:40:00', NULL),
(794, NULL, 1, NULL, '2023-05-29', '09:40:00', '10:00:00', NULL),
(795, NULL, 1, NULL, '2023-05-29', '10:00:00', '10:20:00', NULL),
(796, NULL, 1, NULL, '2023-05-29', '10:20:00', '10:40:00', NULL),
(797, NULL, 1, NULL, '2023-05-29', '10:40:00', '11:00:00', NULL),
(798, NULL, 1, NULL, '2023-05-29', '11:00:00', '11:20:00', NULL),
(799, NULL, 1, NULL, '2023-05-29', '11:20:00', '11:40:00', NULL),
(800, NULL, 1, NULL, '2023-05-29', '11:40:00', '12:00:00', NULL),
(801, NULL, 1, NULL, '2023-05-29', '12:00:00', '12:20:00', NULL),
(802, NULL, 1, NULL, '2023-05-29', '12:20:00', '12:40:00', NULL),
(803, NULL, 1, NULL, '2023-05-30', '07:00:00', '07:20:00', NULL),
(804, NULL, 1, NULL, '2023-05-30', '07:20:00', '07:40:00', NULL),
(805, NULL, 1, NULL, '2023-05-30', '07:40:00', '08:00:00', NULL),
(806, NULL, 1, NULL, '2023-05-30', '08:00:00', '08:20:00', NULL),
(807, NULL, 1, NULL, '2023-05-30', '08:20:00', '08:40:00', NULL),
(808, NULL, 1, NULL, '2023-05-30', '08:40:00', '09:00:00', NULL),
(809, NULL, 1, NULL, '2023-05-30', '09:00:00', '09:20:00', NULL),
(810, NULL, 1, NULL, '2023-05-30', '09:20:00', '09:40:00', NULL),
(811, NULL, 1, NULL, '2023-05-30', '09:40:00', '10:00:00', NULL),
(812, NULL, 1, NULL, '2023-05-30', '10:00:00', '10:20:00', NULL),
(813, NULL, 1, NULL, '2023-05-30', '10:20:00', '10:40:00', NULL),
(814, NULL, 1, NULL, '2023-05-30', '10:40:00', '11:00:00', NULL),
(815, NULL, 1, NULL, '2023-05-30', '11:00:00', '11:20:00', NULL),
(816, NULL, 1, NULL, '2023-05-30', '11:20:00', '11:40:00', NULL),
(817, NULL, 1, NULL, '2023-05-30', '11:40:00', '12:00:00', NULL),
(818, NULL, 1, NULL, '2023-05-30', '12:00:00', '12:20:00', NULL),
(819, NULL, 1, NULL, '2023-05-30', '12:20:00', '12:40:00', NULL);

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
(1, 'Jesús Vázquez', '2323', '2023-05-25', 'sds', 0, 'sdsd', 1, 'sds', 13223, '12345', 0),
(3, 'Julio Díaz', 'sfds', '2023-05-25', 'sfds', 2323, 'sfds', 1, 'sdfs', 0, '', 1),
(4, 'Erick Puc', 'sdjdsm', '2023-05-18', 'njsdmnds', 23783, 'jsjmd', 3, 'hsdj', 0, '', 0),
(5, 'Mario Villanueva', 'fdsdfs', '2023-05-24', 'sfdsfd', 0, 'sdf', 1, 'fdsfs', 0, '', 0);

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
  `contrasenaPaciente` varchar(20) NOT NULL,
  `bloqueadoPaciente` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`idPaciente`, `nombrePaciente`, `CURPPaciente`, `fechaNacimientoPaciente`, `correoPaciente`, `telefonoPaciente`, `direccionPaciente`, `contrasenaPaciente`, `bloqueadoPaciente`) VALUES
(7, 'sdfs', 'sdfd', '2023-05-11', 'sdfsf', 300, 'sdaff', '12345', 0),
(8, 'jdsjdk', 'dnmm', '2023-05-10', 'jsdmdms', 376, 'sdmmds', '', 0);

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
  MODIFY `idCita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=820;

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
