import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import purpleBanner from "../../../../assets/images/purple-banner.png";
import { claimRewards, getMyGames } from "../../../../redux/game";
import { getWeb3 } from '../../../../components/common/getWeb3';
import { getEthereum } from '../../../../components/common/getEthereum';

const Table = () => {
    const dispatch = useDispatch();
    const { myGames = [], claimRewardsResponse } = useSelector(
        state => state.game
    );

    useEffect(() => {
        dispatch(getMyGames());
    }, []);

    const handleClaimReward = async(e) => {
        console.log('clicked');
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
         
        dispatch(claimRewards());
        window.alert(claimRewardsResponse.toString());
    };
    const tableData = [
        {
            id: "#554881",
            game: "Sudoku",
            tier: "Tier 1",
            status: "Won"
        },
        {
            id: "#554882",
            game: "Sudoku",
            tier: "Tier 2",
            status: "Played"
        },
        {
            id: "#554883",
            game: "Sudoku",
            tier: "Tier 2",
            status: "Upcoming"
        },
        {
            id: "#554884",
            game: "Sudoku",
            tier: "Tier 3",
            status: "Won"
        },
        {
            id: "#554885",
            game: "Sudoku",
            tier: "Tier 3",
            status: "Won"
        },
        {
            id: "#554886",
            game: "Sudoku",
            tier: "Tier 4",
            status: "Won"
        },
        {
            id: "#554887",
            game: "Sudoku",
            tier: "Tier 4",
            status: "Won"
        }
    ];

    console.log(myGames, "===> my games");
    return (
        <>
            <div className="container">
                {/* Banner Starts */}
                <section>
                    <div className="banner">
                        <img src={purpleBanner} alt="" />
                    </div>
                </section>
                {/* Banner ends */}
                <section className="content-area">
                    <h3>My Games &amp; Rewards Page</h3>
                    {/* table Starts */}
                    <div className="gr-box p-0 mt-4 mb-5">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Game</th>
                                    <th>Tier</th>
                                    <th>Game Status</th>
                                    <th className="actions">Actions</th>
                                </tr>
                                {tableData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.game}</td>
                                        <td>{item.tier}</td>
                                        <td>{item.status} </td>
                                        <td className="actions">
                                            <Link className="play" to="/game">
                                                Play
                                            </Link>
                                            <a
                                                href="javascript:void(0)"
                                                className="claims"
                                                onClick={(e) => handleClaimReward (e)}
                                            >
                                                Claim Rewards
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                className="nill"
                                            >
                                                Nil
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            {/* table Ends */}
        </>
    );
};

export default Table;
