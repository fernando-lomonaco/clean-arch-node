class AuthCase {
  async auth (email) {
    if (!email) { throw new Error() }
  }
}

describe('Auth Case', () => {
  test('Should throw if no email is provided', async () => {
    const sut = new AuthCase()
    const promise = sut.auth()
    expect(promise).rejects.toThrow()
  })
})
