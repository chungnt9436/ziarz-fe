'use client'

import {useState, useEffect } from 'react';
import AuthService from '@/services/authService';
import { useAuth } from '@/context/authContext';
import {Button, Modal, message, Alert, Form, Input} from 'antd';

function appRegister() {
    const { registerModal, openLoginModal, closeRegisterModal } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (values) => {
        setLoading(true);
        setError(null)
        try {
            const response =  await AuthService.signup(values);
            if (response) {
                setLoading(false);
                message.success('Đăng ký tài khoản thành công!');
                openLoginModal();
            }
        } catch (error) {
            setError(error.response.data.detail);
            setLoading(false);
        }

    };

    return (
        <>
            <Modal className=" modal-login" footer={null}  open={registerModal.showModal} onCancel={closeRegisterModal}>
                <h2><img src="/GamePair..svg" alt=""/></h2>
                <Button block size="large" className="mb-5 py-2 h-auto">
                    <img src="/gg.svg" alt=""/>Login with Google
                </Button>
                <Button block size="large" className="mb-5 py-2 h-auto">
                    <img src="/fb.svg" alt=""/>Login with Facebook
                </Button>
                <div className="line-or"><span>REGISTER</span></div>
                <Form
                    name="layout-multiple-vertical"
                    layout="vertical"
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
                            { min: 8, message: 'Password must be at least 8 characters!' },
                            {
                                pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])/,
                                message: 'Password must contain at least one uppercase letter and one special character!'
                            }

                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="***********" />
                    </Form.Item>

                    <Form.Item
                        className="input-password"
                        name="confirm"
                        label="Password Confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="***********" />
                    </Form.Item>

                    { error && (
                        <Alert className="mb-4"  message={error} type="error" />
                    )}

                    <Form.Item>
                        <Button
                            loading={loading}
                            type="success"
                            block size="large"
                            className="py-2 h-auto border-0 bg-green-2 text-white font-bold"
                            htmlType="submit"
                        >
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
                <div  className="text-white text-center">
                    Already have account?
                    <b onClick={openLoginModal}  className="text-white cursor-pointer">Login</b>
                </div>
            </Modal>
        </>
    );
}
export default appRegister;
