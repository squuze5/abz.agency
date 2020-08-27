import React from 'react';

import DefaultPhoto from '../../assets/img/photo-cover.png';

const CardUser = (props) => {
    const photoUser = props.usersData.photo;

    return (
        <div className="user__card">
            <div className="user__card-img">
                <img src={photoUser ? photoUser : DefaultPhoto} alt="User avatart"/>
            </div>

            <div className="user__card-name">
                <h5>{props.usersData.name}</h5>
            </div>

            <div className="user__card-info">
                <span>{props.usersData.position}</span>
                <span>{props.usersData.email}</span>
                <span>{props.usersData.phone}</span>
            </div>
        </div>
    )
}

export default CardUser;