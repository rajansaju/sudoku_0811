const { json } = require('express')
const express = require('express')
const cors = require('cors')

const app = express()

const getGamesRoute = require('./routes/getGames')
const getMyGamesRoute = require('./routes/getMyGames')
const claimRewardsRoute = require('./routes/claimRewards')
const setTimeRoute = require('./routes/setTime')
//import map from '../client/src/artifacts/deployments/map.json' assert{type:'json'}

app.use (cors())
app.use('/getGames',getGamesRoute)
app.use('/getMyGames',getMyGamesRoute)
app.use('/claimrewards',claimRewardsRoute)
app.use('/setTime',setTimeRoute)

app.listen(5001,() => {console.log("server running on port 5001")})