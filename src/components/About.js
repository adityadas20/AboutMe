import './style.css'
import './Main.js'

const About = ({ scrollPosition }) => {

    let am = document.querySelector('#am');
    let para = document.querySelector('#para');



    if (window.screen.width > 1300) {
        if (para) para.style.left = scrollPosition * 0.7 + 'px';
        if (am) am.style.left = -scrollPosition * 1.2 + 'px';
    }

    return (
        <>
            <section id="aboutme">
                <img src={require("./images/bg-after1.jpg")} />

                <p className="text" id="para"><br />
                    Hey all, Aditya Das here,<br />
                    Upcoming technology developer intern at D.E. Shaw.<br />
                    I am a student and a programmer.<br />
                    I am pursuing B.Tech. from Thapar University, Patiala, Punjab.<br />
                    Love problem solving btw!<br /> {"</>"}Leetcode: <a href="https://leetcode.com/adihere/">adityadas</a><br />
                    Learning MERN stack web development.<br />
                    Let's discuss about Chess, Coding, or Football?<br />
                    Conversant in <br />
                    <i className="fab fa-2x fa-js-square"></i> <i className="fab fa-2x fa-react"></i>
                    <i className="fab fa-2x fa-html5"></i> <i className="fab fa-2x fa-css3-alt"></i>
                    <i className="fab fa-2x fa-cuttlefish"></i> <i className="fab fa-2x fa-java"></i>
                    <i className="fab fa-2x fa-python"></i> <br />
                    You can view some my projects below
                </p>
                <h3 className="text" id="am">About Me</h3>
            </section>
        </>
    );
}

export default About;