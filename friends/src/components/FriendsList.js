import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

// import axiosWithAuth from '../utils/axiosWithAuth';

import AddFriend from './AddFriend';
import Friend from './Friend';

const initialValue = {
    friends: []
};

function FriendsList(props) {

    const [state, setState] = useState(initialValue);

    useEffect(() => {
        props.setAuth({
            isAuth: true
        })
        getData();
    }, []);

    const getData = () => {
        axiosWithAuth()
            .get('api/friends')
            .then(res => {
                setState({
                    friends: res.data
                })
            })
            .catch(err => {
                console.log('Error in get request: ', err);
            })
    }

    return(
        <div>
            <AddFriend />
            {
                state.friends.map(friend => (
                    <Friend key={friend.id} info={friend}/>
                    )
                )
            }
        </div>
    );
};

export default FriendsList;