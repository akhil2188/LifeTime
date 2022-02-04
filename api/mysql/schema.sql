ALTER USER root IDENTIFIED WITH mysql_native_password BY 'password1'; FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS code_test;

USE code_test;

DROP TABLE IF EXISTS `results`;
CREATE TABLE `results` (
  id bigint unsigned NOT NULL AUTO_INCREMENT,
  bib VARCHAR(256) NOT NULL,
  name VARCHAR(64) NOT NULL,
  time int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`bib`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
