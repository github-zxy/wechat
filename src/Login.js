import React, { Component } from 'react';
import { List, Button, Form, Input, Checkbox, layout, } from 'antd/dist/antd'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    render() {
        return (
            <div className='login'>
                <h1 style={{ fontSize: '30px', textAlign: 'center' }}>登录</h1>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    style={{ margin: "35px" }}

                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: '请输入您的账户!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>记住密码  </Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }


}

export default Login;