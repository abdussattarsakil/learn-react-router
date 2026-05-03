import { useLoaderData } from "react-router";

const PostDetails = () => {
    const post=useLoaderData();
    const {body,title}=post
    return (
        <div>
            <h1>{title}</h1>
            <h1>{body}</h1>
        </div>
    );
};

export default PostDetails;