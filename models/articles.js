const { DataTypes } = require('sequelize');
const sequelizeNoUpdateAttributes = require('sequelize-noupdate-attributes');
const { db } = require('../database/config');

sequelizeNoUpdateAttributes(db);

const Articles = db.define('Articles', {
    id: {
        type: DataTypes.STRING(10),
        noUpdate: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20),
        noUpdate: true

    },
    description: {
        type: DataTypes.STRING(200)
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        noUpdate: true,
        get() {
            const rawValue = this.getDataValue('price');
            return rawValue !== null ? parseFloat(rawValue).toFixed(2) : null;
        }
    },
    model: {
        type: DataTypes.STRING(10)
    }
}, { timestamps: false });


module.exports = {
    Articles
}