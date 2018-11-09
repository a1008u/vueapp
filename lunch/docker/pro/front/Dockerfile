# ビルド環境
FROM node:11.1.0-alpine as build-stage
WORKDIR /appfront
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 本番環境
FROM nginx:1.15.6-alpine as production-stage
COPY --from=build-stage /appfront/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]