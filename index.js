import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './dbcofig/dbconnection.js'
import user from './dbmodel/user.js'

const app = express()

app.use(cors())
app.use(express.json())


connectDB({})



app.get('/', (req, res) => { 
   //console.log(req,"request")
  res.send('Hello World')
})

app.get('/login', (req, res) => {
    const person = {
        name: 'akhil',
        age: 20,
        email: 'akhil@gmail.com',
        place: 'tvm'
    }
    res.json({data: person});
})

app.post('/sign', (req, res) => {
  
    const { name, email } = req.body;
    user.insertOne({name,email})
    // Here you would typically handle the signup logic, e.g., saving user data to a database
    // For now, we'll just send a response back
    console.log("form submitted")
    res.json({status:true})
})



app.listen(3001, () => {
    console.log('hiii')
    console.log('Server is running on http://localhost:3001')
})