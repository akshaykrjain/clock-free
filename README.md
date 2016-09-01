# clock-free
>　 Unix timestamp clock.


## Getting Started
```
npm install clock-free --save 
```

### Usage
```
let clock = new Clock()
 
 console.log('Unix timestampe: ', clock.unixTS())
 console.log('UTC timezoneOffset: ', clock.utcOffset())
 console.log('Year: ', clock.get('year'))
 console.log('Month: ',clock.get('month'))
 console.log('Date: ',clock.get('date'))
 console.log('Hour: ',clock.get('hour'))
 console.log('Minute: ',clock.get('minute'))
 console.log('Second: ',clock.get('second'))
 console.log('Millisecond: ',clock.get('millisecond'))
 
clock.bind('tick', () => {
    // per second trigger   
})
```

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/cswleocsw/clock-free/issues).

## License 

The MIT License

Copyright (c) 2016, cswleocsw

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
