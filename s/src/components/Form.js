/**
 * Created by Rychou on 2018/1/10.
 */
import React, { Component } from 'react';
import '../App.css';
import Dyf from './Dyf'
import Fzx from './Fzx'
import {Button, BackTop,Form,Tabs,Affix  } from 'antd';
import Upload from './Upload'

const TabPane = Tabs.TabPane;

class form extends Component {
    render() {
        const submit = <Button>提交</Button>
        return (
            <Form>
                <Tabs defaultActiveKey="1" tabBarExtraContent={submit}>
                    <TabPane tab="填写德育分表" key="1"><Dyf/></TabPane>
                    <TabPane tab="填写发展性素质表" key="2"><Fzx/></TabPane>
                    <TabPane tab="上传证明" key="3"><Upload/></TabPane>
                </Tabs>
                <BackTop />
            </Form>

        );
    }
}

export default form
