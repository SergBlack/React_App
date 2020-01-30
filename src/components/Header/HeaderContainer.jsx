import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  email: state.auth.email,
  fullName: state.profilePage.profile
});

export default connect(mapStateToProps)(HeaderContainer);
