#### Remark
Don't remove package-lock.json

1. Install packages

```$ yarn``` or ```$ yarn install```
```$ npm``` or ```$ npm install -f```

2. Create .env file in the root folder and update some variables
```
DB_HOST={your_host}
DB_USER={your_user}
DB_PASSWORD={your_password}
DB_NAME={your_db}
DB_PORT={your_port}
PORT={your_running_port}
NODE_ENV=local
TOKEN_SECRET_KEY=test
```
#### 3 Config orm for you
In file ./ormconfig.js

#### 4 Running
```$ yarn dev``` or ```$ npm run dev```

#### 5 Build Dockerfile
docker build -t fortest_backend:1.0 .  