# Github Graphql API React client

Project developed for Aceleradev React. It is a react client application that consumes Github GraphQL API to display information about users and repositories.

Check out the [Demo](https://lucas-github-app.herokuapp.com/)!

## Stack
- React
- Create React App
- Apollo Client
- Redux
- React Router
- Styled-components

## Requirements
- Node.js
- Yarn
- Github API token

## Installation
1) Clone this repo

2) Install dependencies
```
yarn install
```
3) Add [enviroment variables](#env)
   
4) Run the app in development mode
```
yarn start
```
5) Access application at http://localhost:3000

## <a id="env"></a>Enviroment variables
Create a .env file in the root of the project and add these variables:
```
REACT_APP_GITHUB_TOKEN
```

## Absolute imports 
Using jsconfig.json
```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

