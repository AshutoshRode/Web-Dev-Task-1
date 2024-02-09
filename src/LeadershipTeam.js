import React from "react";
// import img1 from "./images/AA.jpg"
import img2 from "./images/Amitabh-Bachchan.jpg"
import img3 from "./images/Rajinikanth.jpeg"
import img4 from "./images/Nana-Patekar.jpg"
import img5 from "./images/kamal haasan.jpg"
import img6 from "./images/Anupam-Kher.jpeg"
import img7 from "./images/Madhuri-Dixit.jpg"
function LeadershipTeam() {
    return (
        <div className="Member-box">
            <h2>Leadership/ Mangement Team</h2>
            <div className="member" >
                <div id="CEO">
                    <div >
                        <img src={img2} alt="Image Not Found" />
                        <h3>Amitabh Bachchan</h3>
                        <p>Founder/CEO</p>
                    </div>
                    <div>
                        <img src={img3} alt="Image Not Found" />
                        <h3>Rajinikanth</h3>
                        <p>Founder/CEO</p>
                    </div>
                </div>
                <div>
                    <img src={img4} alt="Image Not Found" />
                    <h3>Nana Patekar</h3>
                    <p>VP,Development & Growth</p>
                </div>
                <div>
                    <img src={img5} alt="Image Not Found" />
                    <h3>kamal haasan</h3>
                    <p>VP, Sales & Marketing</p>
                </div>
                <div>
                    <img src={img6} alt="Image Not Found" />
                    <h3>Anupam Kher</h3>
                    <p>VP,Finance & Operation</p>
                </div>
            </div>
        </div>
    )
}
export default LeadershipTeam