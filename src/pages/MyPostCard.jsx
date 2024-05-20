import { Button, Card } from "flowbite-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const MyPostCard = ({ blog }) => {
    const { _id, title, image, short_description, long_description, category, owner } = blog || {};
    return (
        <div>
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
                            <span>Email: {owner.email}</span>
                            <br />
                            <span>Name: {owner.name}</span>
                        </p>
                        <div className="my-5">
                        <Link to={`/update/${_id}`} >
                            <Button>Update Details</Button>
                        </Link>
                        </div>
                        
                    </div>

                </div>

            </Card>

        </div>
    );
};

export default MyPostCard;