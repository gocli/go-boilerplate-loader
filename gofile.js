const go = require('go')

const formatPackageName = name => name
  .replace(/[^a-z\d]+/gi, '-')
  .toLowerCase()

const formatVariableName = name => name
  .split('-')
  .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
  .join('')

go.registerCommand('install', async () => {
  console.log('Welcome! To create a new loader answer few questions:')

  const packageName = await go.ask({
    message: 'What this loader will load?',
    filter: input => formatPackageName(input),
    validate: input => formatPackageName(input).replace(/\-/g, '').length === 0
      ? 'Name must consist of latin characters and numbers' : true
  })
  const author = await go.ask('Author name to set to package.json (optional):')
  const coveralls = await go.ask('Enter Coveralls repository token (optional):')
  const variableName = formatVariableName(packageName)

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

  console.log('The Loader boilerplate has been installed!')
  console.log('Start developing your loader by executing these commands:')
  console.log(` $ cd ${__dirname}`)
  console.log(' $ npm install')
  console.log(' $ npm link # make it globally available')
  console.log(` $ go ${packageName} source dist --no-install # example of executing the loader`)
})
