import React, { useEffect } from "react";
import sudokkuImg from "../../../../assets/images/sudokku-img.png";
import purpleBanner from "../../../../assets/images/purple-banner.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listTikets } from "../../../../redux/ticket";

const TicketList = () => {
    const dispatch = useDispatch();
    const { ticketList = [] } = useSelector(state => state.ticket);

    useEffect(() => {
        dispatch(listTikets());
    }, []);

    return (
        <div class="container">
            <section>
                <div className="banner">
                    <img src={purpleBanner} alt="" />
                </div>
            </section>
            {/* Banner ends */}
            <section className="content-area">
                {/* grid area starts  */}
                <h3>Ticket List</h3>
                <div className="grid-box-container row">
                    {ticketList?.length > 0 &&
                        ticketList?.map(ticket => (
                            <div className="col-6" key={ticket?.id}>
                                <div className="gr-box d-flex flex-column">
                                    <h4 className="m-0">{ticket?.type}</h4>
                                    <div className="image-cover">
                                        <img src={sudokkuImg} alt="" />
                                    </div>
                                    <Link
                                        to="/tickets/view"
                                        className="fill-btn "
                                    >
                                        Select Games
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
                {/* grid area starts  */}
            </section>
        </div>
    );
};

export default TicketList;
