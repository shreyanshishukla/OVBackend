const FAQ=require('./model/candidates')
module.exports=async (req,res)=>{
   
   console.log("enquirirng")
       try{
        const search=await FAQ.find({})
        if(search.length==0)
      { 
       
        res.send("no candidates")

   
     }
         
      else{
        console.log(search.length)
        let maxx=-1;
        let index=-1;
        for(let i=0;i<search.length;i++)
        {
            if(search[i].Votes>maxx)
          {  maxx=search[i].Votes;
            index=i;}
        }
        if(maxx==0 || index==-1)
        res.send("No voting");
        else 
        res.send({winner:search[index]})
      }
       }
       catch(err)
       {
          console.log(err)
       }}
  