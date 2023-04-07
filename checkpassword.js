const bcrypt=require('bcrypt')
module.exports=function (password,pass,cb){
    bcrypt.compare(password,pass,(err,result)=>{
        return cb(err,result)
    })
}