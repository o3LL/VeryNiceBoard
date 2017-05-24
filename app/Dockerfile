# Set node base image
FROM node

# File Author / Maintainer
MAINTAINER GRAND Léo

# Install globals && build
RUN npm install -g bower polymer-cli && \
    bower install --allow-root && \
    polymer build

# TODO : VOLUMES!
