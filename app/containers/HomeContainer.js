import React from 'react';
import {connect} from 'react-redux';

import Home from '../components/Home';


class HomeContainer extends React.Component {

  render() {
    return <Home {...this.props} />
  }
}

HomeContainer.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {venues} = state;

  return {
    listOfVenues: venues.listOfVenues
  }
}

export default connect(mapStateToProps)(HomeContainer);
