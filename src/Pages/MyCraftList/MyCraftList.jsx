import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";

import SingleMyCraftList from "../../components/SingleMyCraftList/SingleMyCraftList";
import Swal from "sweetalert2";

const MyCraftList = () => {
  const { user } = useAuth();
  const [item, setItem] = useState([]);
  const [decor, setDecor] = useState(item)

  useEffect(() => {
    fetch(`http://localhost:5000/myCraftList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user, decor]);


  const handleDelete=(_id)=>{
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result)=>{
        if(result.isConfirmed){

            fetch(`http://localhost:5000/decor/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        "Deleted!",
                         "Your Craft item has been deleted.",
                        "success"
                      );
                      const remaining = decor.filter(item => item._id !== _id);
                      setDecor(remaining)
                }
            })
          }
      })
      
  }
  
  return (
    <div className="md:container md:mx-auto mx-20 my-20">
      <div className="text-center mb-10"><h1 className="font-gilda text-5xl font-extrabold mb-6">MY ART & CRAFT LIST</h1>
      <p className="max-w-[600px] mx-auto">
      Explore exquisite art and craft creations on our curated platform. Discover unique pieces, get inspired, and connect with talented artisans. Your journey into creativity begins here. Start exploring now!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {item.map((p) => (
          <SingleMyCraftList 
          key={p._id} 
          p={p}
          decor={decor}
          setDecor={setDecor}
          handleDelete={handleDelete}
          ></SingleMyCraftList>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
