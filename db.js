const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, 'data.db');
const db = new Database(dbPath);

// Initialize table
db.exec(`
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  author TEXT,
  date TEXT NOT NULL
);
`);

const insertStmt = db.prepare(`INSERT INTO posts (title, slug, content, author, date)
VALUES (@title, @slug, @content, @author, @date)`);

const getAllStmt = db.prepare(`SELECT id, title, slug, content, author, date FROM posts ORDER BY date DESC`);

module.exports = {
  createPost(post){
    const info = insertStmt.run(post);
    return { id: info.lastInsertRowid, ...post };
  },
  getAllPosts(){
    return getAllStmt.all();
  }
};
