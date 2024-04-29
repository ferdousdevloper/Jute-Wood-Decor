import Banner from "../../components/Banner/Banner";
import Reviews from "./../../components/Reviews/Reviews";
import CraftItems from "../../components/CraftItems/CraftItems";
import AllCategorys from "../../components/AllCategorys/AllCategorys";
import Faq from "../../components/Faq/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CraftItems></CraftItems>
      <AllCategorys></AllCategorys>
      <Reviews></Reviews>
      <Faq></Faq>
    </div>
  );
};

export default Home;
