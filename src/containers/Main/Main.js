import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Col,
  Row
} from 'react-bootstrap';

import { FileTable } from '../../components';
import { FileInput } from '../../components';

import { getFiles } from '../../reducers';
import {
  addFile,
  deleteFile,
  cancelUploadingFile,
  retryUploadingFile,
  uploadFile
} from '../../actions';

export class Main extends Component {
  constructor(props) {
    super(props);
  }

  handleAddingFile(files) {
    let id = `${Date.now()}`;
    this.props.addFile(files[0], id);
    this.props.uploadFile(id);
  }

  handleRetryUploadingFile(id) {
    this.props.uploadFile(id);
  }

  render() {
    return (
      <Grid>
        <Row>
          <FileInput onChange={ files => this.handleAddingFile(files) }>
            Select File
          </FileInput>
          <br /><br />
          <FileTable
            files={ this.props.files }
            onFileDelete={ id => this.props.deleteFile(id) }
            onCancelUploadingFile={ id => this.props.cancelUploadingFile(id) }
            onRetryUploadingFile={ id => this.handleRetryUploadingFile(id) }
          />
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  files: getFiles(state)
})

export default connect(
  mapStateToProps,
  {
    addFile,
    deleteFile,
    cancelUploadingFile,
    retryUploadingFile,
    uploadFile
  }
)(Main);
