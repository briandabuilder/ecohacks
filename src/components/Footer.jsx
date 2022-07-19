import React from "react";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
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
                    <a href="https://www.facebook.com/profile.php?id=100083192914818" style={{ fontSize: "1.8em" }}>
                        <BsFacebook className="mx-1" style={{ color: "#90745E" }} />
                    </a>
                    <a href="https://www.instagram.com/ecohacks22/" style={{ fontSize: "2em" }}>
                        <AiFillInstagram className="mx-1" style={{ color: "#90745E" }} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCGhHwq815eUXINHQLmjH9QQ" style={{ fontSize: "2em" }}>
                        <AiFillYoutube className="mx-1" style={{ color: "#90745E" }} />
                    </a>
                    <a href="https://discord.gg/RAeyhxrppn" style={{ fontSize: "2em" }}>
                        <FaDiscord className="mx-1" style={{ color: "#90745E" }} />
                    </a>
                    <a href="mailto:eco.hacks.22@gmail.com" style={{fontSize:"2em"}}>
                        <MdEmail className="mx-1" style={{ color: "#90745E" }} />
                    </a>
                </div>
                <div className="mt-3" style={{ color: "#FFF", fontFamily: "Amatic SC, cursive", fontSize: "1.5rem" }}>
                    &copy;2022 Not all rights are reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;