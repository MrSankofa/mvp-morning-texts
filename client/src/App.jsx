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
    axios.get('http://localhost:3000/message')
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