# Stripe Payment Integration API

This is a simple RESTful API built with Node.js and Express.js that allows users to make payments using Stripe. The API handles payment creation and retrieval of payment status. It integrates with PostgreSQL for storing payment details.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Create Payment](#create-payment)
  - [Get Payment Details](#get-payment-details)

## Features
- Create payments with various payment methods.
- Retrieve payment details by payment ID.
- Simple error handling for invalid requests and payment issues.
- Integration with PostgreSQL for persistent payment records.

## Requirements
- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)
- Stripe account (for API keys)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/devajaypatidar/stripe.git
   cd stripe

   ```

2. Install dependencies:


 ``` npm install ```

3. Set up the PostgreSQL database:

-  Create a new database named payments_db (or any name of your choice).
- Update the database configuration in config/config.json with your PostgreSQL connection details.

4. To run use :

``` npm run ``` or``` nodemon server ```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3000`

`DB_HOST`

`STRIPE_SECRET_KEY`

`DB_USER`

`DB_PASS`

`DB_NAME`

## API Reference

#### Get all items

```http
   /api/payment/:id
```

Resoponse : 
 ```
 {
  "paymentId": "ch_3MmlLrLkdIwHu7ix0snN0B15",
  "amount": 5000,
  "currency": "usd",
  "status": "succeeded",
  "description": "Test payment"
}
 ```

#### Create Payment

```http
  POST /api/payment/create
```
Request Body:

```
{
  "amount": 5000,           
  "currency": "usd",        
  "source": "tok_visa",     
  "description": "Test payment" 
}

```

Resoponse:

```
{
  "paymentId": "ch_3MmlLrLkdIwHu7ix0snN0B15",
  "status": "succeeded"
}


```


## Support

For support, check the official documentation of the stripe.

