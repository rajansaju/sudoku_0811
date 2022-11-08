/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */

import React from "react";
import history from "../../config/history";
import { useParams, withRouter } from "react-router-dom";
import { getWeb3 } from './getWeb3';
import map from '../../artifacts/deployments/map.json';
import { getEthereum } from './getEthereum';

const Header = ({ props, match }) => {
    const connectWallet = async(e) => {
        //connect wallet api
       e.preventDefault();
  const web3 = await getWeb3();
  try {
    const ethereum = await getEthereum();
    ethereum.enable();
  } catch (e) {
    console.log(`Could not enable accounts. Interaction with contracts not available.
     Use a modern browser with a Web3 plugin to fix this issue.`);
    console.log(e);
  }
  const accounts = await web3.eth.getAccounts();
  const walletAddress = accounts[0];
  const chainID = parseInt(await web3.eth.getChainId());
  console.log(walletAddress, chainID, accounts[0]);
    };

    let { path } = useParams();

    const MENUS = [
        { label: "HOME", path: "/home" },
        { label: "TICKETS", path: "/tickets" },
        { label: "My Games & Rewards", path: "/rewards" }
    ];
    console.log("maxtch", match);
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container custom-container">
                    {match.path !== "/terms" &&
                    match.path !== "/privacy" &&
                    match.path !== "/disclaimer" ? (
                        <>
                            <a
                                className="navbar-brand mr-auto mr-md-3"
                                onClick={() => history.push("/home")}
                            >
                                <img src="./game.png" alt="" />
                            </a>
                            <button
                                className="navbar-toggler p-0 border-0"
                                type="button"
                                data-toggle="offcanvas"
                            >
                                <div className="hamburger" id="hamburger-1">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </button>
                            <div className="navbar-collapse offcanvas-collapse">
                                <div className="nav-wrapper">
                                    <ul className="navbar-nav ">
                                        {MENUS.map(item => (
                                            <li
                                                key={item.path}
                                                className="nav-item"
                                                onClick={() =>
                                                    history.push(item.path)
                                                }
                                            >
                                                <a
                                                    className={`nav-link${
                                                        path === item.path
                                                            ? ` active`
                                                            : ""
                                                    }`}
                                                >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul
                                        className="headerButton"
                                        onClick={(e) => connectWallet(e)}
                                    >
                                        <li>
                                            <a className="header-log-btn">
                                                Connect Wallet
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    ) : (
                        <a className="navbar-brand mr-auto mr-md-3">
                            <img src="./game.png" alt="" />
                        </a>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default withRouter(Header);
