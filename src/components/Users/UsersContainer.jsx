import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Users from './Users';
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from '../../redux/users-reducer';
import loaderPhoto from '../../assets/img/loader.svg';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setIsFetching(false);
            // this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setIsFetching(false);
        });
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> :
                <Users
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    onPageChange={this.onPageChange.bind(this)}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />}


        </>

    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
})(UsersContainer);
