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

docker-compseからの作成（develop環境）
``` docker-compose
docker-compose -f docker/dev/docker-compose.yml  up --build
```
``` docker-compose（prduction環境）
docker-compose -f docker/pro/docker-compose.yml  up --build
```


GCPを利用
```
docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:/rootfs/$PWD" \
    -w="/rootfs/$PWD" \
    docker/compose:1.22.0 up --build
```

// babel7の対策
https://qiita.com/oreo3@github/items/b383c57949e0f117cbea

```
npm uninstall --save-dev babel-core babel-preset-env babel-loader webpack @babel/polyfill
npm install --save-dev @babel/core @babel/preset-env babel-loader webpack
npm audit fix
```

# firebase hosting
```
firebase init
firebase deploy
```

# firebase functionsのデプロイ
```
firebase deploy --only functions
```