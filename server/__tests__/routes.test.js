const routes = require('../routes/routes');
const express = require('express');
const request = require('supertest');
const obj = require('../__mocks__/controllers');
jest.mock('../controllers');

const initRoutes = () => {
  const app = express();
  app.use(routes);
  return app;
};

describe('GET /reviews', () => {
  it('should fetch for /rooms/* EP', () => {
    // test URL
    const url = '/rooms/1124';
    const app = initRoutes();
    // expect(200).toBe(200);
    return request(app)
      .get(url)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  it('should fetch reviews by ID', () => {
    const url = '/api/reviews/1124/1';
    const app = initRoutes();
    return request(app)
      .get(url)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviewCount).toBe(202);
        expect(response.body.reviews[0].id).toBe(78753);
      });
  });

  it('should return a 404 if an error occurs with the normal review EP', () => {
    const url = '/api/reviews/10000/1';
    const app = initRoutes();
    return request(app)
      .get(url)
      .then(response => {
        expect(response.statusCode).toBe(404);
      });
  });

  it('should fetch reviews by search term', () => {
    const url = '/api/reviews/1124/1/animi';
    const app = initRoutes();
    return request(app)
      .get(url)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.searchReviewCount).toBe(12);
        expect(response.body.reviews[0].id).toBe(79543);
      });
  });

  it('should return a 404 if an error occurs with the normal review EP', () => {
    const url = '/api/reviews/1124/1/notindb';
    const app = initRoutes();
    return request(app)
      .get(url)
      .then(response => {
        expect(response.statusCode).toBe(404);
      });
  });
});
