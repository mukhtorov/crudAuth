import React from "react";

import Registration from "../components/Login";


const Home = React.lazy(() => import("../components/Home"))
const Login = React.lazy(() => import("../components/Login"))

let id = 1
export const data = [
    {
        id: id++,
        title: 'Home',
        path: '/home',
        element: <React.Suspense fallback={<h1>Loading....</h1>}> <Home /></React.Suspense>


    },
    {
        id: id++,
        title: 'Login',
        path: '/home/registration',
        element: <React.Suspense fallback={<h1>Loading....</h1>}> <Registration /></React.Suspense>



    },

];