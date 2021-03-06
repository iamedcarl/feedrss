import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import TodayPageContainer from './today_page_container';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    if (this.props.user === undefined) { return null; }
    if (this.props.collections.length === 0) {
      return(
        <div>
          <Redirect to="/discover" push />
        </div>
      );
    }

    return(
      <div className='main-page main nav-open'>
        <TodayPageContainer />
      </div>
    );

  }

} // end of MainPage

export default MainPage;
