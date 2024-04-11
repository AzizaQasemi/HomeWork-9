import React from 'react';
import './User.css'

const User = ({id, title, thumbnailUrl}) => {
    return (
        <div className='list'>
            <button className='btn'>
                {title} 
                <button className='nit'>{id}</button> 
                <h5>Text</h5>
                <img src={thumbnailUrl} alt="" />
             </button>
        </div>
    );
};

export default User;