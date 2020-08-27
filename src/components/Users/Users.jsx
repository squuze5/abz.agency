import React from 'react';

import './Users.scss';
import CardUser from './CardUser';

const Users = () => {
    const baseUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1';
    const [users, setUsers] = React.useState([]);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        fetch(`${baseUrl}/users?page=${page}&count=6`)
          .then(res => res.json())
          .then(json => {
            setUsers(json.users);        
          });
      }, [page]);

    console.log(users);

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
                        {users.length !== 0 ? users.map(user => (
                            <CardUser 
                                usersData={user}
                                key={user.id} 
                            />
                        )) : <div>Loading...</div>}
                    </div>
                    
                    <div className="submit-button button-center">
                        <button onClick={() => setPage(page + 1)}>Show more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Users;