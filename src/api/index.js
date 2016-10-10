function errorHandler(res) {
  if(!res.ok) {
    return res
            .text()
            .then(text => {
              throw new Error(`${text}`);
            });
  }
  else
    return res.json();
}

export function uploadFile(file) {
  let form = new FormData();
  form.append('file', file);

  return fetch('/uploadFile', {
    header: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'POST',
    body: form
  })
  .then(errorHandler)
}
