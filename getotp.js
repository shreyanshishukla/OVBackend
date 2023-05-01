const getOTP=async (req,res)=>{
    console.log("OTP", req.body.adhaar_number)
    res.send("Got OTP?")
}
const verifyOTP=async (req,res)=>{
    console.log("OTP", req.body.adhaar_number,req.body.OTP)
    res.send("Verify OTP?")
}
module.exports ={getOTP,verifyOTP}