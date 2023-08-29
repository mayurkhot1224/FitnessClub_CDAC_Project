drop database cdacproject;

create database cdacproject;

use cdacproject;

-- Create user Table
CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

-- Create branch Table
CREATE TABLE `branch` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `state` VARCHAR(255) DEFAULT NULL,
    `branch_name` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) DEFAULT NULL,
    `locality` VARCHAR(255) DEFAULT NULL,
    `phone_no` DOUBLE DEFAULT NULL,
    `zip_code` VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

-- Create manager Table
CREATE TABLE `manager` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(100) DEFAULT NULL,
    `dob` DATE DEFAULT NULL,
    `email` VARCHAR(30) DEFAULT NULL,
    `first_name` VARCHAR(20) DEFAULT NULL,
    `last_name` VARCHAR(20) DEFAULT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone_no` DOUBLE DEFAULT NULL,
    `role` VARCHAR(255) DEFAULT NULL,
    `branch_id` BIGINT DEFAULT NULL,
    `user_id` BIGINT DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_ch4c0h9mgdd2c5lategqkpsyi` (`email`),
    KEY `FKely46903crmyrake1ik9h2i6x` (`branch_id`),
    KEY `FKlx8n4x9vqj3lqv8cj9ienwrv6` (`user_id`),
    CONSTRAINT `FKely46903crmyrake1ik9h2i6x` FOREIGN KEY (`branch_id`)
        REFERENCES `branch` (`id`),
    CONSTRAINT `FKlx8n4x9vqj3lqv8cj9ienwrv6` FOREIGN KEY (`user_id`)
        REFERENCES `user` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

-- Create trainer Table
CREATE TABLE `trainer` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(100) DEFAULT NULL,
    `dob` DATE DEFAULT NULL,
    `email` VARCHAR(30) DEFAULT NULL,
    `first_name` VARCHAR(20) DEFAULT NULL,
    `last_name` VARCHAR(20) DEFAULT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone_no` DOUBLE DEFAULT NULL,
    `role` VARCHAR(255) DEFAULT NULL,
    `branch_id` BIGINT DEFAULT NULL,
    `user_id` BIGINT DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_4jrvips0u6okch0ktcu7xdaxw` (`email`),
    KEY `FK9g1upx79ns59tdoka8s8r8k14` (`branch_id`),
    KEY `FKbfajghb0yafuemho3rlbsa68h` (`user_id`),
    CONSTRAINT `FK9g1upx79ns59tdoka8s8r8k14` FOREIGN KEY (`branch_id`)
        REFERENCES `branch` (`id`),
    CONSTRAINT `FKbfajghb0yafuemho3rlbsa68h` FOREIGN KEY (`user_id`)
        REFERENCES `user` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

-- Create packages Table
CREATE TABLE `packages` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(100) DEFAULT NULL,
    `package_name` VARCHAR(20) DEFAULT NULL,
    `package_price` DOUBLE DEFAULT NULL,
    `branch` BIGINT DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `FKhkkuc8d13urry02tbjhrl2xji` (`branch`),
    CONSTRAINT `FKhkkuc8d13urry02tbjhrl2xji` FOREIGN KEY (`branch`)
        REFERENCES `branch` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

-- Create member Table
CREATE TABLE `member` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(100) DEFAULT NULL,
    `dob` DATE DEFAULT NULL,
    `email` VARCHAR(30) DEFAULT NULL,
    `first_name` VARCHAR(20) DEFAULT NULL,
    `last_name` VARCHAR(20) DEFAULT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone_no` DOUBLE DEFAULT NULL,
    `role` VARCHAR(255) DEFAULT NULL,
    `branch_id` BIGINT DEFAULT NULL,
    `trainer_id` BIGINT DEFAULT NULL,
    `user_id` BIGINT DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_mbmcqelty0fbrvxp1q58dn57t` (`email`),
    KEY `FK1uj76dnpxoa9i8afaaslycb59` (`branch_id`),
    KEY `FK69nb5p8qg4vcwj2m5nc0cnag9` (`trainer_id`),
    KEY `FKswb523yn1xw3806ojrfpcyadl` (`user_id`),
    CONSTRAINT `FK1uj76dnpxoa9i8afaaslycb59` FOREIGN KEY (`branch_id`)
        REFERENCES `branch` (`id`),
    CONSTRAINT `FK69nb5p8qg4vcwj2m5nc0cnag9` FOREIGN KEY (`trainer_id`)
        REFERENCES `trainer` (`id`),
    CONSTRAINT `FKswb523yn1xw3806ojrfpcyadl` FOREIGN KEY (`user_id`)
        REFERENCES `user` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

-- Create batch Table
CREATE TABLE `batch` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `batch_time` TIME DEFAULT NULL,
    `batch_type` VARCHAR(20) DEFAULT NULL,
    `branch` BIGINT DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `FKaby40uo5xckgchmgw6hcpvjin` (`branch`),
    CONSTRAINT `FKaby40uo5xckgchmgw6hcpvjin` FOREIGN KEY (`branch`)
        REFERENCES `branch` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

-- Create payment Table
CREATE TABLE `payment` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `amount` DOUBLE DEFAULT NULL,
    `date` DATETIME(6) DEFAULT NULL,
    `mmeber` BIGINT DEFAULT NULL,
    `package` BIGINT DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `FKnx3wgg37ckfgx8d9x5g0eum87` (`mmeber`),
    KEY `FKbfru3b4oif3tsf3seqxhncx6o` (`package`),
    CONSTRAINT `FKbfru3b4oif3tsf3seqxhncx6o` FOREIGN KEY (`package`)
        REFERENCES `packages` (`id`),
    CONSTRAINT `FKnx3wgg37ckfgx8d9x5g0eum87` FOREIGN KEY (`mmeber`)
        REFERENCES `member` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

-- Create report Table
CREATE TABLE `report` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `diet` VARCHAR(1000) DEFAULT NULL,
    `height` DOUBLE NOT NULL,
    `weight` DOUBLE NOT NULL,
    `todays_workout` VARCHAR(1000) DEFAULT NULL,
    `member_id` BIGINT DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `FKel7y5wyx42a6njav1dbe2torl` (`member_id`),
    CONSTRAINT `FKel7y5wyx42a6njav1dbe2torl` FOREIGN KEY (`member_id`)
        REFERENCES `member` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;


