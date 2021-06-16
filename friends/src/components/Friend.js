import React from 'react';

// import EditFriend from './EditFriend';

function Friend(props) {
    
    const { name, age, email } = props.info;
    
    return(
        <div className='friend-container'>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            {/* <EditFriend /> */}
        </div>
    );
};

export default Friend;