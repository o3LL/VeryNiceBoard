# SoundboardGenerator

## Description
This is a Polymer interface for soundboard using a Python config generator.

## How to use ?
Move your sounds to _app/sounds/_
Use this commande to generate your config.json on the soundboard
```sh
sudo chmod +x ./generate_soundboard.sh && ./generate_soundboard
```
Then use whatever file server to access _app/index.html_
You can use the nginx config in _nginx/app.conf_

## Docker
WIP : Docker for generating config.json & docker to serve application via nginx

## Why ?
I'm learning Polymer and Python :smile: