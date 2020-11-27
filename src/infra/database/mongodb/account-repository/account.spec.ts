import { AccountMongoRepository } from './account'
import { MongoHelper } from './helpers/mongo-helper'

describe('Account Mongo Respository', () => {
  beforeAll(async () => {
    const treta = await MongoHelper.connect(process.env.MONGO_URL)
    console.log(treta)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('should return account on success', async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: 'some-name',
      email: 'some-email@mail.com',
      password: 'some-password'
    })

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('some-name')
    expect(account.email).toBe('some-email@mail.com')
    expect(account.password).toBe('some-password')
  })
})
