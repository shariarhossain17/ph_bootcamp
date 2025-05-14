import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Reviews from "../../components/Reviews";
import Success from "../../components/Success";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Success />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
