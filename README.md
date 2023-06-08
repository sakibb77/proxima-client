# Proxima

Proxima is a lightweight and scalable RESTful API built with Node.js and Express. It provides a powerful solution for managing data resources in web and mobile applications, with support for basic CRUD functionality using GET, POST, PATCH, and DELETE methods.


## Features

- **Add Project**: Users can create new projects by providing the necessary details, such as the project name, description, and other relevant information.

- **Delete Project**: This feature enables users to remove projects from the system. Once a project is deleted, all associated data, such as tasks or comments, will also be permanently removed.

- **Update Project**: Users can update project details, such as the project name, description, or any other relevant information. This feature helps keep project information accurate and up to date.

- **Edit Project**: This feature allows users to modify specific attributes of a project, such as the project status, priority, or due date. Users can easily make changes as the project progresses.

- **JWT Authentication**: Proxima utilizes JWT (JSON Web Token) authentication to ensure secure access control. Users can create accounts, log in, and access the system only if they possess valid authentication tokens.

## Tools

Proxima is built using the following tools:

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Installation

To install Proxima, follow these steps:

1. Clone the Proxima repository to your local machine using `git clone https://github.com/sakibb77/proxima-client.git`.
2. Navigate to the project directory using `cd Proxima`.
3. Install dependencies using `npm install`.
4. Create a `.env` file and add your MongoDB connection string. Example: `MONGO_URI=mongodb://localhost/proxima`.
5. Start the server using `npm start`.

## Clone Repo

To clone the Proxima repository, use one of the following links:

- HTTPS: `https://github.com/sakibb77/proxima-client.git`
- SSH: `git@github.com:sakibb77/proxima-client.git`
- GitHub CLI: `gh repo clone sakibb77/proxima-client`

## Links
- [Live Demo](https://proxima-sb.netlify.app/)
- [Frontend Repository](https://github.com/sakibb77/proxima-client.git)
- [Backend Repository](https://github.com/sakibb77/proxima-server.git)
