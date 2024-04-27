import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { FaStar } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const MyCraftList = () => {
  const { user } = useAuth();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myCraftList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
  return (
    <div className="md:container md:mx-auto mx-20 my-20">
      <div className="text-center mb-10"><h1 className="font-gilda text-5xl font-extrabold mb-6">MY ART & CRAFT LIST</h1>
      <p className="max-w-[600px] mx-auto">
      Explore exquisite art and craft creations on our curated platform. Discover unique pieces, get inspired, and connect with talented artisans. Your journey into creativity begins here. Start exploring now!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {item.map((p) => (
          <div key={p.id} className="">
            <div className="card w-full glass ">
              <figure>
                <img
                  src={p.image}
                  alt="car!"
                  className="rounded-2xl mx-5 my-5 w-full max-w-[350px]"
                />
              </figure>
              <div className="card-body">
                <div className=" flex gap-2 items-center  p-2 rounded-xl">
                  <strong>Rating: </strong>
                  <FaStar className="text-yellow-600" />
                  <h3 className="font-bold">{p.rating}.0</h3>
                </div>
                <div className="flex justify-between gap-4">
                  <p className="badge py-4 bg-green-500 text-white font-bold">
                    {p.stockStatus}
                  </p>
                  <p className="text-right py-4 badge badge-accent font-bold">$ {p.price}</p>
                </div>
                <h2 className="card-title">{p.name}</h2>
                <p>
                  <strong>Category: </strong>
                  {p.category}
                </p>
                <p>
                  <strong>Customization: </strong>
                  {p.customization}
                </p>
                <div className="flex justify-between gap-2">
                  <Link
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
                  <Link
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
