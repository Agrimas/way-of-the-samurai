import React from 'react';
import Classes from "./Users.module.css";
import User from "./User/User";

function Users({users, follow, unFollow}) {

    return (
        <div className={Classes.container}>
            <div className={Classes.usersListContainer}>
                {
                    users.map(u => <User id={u.id}
                                         key={u.id}
                                         photos={u.photos}
                                         name={u.name}
                                         status={u.status}
                                         followed={u.followed}

                                         follow={follow}
                                         unFollow={unFollow}
                    />)
                }
            </div>

            <button>Show More</button>
        </div>
    );
}

export default Users;