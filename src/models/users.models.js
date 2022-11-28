const db = require('../utils/database')
const { DataTypes } = require('sequelize')
/* Modelo de la Tabla users
{
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "password": "string",
    "birthday": "Y"YYY/MM/DD"
}
*/

const Users = db.define('user',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false 
})

module.exports = Users



