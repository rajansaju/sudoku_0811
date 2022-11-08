/** @format */

import React, { Component } from "react";
import history from "../../config/history";
import { Link, withRouter } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            match: { path }
        } = this.props;
        return (
            <footer>
                <div class="footer-sec">
                    <div class="footer-top-cover">
                        <div class="container custom-container">
                            <div class="footer-top-wrapper d-flex">
                                <div class="f-logo-block">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                    </p>
                                </div>
                                <div class="f-nav-block">
                                    <a class="f-nav-link" href="#">
                                        HOME
                                    </a>
                                    <a class="f-nav-link" href="#about-us">
                                        ABOUT US
                                    </a>
                                    <a class="f-nav-link" href="#how-it-works">
                                        HOW IT WORKS?
                                    </a>
                                    <a class="f-nav-link" href="#testimonials">
                                        TESTIMONIALS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-soc-cover">
                        <div class="container custom-container">
                            <div class="footer-soc-wrapper d-flex">
                                <div class="soc-block">
                                    <a class="soc-btn" href="#">
                                        <img
                                            src="./assets/img/facebook.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a class="soc-btn" href="#">
                                        <img
                                            src="./assets/img/twitter.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a class="soc-btn" href="#">
                                        <img src="./assets/img/in.svg" alt="" />
                                    </a>
                                    <a class="soc-btn" href="#">
                                        <img
                                            src="./assets/img/instagram.svg"
                                            alt=""
                                        />
                                    </a>
                                </div>

                                <div class="f-terms-block">
                                    <Link
                                        target="#"
                                        to="/terms"
                                        class="f-terms-link"
                                    >
                                        TERMS AND CONDITIONS
                                    </Link>
                                    <Link
                                        target="#"
                                        to="/privacy"
                                        class="f-terms-link"
                                    >
                                        PRIVACY POLICY
                                    </Link>
                                    <Link
                                        target="#"
                                        to="/disclaimer"
                                        class="f-terms-link"
                                    >
                                        DISCLAIMER
                                    </Link>
                                    <a href="#" class="f-terms-link">
                                        HELP
                                    </a>
                                    <a
                                        href="#"
                                        class="f-terms-link"
                                        onClick={() => history.push("/connect")}
                                    >
                                        CONNECT WALLET
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-rights-cover">
                        <div class="container custom-container">
                            <p>Copyright © 2022 Game. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default withRouter(Footer);
