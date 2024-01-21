const db = require('../../data/db-config')

module.exports = {
    insert,
    update,
    remove,
    getAll,
    getById
};

async function insert(hobbit) {
    const [id] = await db('hobbits').insert(hobbit);
    return db('hobbits').where({ id }).first();
  }

  async function update(id, changes) {
    return null
  }


  function remove(id) {
    return null
  }

  function getAll() {
    return db('hobbits');
  }

  function getById(id) {
    return null
  }
