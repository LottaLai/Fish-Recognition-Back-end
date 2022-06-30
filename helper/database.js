const {Sequelize, QueryTypes} = require('sequelize')
const info = require('../config.js')

exports.run_query = async function run_query(query, values){
  try{
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}/${info.config.database}`)
    await sequelize.authenticate()
    let data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.SELECT
    })
    await sequelize.close()
    return data
  }catch(error){
    console.error(error, query, values)
    throw error;//'Database query error'
  }
}

exports.run_insert = async function run_insert(query, values){
  try{
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}/${info.config.database}`)
    await sequelize.authenticate()
    //console.log('start '+values)
    let data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.INSERT
    })
    await sequelize.close()
    return data
  }catch(error){
    console.error(error)
    throw error
  }
}

exports.run_update = async function run_update(query, values){
  try{
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}/${info.config.database}`)
    await sequelize.authenticate()
    let data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.UPDATE
    })
    await sequelize.close()
    return data
  }catch(error){
    console.error(error)
    throw error
  }
}

exports.run_delete = async function run_delete(query, values){
  try{
    const sequelize = new Sequelize(`postgres://${info.config.user}:${info.config.password}@${info.config.host}/${info.config.database}`)
    await sequelize.authenticate()
    let data = await sequelize.query(query, {
      replacements: values,
      type: QueryTypes.DELETE
    })
    await sequelize.close()
    return data
  }catch(error){
    console.error(error)
    throw error
  }
}