import * as types from '../constants';
import * as model from '../util/model';

export function addFile(file, id) {
  let newFileInfo = model.createFileState(id, file, true, false, '');

  return {
    type: types.ADD_FILE,
    newFileInfo
  }
}

export function uploadFile(id) {
  return {
    type: types.UPLOAD_FILE,
    id
  }
}

export function uploadFileSuccess(id) {
  return {
    type: types.UPLOAD_SUCCESS,
    id
  }
}

export function uploadFileFailed(id, msg) {
  return {
    type: types.UPLOAD_FAILED,
    id,
    msg
  }
}

export function cancelUploadingFile(id) {
  return {
    type: types.CANCEL_UPLOADING_FILE,
    id
  }
}

export function deleteFile(id) {
  return {
    type: types.DELETE_FILE,
    id
  }
}
