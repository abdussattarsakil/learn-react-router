import { useLoaderData } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div>
            <h1 className="text-2xl"> {user.name} User details are here</h1>

            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserDetails;