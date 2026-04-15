# Buy Me a Coffee with eSewa

A coffee-themed support page built with Node.js, Express, MongoDB, Tailwind CSS, and eSewa.

Users can choose an amount, continue to eSewa, complete or cancel the payment, retry a cancelled payment, and view a payment success screen after verification.

This project is currently configured with the eSewa test gateway, so it demonstrates the full payment flow without requiring a live merchant account.

## Live Demo

Deployed on Render:

`https://buy-me-coffee-hmx3.onrender.com`

## Features

- Coffee-themed Buy Me a Coffee page
- eSewa payment initialization
- eSewa payment verification
- Retry flow for cancelled payments
- MongoDB storage for support and payment records
- Mobile-friendly Tailwind UI
- Works locally and is also deployed

## Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- Tailwind CSS via CDN
- eSewa RC gateway
- Render

## Data Model

The project uses two main collections:

- `supports`
  - `donorName`
  - `message`
  - `amount`
  - `paymentMethod`
  - `status`

- `payments`
  - `transactionId`
  - `supportId`
  - `amount`
  - `verificationData`
  - `paymentGateway`
  - `status`
  - `paymentDate`

## Project Structure

- `index.js` - Express server and payment routes
- `esewa.js` - eSewa signature generation and payment verification
- `db.js` - MongoDB connection
- `supportModel.js` - support schema
- `paymentModel.js` - payment schema
- `coffee.html` - main Buy Me a Coffee page
- `success.html` - payment success page
- `failure.html` - payment cancelled page

## Environment Variables

Create a `.env` file using `.env.example`.

Example:

```env
PORT=3001
APP_BASE_URL=http://localhost:3001
DB_URI=mongodb://localhost:27017/esewa
ESEWA_SECRET_KEY=replace-with-your-esewa-secret-key
ESEWA_GATEWAY_URL=https://rc-epay.esewa.com.np
ESEWA_PRODUCT_CODE=EPAYTEST
```

For deployment, `APP_BASE_URL` should be your real deployed domain.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Create your `.env` file from `.env.example`

3. Set your MongoDB connection string in `.env`

4. Start the app:

```bash
npm run dev
```

Or:

```bash
npm start
```

5. Open:

```text
http://localhost:3001
```

## Deployment Notes

- The app is deployed on Render
- MongoDB can be local for development or MongoDB Atlas for deployment
- The payment flow is still using the eSewa RC/test gateway
- This is not configured for live production payments unless real merchant credentials are added

## Important Notes

- This project currently uses the eSewa RC/test gateway
- Do not commit your real `.env` file or secret keys
- If a payment is cancelled, the retry flow creates a fresh transaction UUID before reopening eSewa
- The app stores support attempts and verified payment records in MongoDB

