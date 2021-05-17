import React, {useEffect, Suspense} from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";
import News from "./../News/News"
import Music from "./../Music/Music"
import Settings from "./../Settings/Settings"
import UsersContainer from "../Users/UsersContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginPage from "../Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "../../redux/reducers/app-reducer";
import Preloader from "../common/Preloader/Preloader";
import Store from "../../redux/redux-store";
import {withSuspense} from "../../hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));

function App(props) {

    useEffect(() => {
        props.initializeApp();
    }, [])

    return <>
        {
            props.initialized ?
                <div className='app_wrapper'>
                    <HeaderContainer/>
                    <Sidebar/>
                    <main>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </main>
                </div> :
                <Preloader/>
        }
    </>
}

function mapStateToProps(state) {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = connect(mapStateToProps,
    {
        initializeApp
    }
)(App);

const SamuraiJSApp = (props) =>
    <BrowserRouter>
        <Provider store={Store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>

export default SamuraiJSApp;