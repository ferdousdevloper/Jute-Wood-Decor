import { FaStar } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleMyCraftList = ({p, decor, setDecor, handleDelete}) => {

    const {
        _id,
        image,
        name,
        category,
        price,
        customization,
        processingTime,
        stockStatus,
        rating,
        description,
        email,
        userName,
      } = p || {};

      
    return (
        <div>
            <div className="">
            <div className="w-full shadow-2xl ">
              <figure className="">
                <img
                  src={image}
                  alt="car!"
                  className="w-full"
                />
              </figure>
              <div className="p-6">
                <div className=" flex gap-2 items-center  p-2 rounded-xl">
                  <strong>Rating: </strong>
                  <FaStar className="text-yellow-600" />
                  <h3 className="font-bold">{rating}.0</h3>
                </div>
                <div className="flex justify-between gap-4">
                  <p className="badge py-4 bg-green-500 text-white font-bold">
                    {stockStatus}
                  </p>
                  <p className="text-right py-4 badge badge-accent font-bold">$ {price}</p>
                </div>
                <h2 className="text-4xl font-gilda py-4">{name}</h2>
                <p className="py-3 text-gray-500">
                  <strong>Category: </strong>
                  {category}
                </p>
                <p className="py-4 text-gray-500">
                  <strong>Customization: </strong>
                  {customization}
                </p>
                <div className="flex justify-between gap-2">
                  <Link
                  to={`/updateCraftItem/${_id}`}
                    href="#_"
                    className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative flex items-center gap-1"><FaEdit />
                    Update</span>
                  </Link>
                  <button
                  onClick={()=> handleDelete(_id)}
                    href="#_"
                    className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-red-600 border-2 border-red-600 rounded-full hover:text-white group hover:bg-gray-50"
                  >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-red-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative flex items-center gap-1"><MdDelete />
                    Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SingleMyCraftList;