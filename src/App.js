import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter, Router, Switch } from 'react-router-dom';
import Navbar from './Navbar';

import User from './pages/user';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/Home';
import { useEffect, useState } from 'react';

function App() {
    const [token, setToken] = useState();
    useEffect(() => {
        const getToken = localStorage.getItem('token');
        setToken(getToken);
        console.log('token', getToken);
    }, [token]);

    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    {token ? (
                        <>
                            <Route path='/' component={User} exact />

                            <Route path='/home' component={Home} />
                        </>
                    ) : (
                        <>
                            <Route path='/login' component={Login} />
                            <Route path='/signup' component={Signup} />
                        </>
                    )}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
