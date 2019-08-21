/* eslint-disable import/first */
import React from 'react';
import {connect} from 'react-redux';
import { Col , Form, Button, Input , Icon, Tabs} from 'antd';
import { Controlled as CodeMirror} from "react-codemirror2";
import callAPI from "./../../util/callAPI";
import * as Config from "./../../constants/Config";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/3024-day.css";
import "codemirror/theme/3024-night.css";
import 'codemirror/mode/javascript/javascript.js';
const { TextArea } = Input;
const { TabPane } = Tabs;

class Compiler extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	source_code: "", 
	    	language_id : 27,
	    	stdout: "You must submission",
	    	activeTab: "1", 
			value: "",
			stdin: "[2, 7, 11, 15]\n9",
	    }
  	}
  	componentWillMount(){
  		this.setState({
  			source_code : Config.SOURCE[this.props.language_id]
  		})
  	}
	handleClick = () => {
		var { source_code , stdin } = this.state;
	    var language_id = this.props.language_id;
	    var data = {
		    "source_code": source_code,
		    "language_id": language_id,
		    "number_of_runs": "1",
		    "stdin": stdin,
		    "expected_output": "[0, 1]",
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
  	handleSubmit = () =>{
  		var { source_code , stdin } = this.state;
		var language_id = this.props.language_id;
	    var data = {
		    "source_code": source_code,
		    "language_id": language_id,
		    "number_of_runs": "1",
		    "stdin": stdin,
		    "expected_output": "[0, 1]",
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
	updateIn = (e) =>{
		this.setState({
			stdin: e.target.value
		});
	}  
	render() {
  	var options = {
    	lineNumbers: true,
		scroll: false,
		theme: this.props.theme
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
	        	<Tabs style={{height: "202px"}}  activeKey={this.state.activeTab}  onChange={this.changeTab}>
			      <TabPane tab="Input" key="1" >
			       <Form.Item style={{padding: "10px", border: "none !important"}}>
				      <TextArea rows={4} value={this.state.stdin} onChange={e => this.updateIn(e)}/>
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
const mapStateToProps = (state) =>{
	const {theme} = state;
	return {
	  theme
	}
  }
export default connect(mapStateToProps)(Compiler)