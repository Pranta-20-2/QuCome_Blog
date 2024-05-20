import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateBlogs = () => {
    const blog = useLoaderData()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { _id, title, image, short_description, long_description, category, owner } = blog || {};
    const handleFormSubmit = async e => {
        e.preventDefault();
        const form = e.target
        const title = form.title.value;
        const email = user?.email;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const image = form.image.value;

        // console.log(image, title, email, category, short_description, long_description);
        const blogData = {
            image,
            title,
            category,
            short_description,
            long_description,
            owner: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            }
        }
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/blog/${_id}`, blogData)
            // console.log(data);
            if (data.modifiedCount>0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/my-blogs')

            }
        }
        catch (err) {
            toast.error(err.message);
        }

    }
    return (
        <div className='flex justify-center items-center my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Update your Blog
                </h2>

                <form onSubmit={handleFormSubmit}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Blog Title
                            </label>
                            <input
                                id='title'
                                name='title'
                                type='text'
                                required
                                defaultValue={title}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
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
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div className='flex flex-col gap-2 mt-6 '>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                defaultValue={category}
                                id='category'
                                className='border p-2 rounded-md'
                            >
                                <option value='Personal Blogs'>Personal Blogs</option>
                                <option value='Business Blogs'>Business Blogs</option>
                                <option value='Marketing Blogs'>Marketing Blogs</option>
                                <option value='LifeStyle Blogs'>LifeStyle Blogs</option>
                                <option value='Health Blogs'>Health Blogs</option>
                                <option value='Religious Blogs'>Religious Blogs</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 ' htmlFor='description'>
                                Blog Image Url
                            </label>
                            <input
                                id='imageUrl'
                                type='text'
                                name='image'
                                defaultValue={image}
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Short Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='short_description'
                            id='short_description'
                            defaultValue={short_description}
                        ></textarea>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Long Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='long_description'
                            id='long_description'
                            defaultValue={long_description}
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Update
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateBlogs;