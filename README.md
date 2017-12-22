# Eloquent JavaScript
[![Build Status](https://travis-ci.org/aperkaz/eloquent-javascript.svg?branch=master)](https://travis-ci.org/aperkaz/eloquent-javascript)
[![Code Climate](https://codeclimate.com/github/aperkaz/eloquent-javascript/badges/gpa.svg)](https://codeclimate.com/github/aperkaz/eloquent-javascript) <br />

:bird: Exercises for the [Eloquent JavaScript book](http://eloquentjavascript.net/) by Marijn Haverbeke.
Partially based on [offline-js-playground](https://github.com/aperkaz/offline-js-playground).

## Scripts
| Name          | Function        |
| ------------- |:---------------:|
| `clean`       | Clean `/lib`    |
| `test`        | Execute test cases    |
| `test:watch`  | Watch `test`     |
| `lint`        | Lint EsLint errors   |
| `lint:fix`        | Fix EsLint errors   |
| `build`       | Transpile ES6 to ES5  |
| `dockerized`       | Execute inside Docker  |

## Docker
The project can be executed inside Docker, without the need to have NPM or NODE installed locally.
The `npm run dockerized` command will open a sandbox Docker environment. 

## License
MIT © [Alain Perkaz](https://aperkaz.github.io)
