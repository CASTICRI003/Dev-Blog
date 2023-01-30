# Dev-Blog

## Description
This app was made for anyone that wants to post their developer questions (or answers) and share what they think is cool in the world of tech. It was made using the MVC architectural structure. Handlebars was used as the tempate engine. Sequelize was used as the ORM. Express-Session was used for authentication.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)

  ## Installation
   In order to run this application in your personal workspace you will need to have Node.js installed and also install npm packages. Then clone this repo to your repository. 
   Make sure you have bcrypt, MySQL2, Sequelize, dotenv, express-handlebars, express-session, connect-session, and Express.js installed.

   ## Usage
   Start MySQL database using the following commands:

    mysql -u root -p
    "Enter your password"
    source db/schema.sql
    exit

  In your terminal:
    
    npm run seed
    npm start

    ## Credits
    Cristian Castillo
    Google
    stackoverflow
    w3schools