import { Router } from 'express';
import { check } from 'express-validator';

import { validateAreas } from '../middleware/validations';
// controllers
import { getAllUser,
         getUser, } from '../controllers/main/users.controller';
// check with helpers validations 
import { userIdExist } from '../helpers/validations/userCheck';


const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              name:
 *                 type: string
 *                 description: the user name
 */             
router.get('/', getAllUser );

router.get('/:idUser',[
    check('idUser').custom( userIdExist ),
    validateAreas
], getUser)


export default router;