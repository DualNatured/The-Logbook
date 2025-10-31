# The Logbook

Simple Blogging Platform

## Backend (local)

This project includes a minimal Express backend using SQLite for development.

To install and run locally:

1. Install dependencies:

```powershell
npm install
```

2. Start the server:

```powershell
npm start
```

The server will serve the static frontend and provide these API endpoints:

- GET /api/posts — returns all posts
- POST /api/posts/new — create a new post (JSON body: { title, slug, content, author })

The SQLite database file `data.db` will be created in the project root. It's ignored by git.

