const asycnHandler = (requestHandler) => {
  return (request, response, next) => {
    Promise.resolve(requestHandler(request, response, next)).catch((err) =>
      next(err),
    );
  };
};
export default asycnHandler;
