# Articles API

![Node.js](https://img.icons8.com/color/48/000000/nodejs.png) ![Express](https://img.icons8.com/color/48/000000/express.png)

## Overview

This API was developed using **Node.js** and **Express** to manage a catalog of articles. The API allows clients to perform operations such as retrieving article details and updating specific article attributes.

## Database Schema

The API utilizes a SQL Server database hosted on Amazon RDS. The schema for the `Article` model is as follows:

- **id**: `STRING(10)` - Unique identifier for each article. Not updatable.
- **name**: `STRING(20)` - Name of the article. Not updatable.
- **description**: `STRING(200)` - General description of the article. Updatable.
- **price**: `DECIMAL(10, 2)` - Price of the article, formatted to two decimal places. Not updatable.
- **model**: `STRING(10)` - Model of the article. Updatable.

You can create the database locally on SQL Server using this following file: [dbarticlesapi.sql](https://github.com/David117M-a/articles-api/blob/master/dbarticlesapi.sql)

## Deployment

The API is deployed on an **Amazon EC2** instance, allowing it to be accessible over the internet. The API can be consumed at the following address: 
[text](http://your-ec2-public-dns:8080/test/api)

## Environment Variables

The application relies on the following environment variables, which should be defined in a `.env` file:

```.env
PORT=
DB_HOST=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
```

- **PORT**: The port on which the API will run.
- **DB_HOST**: The hostname of the SQL Server database.
- **DB_NAME**: The name of the database.
- **DB_USERNAME**: The username to access the database.
- **DB_PASSWORD**: The password for the database user.

> **Note:** Ensure to keep your `.env` file secure and do not expose sensitive information.

## How to Run Locally

To run the API locally, you can use the following commands defined in the `package.json` file:

```json
"scripts": {
    "dev": "nodemon app.js",
    "start": "node dist/bundle.js",
    "build": "webpack --config webpack.config.js"
}
```

## Commands Explained

- **`npm run dev`**: This command starts the application in development mode using **Nodemon**, which will automatically restart the server whenever changes are made to the code.

- **`npm start`**: This command starts the production version of the application by executing the bundled file generated by **Webpack** located in the `dist` directory.

- **`npm run build`**: This command compiles the source code using **Webpack**, creating a production-ready bundle in the `dist` directory.