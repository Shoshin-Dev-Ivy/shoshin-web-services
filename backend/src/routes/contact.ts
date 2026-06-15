/* backend/src/routes/contact.ts */
import { Router } from 'express'
import contactHandler from '../controllers/contact.controller'
import contactLimiter from '../middlewares/contactLimiter'


const router = Router()
router.post('/', contactLimiter, contactHandler)


export default router
