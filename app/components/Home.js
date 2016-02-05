import React from 'react';
import ReactList from 'react-list';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  renderVenues(index, key) {
    return <div key={key}>{this.props.listOfVenues[index].address}</div>;
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card-panel teal">
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