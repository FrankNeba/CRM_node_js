// db/initDb.js or db/index.js (use a suitable filename)

import Database from 'better-sqlite3';

const db = new Database('./database.db');

const createUser = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
`;

const createCustomer = `
CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT NOT NULL
);
`;

const createInteractions = `
CREATE TABLE IF NOT EXISTS interactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT NOT NULL,
  date TEXT NOT NULL,
  notes TEXT,
  customer_id INTEGER NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE
);
`;

const createOpportunities = `
CREATE TABLE IF NOT EXISTS opportunities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  status TEXT NOT NULL,
  value INTEGER,
  customer_id INTEGER NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE
);
`;

db.exec('PRAGMA foreign_keys = ON;');
db.exec(createUser);
db.exec(createCustomer);
db.exec(createInteractions);
db.exec(createOpportunities);

// You can keep or remove this depending on usage
console.log('Tables created');

export default db;
