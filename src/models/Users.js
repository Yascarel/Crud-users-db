const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Users = sequelize.define('Users', {
    first_name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
});

module.exports = Users;