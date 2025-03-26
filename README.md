# Dalx-ai

Dalx-ai is a complete real-time chat application built using the MERN stack, enhanced with AI support from Google Gemini. It provides a seamless platform for real-time communication and collaboration, allowing users to build projects and code with their friends.

## Features

- **Real-time Chat**: Smooth and responsive chat experience using socket connections.
- **AI Integration**: Enhanced with Google Gemini for AI-powered features.
- **Microservices Architecture**: Modular design with separate services for user management, project handling, and AI functionalities.
- **Performance Optimization**: Redis integration for caching and storing blacklisted tokens.
- **RabbitMQ**: Message broker for communication between microservices.
- **Frontend**: Built with React and styled using TailwindCSS.
- **Backend**: Node.js with Express.js for API development.
- **Database**: MongoDB for primary data storage and Redis for token management.

## Tech Stack

### Frontend
- React
- TailwindCSS

### Backend
- Node.js
- Express.js
- MongoDB
- Redis
- RabbitMQ
- Google Gemini (AI support)

## Architecture

Dalx-ai follows a microservices architecture with the following components:

1. **Gateway Server**: Acts as the entry point for all requests and routes them to the appropriate microservices.
2. **User Service**: Handles user authentication, registration, and management.
3. **Project Service**: Manages project-related functionalities.
4. **AI Service**: Provides AI-powered features using Google Gemini.
5. **RabbitMQ**: Facilitates communication between the microservices.

## How It Works

1. **Frontend**: The React-based frontend communicates with the Gateway server for all API requests.
2. **Gateway Server**: Routes requests to the respective microservices.
3. **Microservices**:
   - **User Service**: Manages user data and authentication.
   - **Project Service**: Handles project creation, updates, and management.
   - **AI Service**: Integrates AI features into the application.
4. **Redis**: Used for caching and storing blacklisted tokens to track logged-in users.
5. **RabbitMQ**: Ensures smooth communication between microservices.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Redis
- RabbitMQ

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dalx-ai-microservices
   ```

2. Install dependencies for each service:
   ```bash
   cd <service-folder>
   npm install
   ```

3. Start the services:
   ```bash
   npm start
   ```

4. Start the Gateway server:
   ```bash
   cd gateway
   npm start
   ```

5. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
