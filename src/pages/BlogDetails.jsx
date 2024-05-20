import { Button, Card } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import CommentsDetails from "./CommentsDetails";

const BlogDetails = () => {
    const { user } = useContext(AuthContext)
    const blog = useLoaderData();
    const { _id, title, image, short_description, long_description, category, owner } = blog || {};
    const handleFormSubmit = async e => {
        e.preventDefault();
        const form = e.target
        const blogId = _id;
        const viewer_name = form.name.value;
        const email = owner?.email;
        const comment = form.comment.value;
        const viewer_email = form.email.value;
        const viewer_image = user?.photoURL;
        if (email === viewer_email) {
            return toast.error("Can not comment on own blog")
        }
        // console.log(blogId, image, viewer_name, email, comment);
        const commentData = {
            blogId,
            viewer_name,
            email,
            comment,
            viewer_email,
            viewer_image,
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/comment`, commentData)
            // console.log(data);
            if (data.insertedId) {
                toast.success("Comment send")
            }
        }
        catch (err) {
            toast.error(err.message);
        }

    }
    return (
        <div className=' mx-auto h-full'>
            {/* Blog Details */}
            <Card className=" text-left h-fit w-full mb-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img src={image} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className=" space-y-4">
                        <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                        <p className="text-2xl font-normal text-gray-700 dark:text-gray-400">
                            {short_description}
                        </p>
                        <p className="text-2xl font-normal text-gray-700 dark:text-gray-400">
                            <span className=" font-bold">Description: </span><br />
                            {long_description}
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <span className=" font-bold text-xl">Category: </span>{category}
                        </p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <span className=" font-bold text-xl">Owner Details: </span> <br />
                            <span>Email: {owner?.email}</span>
                            <br />
                            <span>Name: {owner?.name}</span>
                        </p>
                    </div>
                    <div>
                        {
                             user?.email === owner?.email ?
                                
                            
                                <Link to={`/update/${_id}`} >
                                    <Button>Update Details</Button>
                                </Link>
                                :
                                <></>
                            
                        }

                    </div>

                </div>

            </Card>

            <section className='p-6 h-fit w-full  bg-white rounded-md shadow-md flex-1'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Your Comment Section:
                </h2>

                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 md:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='price'>
                                User Name:
                            </label>
                            <input
                                id='name'
                                type='text'
                                name='name'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    <div>
                        <label className='text-gray-700 ' htmlFor='comment'>
                            Comment
                        </label>
                        <input
                            id='comment'
                            name='comment'
                            type='text'
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>

                    <div className='flex justify-center mt-6'>
                        <button
                            type='submit'
                            className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                        >
                            Submit Comment
                        </button>
                    </div>
                </form>
            </section>
            <div className=" my-10">
                <CommentsDetails _id={_id}></CommentsDetails>
            </div>
        </div>
    );
};

export default BlogDetails;