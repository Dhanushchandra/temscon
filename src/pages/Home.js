import Base from "../components/Base/Base"
import Hero from "../components/Home/Hero"
import HomeCFP from "../components/Home/Home-CFP"
import HomeContent from "../components/Home/Home-Content"


const Home = () => {
    return (
        <Base>
            <Hero/>
            <HomeContent/>
            <HomeCFP/>
        </Base>
    )
}

export default Home