const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  async index(require, response){
    const ongs = await connection('ongs').select('*')
    return response.json(ongs)
  },

  async create(require, response){
    //async pq pode demorar p registrar no banco
  const {name, email, whatsapp, city, uf} = require.body
  const id = crypto.randomBytes(4).toString('HEX')
  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  })

  return response.json({id})
  }
}