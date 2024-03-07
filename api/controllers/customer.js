const { Customer } = require("../models");
const { Op } = require("sequelize");

class CustomerController {
  static async createCustomer(req, res, next) {
    try {
      const { name, phone, email, address } = req.body;

      const newCustomer = await Customer.create({
        name,
        phone,
        email,
        address,
      });

      res.status(201).json({
        status: true,
        message: "Successfully create customer",
        statusCode: "Created",
        response: newCustomer,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateCustomer(req, res, next) {
    try {
      const { name, phone, email, address } = req.body;
      const { id } = req.params;

      const verifyCustomer = await Customer.findByPk(id);
      if (!verifyCustomer) {
        throw {
          name: "Not Found",
          errors: [
            {
              message: `Customer with id ${id} not found`,
            },
          ],
        };
      }

      await Customer.update({ name, phone, email, address }, { where: { id } });

      res.status(200).json({
        status: true,
        message: `Succesfully update customer with id ${id}`,
        statusCode: "OK",
      });
    } catch (error) {
      next(error);
    }
  }

  static async customerList(req, res, next) {
    try {
      const { page, name, phone } = req.query;

      const options = {
        limit: 3,
        offset: (Number(page) - 1) * 3,
        where: {},
      };

      if (name) {
        options.where.name = { [Op.like]: `%${name}%` };
      }

      if (phone) {
        options.where.phone = { [Op.like]: `%${phone}%` };
      }

      const customers = await Customer.findAll(options);

      res.status(200).json({
        status: true,
        message: "Successfully retrieved customer list",
        statusCode: "OK",
        response: customers,
      });
    } catch (error) {
      next(error);
    }
  }

  static async customerById(req, res, next) {
    try {
      const { id } = req.params;

      const getCustomer = await Customer.findByPk(id);

      if (!getCustomer) {
        throw {
          name: "Not Found",
          errors: [
            {
              message: `Customer with id ${id} not found`,
            },
          ],
        };
      }

      res.status(200).json({
        status: true,
        message: `Successfully retrieved customer with id ${id}`,
        statusCode: "OK",
        response: getCustomer,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCustomer(req, res, next) {
    try {
      const { id } = req.params;
      const verifyCustomer = await Customer.findByPk(id);
      if (!verifyCustomer) {
        throw {
          name: "Not Found",
          errors: [
            {
              message: `Customer with id ${id} not found`,
            },
          ],
        };
      }
      await Customer.destroy({ where: { id } });

      res.status(200).json({
        status: true,
        statusCode: "OK",
        message: `Succesfully deleted customer with id ${id}`,
      });
    } catch (error) {
      next();
    }
  }
}

module.exports = CustomerController;
