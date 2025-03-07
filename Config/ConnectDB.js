const mongoose = require('mongoose')


const ConnectDB=async()=>{
    try {
        await mongoose.connect(process.env.MongoURI)
        console.log('DB id connected')
    } catch (error) {
     console.log(error)   
    }
}


module.exports = ConnectDB