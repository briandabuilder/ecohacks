import React from "react";

import FadeIn from "react-fade-in";

function Sponsors() {
    return (
        <div id="sponsors" className="my-5">
            <div className="d-flex flex-column align-items-center mx-3">
            <div className="m-1 my-5" style={{ color: "#FFD700", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #FFD700" }}>
                    Gold Sponsors
            </div>
            <FadeIn className="d-flex flex-row flex-wrap justify-content-around mb-3">
                <a href="https://www.wolfram.com/language/" target="_blank">
                    <img
                        src={require("../images/sponsor/wolfram.png")}
                        className="zoom"
                        alt="..."
                        style={{maxHeight: "10em", maxWidth: "30em"}}

                    />
                </a>
            </FadeIn>


            {/*    <div className="m-1 my-5" style={{ color: "#C0C0C0", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #C0C0C0" }}>
                    Silver Sponsors
                </div>
                <FadeIn className="d-flex flex-row flex-wrap justify-content-center mb-3">
                    <a href="https://via.placeholder.com/200x200.png?text=TBD" target="_blank">
                        <img
                            src={require("../images/sponsor/wolfram.png")}
                            className="zoom"
                            alt="..."
                            style={{maxHeight: "10em", maxWidth: "30em"}}

                        />
                    </a>
                </FadeIn>
            */}

            <div className="m-1 my-5" style={{ color: "#CD7F32", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #CD7F32" }}>
               Bronze Sponsors
            </div>
            <FadeIn className="d-flex flex-row flex-wrap justify-content-center mb-3">
                <a href="https://artofproblemsolving.com/store" target="_blank">
                    <img
                        src={require("../images/sponsor/aops.png")}
                        className="zoom"
                        alt="..."
                        style={{maxHeight: "10em", maxWidth: "30em"}}

                    />
                </a>
            </FadeIn>


            <div className="m-1 my-5" style={{ color: "#A7E1A7", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #A7E1A7" }}>
                Partners
            </div>
            <FadeIn className="d-flex flex-row flex-wrap justify-content-center mb-3">
                <a href="https://hackclub.com/" target="_blank">
                    <img
                        src={require("../images/sponsor/hackclub.png")}
                        className="zoom"
                        alt="..."
                        style={{maxHeight: "10em", maxWidth: "30em"}}

                    />
                </a>
            </FadeIn>
            
            </div>
            <span><br /></span>
            <span><br /></span>
        </div>
    );
}

export default Sponsors;