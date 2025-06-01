const {
        createOpportunity,
        getAllOpportunities,
        getOpportunityByEmail,
        getOpportunityById,
        updateOpportunity,
        deleteOpportunity,
    } = require('../models/opportunityModel')


const newOpportunity = (req, res) => {
    try{
        console.log('hello')
        const {name, status, value, customer_id} = req.body
        console.log('hello1')
        createOpportunity(name, status, value, customer_id)
        res.status(201).json({message: `Opportunity ${name} created successfully`})
    }
    catch(err){
        console.log(err)
        res.status(400).json({error: err.message})
    }
    
    
}

const editOpportunity = (req, res) => {
    try{
        const {name, status, value, customer_id} = req.body
        const id = req.params.id
        const Opportunity = updateOpportunity(name, status, value, customer_id, id)
        return res.status(201).json({message:'Opportunity updated successflly', data: Opportunity})
    } 
    catch(err){
        console.log(err)
        res.status(400).json({err:err.message})
    }
}

const allOpportunitys = (req,res) => {
    const data = getAllOpportunities()
    return res.status(200).json( data)
}

const singleOpportunity = (req, res) => {
    try {
        const id = req.params.id
        const data = getOpportunityById(id)
        if (!data) {
            return res.status(404).json({error: 'opportunity not found'})
        }
        return res.status(200).json( data)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error: err.message})
    }
}

const searchOpportunity = (req, res) => {}

const deleteOpportunityDetails = (req, res) => {
    const id = req.params.id
    const result = deleteOpportunity(id)
    if (result.changes === 0){
        return res.status(404).json({error: 'Opportunity does not exists'})
    }

    res.json({message: result.changes})

}


module.exports = {
    newOpportunity,
    editOpportunity,
    allOpportunitys,
    singleOpportunity,
    deleteOpportunityDetails,
}
    