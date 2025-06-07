import db from '../config/db.js'

export const createInteraction = (type, date, note, id) => {
    console.log(type)
    console.log(date)
    console.log(note)
    console.log(id)

    const stmt = db.prepare('INSERT INTO interactions (type, date, notes, customer_id) VALUES (?, ?, ?, ?)')
    console.log('hi')
    stmt.run(type, date, note, id)
}

export const getAllInteractions = () => {
    return db.prepare('SELECT * FROM interactions').all()
}

export const getInteractionByEmail = (email) => {
    return db.prepare('SELECT * FROM interactions WHERE email = ?').get(email)
}

export const getInteractionById = (id) => {
    return db.prepare('SELECT * FROM interactions WHERE id = ?').get(id)
}

export const updateInteraction = (type, date, note, customer_id, id) => {
    return db.prepare(
        'UPDATE interactions SET type = ?, date = ?, notes = ?, customer_id = ? WHERE id = ?'
    ).run(type, date, note, customer_id, id)
}

export const deleteInteraction = (id) => {
    return db.prepare('DELETE FROM interactions WHERE id = ?').run(id)
}
