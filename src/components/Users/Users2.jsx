import { useLoaderData } from "react-router";

const Users2 = () => {
    const users2 =useLoaderData()
    console.log(users2)
    return (
        <div>
            <h1>This is Users 2</h1>
        </div>
    );
};

export default Users2;