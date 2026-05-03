import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobiles from './components/Mobiles/Mobiles';
import Laptops from './components/Laptops/Laptops';
import Users from './components/Users/Users';
import Users2 from './components/Users/Users2';
import Todo from './components/Users/Todo';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Post/Posts';
import PostDetails from './components/Post/PostDetails';

const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Users2
      },
      {
        path: 'todo',
        element: <Suspense fallback={<h1>Loading....</h1>}>
          <Todo todoPromise={todoPromise}></Todo>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts
      },
      {
        path:'posts/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        Component:PostDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
