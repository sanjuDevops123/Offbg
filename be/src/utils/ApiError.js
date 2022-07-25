const httpStatus = require('http-status');

class ExtendableError extends Error {
    constructor(status, message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        Error.captureStackTrace(this, this.constructor.name);
    }
}

class APIError extends ExtendableError {
    constructor(status = httpStatus.INTERNAL_SERVER_ERROR, message) {
        super(status, message);
    }
}


module.exports = APIError;