const mongoose = require('mongoose')

const personSchema = new mongoose.Schema(
    {
        name : String,
        email : {type : String, unique : true, required : true},
        password : {type : String, required : true},
        role : {type : String, default :'user'},
        image : {
            type : String,
            default : '/user.png'
        }
    }
)

module.exports = mongoose.model('person' , personSchema)