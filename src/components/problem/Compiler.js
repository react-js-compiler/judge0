/* eslint-disable import/first */
import React from 'react';

import { Col , Form, Button, Input , Icon, Tabs} from 'antd';
import { Controlled as CodeMirror} from "react-codemirror2";
import callAPI from "./../../util/callAPI";
import * as Config from "./../../constants/Config";
import "codemirror/lib/codemirror.css";
import 'codemirror/mode/javascript/javascript.js';
const { TextArea } = Input;
const { TabPane } = Tabs;

export default class Compiler extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	source_code: "", 
	    	language_id : 27,
	    	stdout: "You must submission",
	    	activeTab: "1", 
	    	stdin: "",
	    	value: ""
	    }
	    this.handleClick = this.handleClick.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleSource = this.handleSource.bind(this);
  	}
  	componentWillMount(){
  		this.setState({
  			source_code : Config.SOURCE[this.props.language_id]
  		})
  	}
	handleClick() {
	    var source_code = this.state.source_code;
	    var language_id = this.props.language_id;
	    var data = {
		    "source_code": source_code,
		    "language_id": language_id,
		    "number_of_runs": "1",
		    "stdin": "Judge0",
		    "expected_output": "hello, Judge0",
		    "cpu_time_limit": "2",
		    "cpu_extra_time": "0.5",
		    "wall_time_limit": "5",
		    "memory_limit": "128000",
		    "stack_limit": "64000",
		    "max_processes_and_or_threads": "30",
		    "enable_per_process_and_thread_time_limit": false,
		    "enable_per_process_and_thread_memory_limit": true,
		    "max_file_size": "1024"
		}
	    callAPI("submissions/?base64_encoded=false&wait=true","POST", data).then(res =>{
		    this.setState({
		    	stdout: res.data.stdout,
		    	activeTab: "2"
		    });
		});
  	}
  	handleSubmit(){
  		var source_code = this.state.source_code;
	    var language_id = this.props.language_id;
	    var data = {
		    "source_code": source_code,
		    "language_id": language_id,
		    "number_of_runs": "1",
		    "stdin": "Judge0",
		    "expected_output": "hello, Judge0",
		    "cpu_time_limit": "2",
		    "cpu_extra_time": "0.5",
		    "wall_time_limit": "5",
		    "memory_limit": "128000",
		    "stack_limit": "64000",
		    "max_processes_and_or_threads": "30",
		    "enable_per_process_and_thread_time_limit": false,
		    "enable_per_process_and_thread_memory_limit": true,
		    "max_file_size": "1024"
		}
	    callAPI("submissions/?base64_encoded=false&wait=true","POST", data).then(res =>{
		    this.setState({
		    	stdout: res.data.status.description,
		    	activeTab: "2"
		    });
		});
  	}
  	changeTab = activeKey => {
	    this.setState({
	      	activeTab: activeKey
	    });
  	};
  	componentWillReceiveProps (newProps) {
	  	if( newProps.language_id !== this.props.language_id ){
	  		this.setState({
	  			source_code : Config.SOURCE[newProps.language_id]
	  		})
	  	}
	}
  	handleSource(value){
  		this.setState({
  			source_code: value
  		});
  	}
  	render() {
  	var options = {
    	lineNumbers: true,
    	scroll: false
    };
    let that = this;
    // var source_code = this.state.source_code;
    return (
      <Col span={24} > 
        <div style={{height: '100%', flex:"1 1 auto"}}>
        	<div className="compiler-editor">
        		<CodeMirror 
    				value={that.state.source_code}
					options={options}
					onBeforeChange={(editor, data, value) => {
					   	that.setState({source_code: value}); // must be managed here
					}}
					onChange={(editor, data, value) => {
					}}
    			/>
	        	<Tabs style={{height: "200px"}}  activeKey={this.state.activeTab}  onChange={this.changeTab}>
			      <TabPane tab="Input" key="1" >
			       <Form.Item style={{padding: "10px", border: "none !important"}}>
				      <TextArea rows={4} />
				    </Form.Item>
			      </TabPane>
			      <TabPane tab="Output" key="2" style={{padding: "0px 20px"}}>
			        <p>{this.state.stdout}</p>
			      </TabPane>
			    </Tabs>
        	</div>
        
		   <div className="footer-compiler">
		   		<Button onClick={this.handleClick}><Icon type="caret-right" /> Run Code</Button>
		   		<Button onClick={this.handleSubmit} style={{background: "#455a64", color: "#fff", marginLeft: "10px"}}>Submit</Button>
		   </div> 
        </div>
      </Col>
    );
  }
}
