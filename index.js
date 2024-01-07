#!/usr/bin/env node
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')

welcome({
    title: pkgJSON.name,
    tagLine: pkgJSON.description,
    description: `Namaste, nice to meet you!`,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
})

console.log(`
Deepak Barwal

A passionate CS Engineer from India.
Interested in FullStack Development and System Design.

🐧 Twitter: https://twitter.com/__aizen_sama
📖 Github: https://github.com/DeepakBarwal
😎 LinkedIn: https://www.linkedin.com/in/d-barwal/

`)