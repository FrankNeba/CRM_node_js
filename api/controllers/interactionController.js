const {
        createInteraction,
        getAllInteractions,
        getInteractionByEmail,
        getInteractionById,
        updateInteraction,
        deleteInteraction,
    } = require('../models/interactionModel')


const newInteraction = (req, res) => {
    try{
        console.log('hello')
        const {type, date, notes, customer_id} = req.body
        console.log('hello1')
        createInteraction(type, date, notes, customer_id)
        res.status(201).json({message: `Interaction ${type} created successfully`})
    }
    catch(err){
        console.log(err)
        res.status(400).json({error: err.message})
    }
    
    
}

const editInteraction = (req, res) => {
    try{
        const {type, date, notes, customer_id} = req.body
        const id = req.params.id
        const Interaction = updateInteraction(type, date, notes, customer_id, id)
        return res.status(201).json({message:'Interaction updated successflly', data: Interaction})
    } 
    catch(err){
        console.log(err)
        res.status(400).json({err:err.message})
    }
}

const allInteractions = (req,res) => {
    const data = getAllInteractions()
    return res.status(200).json( data)
}

const singleInteraction = (req, res) => {
    try {
        const id = req.params.id
        const data = getInteractionById(id)
        if (!data) {
            return res.status(404).json({error: 'user not found'})
        }
        return res.status(200).json( data)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error: err.message})
    }
}

const searchInteraction = (req, res) => {}

const deleteInteractionDetails = (req, res) => {
    const id = req.params.id
    const result = deleteInteraction(id)
    if (result.changes === 0){
        return res.status(404).json({error: 'Interaction does not exists'})
    }

    res.json({message: result.changes})

}


module.exports = {
    newInteraction,
    editInteraction,
    allInteractions,
    singleInteraction,
    deleteInteractionDetails,
}
    