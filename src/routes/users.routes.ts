import { Router } from 'express';
import { check } from 'express-validator';
import { validateAreas } from '../middleware/validations';
import { getAllUser } from '../controllers/main/users.controller';


const router = Router();

router.get('/', getAllUser )

export default router;