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

You can create the database locally on SQL Server using this following file: 
[dbarticlesapi.sql](https://github.com/David117M-a/articles-api/blob/master/dbarticlesapi.sql)

## Deployment

The API is deployed on an **Amazon EC2** instance, allowing it to be accessible over the internet trough address http://18.118.126.82:80/api/v1. You can also check the Swagger documentation of the API in the same address: 
[Documentation](http://18.118.126.82:80/api/v1)

Additionally, this is the yaml file used to define the Swagger documentation:
[api-docs.yaml](https://github.com/David117M-a/articles-api/blob/master/api-docs.yaml)

## AWS Settings for Deployment

### 1. Amazon RDS Instance (SQL Server)

The API uses **Amazon RDS** to host a **SQL Server** database instance. Below are the settings used to configure the RDS instance using the **Free Tier**:

**RDS Configuration**:
- **Engine**: Microsoft SQL Server
- **Instance Type**: `db.t3.micro` (eligible for free tier)
- **Storage Type**: General Purpose SSD (GP2)
- **Allocated Storage**: 20 GB (Free Tier allows up to 20 GB of storage for databases)
- **Region**: Choose a region where Free Tier is available, for example, `us-east-1` (Northern Virginia).
- **VPC Security Groups**: Ensure your security group allows access to the EC2 instance IP and specific port (usually `1433` for SQL Server).

**Database Details**:
- **DB Name**: `dbarticlesapi`
- **Master Username**: `admin`
- **Port**: `1433` (default port for SQL Server)

**Backup Settings**:
- **Automatic Backups**: Enabled (Free Tier offers up to 20 GB of backup storage).

The Database was created connecting directly to the RDS instance using the EC2 Instance Connect tool from aws console.

---

### 2. Amazon EC2 Instance (for API Deployment)

The API is deployed on an **Amazon EC2** instance. Below are the settings used for the EC2 instance, configured using the **Free Tier**:

**EC2 Configuration**:
- **Instance Type**: `t2.micro` (eligible for free tier)
- **Operating System**: Ubuntu 20.04 (free tier eligible)
- **VPC Security Groups**: Ensure that the EC2 instance allows traffic on port `80` and `8080` (or the port used by your API), and restrict access to trusted IP addresses for security.

**Storage**:
- **EBS Volume**: 30 GB General Purpose SSD (Free Tier allows up to 30 GB of storage).

**Key Pair**: If you did not use the default key pair (`.pem` file) to connect to the EC2 instance, ensure you use SSH or setup access via a username/password.

**Steps to Configure EC2**:
1. **Install Node.js** and dependencies:
   ```bash
   sudo apt update
   sudo apt install nodejs
   sudo apt install npm
    ```
2. **Clone Repository**:
   ```bash
   git clone https://github.com/David117M-a/articles-api.git
   cd articles-api
   npm install
    ```
3. **Enter to repo folder and create .env with nano** press ctrl+x then Y and then enter to save:
   ```bash
   nano .env
    ```
4. **Execute npm run build** to create a production version of the API:
   ```bash
   npm run build
    ```
5. **Finally execute npm run start** to intialize the API:
   ```bash
   npm run start
    ```
Now the API should be available in address http://18.118.126.82:80/api/v1 as mentioned before.

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

To run the API locally, first clone the repository on your local, open a command prompt line window and enter into the repo folder, then you can use the following commands defined in the `package.json` file:

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