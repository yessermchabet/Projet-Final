const express = require("express")
const ConnectDB = require("./Config/ConnectDB")
const personRouter = require("./Routes/Person")
const carRouter = require("./Routes/Car")
const rendezvousRouter = require("./Routes/Rendezvous")

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/api/auth',personRouter)

app.use('/api/car',carRouter)

app.use('/api/rendezvous',rendezvousRouter)



app.listen(process.env.port, console.log(`Server is running on the port ${process.env.port}`)
)