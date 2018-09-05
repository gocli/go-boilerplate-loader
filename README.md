# Go Loader Boilerplate

A boilerplate for creating new [Go Loaders](http://gocli.io/#what-is-loader).

## Usage

```bash
$ npm install --global go
$ go git git@github.com:gocli/go-boilerplate-loader.git path/to/new/loader
```

You'll be asked for a name of the new loader, your name to set the author field and it will ask if you want to setup Coveralls (you'll need to enter [Coveralls repository token](https://coveralls.io/repos/new)).

## Development

When setup is complete you can start developing your Loader.
To do so go to the folder where loader was installed.
Install NPM dependencies and link your Loader so Go can find and use it:

```bash
$ npm link
```

Running `go loader-name` will trigger the function in `lib/loader.js`.
The `loader-name` is the name that you have entered during setup.

Read more about creating loaders on the [gocli.io](http://gocli.io/#creating-loaders).

### Loader Structure

After setup you will have next files in your Loader folder:

```
├── package.json
├── LICENSE - MIT license file
├── README.md - Documentation for a the loader
├── jest.config.js - tests configuration
├── __tests__/ - tests itself
└── lib/ - loader code
    ├── loader.js - this file contains entry point of your loader
    ├── parse-args.js - helper to parse the list of arguments
    └── is-valid-target.js - helper to test the destination folder
```

