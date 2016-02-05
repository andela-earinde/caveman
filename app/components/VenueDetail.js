import React from 'react';

import VenueMapView from './VenueMapView'


class VenueDetail extends React.Component {

  constructor(props) {
    super(props)
    this.venue = {}
  }

  render() {
    let {listOfVenues, params} = this.props;

    listOfVenues.forEach((venue) => {
      if (`${venue.id}` === params.venueID) {
        this.venue = venue
      }
    })

    return (
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card-panel teal venue-detail">
            <div>
              NAME: {this.venue.name}
            </div>
            <div>
              <span className="venue-item-second">
                ADDRESS: {this.venue.address},
              </span>&nbsp;
              <span>
                {this.venue.city},
              </span>&nbsp;
              <span>
                {this.venue.country}
              </span>
            </div>
            <div>
              REVENUE: {this.venue.revenue}
            </div>
            <div>
              ABOUT: {this.venue.notes}
            </div>
          </div>
        </div>
      {/* Render goolge map*/}
      <div className="col s12 m8 offset-m2">
        <div className="card-panel teal venue-detail">
          <VenueMapView
            markers={[{
              postion: {
                lat: this.venue.lat || 25.0112183,
                lng: this.venue.lng || 121.52067570000001
              },
              key: this.venue.country || "Taiwan"
            }]}/>
        </div>
      </div>
      </div>
    )
  }
}

export default VenueDetail;