const db = require('../config/db')

const createInteraction = (type, date, note, id ) => {
console.log(type);
console.log(date);
console.log(note);
console.log(id);
   const stmt = db.prepare('insert into interactions (type, date, notes, customer_id ) values (?,?,?,?)')
   console.log('hi')
   stmt.run(type, date, note, id )
}

const getAllInteractions = () => {
    return db.prepare('select * from interactions').all()
}

const getInteractionByEmail =(email) => {
    return db.prepare('select * from interactions where email = ?').get(email)
}

const getInteractionById =(id) => {
    return db.prepare('select * from interactions where id = ?').get(id)
}

const updateInteraction = (type, date, note,customer_id, id ) => {
    return db.prepare('update interactions set type = ?, date = ?, notes = ?, customer_id = ? where id = ?').run(type, date, note,customer_id, id )
}

const deleteInteraction = (id) => {
    return db.prepare('delete from interactions where id = ?').run(id)
}



module.exports = {
    createInteraction,
    getAllInteractions,
    getInteractionByEmail,
    getInteractionById,
    updateInteraction,
    deleteInteraction,
}