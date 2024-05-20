import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import MyPostCard from "./MyPostCard";

const MyPostBlogs = () => {
    const { user } = useContext(AuthContext)
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/blogs/${user?.email}`)
            setBlogs(data)
        }
        getData()
    }, [user])
    return (
        <div>
            <p className=" text-center text-3xl font-bold mb-5">Your Added Blogs: {blogs.length}</p>
            {
                blogs.map(blog=><MyPostCard key={blog._id} blog={blog}></MyPostCard>)
            }
        </div>
    );
};

export default MyPostBlogs;