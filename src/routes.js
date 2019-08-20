/* eslint-disable import/first */
import React from "react"
import Home from "./components/pages/home";
import Problem from "./components/pages/test";
import Explore from "./components/pages/explore";
const routes =[
    {
        path : "/",
        exact : true,
        main: () => <Home/>
    },
    {
        path: "/explore",
        exact: false,
        main: () => <Explore />
    },
    {
        path: '/problemset/all/',
        exact : false,
        main : () => <Problem />
    },
]
export default routes;