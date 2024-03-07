const { Product } = require("../models");

class ProductController {
  static async createProduct(req, res, next) {
    try {
      const { name, unit, price } = req.body;

      const newProduct = await Product.create({ name, unit, price });

      res.status(201).json({
        status: true,
        statusCode: "Created",
        message: "Succesfully create customer",
        response: newProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  static async productList(req, res, next) {
    try {
      const { page } = req.query;
      const options = {
        limit: 3,
        offset: (Number(page) - 1) * 3,
      };

      const products = await Product.findAll(options);

      res.status(200).json({
        status: true,
        message: "Succesfully retrieved product list",
        statusCode: "OK",
        response: products,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const { name, unit, price } = req.body;
      const { id } = req.params;

      const verifyProduct = await Product.findByPk(id);
      if (!verifyProduct) {
        throw {
          name: "Not Found",
          errors: [
            {
              message: `Product with id ${id} not found`,
            },
          ],
        };
      }

      await Product.update({ name, unit, price }, { where: { id } });

      res.status(200).json({
        status: true,
        message: `Succesfully update customer with id ${id}`,
        statusCode: "OK",
      });
    } catch (error) {
      next(error);
    }
  }

  static async productById(req, res, next) {
    try {
      const { id } = req.params;

      const getProduct = await Product.findByPk(id);
      if (!getProduct) {
        throw {
          name: "Not Found",
          errors: [
            {
              message: `Product with id ${id} not found`,
            },
          ],
        };
      }

      res.status(200).json({
        status: true,
        message: `Succesfully retrieved customer with id ${id}`,
        statusCode: "OK",
        response: getProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const verifyProduct = await Product.findByPk(id);
      if (!verifyProduct) {
        throw {
          name: "Not Found",
          errors: [
            {
              message: `Product with id ${id} not found`,
            },
          ],
        };
      }

      await Product.destroy({ where: { id } });

      res.status(200).json({
        status: true,
        statusCode: "OK",
        message: `Succesfully deleted product with id ${id}`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
