/* eslint-disable import/first */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;
export default class MenuApp extends React.Component{
    render(){
        return(
            <Menu
                mode="horizontal"
                style={{ lineHeight: '50px' }}
            >
                <Menu.Item><Link to="/"><img src="https://vn.rikkeisoft.com/images/layouts/logo.jpg" alt="logo" className="image-logo" style={{marginBottom: '2px', height: '20px' , marginLeft: '8px'}}/></Link></Menu.Item>
                <Menu.Item key="1"><Link to="/explore">Explore</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/problemset/all/">Problem</Link></Menu.Item>
                <Menu.Item key="3">Mock</Menu.Item>
                <Menu.Item key="4">Contest</Menu.Item>
                <Menu.Item key="5">Articles</Menu.Item>
                <Menu.Item key="6">Discuss</Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                        <Icon type="gift" />
                            Store
                        </span>
                    }
                   className="navitem-highlight"
                    >
                    <Menu.Item key="setting:1">Redeem</Menu.Item>
                    <Menu.Item key="setting:2">Premium</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}