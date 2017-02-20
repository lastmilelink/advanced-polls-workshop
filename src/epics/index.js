import { Observable } from 'rxjs';
import { ADD_VOTE, CONNECT, API_URL, GET_POLL, SOCKET_URL } from '../constants/poll';
import { setPoll } from '../actions/poll';
import { combineEpics } from 'redux-observable';

const connectSocket = (action$) => (
  action$
    .ofType(CONNECT)
    .switchMap(() => Observable.webSocket(SOCKET_URL))
    .map(setPoll)
);

const addVote = (action$) => (
  action$
    .ofType(ADD_VOTE)
    .switchMap(({ answerId, pollId }) =>
      Observable.ajax({
        method: 'POST',
        url: `${API_URL}/poll/vote`,
        body: {
          answerId,
          pollId
        },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
    )
    .map(({ response }) => setPoll(response))
);

const getPoll = (action$) => (
  action$
    .ofType(GET_POLL)
    .switchMap(({ pollId }) => {
      return Observable.ajax({
        method: 'GET',
        url: `${API_URL}/poll?pollId=${pollId}`
      });
    }

    )
    .map(({ response }) => setPoll(response))
);

export default combineEpics(connectSocket, addVote, getPoll);
