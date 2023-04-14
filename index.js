require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
const connection=require('./db')
const jwt=require('jsonwebtoken')
const route=require('./router')

connection();

//middlewares
app.use(express.json())
app.use(cors())
app.use('/',route)
const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`liiiiiiiiiiiiiiiiiiiiistening on port ${port}`)
})
const posts=[
    {
        username:'absx',
        title:"sdhsjf"
    },
    {
        username:'dddd',
        title:"aaaa"
    },

]
/*
app.get('/posts',(req,res)=>{
    res.json(posts)

})
app.post('/login',(req,res)=>
{
  //Authenticate user
  const username=req.body.username;
  const user={name:username}
  const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
  res.json({accessToken})
})
function authenticateToken(req,res,next)
{
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendstatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err)return res.sendstatus(403)
    req.user=user
next()
 })

}*/
