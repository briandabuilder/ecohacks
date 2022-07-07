import React from "react";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div id="footer" className="py-4">
            <div className="d-flex flex-column align-items-center">
                <div className="m-1" style={{ color: "#FFF", fontFamily: "Amatic SC, cursive", fontSize: "4rem"}}>
                    EcoHacks
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <BsFacebook className="mx-1" size={"1.8em"} style={{ color: "#90745E" }} />
                    <AiFillInstagram className="mx-1" size={"2em"} style={{ color: "#90745E" }} />
                    <FaDiscord className="mx-1" size={"2em"} style={{ color: "#90745E" }} />
                    <MdEmail className="mx-1" size={"2em"} style={{ color: "#90745E" }} />
                </div>
                <div className="mt-3" style={{ color: "#FFF", fontFamily: "Amatic SC, cursive", fontSize: "1.5rem" }}>
                    &copy;2022 Not all rights are reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;