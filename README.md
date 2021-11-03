# The Wall - Backend

> Wall App is an application that allows users to register, login, and write on a wall..

Link to frontend project is below:

* Frontend API NestJS: [Frontend](https://github.com/DiegoCampos1/wall-app-frontend)

For the construction of this app was chosen **[NestJS](http://nestjs.com/)**, **[MongoDB](https://www.mongodb.com/)**, **[mongoose](https://mongoosejs.com/)**, **[nodemailer](https://nodemailer.com/about/)** and **[passportjs](http://www.passportjs.org/packages/passport-jwt/)**.

For the integration tests, chosen **[supertest](https://www.npmjs.com/package/supertest)**.

## Getting Started

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

The project can be built with npm or yarn.

## How to Install

### Frontend (React)

* To download the project, follow the instructions below:

```
1. git clone git@github.com:DiegoCampos1/wall-app-frontend.git
```

* Install the dependencies and start the project:


* Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Running the tests:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

## Environment Variables
```
# mail
MAIL_HOST=[EMAIL SMTP HOST]
MAIL_USER=[Email user for to be used for sending emails]
MAIL_PASSWORD=[Email password]
MAIL_FROM=example@example.com

# jwt
JWT=[Secret used to encrypt data]

#DATABASE
DB_USER=db_user
DB_PASSWORD=78D5PhoFJx1NQSak
DB_NAME=myFirstDatabase

PORT=3001

#DATABASE_TEST
MONGO_TEST_CONNECTION_URI=mongodb://localhost/demo-test

#PRODUCTION OR TEST, choise one:
NODE_ENV=production
#NODE_ENV=test

```
## Keep in Touch

Diego Campos
* [Diego Campos](mailto:diegodiko05@gmail.com)


## Thank you!

Thanks TSL! I really liked to build this App!
