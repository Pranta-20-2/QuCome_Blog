import TabsCategories from "../components/TabsCategories";
import 'animate.css';
import 'aos/dist/aos.css'
const AllBlogPage = () => {
    return (

        <div>
            <p className=" text-center my-10 text-5xl font-bold animate__animated animate__bounce animate__slow">All Blog Details</p>
            <div className=" text-center">
                <TabsCategories></TabsCategories>
            </div>
        </div>
    );
};

export default AllBlogPage;