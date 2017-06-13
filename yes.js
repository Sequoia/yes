#!/usr/bin/env node
const buf = 'y\n'.repeat(4096)
while (1){
  if (!process.stdout.write(buf)) process.exit(0);
}
