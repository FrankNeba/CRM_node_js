import express from 'express'
import {
    newCustomer,
    editCustomer,
    allCustomers,
    singleCustomer,
    deleteCustomerDetails,
} from '../controllers/customerController.js'
import {authenticationToken} from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/customer/create/', authenticationToken, newCustomer)
router.put('/customer/update/:id/', authenticationToken, editCustomer)
router.get('/customer/list/', authenticationToken, allCustomers)
router.get('/customer/:id/', authenticationToken, singleCustomer)
router.delete('/customer/:id/delete/', authenticationToken, deleteCustomerDetails)

export default router
