#!/usr/bin/env node
var msg = process.argv.length > 2 ? process.argv[2] : 'y';
var buf = msg + '\n'.repeat(4096);

while (1){
  if (!process.stdout.write(buf)) process.exit(0);
}
