/* eslint-disable import/first */
import React from "react"
import Home from "./components/pages/home";
import Problem from "./components/pages/problem";
import Explore from "./components/pages/explore";
import Test from "./components/pages/test";
const routes =[
    {
        path : "/",
        exact : true,
        main: () => <Home title="Home"/>
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
    {
        path: '/test',
        exact: false, 
        main : () => <Test/>
    }
]
export default routes;