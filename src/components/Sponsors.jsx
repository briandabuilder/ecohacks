import React from "react";

function Sponsors() {
    return (
        <div id="sponsors" className="my-5">
            <div className="d-flex flex-column align-items-center mx-3">
                <div className=" m-1" style={{ color: "#FFD700", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #FFD700" }}>
                    Gold Sponsors
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-around mb-3">
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Facebook"
                    />
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Amazon"
                    />
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Apple"
                    />
                </div>


                <div className=" m-1" style={{ color: "#C0C0C0", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #C0C0C0" }}>
                    Silver Sponsors
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center mb-3">
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Netflix"
                    />
                </div>


                <div className=" m-1" style={{ color: "#CD7F32", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #CD7F32" }}>
                    Bronze Sponsors
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center mb-3">
                    <img
                        src="https://via.placeholder.com/200x200.png?text=Google"
                    />
                </div>
            </div>
        </div>
    );
}

export default Sponsors;