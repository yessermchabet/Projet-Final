const express = require('express')
const Car = require('../Models/Car')

const carRouter = express.Router()

carRouter.post('/addCar',async(req,res)=>{
    try {
        
        const NovCar = new Car(req.body)

        await NovCar.save()

        res.status(200).send({msg : 'Car Added',NovCar})
        
    } catch (error) {
       res.status(500).send({msg : "I can't added this car"}) 
    }
})


carRouter.get('/getCar',async(req,res)=>{
    try {
        const Cars = await Car.find()

        res.status(200).send({msg :'Car List',Cars})
    } catch (error) {
        res.status(500).send({msg : "I Can't bring the car"})
    }
})

carRouter.delete('/deleteCar/:id',async(req,res)=>{
    try {
        
        const {id} = req.params

        await Car.findByIdAndDelete(id)

        res.status(200).send({msg : 'Car Deleted'})
    } catch (error) {
        res.status(500).send({msg : "I Can't deleted this car"})
    }
})

carRouter.put('/updateCar/:id',async(req,res)=>{
    try {
        const {id} = req.params

        await Car.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send({msg : "Car updated"})
    } catch (error) {
        res.status(500).send({msg : "I Can't updated this car"})
    }
})

carRouter.get('/getOneCar/:id',async(req,res)=>{
    try {
        const {id} = req.params

        const found = await Car.findById(id)

        res.status(200).send({msg :'Car',found})
    } catch (error) {
        res.status(500).send({msg : "I Can't bring this"})
    }
})












module.exports = carRouter 