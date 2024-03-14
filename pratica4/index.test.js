const request = require('supertest');
const app = require('./index');

describe('Testes para API REST', () => {
  it('Deve retornar o status 200 ao fazer uma chamada GET /', async () => {
    const response = await request(app).get('/');
    console.log('Status da chamada GET /:', response.status);
    expect(response.status).toBe(200);
  });

  it('Deve retornar o status 201 ao fazer uma chamada POST /', async () => {
    const response = await request(app).post('/');
    console.log('Status da chamada POST /:', response.status);
    expect(response.status).toBe(201);
  });

  it('Deve retornar o status 200 ao fazer uma chamada PUT /', async () => {
    const response = await request(app).put('/');
    console.log('Status da chamada PUT /:', response.status);
    expect(response.status).toBe(200);
  });

  it('Deve retornar o status 204 ao fazer uma chamada DELETE /', async () => {
    const response = await request(app).delete('/');
    console.log('Status da chamada DELETE /:', response.status);
    expect(response.status).toBe(204);
  });
});
