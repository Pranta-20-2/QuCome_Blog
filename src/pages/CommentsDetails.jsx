import axios from "axios";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

const CommentsDetails = ({_id}) => {
    // console.log(_id);
    const [ comments, setComments ] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/comments/${_id}`)
            setComments(data)
        }
        getData()
    }, [_id])
    // console.log(comments);

    return (
        <div>
            <p>Comments Count: {comments.length}</p>
            {
                comments.map(com =><CommentCard key={com._id} com={com}></CommentCard>)
            }

        </div>
    );
};

export default CommentsDetails;