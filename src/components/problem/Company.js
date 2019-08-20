import React from 'react';
import { Menu, Modal } from 'antd';


export default class Company extends React.Component{
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: !this.state.visible,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
    <Menu
        onClick={this.handleClick}
        style={{ width: '100%' }}
        // defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1">
            <span>Contributor</span>
        </Menu.Item>
        <Menu.Item key="2"  onClick={this.showModal}>
            <span>Company</span>
        </Menu.Item>
        <Modal
          title="Company"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Menu>
    );
  }
}
