import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { HiOutlineArrowRight } from 'react-icons/hi';
import { TbJewishStar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "framer-motion";

const BlogsCard = ({ blog }) => {
    const { user } = useContext(AuthContext);
    const { _id, title, image, short_description, long_description, category, owner } = blog || {};
    
    const handleWish = async e => {
        e.preventDefault();
        const wishData = {
            blogId: _id,
            title,
            image,
            short_description,
            long_description,
            category,
            owner:{
                email : user?.email,
                name : user?.displayName,
                photo: user?.photoURL
            }
        };
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/wish`, wishData);
            if (data.insertedId) {
                toast.success("Successfully Added in Wish list");
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <motion.div 
            initial={{ scale: 1 }}
            animate={{ scale: [1, 0.9, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
        >
            <Card className="text-left h-full">
                <div className="md:h-[250px]">
                    <img className="h-full rounded-2xl" src={image} alt="" />
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {short_description}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-bold">Category: </span>{category}
                </p>
                <Link to={`/blog/${_id}`}>
                    <Button className="w-full">
                        View details
                        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
                {
                    user ? 
                    <Link onClick={handleWish} to={`/wishBlog/${_id}`}>
                        <Button className="w-full">
                            Wish List
                            <TbJewishStar className="ml-2 h-5 w-5" />
                        </Button>
                    </Link> : 
                    <></>
                }
            </Card>
        </motion.div>
    );
};

export default BlogsCard;
