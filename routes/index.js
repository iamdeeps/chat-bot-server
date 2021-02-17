var express = require('express');
var router = express.Router();

/* GET User Data */
router.post('/login', function(req, res, next) {
  console.log('req',req.body)
  const userDetails = [
    {id:'1',userName:"first login",password:'first pass'}
  ]
  if(userDetails.length){
    return res.status(200).json({message:"User Data Fetched Successfully",userData:userDetails})
  }
  return res.status(400).json({message:"User not found",userData:userDetails})
});

/* Register User Data */
router.post('/register',function (req, res, next){
  console.log('req',req.body)
  console.log("🚀 ~ file: index.js ~ line 21 ~ pass", pass)
  res.status(201).json({message:"User not found"})
})

router.get('/users',function (req, res, next){
  res.status(200).json({message:"Users sent",userData:''})
})

module.exports = router;
