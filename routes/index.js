var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

/* GET User Data */
router.post('/login', function(req, res, next) {
  const userDetails = [
    {id:'1',userName:"first login",password:'first pass'}
  ]
  if(userDetails.length){
    return res.status(200).json({message:"User Data Fetched Successfully",userData:userDetails})
  }
  return res.status(400).json({message:"User not found",userData:userDetails})
});

router.get('/users',function (req, res, next){
  res.status(200).json({message:"Users sent",userData:''})
})

/* Register User Data */
router.post('/register',async function (req, res, next){
  const result = await main(req.body).catch(console.error)
  if(result){
    return res.status(201).json({message:"User added Successfully",userData:result.ops})
  }else{
    return res.status(201).json({message:"Failed adding the user",userData:result})
  }
})

async function main(data){
  const uri = "mongodb+srv://Deepak:Qwerty12345@cluster0.0ghtd.mongodb.net/chat-bot?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
      await client.connect()
      return await createListing(client,data)
  } catch (error) {
      console.log('error',error)
  }finally {
      await client.close();
  }
}

async function createListing(client,newListing){
  return await client.db('chat-bot').collection('users').insertOne(newListing)
}

module.exports = router;
