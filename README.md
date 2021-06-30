# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
## Fastify VS Express platforms table

For change platform write next to USE_FASTIFY .env file:
    -fastify: USE_FASTIFY=true
    -express: USE_FASTIFY=false (or smth other to true)
Restart server when change USE_FASTIFY string at .env
Root folder have artillery.yml config-file for sure that these test are correct

## Fastify                                  |  Express
```
Report @ 22:19:58(+0300) 2021-06-30         |  Report @ 22:12:22(+0300) 2021-06-30
Elapsed time: 10 seconds                    |  Elapsed time: 10 seconds
  Scenarios launched:  9                    |  Scenarios launched:  9
  Scenarios completed: 9                    |  Scenarios completed:  9
  Requests completed:  18                   |  Requests completed:  18
  Mean response/sec: 2                      |  Mean response/sec: 2
  Response time (msec):                     |  Response time (msec):
    min: 1                                  |    min: 4
    max: 132                                |    max: 106
    median: 31.5                            |    median: 33
    p95: 104                                |    p95: 93.2
    p99: 132                                |    p99: 106
  Codes:                                    |  Codes:
    200: 18                                 |    200: 18

Report @ 22:19:59(+0300) 2021-06-30         | Report @ 22:12:22(+0300) 2021-06-30
Elapsed time: 10 seconds                    | Elapsed time: 10 seconds
  Scenarios launched:  1                    | Scenarios launched:  1
  Scenarios completed: 1                    | Scenarios completed: 1
  Requests completed:  2                    | Requests completed:  2
  Mean response/sec: 3.92                   | Mean response/sec: 4.08
  Response time (msec):                     | Response time (msec):
    min: 2                                  |   min: 4
    max: 59                                 |   max: 60
    median: 30.5                            |   median: 32
    p95: 59                                 |   p95: 60
    p99: 59                                 |   p99: 60
  Codes:                                    | Codes:
    200: 2                                  |   200: 2

All virtual users finished                  | All virtual users finished
Summary report @ 22:19:59(+0300) 2021-06-30 | Summary report @ 22:12:22(+0300) 2021-06-30
  Scenarios launched:  10                   | Scenarios launched:  10
  Scenarios completed: 10                   | Scenarios completed: 10
  Requests completed:  20                   | Requests completed:  20
  Mean response/sec: 2.1                    | Mean response/sec: 1.05
  Response time (msec):                     | Response time (msec):
    min: 1                                  |   min: 4
    max: 132                                |   max: 106
    median: 31.5                            |   median: 33
    p95: 97                                 |   p95: 90
    p99: 132                                |   p99: 106
  Scenario counts:                          | Scenario counts:
    0: 10 (100%)                            |   0: 10 (100%)
  Codes:                                    | Codes:
    200: 20                                 |   200: 20
```
## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Start with Docker or VS-Code
Check that postgres-db is clear!!!
#Change POSTGRES_HOST at .env file:
### - to `host.docker.internal` if you want to check with vs-code
### - to `localhost` if you want to check with Docker app
```
docker compose up
```
## Generate migration
Check that db is clear!
```
npm run db:generate new
```
![image](https://user-images.githubusercontent.com/70108983/122685353-77bcb700-d213-11eb-80fd-3a7a62faf59f.png)

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
