const mongoose=require('mongoose')




//Schema
const FAQSchema=new mongoose.Schema({
    FAQ:{
        type:String,
        required:true
    },
    ans:{
        type:String,
        required:false
    },
 
})




let FAQ=mongoose.model('FAQ',FAQSchema)

module.exports=FAQ;



