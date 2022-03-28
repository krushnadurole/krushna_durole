import React from 'react'
import Me from "../../images/me.png"
import "./Intro.css";
function Intro() {
    
    return (
        <>
            <div className="complete" id = "c">
                <div className="my-name">
                    <h3 id="name">Hello , My name is</h3>

                    <h1 className="i-name">Krushna A. Durole</h1> <br />
                </div>
                <div className="i">
                    <div className="i-left">
                        <div className="name box">
                            <div className="name-wrapper">
                                <div className="work-prof">
                                    <div className="work-prof-wrapper">
                                        <div className="i-work-prof-item">C++ programmer</div>
                                        <div className="i-work-prof-item">Elex & Telecomm. Student</div>
                                        <div className="i-work-prof-item">Python,java basic programmer</div>
                                        <div className="i-work-prof-item">Front End web Developer</div> <br />
                                        <div className="i-work-prof-item">SWD-scholarship-co-ordinator</div>
                                    </div>
                                </div>
                                <br /><br /><br />
                                <p className="sm-i">
                                    I am Electronics and Telecommunicaiton Enginner,pursuing
                                    Btech Degree at <span><a href="https://www.vit.edu/">Vishwakarma Institute of Technology, pune</a></span>
                                    My area of interst are programming , web developement and
                                    Electronics and Telecommunication
                                </p>


                            </div>

                        </div>

                    </div>
                    <div className="i-right box">
                        <div className="i-bg"></div>
                        <img className="i-right-pic" src={Me} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro