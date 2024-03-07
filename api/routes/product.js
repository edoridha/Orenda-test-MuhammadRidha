const router = require("express").Router();
const ProductController = require("../controllers/product");
const auth = require("../middlewares/auth");

router.get("/", ProductController.productList);
router.post("/", ProductController.createProduct);
router.get('/:id', ProductController.productById)
router.put("/:id", auth, ProductController.updateProduct);
router.delete('/:id', auth, ProductController.deleteProduct)

module.exports = router;
