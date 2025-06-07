import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

import authRoutes from './api/routes/authRoutes.js'
import customerRoutes from './api/routes/customerRoutes.js'
import interactionRoutes from './api/routes/interactionRoutes.js'
import opportunityRoutes from './api/routes/opportunityRoute.js'

const app = express()

app.use(express.json())

app.use('/api', authRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/interactions', interactionRoutes)
app.use('/api/opportunities', opportunityRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`)
    })
