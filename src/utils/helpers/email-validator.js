const validator = require('validator')
const MissinParamError = require('../errors/missing-param-error')

module.exports = class EmailValidator {
  isValid (email) {
    if (!email) {
      throw new MissinParamError('email')
    }
    return validator.isEmail(email)
  }
}
