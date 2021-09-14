const { MissingParamError } = require('../../utils/errors')

module.exports = class AuthCase {
  constructor (loadUserByEmailRepository, encrypterSpy) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.encrypterSpy = encrypterSpy
  }

  async auth (email, password) {
    if (!email) { throw new MissingParamError('email') }
    if (!password) { throw new MissingParamError('password') }

    const user = await this.loadUserByEmailRepository.load(email)
    if (!user) {
      return null
    }
    this.encrypterSpy.compare(password, user.password)
    return null
  }
}
