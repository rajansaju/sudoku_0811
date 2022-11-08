import React from "react";
import { useParams } from "react-router-dom";
import TicketList from "./components/TicketList";
import TicketView from "./components/TicketView";

import "./ticket.css";
export default function Tickets() {
    let { section } = useParams();
    // return section && section === "view" ? <TicketView /> : <TicketList />;
    return <TicketView />;
}
