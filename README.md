# code-test

Requires [node+npm](https://github.com/nvm-sh/nvm#intro) and [docker](https://www.docker.com/products/docker-desktop) installed.

The full-stack solution in this repo was just demonstrated to a select group of stakeholders and key customers to much acclaim. This includes:
* a modern UI built on idiomatic React and opinionated Redux
* a serverless API that is available to customers, as well as used by the UI

Unbeknownst to them, however, it's vaporware! The API and UI are both leveraging static data sets, and your assignment is to wire these up to the MySQL database.

## setup

### API
- [ ] Copy the `api/.env.example` file to `api/.env`, which has environment-specific configuration and will be ignored by git.
- [ ] Install the API packages and run the unit tests with:
```
cd api/
npm i
npm test
```
- [ ] Start the API with `npm start` and verify it is running at http://localhost:5000/results
- [ ] Run the API integration tests in a separate terminal with `npm run test:int`
- [ ] Note that the API integration tests fail because the API is using "ephemeral" state to store the results, which are randomly regenerated on every request.

### UI
- [ ] Copy the `ui/.env.example` file to `ui/.env`, which has environment-specific configuration and will be ignored by git.
- [ ] Install the UI packages and watch the unit tests with:
```
cd ui/
npm i
npm test
```
- [ ] Press `'a'` to run all unit tests in the terminal.
- [ ] Start the UI in a separate terminal with `npm start` and verify it is running at http://localhost:5001
- [ ] Run the UI acceptance tests in a separate terminal with `npm run test:at`, which opens the [Cypress.io Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner#Overview)

## tasks

Within 3 hours please complete as many as possible of the following tasks, then commit and push your changes to a [**NEW** private github repository](https://github.com/new) (**NOT a fork of the BazuSports/code-test repository, please, since this would be automatically deleted when we revoke your Read access**) and provide access to [BazuSports](https://github.com/BazuSports) for review.

- [ ] In the `api/mysql` directory you'll find a `Dockerfile` that builds a MySQL container and `.sql` files that create a schema and populate it with data.
- [ ] Add the following records to the `api/mysql/seed.sql` script for insertion into the `results` table when the container is created:
```
bib, name, time (hh:mm:ss)
123, john doe, 01:02:03
321, jane doe, 01:01:01
```
- [ ] Start the MySQL database and tail the logs to ensure it starts successfully with:
```
cd api/
docker-compose up --build -d
docker-compose logs -f
```
- [ ] Note the file `api/src/lib/mysql.ts` exports a default function for you that creates and caches a mysql connection using the proper environment variables. This implementation uses [mysql2](https://www.npmjs.com/package/mysql2) but you may use a different package (e.g. [knex](https://www.npmjs.com/package/knex)) if you are unfamiliar with `mysql2`.
- [ ] Implement code in `api/src/services` that queries the MySQL database for unranked results when a GET request is made to http://localhost:5000/results and returns an array of ranked results, sorted by rank, such that the result with the lowest time has the lowest rank.
- [ ] Implement code in `api/src/services` that inserts an unranked result into the MySQL database when a POST request is made to http://localhost:5000/results that includes the unranked result as the request body in JSON format.
- [ ] Modify the API unit and integration tests as necessary and ensure they pass.
- [ ] Implement code in `ui/src/features` that fetches the ranked results from the above API endpoint and renders it to the DOM.
- [ ] Implement code in `ui/src/features` that posts an unranked result to the above API endpoint and, if successful, refreshes the data to show the newly ranked result. 
- [ ] Modify the UI unit and acceptance tests as necessary and ensure they pass.
- [ ] With any time left over, improve the design of the UI results table using any package(s) that you prefer (we use [material-ui](https://material-ui.com/)).
- [ ] Finally, commit and push your changes to a [**NEW** private github repository](https://github.com/new) (**NOT a fork of the BazuSports/code-test repository, please, since this would be automatically deleted when we revoke your Read access**) and provide access to [BazuSports](https://github.com/BazuSports) for review.

## troubleshooting
* if `npm install` fails with something like `ERESOLVE could not resolve` try moving or deleting (create a backup first!) your `~/.npm` directory and/or `~/.npmrc` then re-running the command.
* if you get stuck, please contact us as soon as possible so that we can assist.
