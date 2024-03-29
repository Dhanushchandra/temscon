import Base from "../components/Base/Base";
import Committee from "../components/Committee/Committee";
import GuidelinesHero from "../components/Home/Guidelines/Guidelines-Hero";
import Hero from "../components/Home/Hero";
import HomeCFP from "../components/Home/Home-CFP";
import HomeContent from "../components/Home/Home-Content";

const Home = () => {
  return (
    <Base>
      <Hero />
      <HomeContent />
      <HomeCFP />
      <GuidelinesHero />
      <Committee />
    </Base>
  );
};

export default Home;
