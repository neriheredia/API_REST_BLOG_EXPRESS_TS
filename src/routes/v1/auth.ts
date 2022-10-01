import { Router } from 'express'
import { registerUser } from '../../controllers'

const router = Router()

router.post('/register', registerUser)

export { router }
