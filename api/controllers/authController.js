// controllers/authController.js
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { hashPassword, verifyPassword } from '../utils/hash.js';
import { createUser, findUser } from '../models/userModel.js';

dotenv.config();

export const register = async (req, res) => {
  try {
    const { email, password, password1 } = req.body;

    if (password !== password1) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await findUser(email);
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashed = await hashPassword(password);
    await createUser(email, hashed);

    return res.status(201).json({
      message: 'User registered successfully'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUser(email); // 🔧 await was missing

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const valid = await verifyPassword(password, user.password);
    if (!valid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.email },
      process.env.JWT_SECRET
    );

    return res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
};
