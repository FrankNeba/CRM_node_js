import db from '../config/db.js'

export const createUser = (email, passwordHash) => {
  const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)')
  stmt.run(email, passwordHash)
}

export const findUser = (email) => {
  console.log(email)
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?')
  console.log(stmt)
  return stmt.get(email)
}
