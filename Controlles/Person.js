const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const Person = require('../Models/Person');
exports.SignUp = async(req,res)=>{
    try {
       const {email , password} = req.body
       const Found = await Person.findOne({email})
       if (Found) {
        return res.status(400).send({errors : [{msg : 'Email already exists'}]})
       }
       const contactNew = new Person(req.body)

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
       
        contactNew.password = hashedPassword

        
        await contactNew.save()

        payload = { id : contactNew._id }
        var token = jwt.sign(payload , process.env.privatekey , { expiresIn: '1h' });

        res.status(200).send({msg : 'Account created' , contactNew , token})

    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not create account'}]})
    }
}

exports.SignIn = async(req,res)=>{
    try {
        const {email,password} = req.body

        const Found = await Person.findOne({email})

        if (!Found) {
            return res.status(400).send(({errors : [{msg : 'Email doesent exist'}]}))
        }

        const Matched = bcrypt.compareSync(password, Found.password)
    
        if (!Matched) {
            return res.status(400).send({errors : [{msg : "Wrong password"}]})
        }

        payload = { id : Found._id }
        var token = jwt.sign(payload , process.env.privatekey , { expiresIn: '1h' });

        res.status(200).send({msg : 'Logged In' , Found , token })

    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not logged in'}]})
    }
}

exports.GetUsers = async(req,res)=>{
    try {
        const persons = await Person.find()

        res.status(200).send({msg :'Persons list',persons})
    } catch (error) {
        res.status(500).send({msg : 'Manajmch njib'})
    }
}

exports.DeleteUser = async(req,res)=>{
    try {
        
        const {id} = req.params

        await Person.findByIdAndDelete(id)

        res.status(200).send({msg : 'Person Deleted'})
    } catch (error) {
        res.status(500).send({msg : 'Manajmch nfasa5'})
    }
}

exports.UpdateUser = async(req,res)=>{
    try {
        const {id} = req.params

        await Person.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send({msg : "Contact updated"})
    } catch (error) {
        res.status(500).send({msg : 'Manajmch nupdati'})
    }
}