const router=require('express').Router()
const login = require('./login')
const auth=require('./auth')
const registeration=require('./register')
const addingCandidates = require("./addCandidates");
const fc=require("./fetchCandidate")
const adminlogin=require('./adminlogin')
const adminregistration=require('./registeradmin') 
const  OTP=require('./getotp')
const analytics=require('./analytics')
const DeleteCandidates=require('./DeleteCandidates')

router.post('/register',(req,res)=>{
    console.log('sending register req')
    registeration(req,res)
})
router.post('/login',(req,res)=>{
    console.log("loginnnnnn")
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
    fc.fetchingCandidates(req, res);
})
router.post("/admin-login", (req, res) => {
    console.log("addinggggg")
    adminlogin(req, res);
})
router.post("/register-admin", (req, res) => {
    console.log("addinggggg")
    adminregistration(req, res);
})
router.get('/result',(req,res)=>{
    fc.result(req,res);
})
router.post('/voting',(req,res)=>{
    fc.voting(req,res)
})
router.get('/results/:index',(req,res)=>{
    fc.resultdata(req,res,index);
})
router.post('/getOTP',(req,res)=>{
    OTP.getOTP(req,res);
})
router.post('/verifyOTP',(req,res)=>{
    OTP.verifyOTP(req,res);
})
router.get('/getanalytics',(req,res)=>{
    analytics(req,res);
})
router.delete('/DeleteCandidates',(req,res)=>{
    DeleteCandidates(req,res);
})
module.exports=router