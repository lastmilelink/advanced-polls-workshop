import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { connect as connectSocket, addVote, getPoll } from '../actions/poll';

import Container from './Container';
import Title from './Title';
import Chart from './Chart';
import Voting from './Voting';

const POLLID = '1234';

class App extends Component {
  onClick = answerId => {
    // Trigger add vote action
  };

  componentDidMount() {
    // Trigger actions to get the first poll and connect to the websocket endpoint
  }

  render() {
    const { poll } = this.props;

    console.log(poll);

    if (Object.keys(poll).length <= 0) {
      return (
        <Container>
          <Title>
            Loading.....
          </Title>
        </Container>
      );
    }

    return (
      <Container>
        <Title>
          {poll.title}
        </Title>

        <Chart answers={poll.answer}/>

        <Voting
          answers={poll.answer}
          onClick={this.onClick}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  poll: state.poll
});

const mapDispatchToProps = dispatch => ({
  // Map the correct action to dispatch here
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
