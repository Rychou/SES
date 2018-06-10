import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import AdminLogin from './components/Login/adminLogin'
import StuLogin from './components/Login/stuLogin'
import AssessorLogin from './components/Login/assessorLogin'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Form from './components/Form'

const textData = {
    "user_name": "宋天琪",
    "id_type": "1",
    "userName": "16058520",
    "user_id": "201609188573",
    "unit_id": "05",
    "user_sex": "1",
    "unit_name": "计算机学院",
    "classid": "16052715"
};
class App extends Component {
    constructor(){
        super();
        this.state = {
            loginStatus:false,
            userData:textData
        }
    }

    setLogin = () =>{
        this.setState({loginStatus:true})
    }

    render() {
        const Login = () =>{
            if (!this.state.loginStatus){
                return (
                    <div className="center">
                        <h2>请先登陆!</h2>
                        <StuLogin setLogin={this.setLogin}/>
                        <br/>
                        <AssessorLogin/>
                        <br/>
                        <AdminLogin />
                    </div>
                )
            }
            else return(
                <div>
                    <h2 className="center">你好,{this.state.userData.user_name}</h2>
                    <Link to="/Form" className="formLink">点这里开始填表</Link>
                    <Route path="/Form" component={Form}/>
                </div>
            )
        }
        return (
        <Router>
            <Container>
                <h1 className="center">欢迎来到奖学金管理系统</h1>
                {Login()}
            </Container>
        </Router>
        );
    }
}

export default App;
