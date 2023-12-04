import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Phonebook from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback />
        <Phonebook />
      </div>
    );
  }
}
