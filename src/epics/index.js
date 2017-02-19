import { Observable } from 'rxjs';
import { ADD_VOTE, CONNECT, API_URL, GET_POLL } from '../constants/poll';
import { setPoll } from '../actions/poll';
import { combineEpics } from 'redux-observable';

const connectSocket = (action$) => (
  action$
    .ofType(CONNECT)
    .switchMap(() => Observable.webSocket('ws://localhost:8080'))
    .map(setPoll)
);

const addVote = (action$) => (
  action$
    .ofType(ADD_VOTE)
    .switchMap(({ answerId }) => {
      return Observable.ajax({
        method: 'POST',
        url: `${API_URL}/poll/vote`
      })
    })
    .map(({ response }) => setPoll(response))
);

const getPoll = (action$) => (
  action$
    .ofType(GET_POLL)
    .switchMap(({ pollId }) =>
      Observable.ajax({
        method: 'GET',
        url: `${API_URL}/poll?pollId=${pollId}`
      })
    )
    .map(({ response }) => setPoll(response))
);

export default combineEpics(connectSocket, addVote, getPoll);
