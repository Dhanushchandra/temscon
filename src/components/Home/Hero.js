import "./Hero.css";
import SImg from "../../assets/images/computer.svg"
import Fade from 'react-reveal/Fade';


const Hero = () => {
    return(
        <>
   <header className="hero">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 hero-left">
        <img src={SImg} className="shake" alt="Science"/>
      </div>
      <Fade right>
      <div className="col-md-6 hero-right">

        <div className="hero-content">
          <h1>TEMSCON-ASPAC 2023</h1>
         <strong>IEEE Technology and Engineering Management Society Conference: Asia-Pacific</strong> <br></br>
          <p>International Conference on Emerging Trends in Materials Science and Engineering</p>
          <a href="#form" target="_blank" rel="noreferrer" className="btn btn-success">Register Now</a>
        </div>
      </div>
      </Fade>
    </div>
  </div>
</header>

        </>
    )
}

export default Hero;