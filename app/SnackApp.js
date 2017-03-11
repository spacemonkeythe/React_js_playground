import React, { Component } from 'react';
import {render} from 'react-dom';
import Container from './Container';

class SnackApp extends Component {
  render() {
    return(
      <Container />
    );
  }
}

render(<SnackApp />, document.getElementById('root'));
