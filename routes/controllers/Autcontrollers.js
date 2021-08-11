const Users=require('../models/user')
const bc=require('bcrypt')
const jwt =require('jsonwebtoken')
exports.register= async(req,res)=>{
    const pass = await bc.hash(req.body.password,10)
    console.log(pass)
    const user =new Users({
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        password:pass
    })
    const k= await user.save()
    res.status(201).json({message:'login successfull'})
}

exports.login=async(req,res)=>{
    const a=req.body.password
    const check=await Users.findOne({email:req.body.email})
    if (check==null){
        res.status(400).send('canot find the user')
        return Error; 
    }
    try{
        if( await bc.compare(a,check.password)){
            const k= await Users.findOne({_id:req.body._id})
            console.log(k)
            const token=await jwt.sign({_id:check._id},'heymynameisriyazkhanhopeyourarewell')
            res.status(201).json({message:'login successfully',token}
            )
        }else{
            res.send('invalid credentials')
        }
    }catch{
        res.send('something went wrong')
        res.status(500).send()
        
    }
}
