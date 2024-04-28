
import Banner from "../../components/Banner/Banner";
import Reviews from './../../components/Reviews/Reviews';
import CraftItems from "../../components/CraftItems/CraftItems";
import AllCategorys from "../../components/AllCategorys/AllCategorys";


const Home = () => {
    
    return (
        <div>
            
            <Banner></Banner> 
            <AllCategorys></AllCategorys>          
             <CraftItems></CraftItems>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;