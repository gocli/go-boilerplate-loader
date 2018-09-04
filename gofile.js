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
  const coveralls = await go.confirm('Do you want to use Coveralls?')
    ? await go.ask('Enter Coveralls repository token:') : false

  const context = {
    coveralls,
    packageName: formatPackageName(name),
    variableName: formatVariableName(name)
  }

  await go.processTemplates(context, 'templates/loader', 'ldr')
})
