import React from 'react';

export default class Submission extends React.Component{
    render(){
        return(
            <div className="submission">
                <div className="resutl">
                    <div className={this.props.stdout == 'Accepted'? 'success': 'wrong'}>{this.props.stdout}</div>
                </div>
                <div className="info" style={ this.props.time == '' ? { display: 'none'}: null }>
                    Runtime: <span className="data_info">{this.props.time} ms</span> of Java online submissions for Two Sum.
                </div>
                <div className="info" style={ this.props.time == '' ? { display: 'none'}: null }>
                    {this.props.memory != null }Memory Usage: <span className="data_info">{this.props.memory} MB</span> of Java online submissions for Two Sum.
                </div> 
            </div>
        );
    }
}