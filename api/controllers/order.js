const { Order, Customer, Product } = require("../models");

class OrderController {
  static async createOrder(req, res, next) {
    try {
      const { customerId, detail } = req.body;

      const verifyCustomer = await Customer.findByPk(customerId);
      if (!verifyCustomer) {
        throw {
          name: "Not Found",
          errors: [
            {
              message: `Customer with id ${customerId} not found`,
            },
          ],
        };
      }
      const verifyProducts = await Promise.all(
        detail.list.map(async (e) => {
          const data = await Product.findByPk(e.id);
          return data;
        })
      );
      const verifyProductsRaw = verifyProducts.map((data) => {
        return data.dataValues;
      });
      const createDetail = {
        total: detail.total,
        discount: 0,
        list: detail.list,
      };

      if (detail.total >= 10000) {
        createDetail.discount = (detail.total * 10) / 100;
      }

      const newOrder = await Order.create({ customerId, detail: createDetail });
      res.status(201).json({
        status: true,
        message: "Succesfully created order",
        statusCode: "Created",
        response: newOrder,
      });
    } catch (error) {
      console.log(error.name);
      next(error);
    }
  }

  static async orderDetail(req, res, next) {
    try {
      const { id } = req.params;

      const getOrder = await Order.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: Customer,
      });
      if (!getOrder) {
        throw {
          name: "Not Found",
          errors: [
            {
              message: `Order with id ${id} not found`,
            },
          ],
        };
      }

      res.status(200).json({
        status: true,
        statusCode: "OK",
        message: `Succesfully retrived order with id ${id}`,
        response: getOrder,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderController;
