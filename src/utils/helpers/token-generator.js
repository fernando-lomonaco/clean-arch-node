class TokenGenerator {
  async generate () {
    return null
  }
}

describe('Token Generator', () => {
  test('Should retunr null if JT returns null', async () => {
    const sut = new TokenGenerator()
    const token = await sut.generate('any_id')
    expect(token).toBeNull()
  })
})
