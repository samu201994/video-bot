/*
 *
 * Home Page Saga
 *
 */

import { put, takeLatest, all, call } from 'redux-saga/effects';
import request from 'utils/request';
import Action, { ActionTypes } from './actions';

const myApi = 'http://localhost:3000/api';

export function* handleLoadPage(action) {
  const { location } = action.payload;

  if (location.pathname === '/') {
    const agentId = '5e6a2b39636235af830fe5ab';
    yield put(Action.fetchAgentVideos(agentId));
  }
}

export function* handleFetchAgentVideos(action) {
  const { agentId } = action.payload;
  const requestURL = `${myApi}/agent/${agentId}/videos`;

  try {
    const response = yield call(request, requestURL);
    yield put(Action.fetchAgentVideosSuccess(response.videos));
  } catch (err) {
    yield put(Action.fetchAgentVideosFailed());
  }
}

function* HomePageSaga() {
  yield all([
    yield takeLatest('@@router/LOCATION_CHANGE', handleLoadPage),
    yield takeLatest(ActionTypes.FETCH_AGENT_VIDEOS, handleFetchAgentVideos),
  ]);
}

export default HomePageSaga;
