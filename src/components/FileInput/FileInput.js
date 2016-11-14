import React, { Component, PropTypes } from 'react';

const fileInputStyle = {
  display: 'none'
}

export class FileInput extends Component {
  constructor(props) {
    super(props);
  }

  handleFileChange = e => {
    let files = e.target.files;

    files.length > 0 ? props.onChange(files) : f => f;
  }

  render() {
    return (
      <label className="btn btn-default btn-file">
        <input
          type="file"
          onChange={ e => this.handleFileChange(e) }
          name={ this.props.name }
          multiple={ this.props.multiple }
          style={ fileInputStyle }
        />
        { this.props.children }
      </label>
    )
  }
}

FileInput.defaultProps = {
  onChange: () => {},
  multiple: false,
  name: ''
}
