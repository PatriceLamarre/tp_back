const { Sequelize } = require('sequelize');
//require('dotenv').config();

/*const dbConnection = new Sequelize(process.env.MYSQL_URL, 
    {
        dialect: 'mysql',
        logging: false
    }
)*/


/*const dbConnection = new Sequelize(process.env.MYSQL_URL, 
    {
        dialect: 'mysql',
        logging: false
    }
)*/
/*const dbConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    
});*/
const dbConnection = new Sequelize('proyecto-final', 'root', '', 
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
)


module.exports = {dbConnection}

/*
const dbConnection = new Sequelize('proyecto-final', 'root', '', 
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
)
*/