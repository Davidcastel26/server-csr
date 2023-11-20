import { Router } from 'express';
import { check } from 'express-validator';

import { validateAreas } from '../middleware/validations';
// controllers
import { getAllUser,
         getUser, } from '../controllers/main/users.controller';
// check with helpers validations 
import { userIdExist } from '../helpers/validations/userCheck';


const router = Router();

router.get('/', getAllUser );

router.get('/:idUser',[
    check('idUser').custom( userIdExist ),
    validateAreas
], getUser)


export default router;