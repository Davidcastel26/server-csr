# Casas Sobre Ruedas Server

This is a booking server for an startup where are starting to get guestes floow the intallation instructions in order to be able to run the proyect locally.

## Installation 

use the package manager npm to install.

Dependencies

```
npm i uuidv4 express-validator express dotenv cors axios @prisma/client bcryptjs google-auth-library jsonwebtoken mixpanel swagger-jsdoc swagger-ui-express socket.io
```

Dev dependencies
```
npm i -D @types/cors @types/express @types/node @types/uuid prisma ts-node ts-node-dev typescript @types/bcryptjs @types/express-session @types/swagger-jsdoc @types/swagger-ui-express @types/jsonwebtoken
```

## to run redis
```
redis-server
```
if you need to set a port just run -p + port number

## tsconfig.json
you can run ```npx tsx --init```
or use the fallow config json
```
{
    "compilerOptions": {
        "target": "ES2016",
        "lib":["ES5","ES6","DOM"],
        "module": "CommonJS",
        "moduleResolution": "Node",
        "baseUrl": "src",
        "outDir": "./build",
        "sourceMap": true,
        "noImplicitAny": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true
    },
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules"]
}
```
## set the node version

you will need to create [.nvmrc] file
and declare the version you will use
```
20.8.0
```


## set the .gitignore
in this file should be this filed
```
/node_modules
.env

/build
```

## set starting into package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev src/index.ts",
    "lint": "ts-standard",
    "build": "tsc",
    "start": "node build/index.js"
  },
  ```