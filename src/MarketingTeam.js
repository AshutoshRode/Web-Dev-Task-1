import React from "react";
import img1 from './images/Suriya.jpg';
import img2 from './images/yash (naveen kumar).jpg';
import img3 from './images/Mahesh Babu.jpeg';
import img4 from './images/Ritesh Deshmukh.jpg';
import img5 from './images/Ram Charan.jpg';
import img6 from './images/shahid-kapoor.jpg';
import img7 from './images/Ranbir Kapoor.jpg';


function MarketingTeam() {
    return (
        <div className="Member-box">
            <h2>Sales and Marketing Team</h2>
            <div className="member">
                <div>
                    <img src={img1} alt="Image Not Found" />
                    <h3>Suriya</h3>
                    <p>Team Lead</p>
                </div>
                <div>
                    <img src={img2} alt="Image Not Found" />
                    <h3>Yash </h3>
                    <p>Sales Officer</p>
                </div>
                <div>
                    <img src={img3} alt="Image Not Found" />
                    <h3>Mahesh Babu</h3>
                    <p>Sales Officer</p>
                </div>
                <div>
                    <img src={img4} alt="Image Not Found" />
                    <h3>Ritesh Deshmukh</h3>
                    <p>Marketing Officer</p>
                </div>
                <div>
                    <img src={img5} alt="Image Not Found" />
                    <h3>Ram Charan</h3>
                    <p>Marketing Officer</p>
                </div>
                <div>
                    <img src={img6} alt="Image Not Found" />
                    <h3>Shahid Kapoor</h3>
                    <p>Marketing Officer</p>
                </div>
                <div>
                    <img src={img7} alt="Image Not Found" />
                    <h3>Ranbir Kapoor</h3>
                    <p>Marketing Officer</p>
                </div>
            </div>
        </div>
    )
}
export default MarketingTeam