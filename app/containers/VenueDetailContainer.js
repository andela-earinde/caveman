import React from 'react';
import {connect} from 'react-redux';

import {fetchListOfVenues} from '../actions/actions';

import VenueDetail from '../components/VenueDetail';


class VenueDetailContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {listOfVenues, dispatch, location} = this.props;
    let offset = Math.ceil((parseInt(location.query.page_num, 10) - 1)  * 100);
    console.log(offset)
    if (listOfVenues.length === 0) {
      dispatch(fetchListOfVenues(offset))
    }
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
    listOfVenues: venues.venuelistDetail.listOfVenues,
    offset: venues.venuelistDetail.meta.offset
  }
}

export default connect(mapStateToProps)(VenueDetailContainer);