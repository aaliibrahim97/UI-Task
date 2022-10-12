 #stage 1 
FROM node:alpine as node
RUN mkdir  /app
WORKDIR /app

# copy app files
COPY . .
# install and cache app dependencies 
#RUN npm install --save-dev --unsafe-perm node-sass
RUN apk add --no-cache git
RUN npm config delete registry
RUN npm cache clear --force
RUN npm install --legacy-peer-deps
#RUN npm install
RUN npm install -g @angular/cli
RUN npm run ng build -- --prod --aot --optimization --buildOptimizer --vendor-chunk --delete-output-path --common-chunk
# stage 2 #
FROM nginx:alpine

#copy compiled files to nginx document root
COPY --from=node /app/dist/ng8/ /usr/share/nginx/html

# copy nginx config file
COPY nginx.conf /etc/nginx/nginx.conf
#COPY ./default.conf /etc/nginx/conf.d/default.conf