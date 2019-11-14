const request = require('supertest')

const server = require('./server')

it('should set db environment to test', function () {
    expect(process.env.DB_ENV).toBe('testing')
})

describe("server", function () {
    describe('GET /', function () {
        it('should return 200 OK', function () {
            return request(server).get('/').then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return json formatted response', function () {
            return request(server).get('/').then(res => {
                expect(res.type).toMatch(/json/i)
            })
        })

        it('should return an api property with the value up inside the body', function () {
            return request(server).get('/').then(res => {
                expect(res.body.api).toBe("up");
                expect(res.body).toEqual({ api: 'up' })
            })
        })
    })
})


// the endpoint returns the correct http status code base on input
// the endpoint returns the right data form (json in our case)
// the endpoint returns the right data in the body based on the input