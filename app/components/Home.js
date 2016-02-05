import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    return <div>Hello world</div>
  }
}

export default Home