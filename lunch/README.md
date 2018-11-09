# lunch

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

Menlo, Monaco, 'Courier New', monospace


### How To Build with Docker

imageの作成
``` docker
docker build -t lunch .
```

コンテナの作成
``` docker
docker run -it -p 8080:8080 --rm --name docker-lunch lunch
```

docker-compseからの作成（dockerディレクトリの作成）
``` docker-compose
docker-compose -f docker/dev/docker-compose.yml  up --build
```
``` docker-compose
docker-compose -f docker/pro/docker-compose.yml  up --build
```