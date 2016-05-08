[![NPM](https://nodei.co/npm/workout-tracker.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/workout-tracker/)

[![Build Status](https://travis-ci.org/khaliqgant/workout-tracker.svg?branch=master)](https://travis-ci.org/khaliqgant/workout-tracker)
[![Supported Nodejs Version](https://img.shields.io/badge/node-%3E%3D0.10-blue.svg)](https://www.npmjs.com/package/workout-tracker)

# Workout Tracker
> A collection of workout schemas. Allows you to track predefined workouts progress.

## Example
* TODO

## Proof Of Concept
* A simple example can be seen in the `index.html`` file and the javascript 
in `scripts/workout.js`
* Start up a simple webserver using `npm run dev` which calls `python -m SimpleHTTPServer 8000`
* The workout that gets loaded in depends on the query string appended to the URL.
For example `localhost:8000/?workout=upper_body_push` will load that schema
and allow you to enter in data and when hitting submit, the JSON dump will be
outputted to the console.

## Development
* Any JSON schema workouts are encouraged via pull requests!
* Add a schema to the schema directory and ensure it is valid by running `make test`
from the root.

## References
* [Check Data Against Registered schema](http://jsonschemalint.com/draft4/#)
* [JSON Schema Reference](http://spacetelescope.github.io/understanding-json-schema)
