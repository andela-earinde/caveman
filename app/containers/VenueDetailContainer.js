import React from 'react';
import {connect} from 'react-redux';

import {fetchListOfVenues} from '../actions/actions';

import VenueDetail from '../components/VenueDetail';


class VenueDetailContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {listOfVenues, dispatch, offset} = this.props;

    if (listOfVenues.length === 0) {
      dispatch(fetchListOfVenues(offset))
    }
  }

  render() {
    console.log(this.props)
    return (
      <VenueDetail {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  const {venues} = state;

  return {
    listOfVenues: venues.venuelistDetail.listOfVenues,
    offset: venues.venuelistDetail.meta.offset
  }
}

export default connect(mapStateToProps)(VenueDetailContainer);