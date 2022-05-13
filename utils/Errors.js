const ErrorTypes = {
    BAD_REQUEST: { code: 400, name: 'BadRequest' },
    UNAUTHORIZED: { code: 401, name: 'Unauthorized' },
    NOT_FOUND: { code: 404, name: 'NotFound' },
    CONFLICT: { code: 409, name: 'Conflict' },
    INTERNAL_SERVER_ERROR: { code: 500, name: 'InternalServerError' },
    NOT_IMPLEMENTED: { code: 501, name: 'NotImplemented' }
}
  
class APIError extends Error {
    constructor ({ name, code }, message) {
    const fullMessage = `${name} (${code}): ${message}`

        super(fullMessage)
        this.name = name
        this.status = code
        this.message = message
    }
}
  
module.exports = {
    ErrorTypes,
    APIError
}