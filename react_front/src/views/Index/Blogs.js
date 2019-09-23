import React, { Component } from 'react'
import axios from 'axios';
import { message, List, Avatar, Icon } from 'antd';


const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);
export default class Blogs extends Component {
    state = {
        listData: []
    }
    componentDidMount() {
        axios.get('/getblogs')
            .then(res => {
                if (res.data.code === 1) {
                    this.setState({
                        listData: res.data.data
                    })
                    message.success(res.data.msg);
                }
            })
    }
    render() {
        return (
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={this.state.listData}

                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                                <IconText type="message" text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                  width={272}
                                  alt="logo"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                              }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a>{item.autor}</a>}
                                description={item.title}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
