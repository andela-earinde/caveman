import React from 'react';
import {connect} from 'react-redux';

import {fetchListOfVenues} from '../actions/actions';

import Home from '../components/Home';


class HomeContainer extends React.Component {

  componentWillMount() {
    const {dispatch} = this.props;

    dispatch(fetchListOfVenues())
  }

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
