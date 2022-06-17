# build
FROM node:18-alpine as build-stage
WORKDIR /frontend
ENV PATH node_modules/.bin:$PATH

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

COPY . .

RUN npm run build


# prod
FROM nginx:latest

COPY --from=build-stage /frontend/build/ /usr/share/nginx/html
COPY --from=build-stage /frontend/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
