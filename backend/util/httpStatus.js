module.exports = {
  OK: 200, // Normal
  CREATED: 201, // Create new entity
  ACCEPTED: 202, // Test any thing
  UPDATED: 200, // PUT/PATCH Requests
  DELETED: 200, // DELETE requests
  USE_PROXY: 305, // You may need proxy to access
  BAD_REQUEST: 400, // A bad request
  UNAUTHORIZED: 401, // Unauthorized
  FORBIDDEN: 403, // Forbidden
  NOT_FOUND: 404, // Endpoint not found
  VALIDATION_ERROR: 422, // Un processable Entity
  RESOURCE_ALREADY_EXISTS: 409, // already exists
  REQUEST_TIMEOUT: 408, // Request Timeout
  INTERNAL_SERVER_ERROR: 500, // Server error
};
