const mongoose = require('mongoose')

const rendezvousSchema = new mongoose.Schema(
    {
        date : String,
        note : String,
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'person'
        },
        car : {
            type : mongoose.Types.ObjectId,
            ref : 'car'
        },
        status : {
            type : String,
            default : 'In progress'
        },
        time : String
    }
)

module.exports = mongoose.model('rendezvous' , rendezvousSchema)