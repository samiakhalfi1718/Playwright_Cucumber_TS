# Playwright (TS binding) + Cucumber (BDD)

Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format. 
TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.

## Features

1. Awesome report with screenshots, videos & logs
2. Execute tests on multiple environment 
3. Parallel execution
4. Rerun only failed features
5. Retry failed tests on CI
6. Github Actions integrated with downloadable report
7. Page object model

## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm test` to execute the tests