const db = require('../config/db')

const createCustomer = (email, name, phone) => {
   const stmt = db.prepare('insert into customers (email, name, phone) values (?,?,?)')
   stmt.run(email, name, phone)
}

const getAllCustomers = () => {
    return db.prepare('select * from customers').all()
}

const getCustomerByEmail =(email) => {
    return db.prepare('select * from customers where email = ?').get(email)
}

const getCustomerById =(id) => {
    return db.prepare('select * from customers where id = ?').get(id)
}

const updateCustomer = (email, name, phone, id) => {
    return db.prepare('update customers set name = ?, email = ?, phone = ? where id = ?').run(name, email, phone, id)
}

const deleteCustomer = (id) => {
    return db.prepare('delete from customers where id = ?').run(id)
}



module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerByEmail,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
}