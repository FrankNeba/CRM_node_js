// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import { findUser } from '../models/userModel.js';

export const authenticationToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Access denied, user not authenticated' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, userPayload) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });

      const dbUser = await findUser(userPayload.username);
      if (!dbUser || dbUser.id !== userPayload.id) {
        return res.status(403).json({ error: 'Invalid token' });
      }

      req.user = userPayload;
      next();
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
