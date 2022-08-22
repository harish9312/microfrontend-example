import { Button, Checkbox, Form, Input } from 'antd';
import { connect } from 'react-redux'
import React from 'react';

export const LoginPageImpl = (props) => {
    console.log('>> props', props);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        const EmployeeModel = props.model;
        new EmployeeModel({ ...values, id: 1 }).$save()
    };

    const showData = () => {
        const EmployeeModel = props.model;
        const list = EmployeeModel.list()
        console.log('>> list', list);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Button onClick={showData} >
                SHOW
            </Button>
        </>);
};

const mapStateToProps = (state, ownProps) => {
    console.log('>> ownProps', ownProps?.model?.EmployeeModel?.list());
    return { ...state, ...ownProps, list: ownProps?.model?.EmployeeModel?.list() }
}

export const LoginPage = connect(mapStateToProps, null)(LoginPageImpl)