import React from 'react';
const axios = require('axios');

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: ''
    }
  }

  componentDidMount() {
    axios.get('http://ec2-3-82-198-179.compute-1.amazonaws.com:3000/message')
      .then( response => {
        console.log('response', response)
        this.setState({
          message: response.data
        })
      });
  }

  render() {
    return (
      <p>{this.state.message}</p>
    )
  }
}