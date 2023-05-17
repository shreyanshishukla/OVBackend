const FAQ=require('./model/FAQ')
module.exports=async (req,res)=>{
    console.log('putting')
    console.log(req.body.ans,req.body.id)
      if(!req.body.ans && !req.body.id)
       { 
       res.sendStatus(404)}
    else   
     { console.log('fineee') 
     const filter={
        _id:req.body.id
     }
     const update={
    
       ans:req.body.ans
     }
     
   
       try{
        const doc = await FAQ.findOneAndUpdate(filter, update, {
            new: true
          });
        console.log("putted",doc)
         res.send("OK")
  }
       catch(err)
       {
          console.log(err)
       }}
  } 