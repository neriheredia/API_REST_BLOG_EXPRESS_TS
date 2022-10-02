import { Router } from 'express';
import { loginUser, registerUser } from '../../controllers';

const router = Router();

/**
 * Register new user
 * @openapi
 * /api/v1/auth/register:
 *  post:
 *    tags:
 *      - Autentificación
 *    summary: "Register user"
 *    description: Registar un nuevo usuarió, para utilizar la web
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/register"
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

router.post('/register', registerUser);

/**
 * Login user
 * @openapi
 * /api/v1/auth/login:
 *  post:
 *    tags:
 *      - Autentificación
 *    summary: "Login user"
 *    description: Inicio de sesion de un usuario
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/login"
 *    responses:
 *      '200':
 *        description: Retorna el usuario con su accessToken.
 *    parameters:
 *      - in: path
 *        email: "test@gmail.com"
 *        password: "123456789"
 */

router.post('/login', loginUser);

export { router };
