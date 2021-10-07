const EmailValidator = require('./email-validator')
const validator = require('validator')
const MissinParamError = require('../errors/missing-param-error')

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('should return false if validator returns true', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@mail.com')
    expect(isEmailValid).toBe(false)
  })

  test('should call validator with correct email', () => {
    const sut = makeSut()
    sut.isValid('any_email@mail.com')
    expect(validator.email).toBe('any_email@mail.com')
  })

  test('Should throw if no params are provided', async () => {
    const sut = makeSut()
    expect(() => { sut.isValid() }).toThrow(new MissinParamError('email'))
  })
})
