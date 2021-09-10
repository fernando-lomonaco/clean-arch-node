const { MissingParamError } = require('../../utils/errors')

class AuthCase {
  constructor (loadUserByEmailRepository) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
  }

  async auth (email, password) {
    if (!email) { throw new MissingParamError('email') }
    if (!password) { throw new MissingParamError('email') }

    await this.loadUserByEmailRepository.load(email)
  }
}

describe('Auth Case', () => {
  test('Should throw if no email is provided', async () => {
    const sut = new AuthCase()
    const promise = sut.auth()
    expect(promise).rejects.toThrow(new MissingParamError('email'))
  })

  test('Should throw if no password is provided', async () => {
    const sut = new AuthCase()
    const promise = sut.auth('any_email@mail.com')
    expect(promise).rejects.toThrow(new MissingParamError('password'))
  })

  test('Should call LoadUserByEmailRepository with correct email', async () => {
    class LoadUserByEmailRepository {
      async load (email) {
        this.email = email
      }
    }
    const loadUserByEmailRepository = new LoadUserByEmailRepository()
    const sut = new AuthCase(loadUserByEmailRepository)
    await sut.auth('any_email@mail.com', 'any_password')
    expect(loadUserByEmailRepository.email).toBe('any_email@mail.com')
  })
})
