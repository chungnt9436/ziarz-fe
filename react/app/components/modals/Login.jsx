'use client'

import {useState } from 'react';
import AuthService from '@/services/authService';
import { useAuth } from '@/context/authContext';
import {
    Button,
    message,
    Modal,
    Checkbox,
    Form,
    Input,
    Alert
} from 'antd';

function appLogin() {
    const { loginModal, openRegisterModal, closeLoginModal, setUserInfo, sinInGoogle  } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const onSubmit = async (values) => {
        setLoading(true);
        setError(null);
        try {
            const response =  await AuthService.login(values);
            if (response) {
                AuthService.account().then(res => {
                    if (res) {
                        message.success('Đăng nhập tài khoản thành công!');
                        closeLoginModal();
                        setUserInfo(res);
                        setLoading(false);
                    }
                });

            }
        } catch (error) {
            setError(error.response.data.detail);
            setLoading(false);
        }
    };

    
    return (
        <>
            <Modal className="modal-login" footer={null}  open={loginModal.showModal} onCancel={closeLoginModal}>
                <h2><img src="/GamePair..svg" alt=""/></h2>
                <Button block size="large" onClick={sinInGoogle} className="mb-5 py-2 h-auto">
                    <img src="/gg.svg" alt=""/>Login with Google
                </Button>
                <Button block size="large" className="mb-5 py-2 h-auto">
                    <img src="/fb.svg" alt=""/>Login with Facebook
                </Button>
                <div className="line-or"><span>OR</span></div>
                <Form
                    name="layout-multiple-vertical"
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onSubmit}
                    autoComplete="on"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        className="input-email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder="sample@gmail.com" />
                    </Form.Item>
                    <Form.Item
                        layout="vertical"
                        label="Password"
                        name="password"
                        className="input-password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="***********" />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <div className="flex justify-between">
                            <Checkbox className="text-white">Remember me</Checkbox>
                            <span className="text-white cursor-pointer" >Forgot Password?</span>
                        </div>
                    </Form.Item>

                    { error && (
                        <Alert className="mb-4"  message={error} type="error" />
                    )}

                    <Form.Item>
                        <Button loading={loading}
                                type="success"
                                block size="large"
                                className="py-2 h-auto border-0 bg-green-2 text-white font-bold"
                                htmlType="submit"
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <div  className="text-white text-center">
                    Don’t have an account?
                    <b onClick={openRegisterModal} className="text-white cursor-pointer">Register</b>
                </div>
            </Modal>
        </>
    );
}
export default appLogin;
