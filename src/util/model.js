export function createFileState(id, file, isUploading, isSuccess, msg) {
  return {
    file,
    isUploading,
    isSuccess,
    msg,
    id
  }
}
