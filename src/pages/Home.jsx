import { Fade } from "react-awesome-reveal";
import Banner from "../components/Banner";
import 'animate.css';
import 'aos/dist/aos.css'
import TabsCategories from "../components/TabsCategories";
import AllBlogs from "../components/AllBlogs";
import NewsLetter from "../components/NewsLetter";
import { motion } from "framer-motion"
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" my-10">
                <p className=" text-center my-10 text-5xl font-bold animate__animated animate__bounce animate__slow">All Blogs</p>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className=" text-center my-10 text-xl border-y-4 border-dashed p-6 max-w-[600px] mx-auto" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Our team of experienced writers and contributors come from diverse backgrounds and industries, bringing a wealth of knowledge and expertise to the table. We strive to create content that is engaging, informative, and accessible to readers of all levels, from beginners to experts.</p>
                </motion.div>
                <div >
                    <AllBlogs></AllBlogs>
                </div>
                <div className=" my-10">
                    <p className=" text-center my-10 text-5xl font-bold animate__animated animate__bounce animate__slow">News Letter Section</p>
                    <NewsLetter></NewsLetter>
                </div>
                <div className=" text-center">
                    <p className=" text-center my-10 text-5xl font-bold animate__animated animate__bounce animate__slow">Sorted Blogs By Categories</p>
                    <Fade cascade>
                        <ul className=" text-xl border-y-4 border-dashed max-w-[600px] mx-auto py-3">
                            <li className="text-blue-400">A beautiful landscape painting  </li>
                            <li>capturing the vibrant colors of a sunset</li>
                            <li className=" text-green-400">over the mountains.</li>
                        </ul>
                    </Fade>
                </div>
            </div>
            <div className=" text-center">
                <TabsCategories></TabsCategories>
            </div>


        </div>
    );
};

export default Home;