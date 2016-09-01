import Ticker from 'ticker-free'
import EventEmitter from 'events'

function padLeft(str, length) {
  str = `${str}`
  if (str.length >= length)
    return str
  else
    return padLeft(`0${str}`, length)
}

export default class Clock {
  constructor() {
    this.date = new Date()
    this.state = 'stop'
    this.emitter = new EventEmitter()

    this.timezoneOffset = -this.date.getTimezoneOffset()

    this.ticker = new Ticker(1000, () => {
      this.date.setTime(this.date.getTime() + 1000)
      this.emitter.emit('tick')
    })

    this.start()
  }

  unixTS(ts) {
    if (ts) {
      this.date.setTime(ts * 1000)
      return
    }

    return Math.floor(this.date.getTime() / 1000)
  }

  utcOffset(offset) {
    if (offset) {
      this.timezoneOffset = parseInt(offset, 10)
      return
    }
    return this.timezoneOffset
  }

  bind(event, callback) {
    this.emitter.on(event, callback)
  }

  unbind(event, callback) {
    this.emitter.removeListener(event, callback)
  }

  start() {
    if (this.state === 'stop') {
      this.ticker.start()
      this.state = 'start'
    }
  }

  stop() {
    if (this.state === 'start') {
      this.ticker.stop()
      this.state = 'stop'
    }
  }

  get(type) {
    switch(type) {
      case 'year':
        return this.date.getFullYear()
        break
      case 'month':
        return this.date.getMonth() + 1
        break
      case 'date':
        return this.date.getDate()
        break
      case 'hour':
        return this.date.getHours()
        break
      case 'minute':
        return this.date.getMinutes()
        break
      case 'second':
        return this.date.getSeconds()
        break
      case 'millisecond':
        return this.date.getMilliseconds()
        break
      default:
        return this.toString()
    }
  }

  toString() {
    const year = this.date.getFullYear()
    const month = this.date.getMonth() + 1
    const date = this.date.getDate()
    const hours = this.date.getHours()
    const minutes = this.date.getMinutes()
    const seconds = this.date.getSeconds()
    return `${year}-${padLeft(month, 2)}-${padLeft(date, 2)} ${padLeft(hours, 2)}:${padLeft(minutes, 2)}:${padLeft(seconds, 2)}`
  }
}
