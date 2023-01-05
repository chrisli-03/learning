##### Jest and Enzyme

Both are meant to test react applications.

Jest can test any javascript, Enzyme is meant for react only

Together Jest is used as a test runner, assertion library, and mocking library (executes the tests), Enzyme provides additional testing utilities to interact with elements, it wraps packages such as react testutils, jsdom, cheerio

Enzyme cannot be used independently as it is not a test runner, and does not have its own assertion library, it only provides a collection of apis for unit testing, so it needs a test runner like Jest


