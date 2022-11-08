/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { getWeb3 } from '../../../../components/common/getWeb3';
import { getEthereum } from '../../../../components/common/getEthereum';
import sudokkuBanner from "../../../../assets/images/sudokku-banner.png";
import mini from "../../../../assets/images/MINI jpeg.jpg";
import minor from "../../../../assets/images/MINOR jpeg.jpg";
import major from "../../../../assets/images/MAJOR jpeg.jpg";
import maxi from "../../../../assets/images/MAXI jpeg.jpg";
import mega from "../../../../assets/images/MEGA jpeg.jpg";
const TicketView = () => {
    const handleClick = async(data) => {
        console.log('clicked');
        console.log({ data });
        //connect wallet api
       //data.preventDefault();
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
         
        // save data to db
    };
    const tiers = [
        {
            name: "Sudokku",
            price: "5215",
            description:
                "Community Event 10 Th Jul 2022 09.30 Entry $1.00 Sudokku",
            image: major,
            isLarge: true
        },
        {
            name: "Sudokku",
            price: "5215",
            description:
                "Community Event 10 Th Jul 2022 09.30 Entry $1.00 Sudokku",
            image: mini,
            isLarge: false
        },
        {
            name: "Basic",
            price: "4525",
            description:
                "Community Event 10 Th Jul 2022 09.30 Entry $1.00 Sudokku",
            image: minor,
            isLarge: false
        },
        {
            name: "Sudokku",
            price: "6584",
            description:
                "Community Event 10 Th Jul 2022 09.30 Entry $1.00 Sudokku",
            image: mini,
            isLarge: false
        },
        {
            name: "Hard",
            price: "4586",
            description:
                "Community Event 10 Th Jul 2022 09.30 Entry $1.00 Sudokku",
            image: maxi,
            isLarge: false
        },
        {
            name: "Sudokku",
            price: "7545",
            description:
                "Community Event 10 Th Jul 2022 09.30 Entry $1.00 Sudokku",
            image: mega,
            isLarge: true
        }
    ];
    return (
        <>
            <div className="container">
                {/* Banner Starts */}
                <section>
                    <div className="banner">
                        <img src={sudokkuBanner} alt="" />
                    </div>
                </section>
                {/* Banner ends */}
                <section className="content-area">
                    {/* grid area starts  */}
                    <h3>Ticket List</h3>
                    <div className="grid-box-container row sudokku-box">
                        <div className="col-6">
                            {tiers.slice(0, 3).map(item => (
                                <>
                                    {item.isLarge ? (
                                        <div
                                            className="gr-box d-flex flex-column"
                                            style={{
                                                backgroundImage: `url("${item.image}")`
                                            }}
                                        >
                                            <div className="hdr d-flex justify-content-between align-items-center">
                                                <span className="rewards">
                                                    {item.name}
                                                </span>
                                                <span className="price">
                                                    ${item.price}
                                                </span>
                                            </div>
                                            <div className="image-cover">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="info-cover d-flex justify-content-between align-items-center">
                                                <div className="col-8">
                                                    <p className="m-0">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="col-4 text-right">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="fill-btn"
                                                        onClick={() =>
                                                            handleClick(item)
                                                        }
                                                    >
                                                        Buy Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className="gr-box d-flex flex-column"
                                            style={{
                                                backgroundImage: `url("${item.image}")`
                                            }}
                                        >
                                            <div className="d-flex">
                                                <div className="col-4">
                                                    <div className="image-cover m-0">
                                                        <img
                                                            src={item.image}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-8 text-right">
                                                    <div className="hdr d-flex justify-content-between align-items-center">
                                                        <span className="rewards">
                                                            {item.name}
                                                        </span>
                                                        <span className="price">
                                                            ${item.price}
                                                        </span>
                                                    </div>
                                                    <div className="info-cover d-flex justify-content-between align-items-center">
                                                        <p className="mt-2 mb-0">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="fill-btn"
                                                        onClick={() =>
                                                            handleClick(item)
                                                        }
                                                    >
                                                        Buy Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                        <div className="col-6">
                            {tiers.slice(3, 6).map(item => (
                                <>
                                    {!item.isLarge ? (
                                        <div
                                            className="gr-box d-flex flex-column"
                                            style={{
                                                backgroundImage: `url("${item.image}")`
                                            }}
                                        >
                                            <div className="d-flex">
                                                <div className="col-4">
                                                    <div className="image-cover m-0">
                                                        <img
                                                            src={item.image}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-8 text-right">
                                                    <div className="hdr d-flex justify-content-between align-items-center">
                                                        <span className="rewards">
                                                            {item.name}
                                                        </span>
                                                        <span className="price">
                                                            ${item.price}
                                                        </span>
                                                    </div>
                                                    <div className="info-cover d-flex justify-content-between align-items-center">
                                                        <p className="mt-2 mb-0">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="fill-btn"
                                                        onClick={() =>
                                                            handleClick(item)
                                                        }
                                                    >
                                                        Buy Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className="gr-box d-flex flex-column"
                                            style={{
                                                backgroundImage: `url("${item.image}")`
                                            }}
                                        >
                                            <div className="hdr d-flex justify-content-between align-items-center">
                                                <span className="rewards">
                                                    {item.name}
                                                </span>
                                                <span className="price">
                                                    ${item.price}
                                                </span>
                                            </div>
                                            <div className="image-cover">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="info-cover d-flex justify-content-between align-items-center">
                                                <div className="col-8">
                                                    <p className="m-0">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="col-4 text-right">
                                                    <a
                                                        href="javascript:void(0)"
                                                        className="fill-btn"
                                                        onClick={() =>
                                                            handleClick(item)
                                                        }
                                                    >
                                                        Buy Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            {/* grid area starts  */}
        </>
    );
};

export default TicketView;
