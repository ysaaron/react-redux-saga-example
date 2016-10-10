export function errorHandler(res) {
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
