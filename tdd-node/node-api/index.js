const http = require('http')
const math = require('./math.js')
const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'utf-8')


const result = math.sum(1, 2)

console.log(result) // 3
console.log(data)
