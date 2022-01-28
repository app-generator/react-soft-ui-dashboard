# [React Soft Dashboard](https://appseed.us/product/node-js-react-soft-dashboard)

Start your Development with an Innovative Admin Template for **Material-UI** and **React**. [Soft UI Dashboard React](https://appseed.us/product/node-js-react-soft-dashboard) is built with over 70 frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. The product comes with a simple JWT authentication flow: login/register/logout. 

<br />

> Features

- Innovative **Material-UI Design** - Creafted by [Creative-Tim](https://bit.ly/3fKQZaL)
- React, Redux, Redux-persist
- Authentication: JWT Login/Register/Logout
- Full-stack ready using **[Node JS API Server](https://github.com/app-generator/api-server-nodejs)** (open-source project)
  - Features: Typescript / SQLite / TypeORM / Joy (validation) / Passport library - `passport-jwt` strategy.

<br />

> Links

- [React Soft Dashboard](https://appseed.us/product/node-js-react-soft-dashboard) - product page
- [React Soft Dashboard](https://node-js-react-soft-dashboard.appseed-srv1.com/authentication/sign-in) - LIVE Demo
- Support via **Github** (issues tracker) and [Discord](https://appseed.us/support) - LIVE Assistance 

<br />

> Tested with:

- NodeJS `v12.22.0` / NPM `6.14.11` / Yarn `1.22.5`
- NodeJS `v14.15.0` / NPM `6.14.8`  / Yarn `1.22.5`
- NodeJS `16.13.0`  / NPM `8.1.0`   / Yarn `1.22.5`

<br />

![React Soft Dashboard - Open-source full-stack product](https://user-images.githubusercontent.com/51070104/136687466-1dfeeb6b-d474-45df-879b-0857b27eb615.gif) 

<br >

> **Note**: This product can be used with other API Servers for a complete full-stack experience. **ALL API servers use a unified interface**

- [Django API Server](https://github.com/app-generator/api-server-django) - open-source product
- [Flask API Server](https://github.com/app-generator/api-server-flask) - open-source product
- [Node JS API Server](https://github.com/app-generator/api-server-nodejs) - open-source product / Typescript / SQLite / TypeORM / Joy for validation
- [Node JS API Server PRO](https://github.com/app-generator/api-server-nodejs-pro) - **commercial product**
    - Typescript / SQLite / TypeORM / Joy Validation / Docker
    - Typescript / MongoDB / Mongoose / Joy Validation / Docker (separate branch, same project)

<br />

## How to use it

To use the product Node JS (>= 12.x) is required and GIT to clone/download the project from the public repository.

**Step #1** - Clone the project

```bash
$ git clone https://github.com/app-generator/react-soft-ui-dashboard.git
$ cd react-soft-ui-dashboard
```

<br >

**Step #2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

**Step #3** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

## Configure the backend server

The product comes with a usable JWT Authentication flow that provides only the basic requests: login/logout/register. 

**API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

**API Server Descriptor** - POSTMAN Collection

The API Server signature is provided by the [Unified API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition)

- [API POSTMAN Collection](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json) - can be used to mock (simulate) the backend server or code a new one in your preferred framework. 

<br />

## Node JS API Server

The product is also open-source and is already configured to work with Berry Dashboard Template - product features:

- Typescript / Node js / Express server
- JWT authentication (`passport-jwt` strategy)
- Persistence: SQLite 

> Links

- [Node JS API](https://github.com/app-generator/api-server-nodejs) - source code
- [Node JS API](https://appseed.us/boilerplate-code/nodejs-starter) - product page

<br />

![Node JS API - Open-source API server built on top of Express Nodejs Framework.](https://user-images.githubusercontent.com/51070104/124934824-c210a700-e00d-11eb-9d01-e05bd8bfb608.png)

<br />

### Compile the API Server

**Step #1** - Clone the project

```bash
$ git clone https://github.com/app-generator/api-server-nodejs.git
$ cd api-server-nodejs
```

**Step #2** - Install dependencies via NPM or Yarn

```bash
$ npm i
// OR
$ yarn
```

**Step #3** - Run the SQLite migration via TypeORM

```
$ yarn typeorm migration:run
```

**Step #4** - Start the API server (development mode)

```bash
$ npm dev
// OR
$ yarn dev
```

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br /> 

---
[React Soft Dashboard](https://appseed.us/product/node-js-react-soft-dashboard) - Provided by AppSeed **[App Generator](https://appseed.us/app-generator)**.
