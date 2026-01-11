# Node.js Express Server

This project is a simple Node.js application using Express. It sets up a server that listens on port 8001 and uses nodemon for automatic code updates.

## Project Structure

```
node-server
├── src
│   └── server.js
├── Dockerfile
├── package.json
├── nodemon.json
└── README.md
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-nutd0qnm.git
   cd Anythink-Market-nutd0qnm/node-server
   ```

2. **Install dependencies**:
   ```
   yarn install
   ```

3. **Run the server**:
   ```
   yarn start
   ```

   The server will start and listen on port 8001.

## Docker

To build and run the Docker container, use the following commands:

1. **Build the Docker image**:
   ```
   docker build -t node-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 node-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.