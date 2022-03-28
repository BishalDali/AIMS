import axios from 'axios';
import React, { useState } from 'react';
import { SignUpView } from './signup';

export default function Login() {
    const initialState = { userName: null, password: null };
    const [loginData, setLoginData] = useState(initialState);
    const [msg, setMsg] = useState('');
    const [alertColor, setAlertColor] = useState('');

    const onChangeText = (event) => {
        setMsg('');
        setLoginData({ ...loginData, [event.target.name]: event.target.value });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('inside login');
        if (!loginData.userName || !loginData.password) {
            setMsg('Required all field!!!');
            setAlertColor('danger');
            return;
        }

        let data = {
            userName: loginData.userName,
            password: loginData.password,
        };
        const getData = await axios.post(
            'http://localhost:3001/login/create',
            data
        );
        console.log('token', getData.data.token);
        //localStorage.setItem('myCat', 'Tom');
        localStorage.setItem('token', getData.data.token);
        if (getData.data.msg) {
            console.log(getData.data.msg);
            setMsg(getData.data.msg);

            setAlertColor('success');
        }
        window.location.href = '/';
    };
    return (
        <div className='container mt-5' style={{ width: '35%' }}>
            <div className='d-flex justify-content-center align-items-center'>
                <div
                    className='card card-body'
                    style={{ border: '0.8px solid', borderRadius: 10 }}
                >
                    <h3>Login</h3>
                    <form onSubmit={(e) => handleLogin(e)}>
                        {msg && (
                            <div
                                className={`alert alert-${alertColor} alert-dismissible text-left`}
                            >
                                <div>{msg}</div>
                                <button
                                    type='button'
                                    className='close'
                                    onClick={() => {
                                        setMsg('');
                                    }}
                                >
                                    <span area-hidden='true'>&times;</span>
                                </button>
                            </div>
                        )}
                        <SignUpView
                            label='User Name:'
                            type='text'
                            name='userName'
                            value={loginData.userName}
                            onChange={onChangeText}
                            placeholder='Enter UserName'
                        />
                        <SignUpView
                            label='Password:'
                            type='password'
                            name='password'
                            value={loginData.password}
                            onChange={onChangeText}
                            placeholder='Enter Password'
                        />

                        <div>
                            <button
                                className='btn  mt-3'
                                style={{
                                    backgroundColor: '#3f50b5',
                                    color: 'white',
                                    borderRadius: 8,
                                }}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
