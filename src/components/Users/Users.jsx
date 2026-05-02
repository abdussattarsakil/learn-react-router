import { useLoaderData } from "react-router";

const Users = () => {

    const users = useLoaderData();
    console.log(users)

    return (
        <div>
            <h2>This is users fetch</h2>
            {
                users.map(user => (
                    <div>

                        <div>
                            <h1>{user.name}</h1>
                            <h1>{user.id}</h1>
                        </div>
                    </div>
                ))

            }
        </div>

    );
};

export default Users;