const mongoose=require('mongoose')

const bcrypt=require('bcrypt')
const { func } = require('joi')

//Schema
const adminSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
/*
userSchema.pre('save',  async function (next){
  
     let user=this;
      bcrypt.genSalt(10,(err,salt)=>{
        if(err){
          return   next(err)
        }
   else { 
     bcrypt.hash(user.password,salt, (err,hashed)=>{
             if(err) {console.log(err); return next(err)}
             user.password=hashed;
             console.log('done1',hashed,user.password)
            return  next(user);
            
    })}
})
 next();
})*/


adminSchema.methods.checkPassword=function (password,cb){
    bcrypt.compare(password,this.password,(err,result)=>{
        return cb(err,result)
    })
}

let Admin=mongoose.model('Admin',adminSchema)

module.exports=Admin;



