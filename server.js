const express=require('express')
const mongoose = require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const app=express()
const aut=require('./routes/auth')
const port =process.env.PORT || 9000

const validator = require('validator')

// const router=require('../routes/auth')

mongoose.set('useCreateIndex', true)

mongoose.connect('mongodb://localhost:27017/login_singup',{ useNewUrlParser: true ,useUnifiedTopology:true})
.then(()=>console.log('connecton sucessful '))
.catch((err)=>console.log(err))

app.use(express.json())

app.use(morgan('dev'))
app.get('/',(req,res)=>{
    res.send('hello this is my name is riyaz khan')
})
app.post('/riyaz',(req,res)=>{ 
    let user=req.body
    res.send(user)
    console.log(user)
    res.send('hello this is my name is riyaz khan')
})

// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())
app.use(express.json())
app.use('/api',aut)

app.listen(port,()=>{
    console.log(`server is running on port no. ${port}`)
})