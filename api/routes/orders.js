const express = require('express');

const router = express.Router();

//Handle incomming request to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling GET request to /orders'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId : req.body.productId,
        quantity : req.body.quantity
    }
    res.status(201).json({
        message : 'Order was created!',
        createdOrder : order
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message : 'You get an Order ID',
        id : id
    });
});

router.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message : 'Order patched',
        id : id
    });
});

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message : 'Order deleted',
        id : id
    });
});

module.exports = router;