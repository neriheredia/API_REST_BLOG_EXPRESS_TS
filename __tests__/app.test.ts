import request from 'supertest'
import { app } from '../src/app'

describe('GET /*', () => {
  test('Should recive a status code 404', async () => {
    const { statusCode } = await request(app).get('/api/v1/oasdoa').send()
    expect(statusCode).toEqual(404)
  })
})
