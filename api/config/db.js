const Database = require('better-sqlite3')
const db = new Database('./database.db');
module.exports = db

const createUser = `
create table if not exists users(
id integer primary key autoincrement,
email text unique not null,
password text not null
);
`

const createCustomer = `
create table if not exists customers (
id integer primary key autoincrement,
name text not null,
email unique not null,
phone text not null
);
`

const createInteractions = `
create table if not exists interactions (
id integer primary key autoincrement,
type text not null,
date text not null,
notes text,
customer_id integer not null,
foreign key (customer_id) references customers (id) on delete cascade
);
`

const createOpportunities = `
create table if not exists opportunities (
id integer primary key autoincrement,
name text not null,
status text not null,
value integer,
customer_id integer not null,
foreign key(customer_id) references customers(id) on delete cascade
);
`

// const edit = ` 
// alter table interactions add FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE;

// `
db.exec('PRAGMA foreign_keys = ON;') 
db.exec(createUser)
db.exec(createCustomer)
db.exec(createInteractions)
db.exec(createOpportunities)
// db.exec(edit)

console.log('tables created')