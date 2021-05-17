import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {follow, requestUsers, unFollow,} from '../../redux/reducers/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";
import {withFetching} from "../../utils/withFetching";
import Paginator from "../common/Paginator/Paginator";

function UsersContainer({
                            requestUsers,
                            currentPage,
                            pageSize,
                            users,
                            totalUsersCount,
                            follow,
                            unFollow
                        }) {

    const [isFetching, setFetching] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (isFirstRender) setIsFirstRender(false)
        withFetching(requestUsers, setFetching, [currentPage, pageSize])
    }, [])

    const onPageChange = async (pageNumber) => {
        await withFetching(requestUsers, setFetching, [pageNumber, pageSize])
    }

    return <>
        <Paginator
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
            portionSize={10}
        />
        {isFetching || isFirstRender ? <Preloader/> :
            <Users
                users={users}

                follow={follow}
                unFollow={unFollow}
            />}
    </>

}

function mapStateToProps(state) {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
    }
}

export default compose(connect(mapStateToProps, {
    follow,
    unFollow,
    requestUsers,
}))(UsersContainer)

