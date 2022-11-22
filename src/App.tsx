import BannerHome from "./components/BannerHome";
import Categories from "./components/Categories";
import ExploreProd from "./components/ExploreProd";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestProduct from "./components/LatestProduct";
import Moisture from "./components/Moisture";
import TopBar from "./components/TopBar";

function App() {
    return (
        <>
            <TopBar />
            <Header />
            <BannerHome />
            <Moisture />
            <Categories />
            <LatestProduct />
            <ExploreProd />
            <FollowUs />
            <Footer />
        </>
    );
}

export default App;
