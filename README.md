# Livestream Web App

Welcome to the Livestream Web App! This README will guide you through understanding, setting up, and running the project efficiently.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The Livestream Web App is a live streaming website, similar to Twitch, built using the MERN stack (MongoDB, Express, React, Node). It features live chat functionality using Socket.IO and integrates with OBS for streaming capabilities. By following this README, you'll be able to set up and run your own streaming website.

## Technologies Used
- **MongoDB**: NoSQL database for storing user and stream data.
- **Express**: Web application framework for managing the server.
- **React**: Library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side programming.
- **Socket.IO**: Library for real-time web applications (live chat).
- **OBS**: Software for video recording and live streaming.
- **Postman**: Tool for testing APIs.

## Features
- **MERN Stack Integration**: Full-stack development with MongoDB, Express, React, and Node.
- **User Authentication**: Secure user login and registration.
- **Live Streaming**: Integration with OBS for real-time video streaming.
- **Live Chat**: Real-time chat functionality with Socket.IO.
- **API Testing**: Ensure the platform's functionality using Postman.

## Livestream Flow
1. **User connects to OBS**: The user sets up OBS (Open Broadcaster Software) to start streaming.
2. **OBS connects to the [RTMP Server](https://www.npmjs.com/package/@types/node-media-server)**: The Real-Time Messaging Protocol (RTMP) server receives the live video stream from OBS. The RTMP server converts this stream into a playback protocol like HTTP Live Streaming (HLS) for viewing.
3. **All streams are connected to RTMP**: Every live stream is managed through the RTMP server.
4. **Server API**: The server API checks which channels are online.
5. **Client requests**: The React client requests the server for the stream of a specific channel using the stream key.


## Installation
1. **Clone the repository**:
```
git clone https://github.com/your-username/livestream-web-app.git
```
2. **Install server & client dependencies**:
```
cd livestream-web-app/server
npm install
```
```
cd livestream-web-app/client
npm install
```

3. Set up MongoDB: Ensure you have MongoDB installed and running. Create a new database for the project.

4. Configure environment variables: Create a .env file in the server directory and add the following:
```
API_PORT=X

MONGO_URI=X

TOKEN_KEY=X
```
5. Run the server & client:
```
cd livestream-web-app/server
npm start
```
```
cd livestream-web-app/client
npm start
```

## Usage
- Access the application: Open your browser and navigate to http://localhost:3000.
- Register and log in: Create a new account and log in to access the streaming and chat functionalities.
- Stream using OBS: Set up OBS with the stream key provided in your account settings to start streaming.
- Use the chat: Interact with viewers through the real-time chat feature.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
