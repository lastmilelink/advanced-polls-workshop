import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

const connectSocket = (action$) => {
  //TODO: Listen for a connect action and connect to websocket using rxjs
  return Observable.empty();
};

const addVote = (action$) => {
  //TODO: POST request to add a vote on the selected Poll / Answer
  return Observable.empty();
};

const fetchPoll = (action$) => {
  //TODO: Retrieve the poll with ID defined in .env file
  return Observable.empty();
};

export default combineEpics(connectSocket, addVote, fetchPoll);
