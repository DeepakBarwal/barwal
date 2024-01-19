#!/usr/bin/env node
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const log = console.log
const dim = chalk.dim
const italic = chalk.italic
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse
const githubClr = chalk.hex(`#6cc644`).bold.inverse
const linkedinClr = chalk.hex(`#d580ff`).bold.inverse

welcome({
    title: `Deepak Barwal`,
    tagLine: `Namaste, nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#d580ff`,
    color: `#000000`,
    bold: true,
    clear: true
})

log(`${italic(`A passionate CS Engineer from India.
Interested in FullStack Development and System Design.`)}

${twitterClr(` Twitter `)} ${dim(`https://twitter.com/__aizen_sama`)}
${githubClr(` GitHub `)} ${dim(`https://github.com/DeepakBarwal`)}
${linkedinClr(` LinkedIn `)} ${dim(`https://www.linkedin.com/in/d-barwal`)}
`)