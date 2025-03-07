const express = require('express')
const Rendezvous = require('../Models/Rendezvous')
const { IsAuth } = require('../Middlewares/IsAuth')


const rendezvousRouter = express.Router()

rendezvousRouter.post('/addRendezvous',async(req,res)=>{
    try {
        
        const NovRendezVous = new Rendezvous(req.body)

        await NovRendezVous.save()

        res.status(200).send({msg : 'Rendezvous Added',NovRendezVous})
        
    } catch (error) {
       res.status(500).send({msg : "I can't added this rendez vous"}) 
    }
})


rendezvousRouter.get('/getRendezvous',async(req,res)=>{
    try {
        const rendezvous = await Rendezvous.find().populate('owner').populate('car')

        res.status(200).send({msg :'Rendez vous List',rendezvous})
    } catch (error) {
        res.status(500).send({msg : "I Can't bring the rendez vous"})
    }
})

rendezvousRouter.get('/getMyRendezvous',IsAuth,async(req,res)=>{
    try {
        
        

        const rendezvous = await Rendezvous.find({owner : req.user._id }).populate('owner').populate('car')

        res.status(200).send({msg :'Rendez vous List',rendezvous})
    } catch (error) {
        res.status(500).send({msg : "I Can't bring the rendez vous"})
    }
})

rendezvousRouter.delete('/deleteRendezvous/:id',async(req,res)=>{
    try {
        
        const {id} = req.params

        await Rendezvous.findByIdAndDelete(id)

        res.status(200).send({msg : 'Rendez vous Deleted'})
    } catch (error) {
        res.status(500).send({msg : "I Can't deleted this rendez vous"})
    }
})

rendezvousRouter.put('/updateRendezvous/:id',async(req,res)=>{
    try {
        const {id} = req.params

        await Rendezvous.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send({msg : "Rendez vous updated"})
    } catch (error) {
        res.status(500).send({msg : "I Can't updated this rendez vous"})
    }
})

// rendezvousRouter.get('/getOneCar/:id',async(req,res)=>{
//     try {
//         const {id} = req.params

//         const found = await Car.findById(id)

//         res.status(200).send({msg :'Car',found})
//     } catch (error) {
//         res.status(500).send({msg : "I Can't bring this"})
//     }
// })












module.exports = rendezvousRouter 