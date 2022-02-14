const spawnSync = require('child_process').spawnSync

const node = parseInt(process.versions.node)
let nodeOptions = ''
if (node >= 17) {
  nodeOptions = 'NODE_OPTIONS=--openssl-legacy-provider'
}

function execute(command) {
  const result = spawnSync(`${nodeOptions} react-scripts ${command}`, {
    stdio: 'inherit',
    shell: true,
  })
  if (result.status !== 0) {
    process.exit(result.status)
  }
}

for (let i = 0; i < process.argv.length; i++) {
  switch (process.argv[i]) {
    case 'build':
      execute('build')
      break
    case 'start':
      execute('start')
      break
    case 'test':
      execute('test')
      break
  }
}
