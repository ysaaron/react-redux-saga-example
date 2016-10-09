import React, { Component, PropTypes } from 'react';

const fileInputStyle = {
  display: 'none'
}

export const FileInput = (props) => {
  const handleFileChange = e => {
    let files = e.target.files;

    files.length > 0 ? props.onChange(files) : f => f;
  }

  return (
    <label className="btn btn-default btn-file">
      <input
        type="file"
        onChange={ e => handleFileChange(e) }
        name={ props.name }
        multiple={ props.multiple }
        style={ fileInputStyle }
      />
      { props.children }
    </label>
  );
}

FileInput.propTypes = {

}

FileInput.defaultProps = {
  onChange: (e) => {},
  multiple: false,
  name: ''
}
