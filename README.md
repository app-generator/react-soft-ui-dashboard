# [React Soft Dashboard](https://appseed.us/product/soft-ui-dashboard/api-server-nodejs/react/)

Start your Development with an Innovative Admin Template for **Material-UI** and **React**. [Soft UI Dashboard React](https://appseed.us/product/soft-ui-dashboard/api-server-nodejs/react/) is built with over 70 frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. The product comes with a simple JWT authentication flow: login/register/logout.
The **React** Design is crafted by [Creative-Tim](https://www.creative-tim.com/?AFFILIATE=128200) on top of `MUI` Library.

- 👉 [React Soft Dashboard](https://appseed.us/product/soft-ui-dashboard/api-server-nodejs/react/) - product page
- 👉 [React Soft Dashboard](https://node-js-react-soft-dashboard.appseed-srv1.com/authentication/sign-in) - LIVE Demo

<br />

> 🚀 Built with **[React App Generator](https://appseed.us/generator/react/)**

- ✅ Innovative **[Soft UI Design](https://www.creative-tim.com/product/soft-ui-dashboard-react?AFFILIATE=128200)** from `Creative-Tim`
- ✅ React, Redux, Redux-persist
- ✅ Authentication: `JWT Token`
- 🆕 `OAuth` for **Github**
- 🆕 `Full-stack` ready using servers: 
  - [Nodejs API Server](https://github.com/app-generator/api-server-nodejs): `JWT` Auth, `OAuth` for **Github** 
  - [Django API Server](https://github.com/app-generator/api-server-django): `JWT` Auth, `OAuth` for **Github**
  - [Flask API Server](https://github.com/app-generator/api-server-flask): `JWT` Auth, `OAuth` for **Github**
  
<br />

![React Soft Dashboard - Open-source full-stack product](https://user-images.githubusercontent.com/51070104/176936814-74386559-4e05-43d5-b9a4-8f70ce96a610.png)

<br>

## Tests

> `Compatibility matrix` using Ubuntu `18.04 LTS` as reference.

| NodeJS | NPM | YARN | 
| --- | --- | --- |  
| `v14.0.0` | ✅ | ❌ |
| `v15.0.0` | ✅ | ❌ | 
| `v16.15.0` | ✅ | ✅ | 

<br />

## `Video Presentation`

> This material explains how to **deploy the product LIVE** using the [Drag & Drop Deployer](https://appseed.us/go-live/).

[![React Soft Dashboard, open-source fullstack project - Video Presentation.](https://user-images.githubusercontent.com/51070104/204474288-8f134cfa-3d12-4810-aa36-6dcce666284f.jpg)](https://www.youtube.com/watch?v=YdAKP6ianfQ)

<br />

## ✨ How to use it

To use the product Node JS (>= 12.x) is required and GIT to clone/download the project from the public repository.

> 👉 **Step #1** - Clone the project

```bash
$ git clone https://github.com/app-generator/react-soft-ui-dashboard.git
$ cd react-soft-ui-dashboard
```

<br >

> 👉 **Step #2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

> 👉 **Step 3** - Edit the `.env` using the template `.env.sample`. 

```env

REACT_APP_BACKEND_SERVER='http://localhost:5000/api/'

REACT_APP_GITHUB_OAUTH_CLIENT_ID     = ... # Github OAuth Client
REACT_APP_GITHUB_OAUTH_CLIENT_SECRET = ... # Github OAuth Secret
REACT_APP_GITHUB_OAUTH_REDIRECT_URL  = ... # Github OAuth Callback URL
```

<br />

> 👉 **Step #4** - Start the app using `HTTPS` (used bu AOuth Callback)

```bash
$ export HTTPS=true   # bash
$ set    HTTPS=true   # Windows/CMD
$env:HTTPS = "true"   # Windows/Powershell
```

<br /> 

> 👉 **Step #5** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

## ✨ Configure the backend server

The product comes with a usable JWT Authentication flow that provides only the basic requests: login/logout/register. 

> 👉 **API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

> 👉 **API Server Descriptor** - POSTMAN Collection

The API Server signature is provided by the [Unified API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition)

- [API POSTMAN Collection](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json) - can be used to mock (simulate) the backend server or code a new one in your preferred framework. 

<br />

## ✨ Node JS API Server

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

> 👉 **Step #1** - Clone the project

```bash
$ git clone https://github.com/app-generator/api-server-nodejs.git
$ cd api-server-nodejs
```

> 👉 **Step #2** - Install dependencies via NPM or Yarn

```bash
$ npm i
// OR
$ yarn
```

> 👉 **Step #3** - Run the SQLite migration via TypeORM

```
$ yarn typeorm migration:run
```

> 👉 **Step #4** - Start the API server (development mode)

```bash
$ npm dev
// OR
$ yarn dev
```

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br /> 

---
[React Soft Dashboard](https://appseed.us/product/soft-ui-dashboard/api-server-nodejs/react/) - Provided by **[AppSeed](https://appseed.us/app-generator)**.
