/**
 * Created by Rychou on 2018/1/7.
 */
import React, {Component} from  'react'

import { Modal, Button,Form,Input,Icon } from 'antd';
const FormItem = Form.Item;


class Login extends Component{
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button type="danger" onClick={this.showModal} className="loginBtn">管理员登陆</Button>
                <Modal
                    className="adminLogin"
                    title="管理员登陆"
                    visible={this.state.visible}
                    footer={null}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('username',{
                                rules:[{required:true,message:'请输入用户名'}]
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    rules:[{required: true, message: '请输入密码!'}]
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

const adminLogin = Form.create()(Login);

export default adminLogin