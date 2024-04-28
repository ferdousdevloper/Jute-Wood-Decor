import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
//import backgroundImage from "../../../public/cool-background (1).png"
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
    <div className="mx-auto ">
      <Card
      shadow={false}
      className=" relative grid max-h-[40rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center shadow-2xl"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/TMQ2XsX/cool-background.png')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      
      <CardBody className="relative py-4 ">
      <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src={image}
        />
        <div className="space-y-2 text-white">
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
                <h1 className="md:text-lg text-left"><strong>Category:</strong> {category}</h1>
            </div>
            <div className="flex justify-between">
                <p><strong>Customization:</strong> {customization}</p>
                <p className="bg-green-500  md:px-3 md:py-1 rounded-xl">{stockStatus}</p>
            </div>
            <div>
                <p className="text-left"><strong>Processing Time:</strong> {processingTime} Days</p>
            </div>
            <div className="border border-green-600 text-center rounded-3xl te py-2">
                <p><strong>Price: $ {price}</strong></p>
            </div>
            <Link to={`/viewDetail/${_id}`} className="flex justify-end">
                <button className="btn w-full bg-green-500 text-white text-md rounded-full">View Details</button>
            </Link>
            
          </div>
        
      </CardBody>
    </Card>
    </div>
  );
};

export default SingleCraftItems;
