//import { useLoaderData } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const ShowCategoryData = ({ category }) => {
  // const categoryData = useLoaderData()
  // console.log(categoryData);

  const navigate = useNavigate();

  const handleCategory = (category) => {
    console.log(category.category);
    navigate(`/category/${category.category.split(" ").join("-")}`);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1400"
      data-aos-delay="1400"
      onClick={() => handleCategory(category)}
      className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 cursor-pointer"
    >
      <img
        src={category.image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-1">
          <h2 className="md:text-xl text-lg font-semibold tracking-wide">
            {category.category}
          </h2>
          <hr />
          <p className="dark:text-gray-800 text-xs">
            <strong>Origin:</strong> {category.origin}
          </p>
          <hr />
          <p className="dark:text-gray-800 text-xs">
            <strong>Key element:</strong> {category.key_element}
          </p>
        </div>
        <a
          
          className="relative px-5 py-2 font-medium text-white group text-center"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span className="relative">View</span>
        </a>
      </div>
    </div>
  );
};

export default ShowCategoryData;
