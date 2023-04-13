const router=require('express').Router()
const login = require('./login')
const auth=require('./auth')
const registeration=require('./register')
const addingCandidates = require("./addCandidates");


router.post('/register',(req,res)=>{
    console.log('sending register req')
    registeration(req,res)
})
router.post('/login',(req,res)=>{
    login(req,res);
    })
router.get('/',(req,res)=>{
    res.send('HOME')
})
router.get('/:username',auth.isLoggedIn,async(req,res)=>{
    console.log("Logged in")
    res.send('logged in user')
})
router.post("/admin/addCandidates", (req, res) => {
    addingCandidates(req, res);
})
module.exports=router