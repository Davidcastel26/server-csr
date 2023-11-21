import { Router } from 'express';
import { check } from 'express-validator';

import { validateAreas } from '../middleware/validations'; 
// controllers 
import { 
        createProduct,
        getAllProducts, 
        getProduct, } from '../controllers/main/product.controller';

// check with helpers validations 
import { 
        activeProductTrue,
        productIdExist, 
        productName, } from '../helpers/validations/productCheck';


const router = Router();

router.get('/', [
    check('isActive').custom( activeProductTrue ),
    validateAreas
], getAllProducts);

router.get('/:idProduct', [
    check('idProduct').custom( productIdExist ),
    check('isActive').custom( activeProductTrue ),
    validateAreas
], getProduct );

router.post('/', [
    check('nameProduct','Name is a must for product').not().isEmpty(),
    check('numProduct','Number is a must for product').not().isEmpty(),
    check('desc','Description is a must for product').not().isEmpty(),
    check('imgMainProduct','Image is a must for product').not().isEmpty(),
    check('nameProduct', 'Name must be more than 3 characters').isLength({min:3}),
    check('desc', 'Description must be more than 10 character').isLength({min:10}),
    check('imgMainProduct', 'Image must be a link').isLength({min:6}),
    check('numProduct').isNumeric(),
    check('nameProduct').custom(productName),
    validateAreas,
], createProduct)

export default router;