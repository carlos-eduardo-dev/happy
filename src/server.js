// import dependences
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// init express
const server = express()

// server config
server

// use body from req
.use(express.urlencoded({extended: true}))

// set static files
.use(express.static('public'))

// congif template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// create routes
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createorphanage)
.post('/save-orphanage', pages.saveOrphanage)

// up server
server.listen(5500)