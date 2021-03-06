#!/bin/bash

##set -o pipefail
##set -e

# Run a background HTTP server to serve our JavaScript and test against.
##./node_modules/.bin/http-server . -p 8081 &
##TEST_SERVER_PID=$!

# Run our tests.
./node_modules/.bin/cypress run #--spec 'cypress/integration/public/Footer/events_spec.js'

# Kill our backgrounded server (http-server expects a Ctrl+C, aka SIGINT)
##kill -SIGINT $TEST_SERVER_PID
