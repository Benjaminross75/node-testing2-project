const db = require('../../data/db-config')

module.exports = {
    insert,
    remove,
    getAll,

};

async function insert(hobbit) {
     const [id] = await db('hobbits').insert(hobbit);
     return db('hobbits').where({ id }).first();

  }




  function remove(id) {
    return db('hobbits').where({id}).delete()

  }

  function getAll() {
    return db('hobbits');
  }
