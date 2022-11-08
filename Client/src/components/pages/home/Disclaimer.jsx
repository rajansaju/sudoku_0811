/** @format */

import React from "react";

const Disclaimer = ({ component: Component, ...rest }) => {
    return (
        <>
            <div class="container p-5 custom-container">
                <div class="abt-sec-wrapper d-flex">
                    <div class="text-col">
                        <h2 class="sub-head">Disclaimer</h2>

                        <p>
                            All information in the Service is provided "as is",
                            with no guarantee of completeness, accuracy,
                            timeliness or of the results obtained from the use
                            of this information, and without warranty of any
                            kind, express or implied, including, but not limited
                            to warranties of performance, merchantability, and
                            fitness for a particular purpose.
                        </p>
                        <p>
                            On Chain Puzzles will not be liable to you or anyone
                            else for any decision made or action taken in
                            reliance on the information given by the Service or
                            for any consequential, special, or similar damages,
                            even if advised of the possibility of such damages.
                        </p>
                    </div>
                </div>
                <div class="abt-sec-wrapper">
                    <div class="text-col">
                        <h2 class="sub-head">Further Questions?</h2>

                        <p>
                            If you have any questions about this Disclaimer, you
                            can check out our Docs at:
                            <ul className="terms-list">
                                <li>
                                    <a href="/https://fast-crypto.gitbook.io/on-chain-puzzles/">
                                        https://fast-crypto.gitbook.io/on-chain-puzzles/
                                    </a>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Disclaimer;
