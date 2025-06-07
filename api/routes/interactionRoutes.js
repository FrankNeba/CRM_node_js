import express from 'express'
import {
    newInteraction,
    editInteraction,
    allInteractions,
    singleInteraction,
    deleteInteractionDetails,
} from '../controllers/interactionController.js'
import {authenticationToken} from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/interaction/create/', authenticationToken, newInteraction)
router.put('/interaction/update/:id/', authenticationToken, editInteraction)
router.get('/interaction/list/', authenticationToken, allInteractions)
router.get('/interaction/:id/', authenticationToken, singleInteraction)
router.delete('/interaction/:id/delete/', authenticationToken, deleteInteractionDetails)

export default router
