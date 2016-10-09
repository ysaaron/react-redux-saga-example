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
  .then(res => res.json())
}
