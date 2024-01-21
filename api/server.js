const express = require('express');
const Hobbits = require('./hobbits/hobbits-model.js')
const server = express()

server.use(express.json())

server.get('/', async (req, res) =>{
    res.status(200).json({api: 'up and running'})
});

server.get("/hobbits", (req, res) => {
    Hobbits.getAll()
      .then(hobbits => {
        res.status(200).json(hobbits);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });


server.use((err, req, res, next)=>{
    res.status(500).json({
        customMessage: 'Something went way wrong',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server
