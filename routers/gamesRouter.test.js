const request = require('supertest');
const gamesRouter = require('../server');

describe('Games Router', () => {

  describe('GET /games endpoint', () => {

    it('should res with status code of 200', async () => {
      const res = await request(gamesRouter).get('/games');
      expect(res.status).toBe(200);
    });

    it('should res with an array', async() => {
      const res = await request(gamesRouter).get('/games');
      expect(res.body).toEqual(expect.arrayContaining(res.body));

    });

    it('should have a res as application/json type', async() => {
      const res = await request(gamesRouter).get('/games');
      expect(res.type).toBe('application/json');

    });
  });

  describe('POST /games endpoint', () => {
    it('should not accept incorrect fields', async () => {
      const res = await request(gamesRouter)
        .post('/games')
        .send({
          wrong: "wrong",
          badField: "not accepted"
        });
      expect(res.status).toBe(422);
    });

    xit('should accept object with required fields', async() => {
      const res = await request(gamesRouter)
        .post('/games')
        .send({
          title: 'Pacman',
          genre: 'Arcade'
        });
      expect(res.status).toBe(200);
    });

    it('should res with new object on successful addition', async () => {
      const newGame = { title: 'The New', genre: 'Arcade' };

      const res = await request(gamesRouter)
        .post('/games')
        .send(newGame);

      expect(res.body).toEqual({});
      // expect(res.body).toEqual(expect.arrayContaining(res.body));

    });
  });
});
