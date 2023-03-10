import "./Hero.css";
import SImg from "../../assets/images/computer.svg"
import Fade from 'react-reveal/Fade';


const Hero = () => {
    return(
        <>
   <header className="hero" >
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 hero-left">
        <img src={SImg} className="shake" alt="Science"/>
      </div>
     
      <div className="col-md-6 hero-right">
    
        <div className="hero-content"> 
         <Fade bottom>
          <div>
          <h1>IEEE Technology and Engineering Management Society Conference: Asia-Pacific (TEMSCON-ASPAC 2023)</h1>
         <strong>Shereton Grand, Bengaluru, India - December 14 to 16</strong> <br></br>
          <a href="#callforpaper" rel="noreferrer" className="btn btn-success mt-2">Call For Paper</a>  
           </div></Fade>
        </div>
        
     
      </div>
      
    </div>
  </div>
</header>

        </>
    )
}

export default Hero;