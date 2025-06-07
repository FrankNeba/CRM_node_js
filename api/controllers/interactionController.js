// controllers/interactionController.js
import {
  createInteraction,
  getAllInteractions,
  getInteractionByEmail,
  getInteractionById,
  updateInteraction,
  deleteInteraction
} from '../models/interactionModel.js';

export const newInteraction = (req, res) => {
  try {
    const { type, date, notes, customer_id } = req.body;
    createInteraction(type, date, notes, customer_id);
    res.status(201).json({ message: `Interaction "${type}" created successfully` });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

export const editInteraction = (req, res) => {
  try {
    const { type, date, notes, customer_id } = req.body;
    const id = req.params.id;
    const interaction = updateInteraction(type, date, notes, customer_id, id);
    res.status(200).json({
      message: 'Interaction updated successfully',
      data: interaction
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

export const allInteractions = (req, res) => {
  try {
    const data = getAllInteractions();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const singleInteraction = (req, res) => {
  try {
    const id = req.params.id;
    const data = getInteractionById(id);
    if (!data) {
      return res.status(404).json({ error: 'Interaction not found' });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err.message });
  }
};

export const searchInteraction = (req, res) => {
  res.status(501).json({ message: 'Search not implemented yet' });
};

export const deleteInteractionDetails = (req, res) => {
  try {
    const id = req.params.id;
    const result = deleteInteraction(id);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Interaction does not exist' });
    }
    res.json({ message: 'Interaction deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};
