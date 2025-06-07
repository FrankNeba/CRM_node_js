import db from '../config/db.js'

export const createCustomer = (email, name, phone) => {
   const stmt = db.prepare('INSERT INTO customers (email, name, phone) VALUES (?, ?, ?)');
   stmt.run(email, name, phone);
};

export const getAllCustomers = () => {
   return db.prepare('SELECT * FROM customers').all();
};

export const getCustomerByEmail = (email) => {
   return db.prepare('SELECT * FROM customers WHERE email = ?').get(email);
};

export const getCustomerById = (id) => {
   return db.prepare('SELECT * FROM customers WHERE id = ?').get(id);
};

export const updateCustomer = (email, name, phone, id) => {
   return db.prepare('UPDATE customers SET name = ?, email = ?, phone = ? WHERE id = ?').run(name, email, phone, id);
};

export const deleteCustomer = (id) => {
   return db.prepare('DELETE FROM customers WHERE id = ?').run(id);
};
