const express = require('express')
const { test, addCar, getCars, getCarById, deleteCar, editCar } = require('../controllers/carControllers')

const Router = express.Router()


Router.get('/test', test)

Router.post('/add-car', addCar)

Router.get('/get-cars', getCars)

Router.get('/get-car/:id', getCarById)

Router.delete('/delete-car/:id', deleteCar)

Router.put('/update-car/:id', editCar)

module.exports = Router