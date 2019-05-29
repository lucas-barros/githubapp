# Github Graphql API react client

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

