import { Button, Label, Textarea } from "flowbite-react";
import toast from "react-hot-toast";

const NewsLetter = () => {
    const handleSubscribe= e =>{
        e.preventDefault();
        toast.success("Thank you for subscribing to our newsletter")
    }
    return (
        <div>
            <form onSubmit={handleSubscribe}>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                    <label className="input input-bordered flex items-center gap-2">
                        Name
                        <input type="text" className="grow" placeholder="Your Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input type="email" className="grow" placeholder="Your email" />
                    </label>

                </div>
                <div className="w-full my-5">
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Your Comment" />
                    </div>
                    <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                </div>
                <Button className="  mx-auto" type="submit">Subscribe Now</Button>

            </form>


        </div>
    );
};

export default NewsLetter;