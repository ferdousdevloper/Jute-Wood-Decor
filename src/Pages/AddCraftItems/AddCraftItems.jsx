import Swal from 'sweetalert2'
import useAuth from '../../Hook/useAuth';
import { Helmet } from 'react-helmet';

const AddCraftItems = () => {
  const {  user } = useAuth();

  const handleAddProduct = event => {
    event.preventDefault();
    const form= event.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const email = form.email.value;
    const userName = form.userName.value;

    const newCraftItem = {name, category, price, customization, processingTime, stockStatus, image, rating, description, email, userName}

    console.log(newCraftItem);

    //send data to the server
    fetch('https://jute-wood-decor-server-site.vercel.app/decor',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCraftItem)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: "Added Craft Item Successfully!",
                icon: "success"
              });

        }
    })
  };


  return (
    <div className="md:container mx-auto py-20 ">
      <Helmet>
        <title>WOOD | ADD CRAFT ITEM</title>
      </Helmet>
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5] rounded-3xl">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C]">
                {/* {update ? "Update " : "Add "} */}
              </span>
              <h1 className="font-gilda md:text-5xl text-2xl  font-bold md:font-extrabold  mb-6">
          ADD YOUR PRODUCT
        </h1>
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddProduct}>
          <div className="flex gap-8 flex-col md:flex-row ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Item Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="category"
              >
                Category Name
              </label>
              <select
                name="category"
                id="category"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select Category"
              >
                <option disabled selected>
                  Select Category
                </option>
                <option value="Wooden Furniture & Sculptures" selected>
                  Wooden Furniture & Sculptures
                </option>
                <option value="Wooden Home Decor" selected>
                  Wooden Home Decor
                </option>
                <option value="Wooden Utensils and Kitchenware" selected>
                  Wooden Utensils and Kitchenware
                </option>
                <option value="Jute Home Decor" selected>
                  Jute Home Decor
                </option>
                <option value="Jute Kitchenware & utensils" selected>
                  Jute Kitchenware & utensils
                </option>
                <option value="Jute and wooden jewellery" selected>
                  Jute and wooden jewellery
                </option>
              </select>
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="Price"
                name="price"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Customization
              </label>
              <select
                name="customization"
                id="customization"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                defaultValue="customization"
                placeholder="Customization"
              >
                <option disabled selected>
                  Select
                </option>
                <option value="yes" selected>
                  Yes
                </option>
                <option value="no" selected>
                  No
                </option>
              </select>
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="processingTime"
              >
                Processing Time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Processing Time"
                id="processingTime"
                name="processingTime"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="stockStatus"
              >
                Stock Status
              </label>
              <select
                name="stockStatus"
                id="stockStatus"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Stock Status"
              >
                <option disabled selected>
                  Select
                </option>
                <option value="In Stock" selected>
                  In Stock
                </option>
                <option value="Made to Order" selected>
                  Made to Order
                </option>
              </select>

              
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>

              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="description">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Description"
                id="description"
                name="description"
              />

              <label className="block mb-2 mt-4 dark:text-white" htmlFor="userEmail">
                User Email
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="email"
                placeholder="Enter User Email"
                id="email"
                name="email"
                defaultValue={user.email}
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="userName">
                User Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter User Name"
                id="userName"
                name="userName"
                defaultValue={user.displayName}
              />

              
            </div>
          </div>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-lime-600  bg-lime-400 duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItems;
