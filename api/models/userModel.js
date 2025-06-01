const db = require('../config/db')

const createUser = (email, passwordHash) => {
    const stmt = db.prepare('Insert into users (email, password) values (?,?)')
    stmt.run(email, passwordHash)

}

const findUser = (email) => {
    console.log(email)
    const stmt = db.prepare('select * from users where email = ?')
    console.log(stmt)
    return stmt.get(email)
}


module.exports = {createUser, findUser}