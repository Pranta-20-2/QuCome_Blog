import { Avatar, Card } from "flowbite-react";

const CommentCard = ({ com }) => {
    // console.log(com);
    const { viewer_email, viewer_image, viewer_name, comment } = com

    return (
        <div>
            <Card className=" text-left h-fit w-full mb-10">
                <div className=" flex items-center justify-between">
                    <div>
                        <Avatar img={viewer_image} rounded bordered />
                    </div>
                    <div>
                        {viewer_name}
                    </div>
                    <div>
                        {viewer_email}
                    </div>

                </div>
                <div>
                    {comment}
                </div>
            </Card>

        </div>
    );
};

export default CommentCard;