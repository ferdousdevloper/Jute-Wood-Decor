import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";

import { useLoaderData } from "react-router-dom";

const ViewDetail = () => {
  const singleData = useLoaderData();
  const {
    image,
    name,
    category,
    price,
    customization,
    processingTime,
    stockStatus,
    rating,
    description,
  } = singleData || {};

  return (
    <div className="my-20">
      <Card className="w-full mx-auto max-w-[68rem] flex-row shadow-2xl">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            <strong>Category</strong> : {category}
          </Typography>
          <div className=" flex gap-2 items-center  p-2 rounded-xl">
            <strong>Rating: </strong>
            <FaStar className="text-yellow-600" />
            <h3 className="font-bold">{rating}.0</h3>
          </div>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 font-extrabold"
          >
            {name}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            <strong>Description: </strong>
            {description}
          </Typography>
          <p>
            <strong>Customization:</strong> {customization}
          </p>
          <div>
            <p>
              <strong>Processing Time: </strong>
              {processingTime} Days
            </p>
          </div>
          <div className="flex justify-between">
            <p className=" border px-8 py-2 rounded-lg bg-purple-700 text-white  bg-opacity-60 font-bold">
              {stockStatus}
            </p>
            <p className=" border px-8 py-2 rounded-lg bg-purple-700 bg-opacity-60 font-bold text-white">
              $ {price}
            </p>
          </div>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewDetail;
