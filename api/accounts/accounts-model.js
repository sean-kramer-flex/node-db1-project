const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
}

const getById = id => {
  return db('accounts')
  .where({id})
  .first()
}

const create = account => {
  return db.insert(account)
  .into('accounts')
}

const updateById = (id, account) => {
  return db('accounts').update(account)
  .where({id})
  
}

const deleteById =  id => {
  return db('accounts')
  .where({id})
  .del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
