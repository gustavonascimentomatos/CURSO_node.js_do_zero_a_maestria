import Product from '../models/Product.js'


class ProductController {
    static async showProducts(req, res) {
        const products = await Product.getProducts();

        res.render('products/all', { products });
    }

    static createProduct(req, res) {
        res.render('products/create');
    }

    static async createProductSave(req, res) {
        try {
            const { name, image, price, description } = req.body;
            const product = new Product(name, image, price, description);
            await product.save();
            res.redirect('/products');
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao salvar o produto');
        }
    }

    static async showProduct(req, res) {
        const id = req.params.id

        const product = await Product.getProductById(id);

        res.render('products/product', { product })
    }


}

export default ProductController;
