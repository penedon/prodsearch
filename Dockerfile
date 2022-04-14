# 1. Dev
FROM node:lts as dev-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# 2. Build
FROM dev-stage as build-stage
RUN npm run build

# 3. Production
FROM nginx:1.15.7-alpine as production-stage
COPY deploy/nginx/default.conf /etc/nginx/conf.d/
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/

# HEROKU
# EXPOSE 80
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'