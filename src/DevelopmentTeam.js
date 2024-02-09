import React from "react";
import img1 from "./images/Shahrukh Khan.jpg"
import img2 from "./images/Hrithik Roshan.jpg"
import img3 from "./images/Aamir Khan.jpeg"
import img4 from "./images/Salman Khan.jpeg"
import img5 from "./images/AA.jpg"
import img6 from "./images/Thalapathy Vijay.jpg"
import img7 from "./images/Akshay Kumar.jpg"

function DevelopmentTeam() {
    return (
        <div className="Member-box" >
            <h2>
                Development Team
            </h2>
            <div className="member">
                <div>
                    <img src={img1} alt="Image Not Found" />
                    <h3>Shahrukh Khan</h3>
                    <p>Team Lead, SE</p>
                </div>
                <div>
                    <img src={img2} alt="Image Not Found" />
                    <h3>Hrithik Roshan</h3>
                    <p>Software Engineer</p>
                </div>
                <div>
                    <img src={img3} alt="Image Not Found" />
                    <h3>Aamir Khan</h3>
                    <p>Software Engineer</p>
                </div>
                <div>
                    <img src={img4} alt="Image Not Found" />
                    <h3>Salman Khan</h3>
                    <p>Software Engineer</p>
                </div>
                <div>
                    <img src={img5} alt="Image Not Found" />
                    <h3>Allu Arjun</h3>
                    <p>Software Engineer</p>
                </div>
                <div>
                    <img src={img6} alt="Image Not Found" />
                    <h3>Thalapathy Vijay</h3>
                    <p>Software Engineer</p>
                </div>
                <div>
                    <img src={img7} alt="Image Not Found" />
                    <h3>Akshay Kumar</h3>
                    <p>Software Engineer</p>
                </div>

            </div>

        </div>
    )
}
export default DevelopmentTeam