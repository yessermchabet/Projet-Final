const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
    {
        marque : String,
        modele : Number,
        nbr_Places : Number,
        nbr_Portes : Number,
        puissance : String,
        nbr_Cylindre : String,
        boite : String,
        image : {
            type : String,
            default : '/ferrari.jpg'
        }
    
    }
)

module.exports = mongoose.model('car' , carSchema)