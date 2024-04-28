//import { useLoaderData } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const ShowCategoryData = ({category,}) => {
  // const categoryData = useLoaderData()
  // console.log(categoryData);

  const navigate = useNavigate()

  const handleCategory=(category)=>{
    console.log(category.category);
    navigate(`/category/${category.category.split(" ").join("-")}`)
  }

  return (
    <div
       
      onClick={()=>handleCategory(category)}
      className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 cursor-pointer"
    >
      <img
        src={category.image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-32 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-1">
          <h2 className="md:text-xl text-lg font-semibold tracking-wide">
            {category.category}
          </h2>
          <p className="dark:text-gray-800"></p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ShowCategoryData;
