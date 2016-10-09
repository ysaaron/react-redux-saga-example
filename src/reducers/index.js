import { combineReducers } from 'redux';

import files, * as fromFiles from './files';

export default combineReducers({
  files
})

export function getFiles(state) {
  return fromFiles.getFiles(state.files);
}

export function getFileById(state, id) {
  return fromFiles.getFileById(state.files, id);
}
