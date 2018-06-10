/**
 * Created by Rychou on 2017/12/20.
 */
import React, {Component} from  'react'
import { UncontrolledTooltip ,Table,Form,Input, TabPane  } from 'reactstrap';
import { Tooltip } from 'antd';

const score = {
    cppy:{
        item1:{
            score:0,
            reason:''
        },
        item2:{
            score:0,
            reason:''
        },
        item3:{
            score:0,
            reason:''
        }
    },
    xxbx:{
        item1:{
            score:0,
            reason:''
        },
        item2:{
            score:0,
            reason:''
        },
        item3:{
            score:0,
            reason:''
        }
    },
    qsws:{
        item1:{
            score:0,
        }
    },
    shhd:{
        item1:{
            score:0,
            reason:''
        },
        item2:{
            score:0,
            reason:''
        },
        item3:{
            score:0,
            reason:''
        },
        item4:{
            score:0,
            reason:''
        },
        item5:{
            score:0,
            reason:''
        }
    },
    kf:{
        item1:{
            score:0,
            reason:''
        },
        item2:{
            score:0,
            reason:''
        },
        item3:{
            score:0,
            reason:''
        },
        item4:{
            score:0
        },
        item5:{
            score:0
        },
        item6:{
            score:0
        },
        item7:{
            score:0
        },
        item8:{
            score:0
        },
        item9:{
            score:0
        },
        item10:{
            score:0
        },
        item11:{
            score:0
        },
        item12:{
            score:0
        },
        item13:{
            score:0
        },
        item14:{
            score:0
        },
        item15:{
            score:0
        },
        item16:{
            score:0
        }
    }
}
class Dyf extends Component{
    constructor(){
        super();
        this.state = {
            score:score
        }
    }
    handleChange = e =>{
        const score = e.target.value
        this.setState({score})
        console.log(this.state.score)
    }
    render(){
        return(
                <div >
                    <h1>德育分自评表</h1>
                    <Table bordered>
                        <thead>
                        <tr>
                            <th colSpan="2" width="100px">项目</th>
                            <th width="150px">得分</th>
                            <th>理由</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <th scope="row" rowSpan="4" style={{textAlign:'center',verticalAlign:'middle'}}>测评评议</th>
                        </tr>
                        <tr>
                            <td scope="row">学奖、政学</td>
                            <td>
                                <Input type="number" id="r11" onChange={this.handleChange} value={this.state.score}/>
                                <UncontrolledTooltip placement="right"  target="r11">
                                    一个小绿本章算1分（需拍照佐证），以下非盖章项目可以加分（1分/项），本栏最高不超过5分。
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">关心集体</td>
                            <td>
                                <Input type="number" id="r12"/>
                                <UncontrolledTooltip placement="right" target="r12">
                                    （1）出观众的场合积极参与（积极主动参加：1分；轮到才参加，0.5分，很难叫动：0分）
                                    （2）积极参加班级组织的班会、班主任会议（0.5分）
                                    （3）积极参加班级组织的其他集体活动(如郊游、聚餐等，0.5分
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">文体活动</td>
                            <td>
                                <Input type="number" id="r13"/>
                                <UncontrolledTooltip placement="right"  target="r13">
                                    "本栏最高不超过5分
                                    每项1分
                                    备注：1.获奖的都加在发展素质分；2.团日活动、辩论赛等都加在“校园文化活动”"
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="4" style={{textAlign:'center',verticalAlign:'middle'}}>学习表现</th>
                        </tr>
                        <tr>
                            <td scope="row">晚自习</td>
                            <td>
                                <Input type="number" id="r21"/>
                                <UncontrolledTooltip placement="right"  target="r21">
                                    评分标准：
                                    5分：所有规定晚自习都参加，且无迟到早退
                                    4分：偶尔有几次缺席或迟到早退（一学期不超过3次）
                                    3分：每个月有那么一两次缺席（一学期不超过5次）或迟到早退次数较多
                                    2分：经常缺席或习惯迟到早退（一学期5-10次）
                                    1分：总是缺席或迟到早退（一学期上自习次数小于10天）
                                    0分：基本不参加晚自习（一学期上自习次数不足5天）
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" >先进班集体</td>
                            <td>
                                <Tooltip title="暂无">
                                    <Input type="number" id="r22"/>
                                </Tooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row" >优秀团支部</td>
                            <td>
                                <Input type="number" id="r23"/>
                                <UncontrolledTooltip placement="right"  target="r23">
                                    暂无
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="5" style={{textAlign:'center',verticalAlign:'middle'}}>寝室卫生类</th>
                        </tr>
                        <tr>
                            <td scope="row">校模寝</td>
                            <td rowSpan="4">
                                <Input type="number" id="r31"/>
                                <UncontrolledTooltip placement="right"  target="r31">
                                    分值分别为8分,5分,3分,2分。参考宿管中心文件
                                </UncontrolledTooltip>
                            </td>
                            <td rowSpan="4"></td>
                        </tr>
                        <tr>
                            <td scope="row">校文明寝</td>
                        </tr>
                        <tr>
                            <td scope="row">大于90</td>
                        </tr>
                        <tr>
                            <td scope="row">85-90</td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="6" style={{textAlign:'center',verticalAlign:'middle'}}>社会活动表现类</th>
                        </tr>
                        <tr>
                            <td scope="row">担任学生干部</td>
                            <td>
                                <Tooltip title="(1）班长、团支书、辅导员助理：优秀8分，合格6分；
                                    （2）班委、校院学生会干事、社团骨干、寝室长：优秀6分，合格4分；
                                    担任多个职务只记加分最高的两个职务，最终分=最高加分+次高加分*0.5
                                    备注：（1）接受社团骨干加分的必须是出现在团委给的考核文件上的人员；（2）模范寝室、文明寝室的寝室长考核为优秀，寝室85分以上寝室长为合格。

">
                                    <Input type="number" id="r41"/>
                                </Tooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">军训表彰</td>
                            <td>
                                <Input type="number" id="r42"/>
                                <UncontrolledTooltip placement="right"  target="r42">
                                    军训相关表彰，1分/项，总共不超过2分
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">校园文化活动</td>
                            <td>
                                <Input type="number" id="r43"/>
                                <UncontrolledTooltip placement="right"  target="r43">
                                    （1）演讲比赛未获奖的，0.5分
                                    （2）团日活动未获奖的，0.5分
                                    （3）辩论赛未获奖的，0.5分
                                    （4）其他有学校、学院组织的，且未获奖也未出现在“文体活动”加分中的项目（需说明具体内容）0.5分/项
                                    本栏最高不超过4分，获奖的加在发展性素质分中。不重复加分。

                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">义务献血</td>
                            <td>
                                <Input type="number" id="r44"/>
                                <UncontrolledTooltip placement="right"  target="r44">
                                    2分/每次，需要提供献血证，并登记献血日期
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">志愿服务</td>
                            <td>
                                <Input type="number" id="r45"/>
                                <UncontrolledTooltip placement="right"  target="r45">
                                    1分。
                                    要求：一学期累积4小时以上，必须是义务、无偿并拥有相关证明，贫困生的义工工时不算在内。
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="17" style={{textAlign:'center',verticalAlign:'middle'}}>扣分类</th>
                        </tr>
                        <tr>
                            <td scope="row">旷课、迟到、早退</td>
                            <td>
                                <Input type="number" id="r51"/>
                                <UncontrolledTooltip placement="right"  target="r51">
                                    "分数说明：
                                    -1：偶尔缺勤、迟到、早退
                                    -2：经常缺勤、迟到、早退
                                    -3：总是缺勤、迟到、早退"
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">无故不参加各类活动</td>
                            <td>
                                <Input type="number" id="r52"/>
                                <UncontrolledTooltip placement="right"  target="r52">
                                    一项扣1分
                                    （1）缺席专业大会
                                    （2）缺席新生第一堂课
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">晚自习缺勤</td>
                            <td>
                                <Input type="number" id="r53"/>
                                <UncontrolledTooltip placement="right"  target="r53">
                                    "分数说明：
                                    -1：偶尔缺勤、迟到、早退
                                    -2：经常缺勤、迟到、早退
                                    -3：总是缺勤、迟到、早退"
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">恶意拖欠学分、住宿费</td>
                            <td>
                                <Input type="number" id="r54"/>
                                <UncontrolledTooltip placement="right"  target="r54">
                                    "扣2分
                                    学校批准缓交的除外"
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">未批擅自离杭或校外租房</td>
                            <td>
                                <Input type="number" id="r55"/>
                                <UncontrolledTooltip placement="right"  target="r55">
                                    "住宿校外-20分，
                                    小长假离杭未登记-2分"
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">晚归、夜不归宿</td>
                            <td>
                                <Input type="number" id="r56"/>
                                <UncontrolledTooltip placement="right"  target="r56">
                                    晚归-0.5每次，不归-2每次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">寝室小于80</td>
                            <td>
                                <Input type="number" id="r57"/>
                                <UncontrolledTooltip placement="right"  target="r57">
                                    扣0.5/人/次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">作业抄袭</td>
                            <td>
                                <Input type="number" id="r58"/>
                                <UncontrolledTooltip placement="right"  target="r58">
                                    扣5分每次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">助贷、贫困生认定弄虚作假</td>
                            <td>
                                <Input type="number" id="r59"/>
                                <UncontrolledTooltip placement="right"  target="r59">
                                    扣20每次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">不在指定场所参加宗教活动</td>
                            <td>
                                <Input type="number" id="r510"/>
                                <UncontrolledTooltip placement="right"  target="r510">
                                    扣5分每次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">参加非法宗教活动</td>
                            <td>
                                <Input type="number" id="r511"/>
                                <UncontrolledTooltip placement="right"  target="r511">
                                    扣20分每次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">散播不实谣言</td>
                            <td>
                                <Input type="number" id="r512"/>
                                <UncontrolledTooltip placement="right"  target="r512">
                                    扣20分每次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">参与非法传销</td>
                            <td>
                                <Input type="number" id="r513"/>
                                <UncontrolledTooltip placement="right"  target="r513">
                                    扣20分每次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">情感造成负面影响</td>
                            <td>
                                <Input type="number" id="r514"/>
                                <UncontrolledTooltip placement="right"  target="r514">
                                    扣2分每次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">安全隐患不上报</td>
                            <td>
                                <Input type="number" id="r515"/>
                                <UncontrolledTooltip placement="right"  target="r515">
                                    扣5分每次
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row">违反校规校纪</td>
                            <td>
                                <Input type="number" id="r516"/>
                                <UncontrolledTooltip placement="right"  target="r516">
                                    根据学生手册扣分
                                </UncontrolledTooltip>
                            </td>
                            <td></td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
        )
    }
}
export default Dyf