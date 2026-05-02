import { use } from "react";

const Todo = ({ todoPromise }) => {
    const todoData = use(todoPromise)
    console.log('todo data fetch successfully',todoData);
    return (
        <div>
            <h1>this todo for learn data fetch</h1>
        </div>
    );
};

export default Todo;