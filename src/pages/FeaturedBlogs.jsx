import useBlogs from "../Hooks/useBlogs";
import FeaturedRow from "./FeaturedRow";

const FeaturedBlogs = () => {
    const blogs = useBlogs([])
    let serial = 0;
    const sortedBlogs = blogs.sort((a, b) => b.long_description.length - a.long_description.length);
    const topBlogs = sortedBlogs.slice(0, 10);
    return (
        <div>
            <h3 className=" text-2xl text-center mb-10">Top 10 Featured Blogs</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Blog Title</th>
                            <th>Blog Owner</th>
                            <th>Blog Owner Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            topBlogs.map(blog => <FeaturedRow key={blog._id} serial={++serial} blog={blog}> </FeaturedRow>)

                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};
export default FeaturedBlogs;