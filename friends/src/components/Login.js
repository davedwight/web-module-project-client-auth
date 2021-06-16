import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValue = {
    credentials: {
        username: 'Lambda',
        password: 'School'
    }
};


function Login(props) {

    const [state, setState] = useState(initialValue);

    const handleChange = e => {
        setState({
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.setAuth({
                    isAuth: true
                })
                window.location.href = '/friends';
            })
            .catch(err => {
                console.log(err);
            })
    };
    
    return (
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={state.credentials.username}
                    onChange={handleChange}
                />
                <input 
                    type='password'
                    name='password'
                    value={state.credentials.password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;