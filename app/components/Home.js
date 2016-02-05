import React from 'react';
import ReactList from 'react-list';
import { routeActions } from 'react-router-redux'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  renderVenues(index, key) {
    const {dispatch} = this.props;
    return (
      <a key={key}
           className="collection-item caveman-venue-item"
           onClick={() => dispatch(routeActions.push(`/venue/${this.props.listOfVenues[index].id}`))}>
        <div>
          NAME: {this.props.listOfVenues[index].name}
        </div>
        <span className="venue-item-second">
          ADDRESS: {this.props.listOfVenues[index].address},
        </span>&nbsp;
        <span>
          {this.props.listOfVenues[index].city},
        </span>&nbsp;
        <span>
          {this.props.listOfVenues[index].country}
        </span>
      </a>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card-panel teal caveman-header">
            <span className="caveman-header-first">CAVEMAN</span>
            <span className="caveman-header-last">List of venues</span>
          </div>
        </div>
        <div className="col s12 m8 offset-m2">
          <div className="card-panel teal collection caveman-venue-list">
            <ReactList
              itemRenderer={::this.renderVenues}
              length={this.props.listOfVenues.length}
              type='uniform'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home