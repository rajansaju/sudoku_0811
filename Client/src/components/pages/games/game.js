/** @format */

import React, { useState } from "react";
import Sudoku from "react-sudoku-component";
import Popup from "reactjs-popup";
import sudokuImg from "../../../assets/images/sudokku-img.png";

import "reactjs-popup/dist/index.css";

import Header from "../../common/header";
import { setTime as setGameTime } from "../../../redux/game";
import { useDispatch, useSelector } from "react-redux";
const Game = () => {
    const [open, setOpen] = useState(false);
    const [started, setStarted] = useState(false);
    const dispatch = useDispatch();

    const { setTimeResponse } = useSelector(state => state.game);

    const onGameStart = () => {
        const startTime = Date.now();
        setStarted(true);
        // sending start time to backend
        const params = {
            setType: "start",
            time: startTime
        };
        dispatch(setGameTime(params));
    };
    const onSolve = result => {
        const endTime = new Date().getTime();
        this.setState({ open: true, endTime });
        console.log("TOTAL TIME TAKEN :::", result?.time, "Seconds");
    };

    console.log(setTimeResponse, "===> settime");

    return (
        <>
            <Popup
                open={open}
                closeOnDocumentClick
                modal
                onClose={() => setOpen(false)}
            >
                <span className="congratz-msg">Congratzzz !!!</span>
            </Popup>
            <div className="basic-bg">
                {started ? (
                    <Sudoku
                        useKeyboardListener={true}
                        size={"64vmin"}
                        defaultDifficulty={"medium"}
                        onSolved={result => onSolve(result)}
                        disableTimer={false}
                        disableDifficultyButtons={true}
                        disableNumberButtons={false}
                        disableHelpButtons={true}
                        allowedHelps={[
                            "solve",
                            "validate",
                            "hint",
                            "validateOnTheGo"
                        ]}
                        disabledHelps={undefined}
                    />
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <img
                            height={500}
                            width={500}
                            className="mt-5"
                            src={sudokuImg}
                            alt=""
                        />
                        <button
                            className="fill-btn mt-2"
                            onClick={() => onGameStart()}
                        >
                            Start
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Game;
