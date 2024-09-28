const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.join(__dirname, '../api-docs.yaml'));

const { db } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;

        this.paths = {
            auth: '/api/v1/articles'
        }

        // Connect to db
        this.conectarDB();

        // Enable middlewares
        this.middlewares();

        // Api routes
        this.routes();
    }

    async conectarDB() {
        await db.authenticate().then(() => {
                console.log('SQL database connection established.');
            })
            .catch(err => {
                console.error('Could not connect to database:', err);
            });
    }


    middlewares() {

        // Add swagger to api
        this.app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        // CORS
        this.app.use(cors());

        // Body config
        this.app.use(express.json());

    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/articles'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }

}




module.exports = Server;