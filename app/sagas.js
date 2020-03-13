/* @flow */

import { fork, all } from 'redux-saga/effects';

import HomePageSaga from 'containers/HomePage/saga';

function* rootSaga() {
  yield all([fork(HomePageSaga)]);
}

export default rootSaga;
