# Set nginx base image
FROM nginx

# File Author / Maintainer
MAINTAINER GRAND Léo

# Copy custom configuration file from the current directory
# COPY nginx.conf /etc/nginx/nginx.conf
COPY ./app.conf /etc/nginx/conf.d/default.conf
RUN mkdir /srv/http
COPY ./build /srv/http
