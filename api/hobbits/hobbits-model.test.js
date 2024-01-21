/* eslint-disable no-undef */
const request = require("supertest")
const Hobbit = require('./hobbits-model')
const db = require('../../data/db-config')
const server = require('../server')
beforeAll(async () => {
    await db.migrate.rollback(); // so any changes to migration files are picked up
    await db.migrate.latest();
  })
  beforeEach(async () => {
    await db('hobbits').truncate()
  })

  afterAll(async ()=>{
    await db.destroy()
  })
test('environment is testing', ()=>{
    // eslint-disable-next-line no-undef
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('Hobbit model functions', ()=>{
  describe('create a hobbit', ()=>{
    it('adds a new hobbit to the database', async ()=>{
        let newHobbit = {name: "bilbo"}
        await Hobbit.insert(newHobbit)
        let hobbits = await Hobbit.getAll()
        expect(hobbits).toHaveLength(1)
    })
    it('deletes a hobbit from the database', async ()=>{
         await Hobbit.insert({name: "gaffer"});
         await Hobbit.insert({name: 'sam'});
         await Hobbit.remove(1)
         const hobbits = await db('hobbits')
         expect(hobbits).toHaveLength(1)
    })
  })
})
