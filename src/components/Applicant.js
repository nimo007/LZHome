import { Form, Input, Button, Select} from 'antd';
import React from "react";

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

class Applicant extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="电话号码"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your Phone!' }],
                    })(
                        <Input placeholder="phone" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="联系地址"
                >
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: 'Please input your Address!' }],
                    })(
                        <Input placeholder="联系地址" />
                    )}
                </FormItem>

                <FormItem
                    wrapperCol={{ span: 12, offset: 6 }}
                >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                return
            }

            console.log('Received values of form: ', values);
        });
    }
}

const WrappedApplicant= Form.create()(Applicant);
export default WrappedApplicant