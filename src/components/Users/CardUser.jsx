import React from 'react';

import DefaultPhoto from '../../assets/img/photo-cover.png';

const CardUser = () => {
    return (
        <div className="user__card">
            <div className="user__card-img">
                <img src={DefaultPhoto} alt="User avatart"/>
            </div>

            <div className="user__card-name">
                <h5>Noah</h5>
            </div>

            <div className="user__card-info">
                <span>QA</span>
                <span>test@gmail.com</span>
                <span>+380 99 063 03 24</span>
            </div>
        </div>
    )
}

export default CardUser;