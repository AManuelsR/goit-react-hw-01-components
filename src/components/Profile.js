import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

import Perfil from '../Json/user.json';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes
}){
  return(
    <div class="profile">

      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar"
        />
                
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>


      <ul class="stats">
        <li class="uno">
          <span class="label">Followers</span>
          <span class="quantity">{Perfil.stats.followers}</span>
        </li>

        <li class="dos">
          <span class="label">Views</span>
          <span class="quantity">{Perfil.stats.views}</span>
        </li>

       <li class="tres">
          <span class="label">Likes</span>
          <span class="quantity">{Perfil.stats.likes}</span>
        </li>

      </ul>
      
    </div>
  )
}

Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  likes:PropTypes.string.isRequired,
}
