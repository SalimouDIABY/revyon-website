-- Script de création de la table contacts pour la base de données MySQL

CREATE DATABASE IF NOT EXISTS `revyontech` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `revyontech`;

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` BIGINT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `service` VARCHAR(100) NOT NULL,
  `subject` VARCHAR(255) DEFAULT '',
  `message` TEXT NOT NULL,
  `status` VARCHAR(50) NOT NULL DEFAULT 'new',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
