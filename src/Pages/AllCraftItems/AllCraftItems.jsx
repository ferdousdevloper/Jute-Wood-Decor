/* eslint-disable react/no-unknown-property */
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllCraftItems = () => {
  const decor = useLoaderData();

  return (
    <div className="md:container md:mx-auto my-10 ">
      <Helmet>
        <title>WOOD | ALL CRAFT ITEMS</title>
      </Helmet>
      <h2
      className="text-2xl font-semibold sm:text-4xl text-center mb-6">
        ALL ART & CRAFT ITEMS
      </h2>
      <div className="overflow-x-auto border rounded-2xl shadow-2xl">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Images</th>
              <th>Info</th>
              <th>Price</th>
              <th>Stock status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              // eslint-disable-next-line react/no-unknown-property
              decor.map((i) => (
                <tr key={i._id} i={i} className="shadow-2xl">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask  w-40 h-40">
                          <img src={i.image} alt="" />
                        </div>
                      </div>
                      
                    </div>
                  </td>
                  <td>
                      <div>
                        <div className="font-bold">{i.name}</div>
                        <div className="text-sm opacity-50">
                          Category: {i.category}
                        </div>
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Customization: {i.customization}
                        </span>
                      </div>
                      </td>
                  <td className="font-bold">$ {i.price}</td>
                  <td>
                    <span className="border px-3 py-1 rounded-3xl font-bold">
                      {i.stockStatus}
                    </span>
                  </td>
                  <th>
                    <Link to={`/viewDetail/${i._id}`}>
                    <button className="btn btn-ghost btn-sm bg-green-500 text-white">
                      View Detail
                    </button></Link>
                    
                  </th>
                </tr>
              ))
            }
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Images</th>
              <th>Info</th>
              <th>Price</th>
              <th>Stock status</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllCraftItems;
