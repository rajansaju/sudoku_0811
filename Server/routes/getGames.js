const express = require('express')
const cors = require('cors')
const Web3 = require("web3")
const router = express.Router()
router.use(express.json());


getGames = async (req,res,next) => {

    let chainid = 588
    
    let address = "0x5CC59A41b70102496E2737689762D01d07082835";
    let gaddress = "0xA2DcDc913E0Bf3765d4AfdD4CE0ec11c7E5A08f4";
    let contractName = "gamesAdmin"
    var jsonO = {}
    var key = "games"
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

    const web3 = new Web3('https://stardust.metis.io/?owner=588')
    const gamesAdminI =   new web3.eth.Contract(contractArtifact.abi, address)
    const games = await gamesAdminI.methods.retrieveGames().call()
    for(var i=0;i<games.length;i++){
    const gameI = new web3.eth.Contract(gameArtifact.abi, games[i])
    const gameDetails = await gameI.methods.viewGameDetails().call()

   var data = {
       id:games[i],
       type:gameDetails[0],
       tier:gameDetails[1],
       gameBalance:gameDetails[2],
       numberOfPlayers:gameDetails[3],
       gameStatus:gameDetails[4],
       startTime:10
   }
   jsonO[key].push(data)
    }
    res.json({games:jsonO[key]})
    next()
}    

router.get("/",[cors(),getGames],(req,res) => {
   //console.log("inside app")   
})
router.post("/",cors(),(req,res) => {
    //console.log("inside post",req.body)
 })

 module.exports = router;