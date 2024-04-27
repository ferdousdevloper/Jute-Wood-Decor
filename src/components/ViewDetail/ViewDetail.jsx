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
  } = singleData || {};

  return (
    <div className="my-20">
      <Card className="w-full mx-auto max-w-[68rem] flex-row">
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
            <p className=" border border-[#059669] px-8 py-2 rounded-lg bg-[#059669]  bg-opacity-60 font-bold">
              {stockStatus}
            </p>
            <p className=" border border-[#059669] px-8 py-2 rounded-lg bg-[#059669] bg-opacity-60 font-bold">
              $ {price}
            </p>
          </div>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewDetail;
