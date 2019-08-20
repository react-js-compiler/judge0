import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default class RelatedTopic extends React.Component{
    handleClick = e => {
    console.log('click ', e);
  };
  render() {
    return (
    <Menu
        onClick={this.handleClick}
        style={{ width: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub4"
          title={
            <span>
                <span>Related Topics</span>
            </span>
          }
        >
          <Menu.Item key="9">Array</Menu.Item>
          <Menu.Item key="10">Hash Table</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
