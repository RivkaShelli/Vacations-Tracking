-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2022 at 09:04 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_3`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `first_name` varchar(20) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(20) COLLATE utf8_bin NOT NULL,
  `username` varchar(20) COLLATE utf8_bin NOT NULL,
  `password` varchar(20) COLLATE utf8_bin NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `username`, `password`, `is_admin`) VALUES
(1, 'Rivka', 'Shelli', 'Rivki', 'abc123', 1),
(2, 'Michael', 'Shelli', 'Miki', '123abc', 0),
(3, 'Avigail', 'Shelli', 'Guli', '789to', 0),
(4, 'Noa', 'Raz', 'noa', 'asd456', 0),
(5, 'Shir', 'Maoz', 'shiri', '378md', 0);

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` int(255) NOT NULL,
  `description` varchar(255) COLLATE utf8_bin NOT NULL,
  `destination` varchar(20) COLLATE utf8_bin NOT NULL,
  `picture` varchar(20) COLLATE utf8_bin NOT NULL,
  `date_from` date NOT NULL,
  `date_to` date NOT NULL,
  `price` int(255) NOT NULL,
  `followers` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`id`, `description`, `destination`, `picture`, `date_from`, `date_to`, `price`, `followers`) VALUES
(1, 'A pampering vacation...', 'London', 'london', '2022-06-07', '2022-06-14', 3500, 4),
(2, 'A pampering vacation...', 'Paris', 'paris', '2022-07-21', '2022-07-31', 3200, 2),
(3, 'A pampering vacation...', 'Bora', 'bora', '2022-06-20', '2022-06-29', 4000, 2),
(4, 'A pampering vacation...', 'Dubai', 'dubai', '2022-07-12', '2022-07-26', 5000, 1),
(5, 'A pampering vacation...', 'Barcelona', 'barcelona', '2022-07-20', '2022-07-27', 4200, 2),
(7, 'A pampering vacation...', 'Istanbul', 'istanbul', '2022-08-16', '2022-08-26', 4800, 3),
(8, 'A pampering vacation...', 'Burgas', 'burgas', '2022-09-01', '2022-09-07', 2500, 0),
(9, 'A pampering vacation...', 'San', 'san', '2022-09-21', '2022-09-28', 6000, 0),
(10, 'A pampering vacation...', 'Maldives', 'maldives', '2022-10-02', '2022-10-11', 5200, 0),
(11, 'A pampering vacation...', 'Newyork', 'newyork', '2022-07-28', '2022-07-31', 5400, 0),
(12, 'A pampering vacation...', 'Napa', 'napa', '2022-10-25', '2022-11-01', 3900, 1),
(13, 'A pampering vacation...', 'Vegas', 'vegas', '2022-11-02', '2022-11-10', 4700, 0),
(14, 'very good..', 'Rio', 'rio', '2022-11-16', '2022-11-30', 7500, 1),
(15, 'A pampering vacation...', 'Tokyo', 'tokyo', '2022-12-12', '2022-12-22', 6200, 1),
(16, 'A pampering vacation...', 'Zanzibar', 'zanzibar', '2023-01-03', '2023-01-24', 8900, 0),
(24, 'so fun...', 'Amsterdam', 'amsterdam', '2022-08-26', '2022-08-26', 4700, 0);

-- --------------------------------------------------------

--
-- Table structure for table `vacations_followers`
--

CREATE TABLE `vacations_followers` (
  `vacation_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `vacations_followers`
--

INSERT INTO `vacations_followers` (`vacation_id`, `user_id`) VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 3),
(2, 5),
(3, 2),
(3, 4),
(4, 4),
(5, 2),
(5, 3),
(7, 2),
(7, 4),
(7, 5),
(12, 3),
(14, 2),
(15, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vacations_followers`
--
ALTER TABLE `vacations_followers`
  ADD PRIMARY KEY (`vacation_id`,`user_id`),
  ADD KEY `from users to vacation_followers` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `vacations_followers`
--
ALTER TABLE `vacations_followers`
  ADD CONSTRAINT `from users to vacation_followers` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `from vacations to vacations_followers` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
