import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleCraftItems = ({ decor }) => {
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
  } = decor || {};
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <div rel="noopener noreferrer" href="#" className="block">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">
                  {name}
                </h3>
                <div className="flex gap-2 items-center  p-2 rounded-xl">
                  <FaStar className="text-yellow-600" />
                  <h3 className="font-bold">{rating}.0</h3>
                </div>
              </div>
            </div>
            <div>
                <h1 className="text-lg"><strong>Category:</strong> {category}</h1>
            </div>
            <div className="flex justify-between">
                <p><strong>Customization:</strong> {customization}</p>
                <p className="bg-green-500 text-white px-3 py-1 rounded-xl">{stockStatus}</p>
            </div>
            <div>
                <p><strong>Processing Time:</strong> {processingTime} Days</p>
            </div>
            <div className="border border-green-600 text-center rounded-3xl te py-2">
                <p><strong>Price: $ {price}</strong></p>
            </div>
            <Link to={`/viewDetail/${_id}`} className="flex justify-end">
                <button className="btn bg-green-500 text-white text-md">View Details</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCraftItems;
