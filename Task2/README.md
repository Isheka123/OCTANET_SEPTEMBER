# Todo List Web Application

This is a simple Todo List web application that allows users to create, manage, and view their tasks. The application is divided into two parts: the client-side (React) and the server-side (Node.js with Express).

## Table of Contents

- [Client](#client)
  - [Description](#client-description)
  - [Folder Structure](#client-folder-structure)
  - [How to Run](#client-how-to-run)
- [Server](#server)
  - [Description](#server-description)
  - [Technologies Used](#server-technologies-used)
  - [API Routes](#server-api-routes)
  - [How to Run](#server-how-to-run)
- [License](#license)

## Client

### Client Description

The client-side of this application is built using React. It provides the user interface for interacting with the todo list. Users can view their tasks, add new tasks, and mark tasks as completed.

### Client Folder Structure

- **components**: Contains React components.
  - **Header**: Displays the application header.
  - **TodoForm**: Renders the form for adding new tasks.
  - **Todos**: Displays the list of tasks.
- **App.js**: Main React application.
- **App.css**: CSS styles for the client.

### Client How to Run

1. Clone the repository to your local machine.
2. Navigate to the "client" directory.
3. Install the required dependencies using `npm install`.
4. Run the client application using `npm start`.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for predictable state updates.
- **React-Redux**: Official React bindings for Redux to connect React components to the Redux store.
- **axios**: Promise-based HTTP client for making network requests.
- **redux-thunk**: Middleware for handling asynchronous actions in Redux.
- **react-router-dom**: DOM bindings for React Router to handle client-side routing.
- **Material-UI**: A popular React component library for creating a responsive and visually appealing user interface.

## Server

### Server Description

The server-side of this application is built using Node.js with Express. It provides the API endpoints for managing tasks, including creating, fetching, and updating tasks. It also connects to a MongoDB database to store task data.

### Server Technologies Used

- Express: Web application framework for Node.js.
- MongoDB: NoSQL database used to store task data.

### Server API Routes

- **GET /todos**: Get a list of all tasks.
- **POST /todos**: Create a new task.
- **PATCH /todos/:id**: Update a task (e.g., mark as completed).

### Server How to Run

1. Clone the repository to your local machine.
2. Navigate to the "server" directory.
3. Install the required dependencies using `npm install`.
4. Ensure you have a MongoDB server running.
5. Modify the MongoDB connection settings in "server/database/db.js" if necessary.
6. Run the server using `npm start`.


