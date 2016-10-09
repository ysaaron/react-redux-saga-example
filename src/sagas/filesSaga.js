import {
  call,
  fork,
  put,
  take,
  cancel,
  select
} from 'redux-saga/effects';

import * as actions from '../actions';
import * as selectors from '../reducers';
import * as api from '../api';
import * as types from '../constants';

export function* uploadFile(id, file) {
  try {
    yield call(api.uploadFile, file);
    yield put(actions.uploadFileSuccess(id));
  } catch (err) {
    yield put(actions.uploadFileFailed(id, err.message));
  }
}

export function* uploadFileFlow({ id }) {
  const file = yield select(selectors.getFileById, id);
  const task = yield fork(uploadFile, id, file);
  const action = yield take(types.CANCEL_UPLOADING_FILE);
  if(action.id === id) {
    yield cancel(task);
  }
}
