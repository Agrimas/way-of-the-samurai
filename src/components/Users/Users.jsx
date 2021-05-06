import React from 'react';
import Classes from "./Users.module.css";
import User from "./User/User";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={Classes.container}>
            <div className={Classes.paginationBlock}>
                {pages.map(pageNumber => {
                    return <span
                        key={pageNumber}
                        onClick={() => {
                            props.onPageChange(pageNumber)
                        }}
                        className={props.currentPage === pageNumber ? Classes.selectedPage : ''}>{pageNumber}</span>
                })}

            </div>

            {
                props.users.map(u => <User id={u.id}
                                           key={u.id}
                                           photos={u.photos}
                                           name={u.name}
                                           status={u.status}
                                           followed={u.followed}
                                           follow={props.follow}
                                           unFollow={props.unFollow}/>)
            }

            <button>Show More</button>
        </div>
    );
}

export default Users;