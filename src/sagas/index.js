import { takeEvery } from 'redux-saga';

import * as fromFilesSaga from './filesSaga';
import * as types from '../constants';

export function* watchUploadingFileRequest() {
  while (true) {
    yield takeEvery(
      types.UPLOAD_FILE,
      fromFilesSaga.uploadFileFlow
    );
  }
}

export default function* rootSaga() {
  yield [
    watchUploadingFileRequest()
  ]
}
