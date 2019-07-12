const request = require('supertest');
const server = require('./server');

describe('Server', () => {
  describe('GET / root endpoint', () => {
    it('should be running in test environment', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });

    it('should res with status code of 200', () => {
      return request(server)
        .get('/')
        .expect(200);
    });

    it('should res with "games" message', () => {
      return request(server)
        .get('/')
        .expect(/game/i);
    });
  });
});
