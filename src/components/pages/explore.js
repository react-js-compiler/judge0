/* eslint-disable import/first */
import React from 'react';
import HeaderApp from "./../layout/main/header";
import { Layout } from 'antd';
export default class Home extends React.Component{
   render(){
       return(
           <Layout>
               <HeaderApp />
               <div className="content">
                    <h2>Explore</h2>
               </div>
               
           </Layout>
       )
   }
}