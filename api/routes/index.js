const customer = require('./customer.js')
const product = require('./product.js')
const order = require('./order.js')
const router = require('express').Router()

router.get('/', async(req, res) => {
    res.status(200).json({
        status: true,
        message: "Succesfully create new car",
        statusCode: "OK",
        response: "Server is running",
    })
})

router.use('/customer',customer)
router.use('/product', product)
router.use('/order', order)

module.exports = router