import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Base = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}

export default Base;