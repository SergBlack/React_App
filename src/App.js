import React, {Suspense, lazy} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import {Route, withRouter} from 'react-router-dom';
import { initializedApp } from './Redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';
import {compose} from "redux";
import {connect} from "react-redux";

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const News = lazy(() => import('./components/News/News'));
const Music = lazy(() => import('./components/Music/Music'));
const Settings = lazy(() => import('./components/Settings/Settings'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader isLoading={true} />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
            <Suspense fallback ={<div>Loading...</div>}>
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
            </Suspense>
          <Route path="/login" render={() => <Login />} />
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({ initialized: state.app.initialized });

export default compose(
  withRouter,
  connect(mapStateToProps, { initializedApp })
)(App);
