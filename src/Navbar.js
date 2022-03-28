import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const history = useHistory();

    const [token, setToken] = useState();
    useEffect(() => {
        const getToken = localStorage.getItem('token');
        setToken(getToken);
        console.log('token', getToken);
    }, [token]);

    return (
        <>
            <div className='flex pd'>
                {token ? (
                    <>
                        <div
                            onClick={() => {
                                window.location.href = '/home';
                            }}
                            className={`nav-item ${
                                window.location.pathname == '/home'
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            Home
                        </div>
                        <div
                            onClick={() => {
                                window.location.href = '/';
                            }}
                            className={`nav-item ${
                                window.location.pathname == '/' ? 'active' : ''
                            }`}
                        >
                            Users
                        </div>

                        <div
                            onClick={() => {
                                localStorage.removeItem('token');
                                window.location.href = '/login';
                            }}
                            className={`nav-item ${
                                window.location.pathname == '/logout'
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            Logout
                        </div>
                    </>
                ) : (
                    <>
                        <div
                            onClick={() => {
                                // history.push('/signup');
                                window.location.href = '/signup';
                            }}
                            className={`nav-item ${
                                window.location.pathname == '/signup'
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            साइन अप
                        </div>

                        <div
                            onClick={() => {
                                window.location.href = '/login';
                            }}
                            className={`nav-item ${
                                window.location.pathname == '/login'
                                    ? 'active'
                                    : ''
                            }`}
                        >
                           लग - इन
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default withRouter(Navbar);
