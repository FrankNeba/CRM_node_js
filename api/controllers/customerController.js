// controllers/customerController.js
import {
  createCustomer,
  getAllCustomers,
  getCustomerByEmail,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} from '../models/customerModel.js';

export const newCustomer = (req, res) => {
  try {
    const { email, name, phone } = req.body;
    createCustomer(email, name, phone);
    res.status(201).json({ message: `Customer ${name} created successfully` });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

export const editCustomer = (req, res) => {
  try {
    const { email, name, phone } = req.body;
    const id = req.params.id;
    const customer = updateCustomer(email, name, phone, id);
    return res
      .status(200)
      .json({ message: 'Customer updated successfully', data: customer });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

export const allCustomers = (req, res) => {
  try {
    const data = getAllCustomers();
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const singleCustomer = (req, res) => {
  try {
    const id = req.params.id;
    const data = getCustomerById(id);
    if (!data) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err.message });
  }
};

export const searchCustomer = (req, res) => {
  // Placeholder if needed in future
  res.status(501).json({ message: 'Search not implemented' });
};

export const deleteCustomerDetails = (req, res) => {
  try {
    const id = req.params.id;
    const result = deleteCustomer(id);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Customer does not exist' });
    }
    res.json({ message: 'Customer deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};
