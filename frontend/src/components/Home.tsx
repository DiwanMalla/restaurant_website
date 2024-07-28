import Banner from "./Banner";
import Navbar from "./Navbar";
import PopularCategories from "./PopularCategories";

const Home = () => {
  return (
    <div className="">
      <div id="container" className="">
        {/* Header */}
        <div id="navbar">
          <Navbar />
        </div>
        <div id="banner" className="">
          <Banner />
        </div>
        <div className="pt-[50px]">
          <PopularCategories />
        </div>
      </div>
    </div>
  );
};

export default Home;
