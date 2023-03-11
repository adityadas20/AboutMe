import './style.css'

const Intro = ({ scrollPosition }) => {

    let man = document.querySelector('#man');
    let ml = document.querySelector('#mountain_left');
    let mr = document.querySelector('#mountain_right');
    let c1 = document.querySelector('#clouds_1');
    let c2 = document.querySelector('#clouds_2');
    let bg = document.querySelector('#bg');
    let wel = document.querySelector('#welcome');

    if (c1) c1.style.left = scrollPosition * 0.35 + 'px';
    if (c2) c2.style.left = -scrollPosition * 0.35 + 'px';
    if (mr) mr.style.left = scrollPosition * 0.5 + 'px';
    if (ml) ml.style.left = -scrollPosition * 0.5 + 'px';
    if (man) man.style.top = scrollPosition * 0.35 + 'px';
    let magnitude = Math.max(1, scrollPosition * 0.01)
    if (wel) wel.style.transform = `scale(${magnitude})`;

    return (
        <div>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <i className="fas fa-info-circle"></i> Best Viewed in PC
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <section id="initial">
                <img src={require("./images/bg.jpg")} id="bg" />
                <h2 className="text" id="welcome">Welcome</h2>
                <img src={require("./images/man.png")} id="man" />
                <img src={require("./images/clouds_1.png")} id="clouds_1" />
                <img src={require("./images/clouds_2.png")} id="clouds_2" />
                <img src={require("./images/mountain_left.png")} id="mountain_left" />
                <img src={require("./images/mountain_right.png")} id="mountain_right" />
            </section>
        </div>
    );
}

export default Intro;