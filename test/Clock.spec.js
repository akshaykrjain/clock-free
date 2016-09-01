import { expect } from 'chai'
import Clock from '../src/Clock'
import sinon from 'sinon'

describe('Clock', () => {
  let timer, clock, stub

  beforeEach(() => {
    timer = sinon.useFakeTimers()
    clock = new Clock()
    stub = sinon.stub()
  })

  afterEach(() => {
    timer.restore()
  })

  it('should be unixTS', () => {
    expect(clock.unixTS()).to.be.equal(0)
  })

  it('should be utcOffset', () => {
    expect(clock.utcOffset()).to.be.equal(-(new Date().getTimezoneOffset()))
  })

  it('should be start', () => {
    clock.bind('tick', stub)
    expect(clock.utcOffset()).to.be.equal(-(new Date().getTimezoneOffset()))
    expect(clock.unixTS()).to.be.equal(0)
    timer.tick(1000)
    expect(stub.called).to.be.equal(true)
    expect(clock.unixTS()).to.be.equal(1)
    timer.tick(1000)
    expect(clock.unixTS()).to.be.equal(2)
  })

  it('should be stop', () => {
    clock.bind('tick', stub)
    clock.stop()
    timer.tick(1000)
    expect(stub.called).to.be.equal(false)
    expect(clock.unixTS()).to.be.equal(0)
  })
})
