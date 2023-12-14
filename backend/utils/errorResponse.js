// Custom Error class for handling error responses with specific status codes
class ErrorResponse extends Error {
  // Constructor for the ErrorResponse class
  constructor(message, codeStatus) {
    // Calling the constructor of the parent class (Error)
    super(message);

    // Storing the provided status code in the class instance
    this.codeStatus = codeStatus;
  }
}

// Exporting the ErrorResponse class to be used in other parts of the application
module.exports = ErrorResponse;
