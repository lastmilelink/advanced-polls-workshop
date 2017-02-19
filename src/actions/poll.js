import { SET_POLL, CONNECT, ADD_VOTE, GET_POLL } from '../constants/poll';

export const setPoll = (data) => ({
  type: SET_POLL,
  payload: data
});

export const getPoll = (pollId) => ({
  type: GET_POLL,
  pollId
});

export const connect = () => ({
  type: CONNECT
});

export const addVote = (answerId) => ({
  type: ADD_VOTE,
  answerId
});