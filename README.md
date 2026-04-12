# Buy Me a Coffee with eSewa

A coffee-themed support page built with Node.js, Express, MongoDB, and eSewa.

Users can choose an amount, continue to eSewa, complete or cancel the payment, retry a cancelled payment, and view a payment success screen after verification.

This project is currently configured for the eSewa test gateway, so it demonstrates the full payment flow logic without requiring a live merchant account.

## Features

- Coffee-themed Buy Me a Coffee page
- eSewa payment initialization
- eSewa payment verification
- MongoDB storage for support records and payment records
- Mobile-friendly Tailwind UI
- Works locally and can also be deployed

## Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- Tailwind CSS via CDN
- eSewa RC gateway

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
- `test.html` - main support page
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

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Create your `.env` file from `.env.example`

3. Make sure MongoDB is running locally, or use MongoDB Atlas

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

- The app can be deployed even if payments stay in eSewa test mode
- Set `APP_BASE_URL` to your real deployed domain
- You can use MongoDB Atlas instead of local MongoDB
- You still need valid eSewa test credentials for the test gateway flow
- This is not configured for live production payments unless real merchant credentials are added

## Important Notes

- This project currently uses the eSewa RC/test gateway
- Do not commit your real `.env` file or secret keys
- If a payment is cancelled, the retry flow creates a fresh transaction UUID before reopening eSewa
- The app stores support attempts and verified payment records in MongoDB

## Future Improvements

- Move Tailwind from CDN to a proper build setup
- Add better validation and sanitization
- Add an admin or support history dashboard
- Add production-ready error handling
- Switch from test credentials to live eSewa credentials when available
