const go = require('go')

const formatPackageName = name => name
  .replace(/[^a-z\d]+/gi, '-')
  .toLowerCase()

const formatVariableName = name => formatPackageName(name)
  .split('-')
  .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
  .join('')

go.registerCommand('install', async () => {
  console.log('Welcome! To create a new loader answer few questions:')

  const name = await go.ask('What this loader will load?')
  const author = await go.ask('What is your name (to fill the Author field')
  const coveralls = await go.confirm('Do you want to use Coveralls?')
    ? await go.ask('Enter Coveralls repository token:') : false
  const packageName = formatPackageName(name)
  const variableName = formatVariableName(name)

  const context = {
    author,
    coveralls,
    packageName,
    variableName
  }

  await go.processTemplates(context, { cwd: 'template/loader' }, './')
  if (coveralls) {
    await go.processTemplates(context, 'template/.coveralls.yml', './.coveralls.yml')
  }

  await go.remove('template')
  await go.remove('node_modules')
  await go.remove('.goconfig.json')
  await go.remove('gofile.js')

  console.log(`The Loader boilerplate is installed to ${__dirname}`)
  console.log('To start developing, go to that folder and run:')
  console.log(' $ npm install')
  console.log(' $ npm link')
  console.log(` $ go ${packageName}`)
})
