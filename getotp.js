const axios= require('axios')
const urlRequestOtp = 'https://api.emptra.com/aadhaarVerification/requestOtp'; // Specify the URL to send the request to
const urlEnterOtp = "https://api.emptra.com/aadhaarVerification/submitOtp";
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const headers = {'Content-Type': 'application/json', 'clientId': client_id, 'secretKey': client_secret }; // Set custom headers
var client;
const getOTP=async (req,res)=>{
    console.log("OTP", req.body.adhaar_number)
    const AdhNum = req.body.adhaar_number;
    const data1 = { 
        aadhaarNumber: AdhNum
    };
   
    axios.post(urlRequestOtp, data1, { headers: headers })
    .then(response => {
    var dataRecieved = JSON.parse(JSON.stringify(response.data))
        console.log(dataRecieved );
        var otp_status = dataRecieved.result.data.otp_sent;
        client = dataRecieved.result.data.client_id;
        if(otp_status == true){
            console.log("OTP sent")
            res.send("SubmitOtp");
        }
        else{
            res.send("error");
        }
    })
    .catch(error => {
    console.error('Error:', error);
    });
    
   
}
const verifyOTP=async (req,res)=>{
    console.log("OTP", req.body.adhaar_number,req.body.OTP)
    const UserOtp = req.body.OTP;
    const data2 = { 
        client_id: client,
        otp: UserOtp
    };

    axios.post(urlEnterOtp, data2, { headers: headers })
    .then(response => {
    var dataRecieved = JSON.parse(JSON.stringify(response.data))
        console.log("OTP verified",dataRecieved );
        res.send(dataRecieved);
    })
    .catch(error => {
    console.error('Error:', error);
    });
 
}
module.exports ={getOTP,verifyOTP}