import { NavLink, useLoaderData } from "react-router";


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>Total Post:{posts.length}</h1>
            {
                posts.map(post=>(
                    <div>
                        <h1>{post.id}</h1>
                        <NavLink to={`/posts/${post.id}`}><button className="">details</button></NavLink>
                    </div>
                ))
            }
        </div>
    );
};

export default Posts;