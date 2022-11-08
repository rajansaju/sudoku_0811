import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGateWay } from "../services/authorizationService";
import { gameEndPoints, ticketEndPoints } from "../services/serviceEndPoints";

export const getMyGames = createAsyncThunk("game/getMyGames", async () => {
    const response = await apiGateWay.get(gameEndPoints.getMyGames);
    return response.data?.games;
});
export const setTime = createAsyncThunk("game/setTime", async params => {
    const response = await apiGateWay.post(gameEndPoints.setTime, params);
    return response.data;
});

export const claimRewards = createAsyncThunk(
    "game/claimRewards",
    async params => {
        const response = await apiGateWay.post(
            gameEndPoints.claimRewards,
            params
        );
        return response.data;
    }
);

const INITIAL_STATE = {
    myGames: [],
    setTimeResponse: {},
    claimRewardsResponse: {}
};

const cartSlice = createSlice({
    name: "game",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: {
        // get my games
        [getMyGames.pending]: (state, action) => {},
        [getMyGames.fulfilled]: (state, action) => {
            state.myGames = action.payload;
        },
        [getMyGames.rejected]: (state, action) => {},

        // set game time
        [setTime.pending]: (state, action) => {},
        [setTime.fulfilled]: (state, action) => {
            state.setTimeResponse = action.payload;
        },
        [setTime.rejected]: (state, action) => {},

        // claim rewards
        [claimRewards.pending]: (state, action) => {},
        [claimRewards.fulfilled]: (state, action) => {
            state.claimRewardsResponse = action.payload;
        },
        [claimRewards.rejected]: (state, action) => {}
    }
});

export default cartSlice.reducer;
