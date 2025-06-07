// controllers/opportunityController.js
import {
  createOpportunity,
  getAllOpportunities,
//   getOpportunityByEmail,
  getOpportunityById,
  updateOpportunity,
  deleteOpportunity
} from '../models/opportunityModel.js';

export const newOpportunity = (req, res) => {
  try {
    const { name, status, value, customer_id } = req.body;
    createOpportunity(name, status, value, customer_id);
    res.status(201).json({ message: `Opportunity "${name}" created successfully` });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

export const editOpportunity = (req, res) => {
  try {
    const { name, status, value, customer_id } = req.body;
    const id = req.params.id;
    const opportunity = updateOpportunity(name, status, value, customer_id, id);
    res.status(200).json({
      message: 'Opportunity updated successfully',
      data: opportunity
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

export const allOpportunities = (req, res) => {
  try {
    const data = getAllOpportunities();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const singleOpportunity = (req, res) => {
  try {
    const id = req.params.id;
    const data = getOpportunityById(id);
    if (!data) {
      return res.status(404).json({ error: 'Opportunity not found' });
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

export const searchOpportunity = (req, res) => {
  res.status(501).json({ message: 'Search functionality not implemented yet' });
};

export const deleteOpportunityDetails = (req, res) => {
  try {
    const id = req.params.id;
    const result = deleteOpportunity(id);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Opportunity does not exist' });
    }
    res.json({ message: 'Opportunity deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};
