import { Carousel } from "flowbite-react";
import bg1 from "../assets/Banner/Banner1.jpg"
import bg2 from "../assets/Banner/Banner2.jpg"
import bg3 from "../assets/Banner/Banner3.jpg"
const Banner = () => {
    return (
        <div className=" h-64 md:h-[550px]">
            <Carousel>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img className="h-full w-full" src={bg2} alt="" />
                    <div className="absolute md:bottom-20 md:right-16 bg-gray-50 opacity-70  p-5 h-auto md:w-1/2 rounded-lg">
                        <p className="font-bold text-3xl">Business Blogs:</p>
                        <p>A personal blog is a website or online journal where you can share your thoughts, experiences and interests. Personal blogs can be about anything, from your daily life to your hobbies and passions. They are typically written in a first-person perspective and can be a great way to connect with others who share your interests</p>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img className="h-full w-full" src={bg1} alt="" />
                    <div className="absolute md:bottom-20 md:right-16 bg-gray-50 opacity-70  p-5 h-auto md:w-1/2 rounded-lg">
                        <p className="font-bold text-3xl">Marketing Blogs:</p>
                        <p>A personal blog is a website or online journal where you can share your thoughts, experiences and interests. Personal blogs can be about anything, from your daily life to your hobbies and passions. They are typically written in a first-person perspective and can be a great way to connect with others who share your interests</p>
                    </div>
                </div>
                <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img className="h-full w-full" src={bg3} alt="" />
                    <div className="absolute md:bottom-20 md:right-16 bg-gray-50 opacity-70  p-5 h-auto md:w-1/2 rounded-lg">
                        <p className="font-bold text-3xl">Personal Blogs:</p>
                        <p>A personal blog is a website or online journal where you can share your thoughts, experiences and interests. Personal blogs can be about anything, from your daily life to your hobbies and passions. They are typically written in a first-person perspective and can be a great way to connect with others who share your interests</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;