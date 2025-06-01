const express = require('express')
const {
     newInteraction,
    editInteraction,
    allInteractions,
    singleInteraction,
    deleteInteractionDetails,
} = require('../controllers/interactionController')
const authenticationToken = require('../middleware/authMiddleware')

const router = express.Router()


router.post('/interaction/create/',authenticationToken, newInteraction )
router.put('/interaction/update/:id/', authenticationToken, editInteraction)
router.get('/interaction/list/', authenticationToken, allInteractions)
router.get('/interaction/:id/', authenticationToken, singleInteraction)
router.delete('/interaction/:id/delete/', authenticationToken, deleteInteractionDetails)

module.exports = router