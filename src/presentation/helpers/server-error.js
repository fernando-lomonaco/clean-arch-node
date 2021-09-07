module.exports = class ServerdError extends Error {
  constructor (paramName) {
    super('Internal error')
    this.name = 'ServerdError'
  }
}
