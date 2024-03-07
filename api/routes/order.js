const OrderController = require('../controllers/order')
const router = require('express').Router()

router.post('/', OrderController.createOrder)
router.get('/:id', OrderController.orderDetail)

module.exports = router
