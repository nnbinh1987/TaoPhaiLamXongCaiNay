const express = require('express');
const router = express.Router();

const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const ProductsController = require('../controllers/products');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '_') + file.originalname)
    }
});
const fileFilter = (req, file, cb) => {
    //reject a file
    if (file.mimetype === 'img/jped' || file.mimetype === 'img/png') {
        cb(null, false)
    } else {
        cb(null, true)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
})


router.get('/', ProductsController.products_get_all);

router.post('/', checkAuth, upload.single('productImage'), ProductsController.products_create_product);

router.get('/:productId', ProductsController.product_get_product);

router.patch('/:productId', checkAuth, ProductsController.products_update_product);

router.delete('/:productId', checkAuth, ProductsController.products_delete_product);

module.exports = router;