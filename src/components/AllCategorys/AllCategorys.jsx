import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import ShowCategoryData from "../ShowCategoryData/ShowCategoryData";


const AllCategorys = () => {
    //const navigate = useNavigate()
    
    const  [categorys, setCategorys] = useState([])
    
    

    useEffect(() => {
        fetch("http://localhost:5000/category")
          .then((res) => res.json())
          .then((data) => {
            setCategorys(data);
            
            
          });
      }, []);

      //const handleCategory=()=>{
        //console.log(categorys.category);
      //}
    
    return (
        <div className="lg:container mx-auto">
            <h1>all categoris{categorys.length}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    categorys.map((category)=><ShowCategoryData 
                    key={category._id} 
                    category={category}
                    //handleCategory={handleCategory}
                    ></ShowCategoryData>)
                }
            </div>

        </div>
    );
};

export default AllCategorys;