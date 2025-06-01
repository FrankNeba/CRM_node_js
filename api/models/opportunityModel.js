const db = require('../config/db')

const createOpportunity = (name, status,value, id ) => {
   const stmt = db.prepare('insert into Opportunities (name, status,value, customer_id ) values (?,?,?,?)')
   console.log('hi')
   stmt.run(name, status,value, id  )
}

const getAllOpportunities = () => {
    return db.prepare('select * from Opportunities').all()
}

const getOpportunityByEmail =(email) => {
    return db.prepare('select * from Opportunities where email = ?').get(email)
}

const getOpportunityById =(id) => {
    return db.prepare('select * from Opportunities where id = ?').get(id)
}

const updateOpportunity = (name, status,value,customer_id, id ) => {
    return db.prepare('update Opportunities set name = ?, status = ?, value = ?, customer_id = ? where id = ?').run(name, status,value,customer_id, id )
}

const deleteOpportunity = (id) => {
    return db.prepare('delete from Opportunities where id = ?').run(id)
}



module.exports = {
    createOpportunity,
    getAllOpportunities,
    getOpportunityByEmail,
    getOpportunityById,
    updateOpportunity,
    deleteOpportunity,
}