const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling GET request to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message : 'Order was created!'
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