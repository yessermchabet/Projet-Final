const express = require('express')
const { SignUp, SignIn, GetUsers, DeleteUser, UpdateUser } = require('../Controlles/Person');
const { VerifSignUp, Validation, VerifSignIn } = require('../Middlewares/VerfiMid');
const { IsAuth } = require('../Middlewares/IsAuth');
const Person = require('../Models/Person');

const personRouter = express.Router()

personRouter.post('/SignUp',VerifSignUp,Validation,SignUp)

personRouter.post('/SignIn',VerifSignIn,Validation,SignIn)

personRouter.get('/CurrentUser',IsAuth,(req,res)=> res.send(req.user))

personRouter.get('/getUsers', GetUsers)

personRouter.delete('/deleteUser/:id', DeleteUser)

personRouter.put('/updateUser/:id', UpdateUser)

personRouter.get('/getOneUser/:id',async(req,res)=>{
    try {
        const {id} = req.params

        const found = await Person.findById(id)

        res.status(200).send({msg :'User',found})
    } catch (error) {
        res.status(500).send({msg : 'Manajmch njib'})
    }
})




module.exports = personRouter   