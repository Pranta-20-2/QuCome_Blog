import axios from "axios";
import { useEffect, useState } from "react";

const useBlogs = () => {
    const [ blogs, setBlogs ] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/blogs`)
            setBlogs(data)
        }
        getData()
    }, [])
    return blogs;
};

export default useBlogs;