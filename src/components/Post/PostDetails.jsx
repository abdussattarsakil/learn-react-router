import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
    const post=useLoaderData();
    const navigate= useNavigate();
    const {body,title}=post
    return (
        <div>
            <h1>{title}</h1>
            <h1>{body}</h1>
            <br />
            <button onClick={()=>navigate(-1)}>GO BACK</button>
        </div>
    );
};

export default PostDetails;