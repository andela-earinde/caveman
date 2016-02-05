import React from 'react';


class VenueDetail extends React.Component {

  constructor(props) {
    super(props)
    this.venue = {}
  }

  componentWillMount() {
    let {listOfVenues, params} = this.props;

    listOfVenues.forEach((venue) => {
      if (`${venue.id}` === params.venueID) {
        this.venue = venue
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card-panel teal">
            crap
          </div>
        </div>
      </div>
    )
  }
}

export default VenueDetail;