import React from "react";
import callAPI from "../../util/callAPI";
import { Select, Modal } from 'antd';
import {connect} from 'react-redux';
const { Option } = Select;

class LanguageID extends React.Component{
    state = {
        languages : []
    }
    componentWillMount() {
        callAPI("languages", "GET", null).then(res => {
            this.setState({
            languages: res.data
            })
        })
    }
    handleLanguage = (value) => {
        this.props.changelanguage_id(value);
        this.setState({
          language_id: value
        })
      }
    render(){
        var languages = this.state.languages.map(
            function iterator(language) {
              return (
                <Option key={language.id} value={language.id}>{language.name}</Option>
              );
            },
          );
        return(
            <Select value={this.props.language_id} style={{ width: 120 }} onChange={this.handleLanguage}>
                {languages}
            </Select>
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
export default connect(mapStateToProps,mapDispatchToProps)(LanguageID);