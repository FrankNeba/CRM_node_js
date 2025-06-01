const {
        createCustomer,
        getAllCustomers,
        getCustomerByEmail,
        getCustomerById,
        updateCustomer,
        deleteCustomer,
    } = require('../models/customerModel')


const newCustomer = (req, res) => {
    try{
        const {email, name, phone} = req.body
        createCustomer(email, name, phone)
        res.status(201).json({message: `Customer ${name} created successfully`})
    }
    catch(err){
        console.log(err)
        res.status(400).json({error: err.message})
    }
    
    
}

const editCustomer = (req, res) => {
    try{
        const {email, name, phone} = req.body
        const id = req.params.id
        const customer = updateCustomer(email, name, phone, id)
        return res.status(201).json({message:'Customer updated successflly', data: customer})
    } 
    catch(err){
        console.log(err)
        res.status(400).json({err:err.message})
    }
}

const allCustomers = (req,res) => {
    const data = getAllCustomers()
    return res.status(200).json( data)
}

const singleCustomer = (req, res) => {
    try {
        const id = req.params.id
        const data = getCustomerById(id)
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

const searchCustomer = (req, res) => {}

const deleteCustomerDetails = (req, res) => {
    const id = req.params.id
    const result = deleteCustomer(id)
    if (result.changes === 0){
        return res.status(404).json({error: 'Customer does not exists'})
    }

    res.json({message: result.changes})

}


module.exports = {
    newCustomer,
    editCustomer,
    allCustomers,
    singleCustomer,
    deleteCustomerDetails,
}
    