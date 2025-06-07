import db from '../config/db.js'

export const createOpportunity = (name, status, value, customer_id) => {
  const stmt = db.prepare('INSERT INTO opportunities (name, status, value, customer_id) VALUES (?, ?, ?, ?)')
  stmt.run(name, status, value, customer_id)
}

export const getAllOpportunities = () => {
  return db.prepare('SELECT * FROM opportunities').all()
}

// Find opportunities by customer's email (join customers and opportunities)
export const getOpportunitiesByCustomerEmail = (email) => {
  return db.prepare(`
    SELECT o.* FROM opportunities o
    JOIN customers c ON o.customer_id = c.id
    WHERE c.email = ?
  `).all(email)
}

export const getOpportunityById = (id) => {
  return db.prepare('SELECT * FROM opportunities WHERE id = ?').get(id)
}

export const updateOpportunity = (name, status, value, customer_id, id) => {
  return db.prepare('UPDATE opportunities SET name = ?, status = ?, value = ?, customer_id = ? WHERE id = ?')
    .run(name, status, value, customer_id, id)
}

export const deleteOpportunity = (id) => {
  return db.prepare('DELETE FROM opportunities WHERE id = ?').run(id)
}
