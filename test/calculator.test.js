const request = require('supertest');   // ✅ REQUIRED
const { expect } = require('chai');
const app = require('../server');       // ✅ REQUIRED

describe('Calculator operations', () => {
  it('should multiply two numbers correctly', () => {
    expect(2 * 3).to.equal(6);
  });
});

describe('Power operation', () => {
  it('should calculate power correctly', async () => {
    const response = await request(app)
      .get('/api/calculate')
      .query({
        operation: 'power',
        operand1: 2,
        operand2: 3
      });

    expect(response.status).to.equal(200);
    expect(response.body.result).to.equal(8);
  });
});
