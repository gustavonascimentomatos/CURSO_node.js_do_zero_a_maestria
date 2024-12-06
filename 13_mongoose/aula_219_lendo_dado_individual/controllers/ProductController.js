import Product from '../models/Product.js'


class ProductController {

    static async showProducts(req, res) {
        const products = await Product.find().lean();

        res.render('products/all', { products });
    }

    static createProduct(req, res) {
        res.render('products/create');
    }

    static async createProductSave(req, res) {
        try {
            const { name, image, price, description } = req.body;
            const product = new Product({ name, image, price, description });
            await product.save();
            res.redirect('/products');
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao salvar o produto');
        }
    }

    static async showProduct(req, res) {
        const id = req.params.id

        const product = await Product.findById(id).lean();

        res.render('products/product', { product })
    }

//    static async removeProduct(req, res) {
//        const id = req.params.id;
//        await Product.removeProductById(id);
//        
//        res.redirect('/products')
//    }

//    static async editProduct(req, res) {
//        const id = req.params.id;
//
//        const product = await Product.getProductById(id);
//
//        res.render('products/edit', { product })
//    }

//    static async editProductSave(req, res) {
//        const { id, name, image, price, description } = req.body;
//
//        const product = new Product(name, image, price, description);
//
//        await product.updateProduct(id);
//
//        res.redirect('/products')
//    }

}

export default ProductController;
