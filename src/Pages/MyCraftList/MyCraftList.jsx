import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";


const MyCraftList = () => {
    const {  user } = useAuth();
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/myCraftList/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setItem(data);
        })
    },[user])
    return (
        <div>
            <h1>my craft list</h1>
            {
                item.map(p =>(
                    <div key={p.id}><h1>hello</h1></div>
                ))
            }
        </div>
    );
};

export default MyCraftList;