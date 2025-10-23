# Simple Task Manager (Full-Stack CRUD Application)

A beginner-to-intermediate full-stack web application designed to demonstrate fundamental **CRUD (Create, Read, Update, Delete)** operations. This project successfully connects a modern React/Next.js frontend with an Express.js RESTful API and a SQL database.

## 🚀 Key Features

- **Task Management:** Users can add, view, mark as complete, and delete tasks.
- **Full-Stack Connection:** Demonstrates professional setup using Next.js proxying to resolve CORS issues.
- **RESTful API:** Implements all core CRUD routes (`GET`, `POST`, `PUT`, `DELETE`).
- **Database Schema:** Uses Knex migrations to define a simple `tasks` table schema.
- **Responsive Design:** Styled using Bootstrap for a clean, mobile-friendly interface.

## ⚙️ Tech Stack

| Area         | Technology                        | Purpose                                                                        |
| :----------- | :-------------------------------- | :----------------------------------------------------------------------------- |
| **Frontend** | **React**                         | Component-based UI development.                                                |
|              | **Next.js**                       | React framework for routing and server capabilities (proxying).                |
|              | **Bootstrap** / `react-bootstrap` | CSS framework for styling and components.                                      |
| **Backend**  | **Express.js**                    | Minimalist Node.js framework for the RESTful API.                              |
|              | **JavaScript (JS)**               | Primary language for both frontend and backend logic.                          |
| **Database** | **SQL (SQLite)**                  | Lightweight, file-based database for persistence.                              |
|              | **Knex.js**                       | SQL Query Builder for safe, programmatic database interactions and migrations. |

## 💻 Getting Started

### Prerequisites

You must have **Node.js** (which includes npm) and a **Git** client installed on your system.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/navil-noor/simple-fs-tm.git
    cd simple-fs-tm
    ```

2.  **Initialize Client (Frontend):**

    ```bash
    cd client
    npm install
    ```

3.  **Initialize Server (Backend):**

    ```bash
    cd ../server
    npm install
    ```

4.  **Set Up Database:**
    The database file (`dev.sqlite3`) and the `tasks` table are created by running the database migration:
    ```bash
    # Run this inside the /server directory
    npx knex migrate:latest
    ```

### Running the Application

This application requires two separate terminal processes: one for the server and one for the client.

1.  **Start the Backend API (with live reload):**

    ```bash
    # Run this inside the /server directory
    npm run start-dev
    # Server runs on http://localhost:5000
    ```

2.  **Start the Frontend Client:**
    ```bash
    # Run this inside the /client directory
    npm run dev
    # Client runs on http://localhost:3000
    ```

Open your browser to **`http://localhost:3000`** to interact with the application.

## 🔑 Learning Objectives Achieved

This project served as the foundation for mastering the full-stack MERN-adjacent stack by focusing on:

- Establishing a reliable full-stack connection via Next.js `rewrites` (proxy).
- Implementing complete **CRUD logic** on the server using Express and Knex.
- Handling asynchronous API calls and state management in React using `useState` and `useEffect`.
