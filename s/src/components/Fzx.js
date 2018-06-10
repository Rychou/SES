/**
 * Created by Rychou on 2017/12/20.
 */
import React, {Component} from  'react'
import { UncontrolledTooltip ,Table,Form,Input, TabPane  } from 'reactstrap';

class Fzx extends Component{
    render(){
        return(
                <div>
                    <h1>发展性素质自评表</h1>
                    <Table bordered>
                        <thead>
                        <th colSpan="7" style={{width:"60%"}}>项目</th>
                        <th style={{width:"15%"}}>得分</th>
                        <th>解释</th>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row" rowSpan="6" style={{textAlign:'center',verticalAlign:'middle'}}>学科竞赛类</th>
                        </tr>
                        <tr>
                            <td>级别</td>
                            <td>国际</td>
                            <td>全国</td>
                            <td>省级</td>
                            <td>校级</td>
                            <td>院级</td>
                            <td scope="row" rowSpan="6">
                                <Input type="number" style={{marginTop:"25%"}} id="row1"/>
                                <UncontrolledTooltip target="row1">
                                    1.必须是学科相关竞赛（数学建模、电子设计、智能车、程序设计ACM、信息安全），其余学科竞赛x0.6后四舍五入；需提供证书。
                                    2.同类项目获多项奖或不同级别的奖，只加最高级别项（如ACM，只加本学期最高的那次）；
                                    3.院级团体获奖项目只加前三名；
                                    4.获得学校GPA加分的，此处不再加分（如：ACM已经加过GPA，则虽然参加了其他区域赛，这里也不再加分）
                                </UncontrolledTooltip>
                            </td>
                            <td scope="row" rowSpan="6" >
                                <Input type="textarea" style={{marginTop:"25%"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>一等奖</td>
                            <td>20</td>
                            <td>10</td>
                            <td>8</td>
                            <td>7</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>二等奖</td>
                            <td>15</td>
                            <td>9</td>
                            <td>7</td>
                            <td>6</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>三等奖</td>
                            <td>10</td>
                            <td>8</td>
                            <td>6</td>
                            <td>5</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>成功参赛/鼓励奖</td>
                            <td>5</td>
                            <td>4</td>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="12" style={{textAlign:'center',verticalAlign:'middle'}}>创新创业类</th>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="4" style={{textAlign:'center',verticalAlign:'middle'}}>挑战杯</th>
                        </tr>
                        <tr>
                            <td>全国</td>
                            <td>特等：负责人25分，成员20分</td>
                            <td>一等奖：负责人20，成员15</td>
                            <td>二等奖：负责人15，成员10</td>
                            <td>三等奖：负责人：10分，成员8分</td>
                            <td scope="row" rowSpan="10">
                                <Input type="number" style={{marginTop:"200px"}} id="row2"/>
                                <UncontrolledTooltip target="row2">
                                    "1.同一项目按最高分值加分，不累计。当学期已加分项目如果后一学期获更高奖，则后一学期只加差额分。
                                    2.除全国级别外，成员加分只计排名第二至第五的，剩余成员加分按标准*0.5"
                                </UncontrolledTooltip>
                            </td>
                            <td scope="row" rowSpan="10">
                                <Input type="textarea" style={{marginTop:"200px"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>省级</td>
                            <td>一等奖：负责人15，成员10</td>
                            <td>二等奖：负责人10，成员8</td>
                            <td>三等奖：负责人：8分，成员6分</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>校级</td>
                            <td>一等奖：负责人10，成员8</td>
                            <td>二等奖：负责人8，成员6</td>
                            <td>三等奖：负责人：6分，成员4分</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="3" style={{textAlign:'center',verticalAlign:'middle'}}>创新创业</th>
                        </tr>
                        <tr>
                            <td>全国</td>
                            <td>一等：负责人15，成员4</td>
                            <td>鼓励：负责人3，成员1</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>校级</td>
                            <td>一等：负责人10，成员8</td>
                            <td>二等：负责人8，成员6</td>
                            <td>三等：负责人6，成员4</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" style={{textAlign:'center',verticalAlign:'middle'}}>新苗人才</th>
                        </tr>
                        <tr>
                            <td>省级</td>
                            <td>立项：负责人15，成员4</td>
                            <td>鼓励奖：负责人3，成员1</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="2" style={{textAlign:'center',verticalAlign:'middle'}}>学院立项</th>
                        </tr>
                        <tr>
                            <td>院级</td>
                            <td>负责人6，成员2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="6" style={{textAlign:'center',verticalAlign:'middle'}}>发表文章与申请专利</th>
                        </tr>
                        <tr>
                            <td >学术论文</td>
                            <td rowSpan="2" colSpan="5" style={{textAlign:'center',verticalAlign:'middle'}}>如果有，加分细则请咨询辅导员</td>
                            <td>
                                <Input type="number"/>
                            </td>
                            <td>
                                <Input/>
                            </td>
                        </tr>
                        <tr>
                            <td>发明专利</td>
                            <td>
                                <Input type="number"/>
                            </td>
                            <td>
                                <Input/>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="3">非学术性文章</td>
                        </tr>
                        <tr>
                            <td colSpan="5">校级媒体</td>
                            <td>
                                <Input type="number" id="row31"/>
                                <UncontrolledTooltip target="row31">
                                    1分/篇，最高封顶4分（如果有4篇以上）
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="5">校级以上媒体</td>
                            <td>
                                <Input type="number" id="row32"/>
                                <UncontrolledTooltip target="row32">
                                    省及以下，3分/篇，省级以上，6分/篇
                                </UncontrolledTooltip>
                            </td>
                            <td>
                                <Input/>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="7" style={{textAlign:'center',verticalAlign:'middle'}}>文体竞赛类</th>
                        </tr>
                        <tr>
                            <td>级别</td>
                            <td colSpan="2">全国</td>
                            <td>省级</td>
                            <td>校级</td>
                            <td>院级</td>
                            <td scope="row" rowSpan="7">
                                <Input type="number" style={{marginTop:"25%"}} id="row4"/>
                                <UncontrolledTooltip target="row4">
                                    1.这里主要包括：129、运动会、新生杯、绑腿跑、拔河比赛等体育、文艺等非学术类比赛，需提供证书。
                                    2.团体比赛主力队员按标准分x0.6四舍五入后加分，如参加129大合唱的同学，此处7*0.6，每人加4分；
                                    3.同一项目按最高分加，不累计。（如运动会同时参加了院赛和校赛，按照校赛和院赛中名次加分最高的那项来加，只能加一次）
                                    4.没有获奖的加在德育分中（见德育分表）
                                </UncontrolledTooltip>
                            </td>
                            <td scope="row" rowSpan="7" >
                                <Input type="textarea" style={{marginTop:"25%"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>第一名</td>
                            <td colSpan="2">10</td>
                            <td>8</td>
                            <td>7</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>第二名</td>
                            <td colSpan="2">9</td>
                            <td>7</td>
                            <td>6</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>第三名</td>
                            <td colSpan="2">8</td>
                            <td>6</td>
                            <td>5</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>第四-八名</td>
                            <td colSpan="2">6</td>
                            <td>5</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>鼓励奖</td>
                            <td colSpan="2">4</td>
                            <td>2</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="4" style={{textAlign:'center',verticalAlign:'middle'}}>社会实践类</th>
                        </tr>
                        <tr>
                            <td colSpan="2">省级</td>
                            <td colSpan="4">先进集体：4分/人，先进个人：7分</td>
                            <td scope="row" rowSpan="4">
                                <Input type="number" style={{marginTop:"25%"}} id="row5"/>
                                <UncontrolledTooltip target="row5">
                                    1.先进个人加分后，不再加先进集体的分；
                                    2.这里的加分项包括：团日活动、寝室美化大赛、辩论赛、演讲比赛等，需提供证书。
                                </UncontrolledTooltip>
                            </td>
                            <td scope="row" rowSpan="4" >
                                <Input type="textarea" style={{marginTop:"25%"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">校级</td>
                            <td colSpan="4">先进集体：3分/人，先进个人：5分</td>
                        </tr>
                        <tr>
                            <td colSpan="2">院级</td>
                            <td colSpan="4">先进集体：2分/人，先进个人：3分</td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="8" style={{textAlign:'center',verticalAlign:'middle'}}>技能证书类</th>
                        </tr>
                        <tr>
                            <td rowSpan="4">英语等级证书</td>
                        </tr>
                        <tr>
                            <td>四级</td>
                            <td colSpan="4">550分以上加4分，425分以上加2分</td>
                            <td scope="row" rowSpan="3">
                                <Input type="number" style={{marginTop:"25%"}} id="row61"/>
                                <UncontrolledTooltip target="row61">
                                    需提供证书
                                </UncontrolledTooltip>
                            </td>
                            <td scope="row" rowSpan="3" >
                                <Input type="textarea" style={{marginTop:"25%"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>六级</td>
                            <td colSpan="4">550分以上加6分，425分以上加4分</td>
                        </tr>
                        <tr>
                            <td>雅思托福</td>
                            <td colSpan="4">6-9加6-9分，90-120加6-9分</td>
                        </tr>
                        <tr>
                            <td colSpan="2">计算机等级证书</td>
                            <td colSpan="4" rowSpan="3">如有，请直接联系辅导员加分</td>
                            <td scope="row" rowSpan="3">
                            </td>
                            <td scope="row" rowSpan="3" >
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">专业相关技能证书</td>
                        </tr>
                        <tr>
                            <td colSpan="2">其他</td>
                        </tr>

                        <tr>
                            <th scope="row" rowSpan="5" style={{textAlign:'center',verticalAlign:'middle'}}>参观、交流类</th>
                        </tr>
                        <tr>
                            <td colSpan="2">企业参观交流</td>
                            <td colSpan="4"><span className="red">必须是学院或学校组织的直接去到企业所在地的参观交流；</span>组织者5分/人/次，成员3分/人/次</td>
                            <td scope="row" rowSpan="4">
                                <Input type="number" style={{marginTop:"25%"}} />
                            </td>
                            <td scope="row" rowSpan="4" >
                                <Input type="textarea" style={{marginTop:"25%"}}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">交流类活动</td>
                            <td colSpan="4">（1）只承认学校、学院组织的座谈会，校级2分/次，院级1分/次；<span className="red">（2）出国交流，10分/次</span></td>
                        </tr>
                        <tr>
                            <td colSpan="2">其他学院要求的活动</td>
                            <td colSpan="4">放到德育分处加分，此处不再加分</td>
                        </tr>
                        <tr>
                            <td colSpan="2">各类技能培训</td>
                            <td colSpan="4">需提供证明，3分/人</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
        )
    }
}
export default Fzx