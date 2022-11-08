const express = require('express')
const cors = require('cors')
const Web3 = require("web3")
const Ethers = require("ethers")
const router = express.Router()
router.use(express.json());

   
router.get("/",cors(),(req,res) => {
   console.log("inside app")   
})
router.post("/",cors(),(req,res) => {
    console.log("inside post",req.body)
    res.send("Rewards Claimed")
 })

 module.exports = router;