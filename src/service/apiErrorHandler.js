export default (error) => {
  switch (error.response.status) {
    case 409:
      return error.response.data;
    case 422:
      return error.response.data.error;
    default:
      return 'internal server error please try again'
  }
}