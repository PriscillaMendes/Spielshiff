SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema spielshiff
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `spielshiff` ;
CREATE SCHEMA IF NOT EXISTS `spielshiff` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `spielshiff` ;

-- -----------------------------------------------------
-- Table `spielshiff`.`gameplays`
-- -----------------------------------------------------
DROP TABLE IF EXISTS gameplays;

CREATE TABLE IF NOT EXISTS gameplays (
  gam_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  game_name VARCHAR(100) NOT NULL,
  reg_user_email VARCHAR(50) NOT NULL,
  video_gameplay BLOB NOT NULL
);

ALTER TABLE user ADD CONSTRAINT email_un UNIQUE (reg_user_email);