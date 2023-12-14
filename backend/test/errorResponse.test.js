const ErrorResponse = require("../utils/errorResponse");

describe("ErrorResponse Class", () => {
  it("should create an instance with the provided message and codeStatus", () => {
    const errorMessage = "Sample error message";
    const statusCode = 404;

    const errorResponse = new ErrorResponse(errorMessage, statusCode);

    expect(errorResponse.message).toBe(errorMessage);
    expect(errorResponse.codeStatus).toBe(statusCode);
  });
});
