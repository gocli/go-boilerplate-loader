# go-loader-<%= packageName %>

[![npm](https://img.shields.io/npm/v/go-loader-<%= packageName %>.svg?style=flat-square)](https://www.npmjs.com/package/go-loader-<%= packageName %>)
[![Travis](https://img.shields.io/travis/gocli/go-loader-<%= packageName %>.svg?style=flat-square)](https://travis-ci.org/gocli/go-loader-<%= packageName %>)
[![Coveralls](https://img.shields.io/coveralls/github/gocli/go-loader-<%= packageName %>.svg?style=flat-square)](https://coveralls.io/github/gocli/go-loader-<%= packageName %>)
[![Vulnerabilities](https://snyk.io/test/github/gocli/go-loader-<%= packageName %>/badge.svg?style=flat-square)](https://snyk.io/test/github/gocli/go-loader-<%= packageName %>)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square)](https://github.com/gocli/go-loader-<%= packageName %>)

[Go](https://www.npmjs.com/package/go) loader for <%= variableName %>

## Usage

```bash
$ npm install --global go go-loader-<%= packageName %>
$ go <%= packageName %>
```

## Options

```bash
$ go <%= packageName %> <source> <destination> [options]
```

- `source` — valid source
- `destination` — folder path to put loaded files (destination folder will be created if it doesn't exist)
- `options`:
  - `--no-install` — do not install boilerplate after loading

## License

MIT

