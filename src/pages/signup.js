import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './signup.css';

function Signup() {
    const initialState = {
        fullName: null,
        userName: null,
        address: null,
        phoneNumber: null,
        password: null,
    };
    const [signupData, setSignupData] = useState(initialState);
    const [msg, setMsg] = useState('');
    const [alertColor, setAlertColor] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const onChangeText = (event) => {
        setMsg('');
        setErrMsg('');
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSignUp = async (event) => {
        event.preventDefault();
        console.log('inside signup', signupData);
        if (
            !signupData.fullName ||
            !signupData.userName ||
            !signupData.email ||
            !signupData.phoneNumber ||
            !signupData.password
        ) {
            setMsg('सबै क्षेत्र आवश्यक छ!!!');
            setAlertColor('danger');
            return;
        }
        let data = {
            name: signupData.fullName,
            userName: signupData.userName,
            email: signupData.email,
            phone_number: signupData.phoneNumber,
            password: signupData.password,
        };

        
        const getData = await axios.post(
            'http://localhost:3001/signup/create',
            data
        );
        if (getData.data.msg) {
            console.log(getData.data.msg);
            setMsg(getData.data.msg);
            setAlertColor('success');
        }

        if (getData.data.err) {
            console.log(getData.data.err);
            setErrMsg(getData.data.err);
            setAlertColor('danger');
        }
    };
    return (
        <div className='container mt-5' style={{ width: '50%' }}>
            <div className='d-flex justify-content-center align-items-center'>
                <div
                    className='card card-body'
                    style={{ border: '0.8px solid', borderRadius: 10 }}
                >
                    <div
                        className='font-weight-bold large my-3'
                        style={{ fontSize: 20 }}
                    >
                        खाता सिर्जना गर्नुहोस्
                    </div>

                    <form onSubmit={(e) => handleSignUp(e)}>
                        {msg && (
                            <div
                                className={`alert alert-${alertColor} alert-dismissible text-left`}
                            >
                                <div>{msg}</div>
                                <button
                                    type='button'
                                    className='close'
                                    onClick={() => {
                                
            
                                            window.location.href = '/login';
                                        
                                        setMsg('');
                                    }}
                                >
                                    <span area-hidden='true'>&times;</span>
                                </button>
                            </div>
                        )}
                        <SignUpView
                            label='पुरा नाम:'
                            type='text'
                            name='fullName'
                            value={signupData.fullName}
                            onChange={onChangeText}
                            placeholder='पूरा नाम प्रविष्ट गर्नुहोस्'
                        />
                        <SignUpView
                            label='प्रयोगकर्ता नाम:'
                            
                            
                            type='text'
                            name='userName'
                            value={signupData.userName}
                            onChange={onChangeText}
                            placeholder='प्रयोगकर्ता नाम प्रविष्ट गर्नुहोस्'
                            errMsg={errMsg}
                        />

                        <SignUpView
                            label='इ - मेल:'
                            type='text'
                            name='email'
                            value={signupData.email}
                            onChange={onChangeText}
                            placeholder='इ-मेल रविष्ट गर्नुहोस्'
                        />
                        <SignUpView
                            label='फोन नम्बर:'
                            type='text'
                            name='phoneNumber'
                            value={signupData.phoneNumber}
                            onChange={onChangeText}
                            placeholder='फोन नम्बर प्रविष्ट गर्नुहोस्
                            '
                        />
                        <SignUpView
                            label='पासवर्ड:'
                            type='password'
                            name='password'
                            value={signupData.password}
                            onChange={onChangeText}
                            placeholder='पासवर्ड प्रविष्ट गर्नुहोस्'
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
                                पेश गर्नुहोस्
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;

export function SignUpView({
    type,
    name,
    value,
    onChange,
    placeholder,
    label,
    errMsg = '',
}) {
    return (
        <div className='row m-2 my-3'>
            <div className='col-lg-4  d-flex justify-content-start align-items-center'>
                <div className='font-weight-bold'>{label}</div>
            </div>
            <div className='col-lg'>
                <input
                    type={type}
                    name={name}
                    className='form-control text-black'
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={{
                        borderRadius: 5,
                        border: '0.5px solid',
                    }}
                />
                {errMsg && (
                    <div className='text-danger text-left'>{errMsg}</div>
                )}
            </div>
        </div>
    );
}
