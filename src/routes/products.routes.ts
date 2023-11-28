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

/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: object
 *          properties:
 *              nameProduct:
 *                 type: string
 *                 description: the product name
 *              desc:
 *                  type: string
 *                  description: Products' description
 *              imgMainProduct:
 *                  type: string
 *                  description: Primary image for product
 *              numProduct:
 *                   type: integer
 *                   description: the number from rooms
 *          required:
 *              - nameProduct
 *              - desc
 *              - imgMainProduct
 *              - numProduct
 *          example:
 *              nameProduct: Hermoso apartamento en excelente
 *              numProduct: 1345
 *              desc: departamento con servicios incluidos
 *              imgMainProduct: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Gts4dqBBLIv13MFUKj-Fr6dqDs1U1O7yksdv_kc&s
 * 
 */    

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

const router = Router();

/**
 * @swagger
 * /csr/products:
 *  get:
 *      summary: Returns the lsit of all products
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: All products here.
 *              content:
 *                  application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                           $ref: '#/components/schemas/Product'
 */

router.get('/', [
    check('isActive').custom( activeProductTrue ),
    validateAreas
], getAllProducts);

/**
 * @swagger
 * /csr/products/{id}:
 *  get:
 *      summary: return a Product
 *      tags: [Products]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the product id
 *      responses:
 *          200:
 *              description: A product.
 *              content:
 *                  application/json:
 *                      schema:
 *                         type: object
 *                         $ref: '#/components/schemas/Product'
 *      404:
 *          description: product not found
 */

router.get('/:idProduct', [
    check('idProduct').custom( productIdExist ),
    check('isActive').custom( activeProductTrue ),
    validateAreas
], getProduct );

/**
 * @swagger
 * /csr/products:
 *  post:
 *      summary: create a new Product
 *      tags: [Products]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          201:
 *              description: new user created!
 */

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

/**
 * @swagger
 * /csr/products/{id}:
 *  delete:
 *      summary: delete a Product
 *      tags: [Products]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the product id
 *      responses:
 *          200:
 *              description: product deleted.
 *          404:
 *              description: product not found.
 */
router.delete('/idProduct',()=>{})

/**
 * @swagger
 * /csr/products/{id}:
 *  put:
 *      summary: update a Product
 *      tags: [Products]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the product id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          200:
 *              description: A product updated.
 *              content:
 *                  application/json:
 *                      schema:
 *                         type: object
 *                         $ref: '#/components/schemas/Product'
 *          404:
 *              description: product not found
 */

router.put('/idProduct',()=>{})

export default router;