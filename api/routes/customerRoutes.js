const express = require('express')
const {
     newCustomer,
    editCustomer,
    allCustomers,
    singleCustomer,
    deleteCustomerDetails,
} = require('../controllers/customerController')
const authenticationToken = require('../middleware/authMiddleware')

const router = express.Router()


router.post('/customer/create/',authenticationToken, newCustomer )
router.put('/customer/update/:id/', authenticationToken, editCustomer)
router.get('/customer/list/', authenticationToken, allCustomers)
router.get('/customer/:id/', authenticationToken, singleCustomer)
router.delete('/customer/:id/delete/', authenticationToken, deleteCustomerDetails)

module.exports = router