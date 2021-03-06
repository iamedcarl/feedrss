import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Redirect} from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={props => {
    return (!loggedIn
      ? (<Component {...props}/>)
      : (<Redirect to="/my" />));
  }}/>
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={props => {
    return (loggedIn
      ? (<Component {...props}/>)
      : (<Redirect to="/"/>));
  }}/>
);

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.username)
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
