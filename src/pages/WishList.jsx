import WishListCard from "./WishListCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const WishList = () => {
    const { user } = useContext(AuthContext)
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/wish/${user?.email}`)
            setBlogs(data)
        }
        getData()
    }, [user])
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            {
                blogs.map(wish=><WishListCard key={wish._id} wish={wish} setBlogs={setBlogs}></WishListCard>)

            }

        </div>
    );
};

export default WishList;