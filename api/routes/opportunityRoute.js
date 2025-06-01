const express = require('express')
const {
     newOpportunity,
    editOpportunity,
    allOpportunitys,
    singleOpportunity,
    deleteOpportunityDetails,
} = require('../controllers/opportunityController')
const authenticationToken = require('../middleware/authMiddleware')

const router = express.Router()


router.post('/Opportunity/create/',authenticationToken, newOpportunity )
router.put('/Opportunity/update/:id/', authenticationToken, editOpportunity)
router.get('/Opportunity/list/', authenticationToken, allOpportunitys)
router.get('/Opportunity/:id/', authenticationToken, singleOpportunity)
router.delete('/Opportunity/:id/delete/', authenticationToken, deleteOpportunityDetails)

module.exports = router