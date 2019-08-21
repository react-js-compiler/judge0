/* eslint-disable import/first */
import React from 'react';

import { connect } from 'react-redux';
import { Row, Col, Modal , Select} from 'antd';
const { Option } = Select;
class Setting extends React.Component {
    state = {
        visible: false,
        theme: this.props.theme
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
    changeTheme = (value) => {
        this.setState({
            theme: value
        });
        this.props.changetheme(value);
    }
    render() {
        return (
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
                        <Select value={this.props.theme} style={{ width: 120 }} onChange={this.changeTheme}>
                            <Option key="1" value="default">Default</Option>
                            <Option key="2" value="3024-day">3024-day</Option>
                            <Option key="3" value="3024-night">3024-night</Option>
                        </Select>
                    </Col>
                </Row>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    const { theme } = state;
    return {
        theme
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changetheme: (text) => dispatch({
            type: 'CHANGE_THEME',
            text: text
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Setting);