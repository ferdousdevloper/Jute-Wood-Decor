import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import {  useParams } from "react-router-dom";


const CategoryOutput = () => {

    //const selectCategory = useLoaderData()
    const [items, setItems] = useState([])
    const {category} = useParams()

console.log(category);

    useEffect(() => {
        fetch(`http://localhost:5000/decor`)
          .then((res) => res.json())
          .then((data) => {
            const filterData = data.filter((item)=>item.category == category.split("-").join(" ")) 
            setItems(filterData);
            //--------
            console.log(filterData)
            
          });
      }, []);
    //   const remaining = selectedCategory.filter((item) => item.category !== category);
    //   setSelectedCategory(remaining);

      



    console.log(items);
   // console.log(selectedCategory);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            {
                items.map((item)=><div key={item._id}>
                <div className="">
                <div className="w-full shadow-2xl ">
                  <figure className="">
                    <img
                      src={item.image}
                      alt="car!"
                      className="w-full"
                    />
                  </figure>
                  <div className="p-6">
                    <div className=" flex gap-2 items-center  p-2 rounded-xl">
                      <strong>Rating: </strong>
                      <FaStar className="text-yellow-600" />
                      <h3 className="font-bold">{item.rating}.0</h3>
                    </div>
                    <div className="flex justify-between gap-4">
                      <p className="badge py-4 bg-green-500 text-white font-bold">
                        {item.stockStatus}
                      </p>
                      <p className="text-right py-4 badge badge-accent font-bold">$ {item.price}</p>
                    </div>
                    <h2 className="text-4xl font-gilda py-4">{name}</h2>
                    <p className="py-3 text-gray-500">
                      <strong>Category: </strong>
                      {category}
                    </p>
                    <p className="py-4 text-gray-500">
                      <strong>Customization: </strong>
                      {item.customization}
                    </p>
                    <div className="flex justify-between gap-2">
                    </div>
                  </div>
                </div>
              </div>
            </div>)
            }
        </div>
    );
};

export default CategoryOutput;