function errorHandler(error, req, res, next) {
  let message = {
    status: false,
    statusCode: "FAILED",
    message: "Internal Server Error",
  };
  let code = 500;

  switch (error.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      code = 400;
      message = {
        status: false,
        statusCode: "Bad Request",
        message: error.errors[0].message,
      };
      break;
    case "Not Found":
      code = 404;
      message = {
        status: false,
        statusCode: "Bad Request",
        message: error.errors[0].message,
      };
      break;
    case "NoToken":
    case "JsonWebTokenError":
      code = 401;
      message = {
        status: false,
        statusCode: "Unauthorized",
        message: "Invalid access token",
      };
      break;
      case "TypeError":
        code = 400
        message: {
          message = {
            status: false,
            statusCode: "Bad Request",
            message: "Something went wrong",
          };
        }
    default:
      break;
  }
  res.status(code).json(message);
}

module.exports = errorHandler;
