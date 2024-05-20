import axios from "axios";
import { get } from "firebase/database";
import { Button, Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import { AuthContext } from "../provider/AuthProvider";

const WishListCard = ({ wish, setBlogs }) => {
    const { user } = useContext(AuthContext)
    // console.log(wish);
    const { _id, title, image, short_description, long_description, category, owner } = wish || {};
    useEffect(() => {
        getData()
    }, [user])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/wish/${user?.email}`)
        setBlogs(data)
        // console.log(data);
    }
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/wish/${id}`)
            // console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Blogs has been deleted.",
                    icon: "success"
                });
                getData()
            }
        }
        catch (err) {
            toast.error(err.message);
        }

    }
    return (
        <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
        >
            <Card className=" text-left h-full">
                <div className=" md:h-[250px] ">
                    <img className=" h-full rounded-2xl" src={image} alt="" />
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {short_description}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className=" font-bold">Category: </span>{category}
                </p>
                <Button onClick={() => handleDelete(_id)} color="failure">Delete</Button>

            </Card>
        </motion.div>
    );
};

export default WishListCard;
