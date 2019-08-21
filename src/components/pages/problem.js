/* eslint-disable import/first */
import React from 'react';

import { Layout, Row, Col, Icon} from 'antd';
import "codemirror/lib/codemirror.css";
import 'antd/dist/antd.css';
import { Select, Modal } from 'antd';
import callAPI from "../../util/callAPI";
const { Option } = Select;
import { Tabs } from 'antd';
import Description from '../problem/Description';
import Compiler from '../problem/Compiler';
import HeaderApp from "./../layout/main/header";
import { Button } from 'antd';
import Submissions from '../problem/Submissions';
import SubNew from '../problem/SubNew';
const { TabPane } = Tabs;
export default class Problem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      language_id: 27,
      fullscreen: false,
      theme: 'default',
      visible: false
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(value) {
    this.setState({
      language_id: value
    })
  }
  handleFullScreen = () => {
    this.setState({
      fullscreen: !this.state.fullscreen
    })
  }
  componentWillMount() {
    callAPI("languages", "GET", null).then(res => {
      this.setState({
        languages: res.data
      })
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
  }
  render() {
    var languages = this.state.languages.map(
      function iterator(language) {
        return (
          <Option key={language.id} value={language.id}>{language.name}</Option>
        );
      },
    );
    return (
      <div>
        <Layout className="container">
          {this.state.fullscreen == false ? <HeaderApp /> : null}
          <Row>
            <Col span={10}>
              <Tabs className="tab-description">
                <TabPane key="1"
                  tab={
                    <span>
                      <Icon type="pic-left" /> Description
                  </span>
                  }
                >
                  <Description />
                </TabPane>
                <TabPane tab={
                  <span>
                    <Icon type="solution" /> Solution
                </span>
                } key="2">
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                </TabPane>
                <TabPane tab={
                  <span><Icon type="clock-circle" />Submissions</span>
                }
                  key="3">
                  <SubNew />
                </TabPane>
                <TabPane tab={
                  <span><Icon type="message" />Discuss</span>
                } key="4">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>

              </Tabs>
              <div className="footer-compiler">
                <Button><Icon type="unordered-list" style={{ marginRight: "5px" }} /> Problems</Button>
              </div>
            </Col>
            <Col span={14}>
             <div className="language" style={{background: "#fafafa", padding: "4px 0px"}}>

                <Select value={this.state.language_id} style={{ width: 120 }} onChange={this.handleChange}>
                  {languages}
                </Select>
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
                footer={[
                  null,
                  null,
                ]}
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
              <Compiler language_id={this.state.language_id} theme ={this.state.theme}/>
            </Col>
          </Row>
        </Layout>
      </div>
    );
  }

}
