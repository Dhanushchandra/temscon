import "./Base.css"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import GoToTop from "../GoToTop.js/GoToTop";

const Base = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main-content">{children}
      <GoToTop/>
      </div>
      <Footer />
    </>
  );
};

export default Base;
