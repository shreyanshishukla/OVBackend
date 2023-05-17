const FAQ=require('./model/FAQ')
module.exports=async (req,res)=>{
    console.log('registering')
    console.log(req.body.FAQ)
      if(!req.body.FAQ )
       { 
       res.sendStatus(404)}
    else   
     { console.log('fineee') 
   
       try{
        const search=await FAQ.find({FAQ:req.body.FAQ})
        if(search.length==0)
      { 
       
       const faq= new FAQ({
        FAQ:req.body.FAQ,
        ans:''
   
     })
         const u= await faq.save()
         res.send("OK")
  }
      else{
        console.log(search.length)
        console.log('already exist')
         res.send("already exits")
      }
       }
       catch(err)
       {
          console.log(err)
       }}
  } 