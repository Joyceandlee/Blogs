import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { message } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }
    render() {
        return (
            <div>
                name:<input type="text" value={this.state.name} onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    })
                }} />
                password:<input type="password" value={this.state.password} onChange={(e) => {
                    this.setState({
                        password: e.target.value
                    })
                }} />
                <button onClick={this.Submit.bind(this)}>登录</button>
            </div>
        )
    }
    Submit() {
        axios.post('/login', this.state)
            .then(res => {
                if (res.data.code === 1) {
                    this.props.saveUser(res.data.data)
                    this.props.history.push('/index/msg')
                }else{
                    message.error(res.data.msg);
                }
            })
    }
}

let initMapStateToProps = (state) => {
    return {
        classlist: state.classreducer
    }
}
let initMapDispatchToProps = (dispatch) => {
    return {
        //存储学生
        saveUser: (data) => {
            dispatch({ type: "SAVE_USERDATA", data })
        }
    }
}
export default connect(initMapStateToProps, initMapDispatchToProps)(Login);
