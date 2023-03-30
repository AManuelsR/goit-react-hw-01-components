import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

import amigos from '../Json/friends.json';

export default function FriendList({
    avatar,
    name,
    isOnline,
    id
}){
    return(

        <ul class="friend-list">
            {amigos.map(({avatar, name, isOnline, id}) =>{
                return (
                    <li class="item">
                    <span class="status"></span>
                    <img class="avatar" src={avatar} alt="User avatar" width="48" />
                    <p class="name">{name}</p>
                </li>
                )
            })
            }
            
            
        </ul>
    )
}





FriendList.propTypes= {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}