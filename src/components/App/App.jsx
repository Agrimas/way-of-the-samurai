import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
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

    const catchUnhandledAllError = (event) => {
        console.log(event);
    }

    useEffect(() => {
        props.initializeApp();
        window.addEventListener('unhandledrejection', catchUnhandledAllError);

        return () => {
            window.removeEventListener('unhandledrejection', catchUnhandledAllError)
        }
    }, [])


    return <>
        {
            props.initialized ?
                <div className='app_wrapper'>
                    <HeaderContainer/>
                    <Sidebar/>
                    <main>
                        <Switch>
                            <Route path='/login' render={() => <LoginPage/>}/>
                            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>

                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            {/*<Route path='/' exact><Redirect to='/profile'/></Route>*/}
                            <Redirect from="/" to="/profile"/>
                            <Route path='*' render={() => <div>404</div>}/>
                        </Switch>
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

const SamuraiJSApp = () =>
    <BrowserRouter>
        <Provider store={Store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>

export default SamuraiJSApp;