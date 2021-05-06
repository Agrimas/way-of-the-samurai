import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
} from '../../redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import {UsersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setIsFetching(false);
            // this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
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
                    unFollow={this.props.unFollow}
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
