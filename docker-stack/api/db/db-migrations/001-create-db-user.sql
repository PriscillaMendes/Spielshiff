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
-- Table `spielshiff`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
  usr_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usr_name VARCHAR(100) NOT NULL,
  usr_email VARCHAR(100) NOT NULL,
  usr_password VARCHAR(100) NOT NULL,
  usr_uname VARCHAR(100) NOT NULL
);

-- ALTER TABLE user ADD CONSTRAINT pk_usr PRIMARY KEY (usr_id);
ALTER TABLE user ADD CONSTRAINT email_un UNIQUE (usr_email);
ALTER TABLE user ADD CONSTRAINT user_name_un UNIQUE (usr_uname);

-- -----------------------------------------------------
-- Table `spielshiff`.`usrlists`
-- -----------------------------------------------------
DROP TABLE IF EXISTS usrlists;

CREATE TABLE IF NOT EXISTS usrlists (
  usrlist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  gamelist_name VARCHAR(100) NOT NULL,
  usr_id INT NOT NULL,
  CONSTRAINT fk_UsrList FOREIGN KEY (usr_id) REFERENCES user (usr_id)
);

-- -----------------------------------------------------
-- Table `spielshiff`.`gameslist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS gameslist;

CREATE TABLE IF NOT EXISTS gameslist (
  gameslist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  game_id INT NOT NULL,
  usrlist_id INT NOT NULL,
  CONSTRAINT fk_UsrGameslist FOREIGN KEY (usrlist_id) REFERENCES usrlists (usrlist_id)
);


CREATE TABLE IF NOT EXISTS userInfo (
  userInfo_id INT NOT NULL,
  userInfo_description TEXT

);

ALTER TABLE userInfo ADD CONSTRAINT fk_userInfo_id FOREIGN KEY (userInfo_id) REFERENCES user (usr_id);

-- Quem te segue
CREATE TABLE IF NOT EXISTS userFollows (
  usrId INT NOT NULL,
  followId INT NOT NULL 
);

ALTER TABLE userFollows ADD CONSTRAINT fk_userFollows_usrId FOREIGN KEY (usrId) REFERENCES user (usr_id);
ALTER TABLE userFollows ADD CONSTRAINT fk_userFollows_followId FOREIGN KEY (followId) REFERENCES user (usr_id);

-- Quem eu tô seguindo
CREATE TABLE IF NOT EXISTS userFollowing (
  usrId INT NOT NULL,
  followId INT NOT NULL
);

ALTER TABLE userFollowing ADD CONSTRAINT fk_userFollowing_usrId FOREIGN KEY (usrId) REFERENCES user (usr_id);
ALTER TABLE userFollowing ADD CONSTRAINT fk_userFollowing_followId FOREIGN KEY (followId) REFERENCES user (usr_id);

CREATE TABLE IF NOT EXISTS userFeedImg(
  imgId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usrId INT NOT NULL,
  imgKey VARCHAR(150) NOT NULL,
  imgUrl VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS userFeedPub(
  pubId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pubUsrId INT NOT NULL,
  pubImgId INT NOT NULL,
  pubText TEXT,
  pubGameName VARCHAR(150)
);

ALTER TABLE userFeedImg ADD CONSTRAINT fk_userFeed_usrId FOREIGN KEY (usrId) REFERENCES user (usr_id);
ALTER TABLE userFeedPub ADD CONSTRAINT fk_userFeedPub_imgId FOREIGN KEY (pubImgId) REFERENCES userFeedImg (imgId);
ALTER TABLE userFeedPub ADD CONSTRAINT fk_userFeedPub_pubUsrId FOREIGN KEY (pubUsrId) REFERENCES user (usr_id);

