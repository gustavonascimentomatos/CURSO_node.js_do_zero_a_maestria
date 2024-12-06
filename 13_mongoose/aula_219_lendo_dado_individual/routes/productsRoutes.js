import express from 'express';
import ProductController from '../controllers/ProductController.js'

const router = express.Router();

router.get('/create', ProductController.createProduct);
router.post('/create', ProductController.createProductSave);
//router.post('/remove/:id', ProductController.removeProduct);
//router.post('/edit', ProductController.editProductSave);
//router.get('/edit/:id', ProductController.editProduct);
router.get('/:id', ProductController.showProduct);
router.get('/', ProductController.showProducts);

export default router;
