import React from 'react';
import {connect} from 'react-redux';

import VenueDetail from '../components/VenueDetail';


class VenueDetailContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VenueDetail {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  const {venues} = state;

  return {
    listOfVenues: venues.listOfVenues
  }
}

export default connect(mapStateToProps)(VenueDetailContainer);