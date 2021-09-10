module.exports = class UnathorizedError extends Error {
  constructor (paramName) {
    super('unathorizedError')
    this.name = 'UnathorizedError'
  }
}
