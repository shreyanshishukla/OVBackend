const FAQ = require("./model/FAQ");

const FAQGETADMIN=async(req,res)=>{
   
 
    try{
        
        const FINDFAQ = await FAQ.find({});
        console.log("faq",FINDFAQ);    
        res.send({FAQ:FINDFAQ})  
    }
    catch(err){
        console.log("FAQS cann't be fetched !");
        console.log(err);
    }
}


module.exports=FAQGETADMIN