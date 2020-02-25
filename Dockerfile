FROM node:12.2.0-alpine AS build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . .
RUN npm install --silent
RUN npm install --react-scripts@3.0.1 -g --silent
RUN npm run build

# --------------
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html