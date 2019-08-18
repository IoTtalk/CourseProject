# Overview
Two simple Javascript-based games as the final projects for IoT course in NCTU.

Modified by us to connect Iottalk server and let users play it with their own Smartphones.



# PingPong
Users can control two paddles to bat the ball, the one first wins 10 scores wins the game.

There are a small difference to start the game depending on which Iottalk version used. 

Users will need to **install a plugin for CORS-header checking** if they choose to use Iottalk-V2 server.

## How to launch

1. Enable your CORS plugin if you are using Iottalk-V2 server.
2. Build a project on Iottalk server and connect device-models like the image below.
![](https://i.imgur.com/7inj87T.png)
3. Open *PingPongV1/code/index.html*
4. Bind device model with your Smartphone and paddle registered by index.html.
5. Press 2 to start playing.
6. Use your Smartphone to control the left paddle, "P" and "L" to control the right paddle.
7. A [simple demo video](https://drive.google.com/open?id=1YHKfKjzdfWtA-TahD8u31R7XXGNDaO5F) to illustrate how to play.

# Bomberman
We modified this classic game to fit Iottalk control flow, prototype from [here](https://github.com/MattSkala/html5-bombergirl)

# How to launch
1. NodeJS Required
2. Open your terminal, make sure the current path is at BomberMan, then type```npm install -g bower simplehttpserver``` to install bower and simplehttpserver
3. Download bower dependencies ```bower install```
4. Run the http server ```simplehttpserver```
5. Build a project on Iottalk server and connect device-models like the image below. ![](https://i.imgur.com/D36tRD6.png)

6. Launch your browser and go to http://127.0.0.1:8000