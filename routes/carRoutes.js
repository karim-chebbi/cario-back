const express = require('express')
const { test, addCar, getCars, getCarById, deleteCar, editCar, getMyCars } = require('../controllers/carControllers')
const isAuth = require("../middlewares/isAuth");

const Router = express.Router()


Router.get('/test', test)

Router.post('/add-car',isAuth, addCar)

Router.get('/get-cars', getCars)

Router.get('/get-car/:id', getCarById)

Router.delete('/delete-car/:id', deleteCar)

Router.put('/update-car/:id', editCar)


Router.get("/get-my-cars", isAuth, getMyCars);

module.exports = Router