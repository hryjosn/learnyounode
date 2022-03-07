const http = require('http')
const concat = require('concat-stream')
//ES6 solution
async function toGet (url) {
  return new Promise(resolve => {
    http.get(url, res => resolve(res))
  })
}
const list = []
async function doit () {
  for (i = 2; i < process.argv.length; i++) {
    const res = await toGet(process.argv[i])
    res.setEncoding('utf8')
    res.pipe(
      concat(data => {
        list.push(data)
      })
    )
  }
  list.forEach(item => {
    console.log(item)
  })
}
doit()
