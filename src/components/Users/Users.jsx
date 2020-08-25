import React from 'react';

import './Users.scss';
import CardUser from './CardUser';

const Users = () => {
    return (
        <section className="users section">
            <div className="container">

                <div className="section__header">
                    <div className="section__header-title">
                        <h2>Our cheerful users</h2>
                    </div>
                    <div className="section__header-subtitle">
                        <h5>
                            Attention! Sorting users by registration date
                        </h5>
                    </div>
                </div>

                <div className="users__content">

                    <div className="users__content-list">
                        <CardUser />
                        <CardUser />
                        <CardUser />

                        <CardUser />
                        <CardUser />
                        <CardUser />
                    </div>
                    
                    <div className="submit-button">
                        <button>Show more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Users;