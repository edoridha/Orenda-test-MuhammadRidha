const CustomerController = require('../controllers/customer')
const auth = require('../middlewares/auth.js')
const router = require('express').Router()

router.get('/', CustomerController.customerList)
router.post('/', CustomerController.createCustomer)
router.get('/:id', CustomerController.customerById)
router.put('/:id',auth, CustomerController.updateCustomer)
router.delete('/:id', auth, CustomerController.deleteCustomer)

module.exports = router