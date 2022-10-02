import { Router } from 'express'
import { loginUser, registerUser } from '../../controllers'

const router = Router()

/**
 * Register new user
 * @openapi
 * /api/v1/auth/register:
 *  post:
 *    tags:
 *      - auth
 *    summary: "Register user"
 *    description: Registar un nuevo usuarió, para utilizar la web
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/user"
 *    responses:
 *      '201':
 *        description: Retorna el usuario insertado en la colección.
 *    parameters:
 *      - in: path
 *        email: "test@gmail.com"
 *        firstName: "Test"
 *        lastName: "Other"
 *        password: "123456789"
 */

router.post('/register', registerUser)

router.post('/login', loginUser)

export { router }
