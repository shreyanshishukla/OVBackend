const bcrypt=require('bcrypt')
const User=require('./model/user')
module.exports=async (req,res)=>{
  console.log('registering')
  console.log(req.body.firstName,req.body.email,req.body.lastName,req.body.password,req.body.adhaar_number)
    if(!req.body.firstName || !req.body.email || !req.body.lastName || !req.body.password || !req.body.adhaar_number)
     { 
     res.sendStatus(404)}
  else   
   { console.log('fineee') 
 
     try{
      const search=await User.find({email:req.body.email})
      if(search.length==0)
    { const salt=await  bcrypt.genSalt(10)
     const hashedpass=await bcrypt.hash(req.body.password,salt)
     const user= new User({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      adhaar_number:req.body.adhaar_number,
      password:hashedpass

   })
       const u= await user.save()
       res.sendStatus(200)
}
    else{
      console.log(search.length)
      console.log('already exist')
      res.redirect('/register')
    }
     }
     catch(err)
     {
        console.log(err)
     }}
} 