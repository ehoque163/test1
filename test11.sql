-- phpMyAdmin SQL Dump
-- version 4.7.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 30, 2021 at 04:52 PM
-- Server version: 8.0.26-0ubuntu0.20.04.2
-- PHP Version: 7.3.29-1+ubuntu20.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test11`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `userDesc` varchar(50) NOT NULL,
  `regTime` datetime NOT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `userName`, `userDesc`, `regTime`, `createdAt`, `updatedAt`) VALUES
(1, 'ehoque163@gmail.com', '$2b$10$9QrTYsg5mt2PIFXMwvUTHeEGUfHCcs4Rb7nASX47JJA6KVcAt2HkC', 'enjamamul hoque', 'developer', '2021-07-27 13:00:00', '2021-07-27 14:02:01', '2021-07-27 14:02:01'),
(2, 'nilotpal.saha00@gmail.com', '$2b$10$9QrTYsg5mt2PIFXMwvUTHeEGUfHCcs4Rb7nASX47JJA6KVcAt2HkC', 'nilotpal saha', 'Senior developer', '2021-07-27 13:00:00', '2021-07-27 14:02:01', '2021-07-27 14:02:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
