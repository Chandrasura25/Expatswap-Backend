# Node.js Backend Project

This is a Node.js backend project that serves as the server-side application for FullStack Developer Test. It provides APIs for authentication, user management, and other functionalities required by the client-side application.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**: Clone this repository to your local machine using Git.

   ```bash
   git clone https://github.com/Chandrasura25/Full-Stack-Developer-test-backend
   ```

2. **Install dependencies**: Navigate to the project directory and install the dependencies using npm or yarn.

   ```bash
   cd node-backend
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**: Create a `.env` file in the root directory of the project and add the required environment variables. You can use the provided `.env.example` file as a template.

4. **Start the server**: Run the Node.js server to start the application.

   ```bash
   npm start
   # or
   yarn start
   ```

   By default, the server will start on port 3000. You can configure the port by setting the `PORT` environment variable in the `.env` file.

## Features

- **User Authentication**: Provides endpoints for user authentication using JSON Web Tokens (JWT).
- **User Management**: Allows users to register, login, and view their profile information.
- **API Endpoints**: Defines various API endpoints for interacting with the application.

## Folder Structure


node-backend/
├── controllers/         # Controller functions for handling requests and responses
├── models/              # Data models and schemas
├── routes/              # Route definitions for API endpoints
├── utils/               # Utility functions, middleware, etc.
├── .env.example         # Example environment variables file
├── index.js             # Main entry point of the application
└── package.json         # Dependencies and scripts configuration

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).