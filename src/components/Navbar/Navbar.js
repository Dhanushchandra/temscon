
import './Navbar.css';
import { Link,useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import IEEE from '../../assets/images/logo-ieee.png';
import IEEE_TEMS from '../../assets/images/ieee-tems.png';
import TEMSCON from '../../assets/images/temscon.png';

const Navbar = () => {

  const location = useLocation();
  const path = location.pathname;
  const activeLink = path.split("/")[1];

    const home = activeLink === '' ? 'active nav-cus-link-active' : '';
    const committee = activeLink === 'committee' ? 'active nav-cus-link-active' : '';
    //const places = activeLink === 'places' ? 'active nav-cus-link-active' : '';
    //const registration = activeLink === 'registration' ? 'active nav-cus-link-active' : '';
    //const contact = activeLink === 'contact' ? 'active nav-cus-link-active' : '';
    //const eventSchedule = activeLink === 'event-schedule' ? 'active nav-cus-link-active' : '';
    
    

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link to="/" className='router-link navbar-brand'>
          <Fade bottom >
        <img src={TEMSCON} width="100" className='logo-ieee logo-temscon' alt="IEEE TEMS"/> 
      <img src={ IEEE_TEMS} width="100" className='logo-ieee logo-ieee-tems' alt="IEEE TEMS"/> 
      </Fade>
     
      {/* <img src={IEEE} width="100" className='logo-ieee' alt="IEEE"/>    */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className={"nav-item " + home}>
            <Link to="/" className='router-link nav-link'>   
             <span className={'nav-cus-link ' + home}>Home</span>  
              </Link>
            </li>

            {/* <li className={"nav-item " + committee}>
            <Link to="/committee" className='router-link nav-link'>   
            <span className={'nav-cus-link ' + committee}> Committee</span>
              </Link>
            </li> */}

          <li className={"nav-item " + committee}>
            <a href="#committee" className='router-link nav-link'>   
            <span className={'nav-cus-link ' + committee}> Committee</span>
              </a>
            </li>

    <li className="nav-item dropdown" style={{
        marginLeft: '10px'
    }}>
          <a  className="nav-link dropdown-toggle router-link nav-cus-link " href="#authors" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Authors
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#callforpaper">Call For Paper</a></li>
            {/* <li><Link to={"/authors-guidelines"} className="dropdown-item" >Submission guidelines</Link></li> */}
            <li><a href='#authors-guidelines' className="dropdown-item" >Submission guidelines</a></li>
            <li><a className="dropdown-item" href={"#important-dates"}>Important dates</a></li>
          </ul>
        </li>

        {/* <li className={"nav-item " + eventSchedule}>
            <Link to="/event-schedule" className='router-link nav-link'>   
            <span className={'nav-cus-link ' + eventSchedule}>Event Schedule</span>
              </Link>
            </li> */}

            {/* <li className={"nav-item " + places}>
            <Link to="/places" className='router-link nav-link'>   
            <span className={'nav-cus-link ' + places}>Places to visit</span>
              </Link>
            </li> */}

            {/* <li className={"nav-item " + contact}>
            <Link to="/contact" className='router-link nav-link'>   
            <span className={'nav-cus-link ' + contact}>Contact</span>
              </Link>
            </li> */}

            {/* <li className={"nav-item " + registration}>
            <Link to="/registration" className='router-link nav-link'>   
            <span className={'nav-cus-link ' + registration }>Registration </span>
              </Link>
            </li> */}
            
            <Fade bottom >
            <li className={"nav-item1"}>
              <a href='https://www.ieee.org' target='_blank' rel="noreferrer" className='router-link nav-link'>
            <img src={IEEE} width="100" className='logo-ieee' alt="IEEE"/>   
              </a>
            </li>
            </Fade>
           
          </ul>
        </div>
      </div>
    </nav>
    
        </>
    )
}

export default Navbar;