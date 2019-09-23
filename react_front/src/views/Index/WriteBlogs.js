import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { message } from 'antd';

class WriteBlogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            autor: ''
        }
    }
    componentDidMount() {
        this.setState({
            autor: this.props.user.name
        })
    }
    render() {

        return (
            <div>
                标题：<input type='text' value={this.state.title} onChange={(e) => {
                    this.setState({
                        title: e.target.value
                    })
                }} /><br />
                内容：<textarea rows="5" cols="50" value={this.state.content} onChange={(e) => {
                    this.setState({
                        content: e.target.value
                    })
                }}></textarea>
                <button onClick={this.Submit.bind(this)}>发表博客</button>
            </div>
        )
    }
    Submit() {
        let { title, content, autor } = this.state;
        console.log(this.props.user.name)

        console.log(this.state)
        if (title && content && autor) {
            axios.put('/addblogs', this.state)
                .then(res => {
                    if (res.data.code === 1) {
                        message.success(res.data.msg);
                    }
                })
        }
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
export default connect(initMapStateToProps, initMapDispatchToProps)(WriteBlogs);
