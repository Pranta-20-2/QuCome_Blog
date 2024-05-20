import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";

const Main = () => {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const controlTimeout = setTimeout(() => {
            setShowLoading(false);
        }, 2000);

        return () => clearTimeout(controlTimeout);
    }, []);

    if (showLoading) {
        return (
            <div className=" text-center flex flex-col max-h-screen items-center h-[512px]  justify-center ">

                <HashLoader color="#36d7b7" />
                <p className=" text-xl font-semibold mt-4">   Loading....</p>
            </div>
        );
    }
    return (
        <div className=" max-w-7xl mx-auto font-lato">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
