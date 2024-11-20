# Cookbook (React Web Application)

## Purpose

This cookbook is a simple list of recipes for my mom's family's family cookbook, but I am writing it in a way that (I
hope) is easily reusable. The recipes seen when the application is launched are currently being pulled from a JSON file.
This application is being developed using Vite, Vitest, React and Typescript.

- Dependencies are kept to a relative minimum to minimize impact on the application, and Snyk is used to scan for code
  and dependency vulnerabilities.
- Tests follow TDD/BDD principles where possible. The React components are
  intentionally "[Humble](https://martinfowler.com/bliki/HumbleObject.html)" (They don't
  contain any business logic) to mitigate the need for testing.

## Setup/Run

You will need to have [node.js](https://nodejs.org) and [npm](https://www.npmjs.com) installed.

Then, if you understand them, run the following commands in your terminal:

```bash
-- Clone this repository
git clone https://github.com/nathanblaubach/cookbook.git

-- Run the web application:
cd cookbook/ui
npm install
npm run dev
```

## Contributors

- [Nathan Blaubach](https://github.com/nathanblaubach) - Source Code
- Jeremy Slagle - Logo

## Licenses

- [MIT](https://github.com/nathanblaubach/cookbook/blob/main/LICENSE)
