import { Observable } from 'rxjs';
import { SET_POLL, ADD_VOTE, CONNECT, API_URL } from '../constants/poll';

const setPoll = (data) => ({
  type: SET_POLL,
  payload: data
});

const connectSocket = (action$) => (
  action$
    .ofType(CONNECT)
    .switchMap(() => {
      return Observable.webSocket({
        url: 'http://api.alexrieux.fr',
        resultSelector: (msg) => msg.data
      })
    })
    .map(setPoll)
)

const addVote = (action$) => (
  action$
    .ofType(ADD_VOTE)
    .switchMap(({ answerId }) => {
      return Observable.ajax({
        method: 'POST',
        url: `${API_URL}/poll/vote`
      })
    })
    .map(setPoll)
)

export default connectSocket;
