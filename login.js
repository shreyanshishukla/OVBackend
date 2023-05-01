
const User=require('./model/user')
const checkPassword=require('./checkpassword')
const createToken=require('./createToken')
module.exports=async (req,res)=>{

    const {firstName,lastName,email,password,adhaar_number}=req.body;
    console.log(firstName,lastName,email,password,adhaar_number)
    if(!firstName || !email || !lastName || !password ||!adhaar_number)
     { console.log('wrong input')
     res.redirect('/login')}
  else   
   { 
   
     try{
        console.log('trying')
       const user=await  User.findOne({email})
       let token=await createToken({email,firstName,lastName})
        if(!user)
     {  console.log('no record found'); res.redirect('/register')}
        else{
     checkPassword(password,user.password,(err,result)=>{
        console.log(result)
        if(result)
        { console.log('logged in ',token);

       return res.json({token,user})
        res.send('login successful')}
         else {console.log('wrong pass');res.send('invalid password')}
     })
   
     }
           

    
     }
     catch(err)
     {
        console.log(err)
     }}
} 