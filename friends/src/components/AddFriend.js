import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValue = {
    name: '',
    age: '',
    email: ''
}

function AddFriend() {
    
    const [state, setState] = useState(initialValue);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', state)
            .then(res => {
                console.log(res);
                // localStorage.setItem('token', res.data.payload);
                // window.location.href = '/friends';
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={state.name}
                    placeholder='name'
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='age'
                    value={state.age}
                    placeholder='age'
                    onChange={handleChange}
                />
                <input 
                    type='email'
                    name='email'
                    value={state.email}
                    placeholder='email'
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;