import React, { Component, PropTypes } from 'react';
import {
  Table,
  Button
} from 'react-bootstrap';
import {
  listOf,
  contains
} from 'react-immutable-proptypes';

import style from './file-table.scss';

export const FileTable = (props) => {
  return (
    <Table
      striped
      bordered
      condensed
    >
      <thead>
        <tr>
          <th>#id</th>
          <th>File Name</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {
          props.files.size > 0 ?
          props.files.map((fileInfo, index) => (
            <tr key={ index }>
              <td>{ index }</td>
              <td>
                { fileInfo.get('file').name }
                {
                  fileInfo.get('isUploading') ?
                  <i className={ `fa fa-spinner fa-spin fa-3x fa-fw ${style.fontMedium}` } /> :
                  null
                }
                {
                  !fileInfo.get('isUploading') && fileInfo.get('isSuccess') ?
                  <i className={ `fa fa-check ${style.fontMedium} ${style.uploadSuccess}` } /> :
                  (
                    !!fileInfo.get('msg') ?
                    <i className={ `fa fa-times ${style.errorMsg}` } /> :
                    null
                  )
                }
                {
                  !!fileInfo.get('msg') ?
                  <span className={ style.errorMsg }>{ fileInfo.get('msg') }</span> :
                  null
                }
              </td>
              <td>
                {
                  fileInfo.get('isUploading') ?
                  <Button
                    bsSize="small"
                    onClick={ e => props.onCancelUploadingFile(fileInfo.get('id')) }
                  >
                    <i className="fa fa-stop" />
                  </Button> :
                  null
                }
                {
                  fileInfo.get('isSuccess') ?
                  <Button
                    bsSize="small"
                    onClick={ e => props.onFileDelete(fileInfo.get('id')) }
                  >
                    <i className="fa fa-trash" />
                  </Button> :
                  null
                }
                {
                  !!fileInfo.get('msg') ?
                  <Button
                    bsSize="small"
                    onClick={ e => props.onRetryUploadingFile(fileInfo.get('id')) }
                  >
                    <i className="fa fa-refresh" />
                  </Button> :
                  null
                }
              </td>
            </tr>
          )) :
          (
            <tr>
              <td
                colSpan={ 3 }
                className={ style.textCenter }
              >
                No Data Display
              </td>
            </tr>
          )
        }
      </tbody>
    </Table>
  )
}

FileTable.propTypes = {
  onCancelUploadingFile: PropTypes.func,
  onFileDelete: PropTypes.func,
  onRetryUploadingFile: PropTypes.func
}

FileTable.defaultProps = {
  onCancelUploadingFile: e => {},
  onFileDelete: e => {},
  onRetryUploadingFile: e => {}
}
