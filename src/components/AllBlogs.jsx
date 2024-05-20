import BlogsCard from "./BlogsCard";
import useBlogs from "../Hooks/useBlogs";

const AllBlogs = () => {
    const blogs = useBlogs([])
    return (
        <div className=" mb-10">
            <p className=" text-center mb-10 text-2xl ">Total Blogs In List: {blogs.length}</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    blogs.map(blog =>
                        <BlogsCard key={blog._id} blog={blog}></BlogsCard>
                    )
                }
            </div>

        </div>
    );
};

export default AllBlogs;