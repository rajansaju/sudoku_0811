import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGateWay } from "../services/authorizationService";
import { ticketEndPoints } from "../services/serviceEndPoints";

export const listTikets = createAsyncThunk("ticket/listTickets", async () => {
    const response = await apiGateWay.get(ticketEndPoints.getTickets);
    return response.data?.games;
});

const INITIAL_STATE = {
    ticketList: []
};

const cartSlice = createSlice({
    name: "ticket",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: {
        //list tickets
        [listTikets.pending]: (state, action) => {},
        [listTikets.fulfilled]: (state, action) => {
            state.ticketList = action.payload;
        },
        [listTikets.rejected]: (state, action) => {}
    }
});

export default cartSlice.reducer;
