import React from 'react';
import {connect} from 'react-redux';

import {fetchListOfVenues} from '../actions/actions';

import Home from '../components/Home';


class HomeContainer extends React.Component {

  constructor(props) {
    super(props);

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillMount() {
    const {dispatch} = this.props;

    dispatch(fetchListOfVenues(0))
  }

  render() {
    return <Home
            {...this.props}
            handlePageClick={this.handlePageClick}/>
  }

  handlePageClick(data) {
    const {pageLimit, dispatch} = this.props;

    let selected = data.selected;
    console.log(pageLimit)
    let offset = Math.ceil(selected * pageLimit);

    dispatch(fetchListOfVenues(offset))
  }
}

HomeContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {venues} = state;

  return {
    listOfVenues: venues.venuelistDetail.listOfVenues,
    totalCountOfVenues: venues.venuelistDetail.meta.total_count,
    pageLimit: venues.venuelistDetail.meta.limit
  }
}

export default connect(mapStateToProps)(HomeContainer);
