# livestream-web-app
 
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

## Installation
1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/livestream-web-app.git
   cd livestream-web-app
```
2. **Install server dependencies**:

2.

cd server
npm install
Install client dependencies:

sh
Copy code
cd ../client
npm install
Set up MongoDB: Ensure you have MongoDB installed and running. Create a new database for the project.

Configure environment variables: Create a .env file in the server directory and add the following:

env
Copy code
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Run the server:

sh
Copy code
cd ../server
npm start
Run the client:

sh
Copy code
cd ../client
npm start
Usage
Access the application: Open your browser and navigate to http://localhost:3000.
Register and log in: Create a new account and log in to access the streaming and chat functionalities.
Stream using OBS: Set up OBS with the stream key provided in your account settings to start streaming.
Use the chat: Interact with viewers through the real-time chat feature.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the existing style and includes appropriate tests.

License
This project is licensed under the MIT License. See the LICENSE file for details.
