/**
 * Created by Rychou on 2018/1/11.
 */
import React, {Component} from  'react'
import { Upload, message, Button, Icon } from 'antd';

class UploadFile extends Component{
    render(){
        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return(
            <Upload {...props}>
                <Button>
                    <Icon type="upload" /> 点击上传证明文件
                </Button>
            </Upload>
        )
    }
}
export default UploadFile