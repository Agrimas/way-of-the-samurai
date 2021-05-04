import React from 'react';
import Classes from './Users.module.css';
import User from "./User/User";
import axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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
                                this.onPageChange(pageNumber)
                            }}
                            className={this.props.currentPage === pageNumber ? Classes.selectedPage : ''}>{pageNumber}</span>
                    })}

                </div>

                {
                    this.props.users.map(u => <User id={u.id}
                                                    key={u.id}
                                                    photos={u.photos}
                                                    name={u.name}
                                                    status={u.status}
                                                    followed={u.followed}
                                                    follow={this.props.follow}
                                                    unfollow={this.props.unfollow}/>)
                }

                <button>Show More</button>
            </div>
        );
    }

}


export default Users;