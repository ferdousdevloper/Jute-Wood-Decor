import { useLoaderData } from "react-router-dom";
import SingleCraftItems from "../SingleCraftItem/SingleCraftItems";

const CraftItems = () => {
  const decors = useLoaderData();
  return (
    <div>
      <h1>all craft {decors.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {decors.map((decor) => (
          <SingleCraftItems key={decor._id} decor={decor}></SingleCraftItems>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
