const express = require('express')
const cors = require('cors')
const Web3 = require("web3")
const router = express.Router()
router.use(express.json());
const Private_Key  =  '807e2a47c76b730af5fa99aba0515d803fc6980a0904cedfb6391a9e2de39abb';
const Provider = require('@truffle/hdwallet-provider');


setTime = async (req,res,next) => {

    let chainid = 588
    let player = req.body.WalletAddress
    let gameAddress = req.body.gameID 
    let startTime = req.body.startTime 
    let finishTime = req.body.finishTime 
    let acct = "0xce5Fb4818b6Beafb77d504819eCf35Aab3a5647F"
    
    let address = "0x5CC59A41b70102496E2737689762D01d07082835";
    let gaddress = "0xA2DcDc913E0Bf3765d4AfdD4CE0ec11c7E5A08f4";
    let contractName = "gamesAdmin"
    var jsonO = {}
    var key = "timeResponse"
    jsonO[key] = []

    // Load the artifact with the specified address
    let contractArtifact
    try {
        contractArtifact = require (`./../../artifacts/deployments/${chainid}/${address}.json`)
    } catch (e) {
        console.log(`Failed to load contract artifact "./../../artifacts/deployments/${chainid}/${address}.json"`)
        return undefined
    }
    let gameArtifact
    try {
        gameArtifact = require (`./../../artifacts/deployments/${chainid}/${gaddress}.json`)
    } catch (e) {
        console.log(`Failed to load contract artifact "./../../artifacts/deployments/${chainid}/${gaddress}.json"`)
        return undefined
    }

    var provider = new Provider(Private_Key, 'https://stardust.metis.io/?owner=588');
    const web3 = new Web3(provider)
    const gamesAdminI =   new web3.eth.Contract(contractArtifact.abi, address)
    const games = await gamesAdminI.methods.retrieveGames().call()
    for(var i=0;i<games.length;i++){
    if (games[i] == gameAddress) {
    const gameI = new web3.eth.Contract(gameArtifact.abi, games[i])
    const playerStatus = await gameI.methods.checkPlayer(player).call()
    if (playerStatus != 0){
        if(req.body.Type == "startTime"){
            
      const tx = await gameI.methods.setGameStartTime(player,startTime).send({"from": acct,"gas_price":10000000000,"gas_limit":6000000,"allow_revert":true})
      console.log(tx)
        }
        else{
      const tx = await gameI.methods.setGameFinishTimes(player,finishTime).send({"from": acct,"gas_price":10000000000,"gas_limit":6000000,"allow_revert":true})
        }

}
    }
    }
    res.json({timeResponse:"Successfully Set Time"})
    next()
}    

router.get("/",[cors(),setTime],(req,res) => {
   console.log("inside app",req.body)   
})
router.post("/",[cors(),setTime],(req,res) => {
    console.log("inside post",req.body)
    //res.json("Posted")
 })
 

 module.exports = router;