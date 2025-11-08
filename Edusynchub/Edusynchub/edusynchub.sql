-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS edusynchub;

-- Use the created database
USE edusynchub;

-- Create the students table if it does not exist
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(100) NOT NULL,
    branch VARCHAR(255) NOT NULL,
    semester VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    confirmpassword VARCHAR(255) NOT NULL
);

-- Check the privileges of the user 'pma'
SELECT * FROM `mysql`.`db` WHERE `User` = 'pma' AND `Host` = 'localhost' ORDER BY `Db` ASC;
