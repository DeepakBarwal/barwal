#!/usr/bin/env node

process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H')
console.log(`
Deepak Barwal

A passionate CS Engineer from India.
Interested in FullStack Development and System Design.

🐧 Twitter: https://twitter.com/__aizen_sama
📖 Github: https://github.com/DeepakBarwal
😎 LinkedIn: https://www.linkedin.com/in/d-barwal/

`)