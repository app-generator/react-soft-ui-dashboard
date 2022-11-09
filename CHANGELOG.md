# Change Log

## [v2.0.8] 2022-11-09
### Improvements

- Fixes for LIVE deployment on RENDER

## [v2.0.7] 2022-11-08
### Improvements

- Save Compat matrix in `package.json`
  - `build` node
  - Yarn, NPM
  - NodeJS versions

## [2.0.6] 2022-11-05
### Improvements

- Added `env.sample`
- `API_URL` can be specified in `env` (optional)
  - data used in `src/config.js`  
- Added `compatibility matrix` for Node, yarn & NPM
  - Testing tool: [Render API Wrapper](https://github.com/app-generator/deploy-automation-render)

## [2.0.5] 2021-11-16
### Improvements

- Added Docker Support
- Fixes:
  - Logout over Flask API Server

## [2.0.4] 2021-10-11
### Improvements

- Patch #5 (enhancement) - Logout Link - Move from top-left menu to sidebar
- Update Links (different sections)

## [2.0.3] 2021-10-09
### Improvements

- Added Usable JWT Authentication Flow
  - Login/Logout/Register
- Added `Docker` target in `package.json`
  - `yarn docker`

## [2.0.2] 2021-10-08
### Improvements

- Added Docker Support

## [2.0.1] 2021-10-08
### Fixes:

- #1 - Compilation Error (Windows Env): Delete 'cr' [prettier/prettier]
- #2 - Compilation Error (Windows Env): 'React' must be in scope when using JSX

## [2.0.0] 2021-10-08
### Initial Import

- Soft UI Dashboard React: v2.0.0
- Migration from Material-UI v4 to Material-UI v5.
- Customizing Autocomplete component based on the Soft Design.
- Customizing the TextField component based on the Soft Design.
