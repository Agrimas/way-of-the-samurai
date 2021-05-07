import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    follow,
    getUsers,
    unFollow,
} from '../../redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange(pageNumber) {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    followingIsProgress={this.props.followingIsProgress}

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
        followingIsProgress: state.usersPage.followingIsProgress,
    }
}

export default WithAuthRedirect(connect(mapStateToProps, {
    follow,
    unFollow,
    getUsers,
})(UsersContainer));
