import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import ShowCategoryData from "../ShowCategoryData/ShowCategoryData";

const AllCategorys = () => {
  //const navigate = useNavigate()

  const [categorys, setCategorys] = useState([]);

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
      <div className="text-center mb-10">
        <h1 className="font-gilda md:text-5xl text-2xl  font-bold md:font-extrabold mt-10 mb-6">
          MY ART & CRAFT LIST
        </h1>
        <p className="max-w-[600px] mx-auto">
          Explore our diverse range of categories, from fashion to technology.
          Discover curated collections for every interest. Find exactly what you
          are looking for, hassle-free.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 items-center justify-center">
        {categorys.map((category) => (
          <ShowCategoryData
            key={category._id}
            category={category}
            //handleCategory={handleCategory}
          ></ShowCategoryData>
        ))}
      </div>
    </div>
  );
};

export default AllCategorys;
