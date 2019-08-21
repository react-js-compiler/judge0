/* eslint-disable import/first */
import React from 'react';

import { Col, Row, Form, Button, Input , Icon, Tabs} from 'antd';
import { Controlled as CodeMirror} from "react-codemirror2";
import callAPI from "./../../util/callAPI";
import * as Config from "./../../constants/Config";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/3024-day.css";
import "codemirror/theme/3024-night.css";
import 'codemirror/mode/javascript/javascript.js';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontSize: 13,
    },
    body: {
      fontSize: 13,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  function createData(time, status, runtime, memory, language) {
    return { time, status, runtime, memory, language };
  }
  
  const rows = [
    createData('10 days ago', 'accept', '1 ms', '23 MB', 'java'),
    createData('10 days ago', 'wrong', 'N/A', 'N/A', 'java'),
  ];
  
  
export default class Subnew extends React.Component{
    
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
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleSource = this.handleSource.bind(this);
  	}
  	componentWillMount(){
  		this.setState({
  			source_code : Config.SOURCE[this.props.language_id]
  		})
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
		    });
		});
  	}
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
		scroll: false,
		theme: this.props.theme
    };
    let that = this;
    // var source_code = this.state.source_code;
    return (
        <div>
            <div >
                <Row>
                    <h2 style={{padding: "0px 20px"}}>{this.state.stdout}</h2>
                </Row>
            </div>
            <div >
                <Row>
                    <Table >
                        <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Time Submitted</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">Runtime</StyledTableCell>
                            <StyledTableCell align="center">Memory</StyledTableCell>
                            <StyledTableCell align="center">Language</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                            <StyledTableRow key={row.time}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.time}
                            </StyledTableCell>
                            <StyledTableCell align="center"><span className={row.status}>{row.status == 'accept' ? 'Accepted': 'Wrong Answer'}</span></StyledTableCell >
                            <StyledTableCell align="center">{row.runtime}</StyledTableCell>
                            <StyledTableCell align="center">{row.memory}</StyledTableCell>
                            <StyledTableCell align="center">{row.language}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Row>
            </div>
        </div>
    );
  }
}
