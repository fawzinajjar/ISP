
const { Sequelize, DataTypes } = require('sequelize')
const config = require('../../config.json')

class db {
  constructor (config){

    // Connection to SQLITE3 Database
    this.sequelize = new Sequelize('sqlite:' + `${config.database.SQLITE3.PATH}`,{
      logQueryParameters : console.log,
      logging : console.log
    });
  }

query_sqlite = async (query_string) => {
  try {
    return await this.sequelize.query(`${query_string}`)
  } catch (error) {
    console.log(error)
  }
}

}

// DataBase Methods


module.exports = new db(config)