import express from 'express'
import {
    newOpportunity,
    editOpportunity,
    allOpportunities,
    singleOpportunity,
    deleteOpportunityDetails,
} from '../controllers/opportunityController.js'
import {authenticationToken} from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/Opportunity/create/', authenticationToken, newOpportunity)
router.put('/Opportunity/update/:id/', authenticationToken, editOpportunity)
router.get('/Opportunity/list/', authenticationToken, allOpportunities)
router.get('/Opportunity/:id/', authenticationToken, singleOpportunity)
router.delete('/Opportunity/:id/delete/', authenticationToken, deleteOpportunityDetails)

export default router
