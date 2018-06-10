/**
 * Created by Rychou on 2018/1/11.
 */
import React, {Component} from  'react'
import {Button} from 'antd'
import { instanceOf } from 'prop-types';
import {withCookies,Cookies } from 'react-cookie'
class stuLogin extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(){
        super();
    }
    componentWillMount(){
       // const {cookies} = this.props
        //console.log(cookies.getAll())
        // const url = "http://192.168.155.2:3005/common/getMessage"
        // fetch(url,{method:"get"})
        //     .then(response=>{
        //         return response.json()
        //     }).then(result=>{
        //         console.log(result)
        // })
    }
    handleLogin = () =>{
        // fetch('https://bird.ioliu.cn/v1?url=http://106.14.143.18:3005/common/login',{method:'get'})
        //     .then(response=>{
        //             return response.json();
        //         }).then(result=>{
        //         console.log(result)
        // })
        this.props.setLogin()
    }
    render(){
        const url = "http://192.168.155.2:3005/common/login"
        return(
            <Button type="primary" className="loginBtn" onClick={this.handleLogin}>
                    <a href="#">学生登陆</a>
            </Button>
        )

    }
}
export default withCookies(stuLogin)