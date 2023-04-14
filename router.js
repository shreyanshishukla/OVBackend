const router=require('express').Router()
const login = require('./login')
const auth=require('./auth')
const registeration=require('./register')
const addingCandidates = require("./addCandidates");
const fetchingCandidates=require("./fetchCandidate")
const adminlogin=require('./adminlogin')
const adminregistration=require('./registeradmin') 

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
router.get('/user/:username',auth.isLoggedIn,async(req,res)=>{
    console.log("Logged in")
    res.send('logged in user')
})
router.post("/admin/addCandidates", (req, res) => {
    console.log("addinggggg")
    addingCandidates(req, res);
})
router.get("/fetchCandidates", (req, res) => {
    console.log("fetchingggggggggggggggg")
    fetchingCandidates(req, res);
})
router.post("/admin-login", (req, res) => {
    console.log("addinggggg")
    adminlogin(req, res);
})
router.post("/register-admin", (req, res) => {
    console.log("addinggggg")
    adminregistration(req, res);
})
module.exports=router