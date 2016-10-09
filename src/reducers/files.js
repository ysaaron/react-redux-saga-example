import {
  fromJS,
  Map
} from 'immutable';
import { combineReducers } from 'redux';

import * as types from '../constants';
import * as model from '../util/model';

function filesByRandomId(state = Map(), action) {
  switch (action.type) {
    case types.ADD_FILE:

      return state.set(
        action.newFileInfo.id,
        fromJS(action.newFileInfo)
      );

      break;
    case types.UPLOAD_FILE:

      return state.mergeIn(
        [action.id], {
          isSuccess: false,
          isUploading: true,
          msg: ''
        }
      );

      break;
    case types.UPLOAD_SUCCESS:

      return state.mergeIn(
         [action.id], {
           isSuccess: true,
           isUploading: false,
           msg: ''
         }
      );

        break;
    case types.UPLOAD_FAILED:

      return state.mergeIn(
        [action.id], {
          isSuceess: false,
          isUploading: false,
          msg: action.msg
        }
      );

      break;
    case types.DELETE_FILE:
    case types.CANCEL_UPLOADING_FILE:

      return state.delete(action.id);

      break;
    default:
      return state;
  }
}

export default combineReducers({
  filesByRandomId
})

export function getFiles(state) {
  return state.filesByRandomId.toList();
}

export function getFileById(state, id) {
  return state.filesByRandomId.getIn([id, 'file']);
}
