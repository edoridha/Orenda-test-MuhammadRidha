# API Documentation

## 1. GET /

Description:

- To test server run

_Response (200 - OK)_

```json
{
    "status": true,
    "message": "Succesfully create new car",
    "statusCode": "OK",
    "response": "Server is running"
}
```

## 2. GET /customer/

Description:

- To retrieved customer list

Request:

- query:
```form
page: Page number (default: 1)
name: (Filter customers by name)
phone: (Filter customers by phone number)
```

_Response (200 - OK)_

```json
{
    "status": true,
    "message": "Successfully retrieved customer list",
    "statusCode": "OK",
    "response": [
        {
            "id": 1,
            "name": "Bramantya",
            "phone": "+62812345612",
            "email": "test@email.com",
            "address": "Riau",
            "createdAt": "2024-03-07T12:50:30.650Z",
            "updatedAt": "2024-03-07T12:50:30.650Z"
        },
        {
            "id": 2,
            "name": "Rendra",
            "phone": "+62812345612",
            "email": "test1@email.com",
            "address": "Riau",
            "createdAt": "2024-03-07T13:11:55.250Z",
            "updatedAt": "2024-03-07T13:16:58.739Z"
        },
        {
            "id": 3,
            "name": "Aditama",
            "phone": "+62812345612",
            "email": "test3@validation.com",
            "address": "Riau",
            "createdAt": "2024-03-07T14:08:12.724Z",
            "updatedAt": "2024-03-07T14:08:12.724Z"
        }
    ]
}
```

## 3. POST /customer/
Description:
- Create customer

Request:

- body:

```form
form-data: 

name: text
phone: text,
email: text format email,
address": text
```

_Response (201 - Created)_

```json
{
    "status": true,
    "message": "Successfully create customer",
    "statusCode": "Created",
    "response": {
        "id": 4,
        "name": "Aditama",
        "phone": "+62812345612",
        "email": "testy@validation.com",
        "address": "Riau",
        "updatedAt": "2024-03-07T14:08:22.907Z",
        "createdAt": "2024-03-07T14:08:22.907Z"
    }
}
```

## 4. PUT /customer/:id
Description:
- Update customer

Request:

- headers:

```json
{
    "access_token": "string"
}
```

- params:

```form
id: (customer id)
```

- body:

```form
form-data: 

name: text
phone: text,
email: text format email,
address": text
```

_Response (200 - OK)_

```json
{
    "status": true,
    "message": "Succesfully update customer with id 2",
    "statusCode": "OK"
}
```

## 5. GET /customer/:id

Description:
- Get customer by id

Request:

- params:
```form
id: customer id
```

_Response (200 - OK)_

```json
{
    "status": true,
    "message": "Successfully retrieved customer with id 4",
    "statusCode": "OK",
    "response": {
        "id": 4,
        "name": "Aditamy",
        "phone": "+62812345612",
        "email": "testy@validation.com",
        "address": "Riau",
        "createdAt": "2024-03-07T14:08:22.907Z",
        "updatedAt": "2024-03-07T14:08:22.907Z"
    }
}
```
## 6. DELETE /customer/:id

Description:
- Delete customer by id

Request:
- headers:
```json
{
    "access_token": "string"
}
```
- params:
```form
id: customer id
```

_Response (200 - OK)_

```json
{
    "status": true,
    "statusCode": "OK",
    "message": "Succesfully deleted customer with id 4"
}
```
## 7. GET /product/

Description:

- To retrieved product list

Request:

- query:
```form
page: Page number (default: 1)
```

_Response (200 - OK)_

```json
   {
    "status": true,
    "message": "Succesfully retrieved product list",
    "statusCode": "OK",
    "response": [
        {
            "id": 1,
            "name": "Beras Solok",
            "unit": "kg",
            "price": 2000,
            "createdAt": "2024-03-07T19:04:56.519Z",
            "updatedAt": "2024-03-07T19:04:56.519Z"
        },
        {
            "id": 2,
            "name": "Beras Rajo",
            "unit": "kg",
            "price": 2500,
            "createdAt": "2024-03-07T19:05:08.760Z",
            "updatedAt": "2024-03-07T19:05:08.760Z"
        },
        {
            "id": 3,
            "name": "Chiki",
            "unit": "pack",
            "price": 1000,
            "createdAt": "2024-03-07T19:05:42.685Z",
            "updatedAt": "2024-03-07T19:05:42.685Z"
        }
    ]
}
```

## 8. POST /product/
Description:
- Create product

Request:

- body:

```form
form-data: 

name: text
unit: text
price: integer
```

_Response (201 - Created)_

```json
{
    "status": true,
    "statusCode": "Created",
    "message": "Succesfully create customer",
    "response": {
        "id": 4,
        "name": "Chiki-new",
        "unit": "pack",
        "price": 1000,
        "updatedAt": "2024-03-07T19:05:48.630Z",
        "createdAt": "2024-03-07T19:05:48.630Z"
    }
}
```

## 9. PUT /product/:id
Description:
- Update product

Request:

- headers:

```json
{
    "access_token": "string"
}
```

- params:

```form
id: (product id)
```

- body:

```form
form-data: 

name: text
unit: text,
price: integer
```

_Response (200 - OK)_

```json
{
    "status": true,
    "message": "Succesfully update customer with id 2",
    "statusCode": "OK"
}
```

## 10. GET /product/:id

Description:
- Get product by id

Request:

- params:
```form
id: product id
```

_Response (200 - OK)_

```json
{
    "status": true,
    "message": "Successfully retrieved customer with id 4",
    "statusCode": "OK",
    "response": {
        "id": 4,
        "name": "Aditamy",
        "phone": "+62812345612",
        "email": "testy@validation.com",
        "address": "Riau",
        "createdAt": "2024-03-07T14:08:22.907Z",
        "updatedAt": "2024-03-07T14:08:22.907Z"
    }
}
```

## 11. DELETE /product/:id

Description:
- Delete product by id

Request:
- headers:
```json
{
    "access_token": "string"
}
```
- params:
```form
id: product id
```

_Response (200 - OK)_

```json
{
    "status": true,
    "statusCode": "OK",
    "message": "Succesfully deleted product with id 5"
}
```

## 12. POST /order/
Description
- Create new order

Request:
- body
```form
customerId: customer id
detail: {
    total: total order,
    list: [product with quantity]
}
```
_Response (201 - Created)_

```json
{
    "status": true,
    "message": "Succesfully created order",
    "statusCode": "Created",
    "response": {
        "id": 1,
        "customerId": 1,
        "detail": {
            "total": 12000,
            "discount": 1200,
            "list": [
                {
                    "id": 1,
                    "name": "Beras Solok",
                    "unit": "kg",
                    "price": 2000,
                    "qty": 2
                },
                {
                    "id": 2,
                    "name": "Beras Rajo",
                    "unit": "kg",
                    "price": 2500,
                    "qty": 4
                }
            ]
        },
        "updatedAt": "2024-03-07T20:30:54.323Z",
        "createdAt": "2024-03-07T20:30:54.323Z"
    }
}
```

## 13. GET /oder/:id
Description
- Get order detail

Request:
- params
```json
id: order id
```

_Response (200 - OK)_

```json
{
    "status": true,
    "statusCode": "OK",
    "message": "Succesfully retrived order with id 1",
    "response": {
        "id": 1,
        "customerId": 1,
        "detail": {
            "total": 12000,
            "discount": 1200,
            "list": [
                {
                    "id": 1,
                    "name": "Beras Solok",
                    "unit": "kg",
                    "price": 2000,
                    "qty": 2
                },
                {
                    "id": 2,
                    "name": "Beras Rajo",
                    "unit": "kg",
                    "price": 2500,
                    "qty": 4
                }
            ]
        },
        "Customer": {
            "id": 1,
            "name": "Jijio",
            "phone": "+62812345612",
            "email": "test13@validation.com",
            "address": "Riau",
            "createdAt": "2024-03-07T20:16:59.757Z",
            "updatedAt": "2024-03-07T20:16:59.757Z"
        }
    }
}
```

## Global Error
- code 404 - not found
```js
{
    "status": false,
    "statusCode": "Bad Request",
    "message": "Customer with id 8 not found"
}
```
- code 401 - Unauthorized
```js
{
    "status": false,
    "statusCode": "Unauthorized",
    "message": "Invalid access token"
}
```
