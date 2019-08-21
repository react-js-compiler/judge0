/* eslint-disable import/first */
import React from 'react';

import { Layout, Row, Col, Icon} from 'antd';
import "codemirror/lib/codemirror.css";
import 'antd/dist/antd.css';
import { Select, Modal } from 'antd';
import callAPI from "../../util/callAPI";
const { Option } = Select;
import { Tabs } from 'antd';
import Description from './../block/tabs/problem/description';
import Solution from './../block/tabs/problem/solution';
import Discuss from './../block/tabs/problem/discuss';
import Submission from './../block/tabs/problem/submission';
import Compiler from '../problem/Compiler';
import HeaderApp from "./../layout/main/header";
import { Button } from 'antd';
import {connect} from 'react-redux';
import LanguageID from "./../problem/language_id";
const { TabPane } = Tabs;
class Problem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      theme: this.props.theme,
      visible: false
    }
  }
  handleFullScreen = () => {
    this.setState({
      fullscreen: !this.state.fullscreen
    })
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  changeTheme = (value) =>{
    this.setState({
      theme: value
    });
    this.props.changetheme(value);
  }
  render() {
   
    return (
      <div>
        <Layout className="container">
          {this.state.fullscreen == false ? <HeaderApp /> : null}
          <Row>
            <Col span={10}>
              <Tabs className="tab-description">
                <TabPane key="1" tab={ <span><Icon type="pic-left" /> Description</span>}>
                  <Description />
                </TabPane>
                <TabPane tab={ <span><Icon type="solution" /> Solution</span>} key="2">
                  <Solution />
                </TabPane>
                <TabPane tab={<span><Icon type="clock-circle" />Submissions</span>}key="3">
                 <Submission />
                </TabPane>
                <TabPane tab={<span><Icon type="message" />Discuss</span>} key="4">
                  <Discuss />
                </TabPane>
              </Tabs>
              <div className="footer-compiler">
                <Button><Icon type="unordered-list" style={{ marginRight: "5px" }} /> Problems</Button>
              </div>
            </Col>
            <Col span={14}>
              <div className="language" style={{ background: "#fafafa", padding: "6px 0px" }}>
                <LanguageID language_id = {this.props.language_id}/>
                <div className="btns_toll">
                  <Icon type="code" />
                  <Icon type="setting" onClick={this.showModal}/>
                  <Icon type="fullscreen" onClick={this.handleFullScreen} />
                </div>
              </div>
              <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
              >
                <Row>
                  <Col span={18}>
                    <div className="font_size">
                      <p>Theme</p>
                      <small>Tired of the white background? Try different styles and syntax highlighting.</small>
                    </div>
                  </Col>
                  <Col span={6}>
                    <Select value={this.state.theme} style={{ width: 120 }} onChange={this.changeTheme}>
                      <Option key="1" value="default">Default</Option>
                      <Option key="2" value="3024-day">3024-day</Option>
                      <Option key="3" value="3024-night">3024-night</Option>
                    </Select>
                  </Col>
                </Row>
              </Modal>
              <Compiler language_id={this.props.language_id}/>
            </Col>
          </Row>
        </Layout>
      </div>
    );
  }

}
const mapStateToProps = (state) =>{
	const {theme , language_id} = state;
	return {
	  theme, language_id
	}
}
const mapDispatchToProps = (dispatch) =>{
  return {
    changetheme:(text) => dispatch({
      type:'CHANGE_THEME',
      text:text
    }),
    changelanguage_id: (text) => dispatch({
      type: 'CHANGE_LANGUAGE_ID',
      text: text
    })
  }  
}
export default connect(mapStateToProps,mapDispatchToProps)(Problem);