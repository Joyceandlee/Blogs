import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { message } from 'antd';

class Msg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0, name: '', password: '', birthday: '', city: ''
        }
    }
    componentDidMount() {
        let { id, name, password, birthday, city } = this.props.user;
        this.setState({
            id, name, password, birthday, city
        })
    }
    render() {
        return (
            <div>
                id:<input type="text" value={this.state.id} disabled onChange={(e) => {
                    this.setState({
                        id: e.target.value
                    })
                }} />
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
                birthday:<input type="text" value={this.state.birthday} onChange={(e) => {
                    this.setState({
                        birthday: e.target.value
                    })
                }} />
                city:<input type="text" value={this.state.city} onChange={(e) => {
                    this.setState({
                        city: e.target.value
                    })
                }} />
                <button onClick={this.Submit.bind(this)}>确认修改</button>
            </div>
        )
    }
    Submit() {
        axios.post('/updatemsg', this.state)
            .then(res => {
                if (res.data.code === 1) {
                    message.success(res.data.msg);
                    this.props.saveUser(this.state)
                }
            })
    }
}

let initMapStateToProps = (state) => {
    return {
        user: state
    }
}
let initMapDispatchToProps = (dispatch) => {
    return {
        saveUser: (data) => {
            dispatch({ type: "SAVE_USERDATA", data })
        }
    }
}
export default connect(initMapStateToProps,initMapDispatchToProps)(Msg);
