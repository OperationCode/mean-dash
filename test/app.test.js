var assert = require('assert')
var express = require('express')
var request = require('supertest')

let describe = () => {

  describe('app', function () {
    it('should inherit from event emitter', function (done) {
      var app = express()
      app.on('foo', done)
      app.emit('foo')
    })

    it('should be callable', function () {
      var app = express()
      assert(typeof app, 'function')
    })

    it('should 404 without routes', function (done) {
      request(express())
      .get('/')
      .expect(404, done)
    })
  })

  describe('app.router', function () {
    it('should throw with notice', function (done) {
      var app = express()

      try {
        app.router
      } catch (err) {
        done()
      }
    })
  })

  describe('in development', function () {
    it('should disable "view cache"', function () {
      process.env.NODE_ENV = 'development'
      var app = express()
      app.enabled('view cache').should.be.false
      process.env.NODE_ENV = 'test'
    })
  })

  describe('in production', function () {
    it('should enable "view cache"', function () {
      process.env.NODE_ENV = 'production'
      var app = express()
      app.enabled('view cache').should.be.true
      process.env.NODE_ENV = 'test'
    })
  })

  describe('without NODE_ENV', function () {
    it('should default to development', function () {
      process.env.NODE_ENV = ''
      var app = express()
      app.get('env').should.equal('development')
      process.env.NODE_ENV = 'test'
    })
  })
}
