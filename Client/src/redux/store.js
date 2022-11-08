import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticket";
import gameReducer from "./game";

export const store = configureStore({
    reducer: {
        ticket: ticketReducer,
        game: gameReducer
    }
});
