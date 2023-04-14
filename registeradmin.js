const bcrypt=require('bcrypt')
const Admin=require('./model/admin')
module.exports=async (req,res)=>{
  console.log('registering')
  console.log(req.body.firstName,req.body.email,req.body.lastName,req.body.password)
    if(!req.body.firstName || !req.body.email || !req.body.lastName || !req.body.password)
     { 
     res.sendStatus(404)}
  else   
   { console.log('fineee') 
 
     try{
      const search=await Admin.find({email:req.body.email})
      if(search.length==0)
    { const salt=await  bcrypt.genSalt(10)
     const hashedpass=await bcrypt.hash(req.body.password,salt)
     const user= new Admin({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
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