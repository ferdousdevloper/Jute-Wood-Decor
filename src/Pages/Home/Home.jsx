import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Reviews from './../../components/Reviews/Reviews';
import CraftItems from "../../components/CraftItems/CraftItems";


const Home = () => {
    const decors = useLoaderData()
    return (
        <div>
            
            <Banner></Banner>
            {/* <h1>all decors{decors.length}</h1>
             */}<CraftItems></CraftItems>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;