import Product from '../models/Product.js'


class ProductController {
    static showProducts(req, res) {
        res.render('products/all');
    }

    static createProduct(req, res) {
        res.render('products/create');
    }

    static async createProductSave(req, res) {
        try {
            const { name, price, description } = req.body;
            const product = new Product(name, price, description);
            await product.save();
            res.redirect('/products');
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao salvar o produto');
        }
    }
}

export default ProductController;
