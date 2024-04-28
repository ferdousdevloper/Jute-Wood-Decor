import { Link, useLoaderData } from "react-router-dom";
import SingleCraftItems from "../SingleCraftItem/SingleCraftItems";

const CraftItems = () => {
  const decors = useLoaderData();
  const limitedDecors = decors.slice(0, 6);
  return (
    <div>
      <h1>all craft {decors.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {limitedDecors.map((decor) => (
          <SingleCraftItems key={decor._id} decor={decor}></SingleCraftItems>
        ))}
      </div>
      <div className="flex flex-col items-center mt-10">
        <Link to='/allCraftItems'>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              See ALL
            </span>
            <span className="relative invisible">See All</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CraftItems;
