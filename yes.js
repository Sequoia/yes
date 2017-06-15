#!/usr/bin/env node
var msg = process.argv.length > 2 ? process.argv[2] : 'y';
var fs = require('fs')
var stdout = process.stdout.fd

var buf = Buffer.from(msg + '\n')
var len = buf.length
var remaining = len

while (true) {
  try {
    var written = fs.writeSync(stdout, buf, null, remaining)
    remaining -= written
  } catch (err) {
    // catch EAGAIN
    if (err.code !== 'EAGAIN')
      process.exit(1)
  }

  if (remaining === 0) remaining = len
}
