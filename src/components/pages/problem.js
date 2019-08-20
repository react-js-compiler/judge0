/* eslint-disable import/first */
import React from 'react';

import { Layout , Row, Col, Icon} from 'antd';
import "codemirror/lib/codemirror.css";
import 'antd/dist/antd.css'; 
import { Select } from 'antd';
import callAPI from "../../util/callAPI";
const { Option } = Select;
import { Tabs } from 'antd';
import Description from '../problem/Description';
import Compiler from '../problem/Compiler';
import HeaderApp from "./../layout/main/header";
const { TabPane } = Tabs;
export default class Problem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      languages :[],
      language_id : 27,
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(value){
    this.setState({
      language_id: value
    })
  }
  componentWillMount(){ 
   callAPI("languages","GET", null).then(res =>{
     this.setState({
        languages : res.data
     })
   })
 }
 
  render(){
  var languages = this.state.languages.map(
    function iterator( language ) {
        return(
           <Option key={language.id} value={language.id}>{language.name}</Option>
        );
    },
    );
     return (
      <div>
        <Layout className="container">
            <HeaderApp/>
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
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
              </TabPane>
              <TabPane tab={
                <span><Icon type="message" />Discuss</span>
                } key="4">
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
              </TabPane>
            </Tabs>
            </Col>
            <Col span={14}>
             <div className="language" style={{background: "#fafafa", padding: "6px 0px"}}>
                <Select value={this.state.language_id} style={{ width: 120 }} onChange={this.handleChange}>
                 {languages}
                </Select>
              </div>
              <Compiler language_id={this.state.language_id} />
            </Col>
          </Row>
        </Layout>
      </div>
    );
  }
 
}
