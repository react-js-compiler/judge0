import React from 'react';
import MenuApp from "./top-menu";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
export default class HeaderApp extends React.Component{
    render(){
        return(
            <Header style={{zIndex: 1, width: '100%' , height:'50px'}}>
                <div className="menu">
                    <MenuApp />
                </div>
            </Header>
        );
    }
}