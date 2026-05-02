# Lemaiyan's Travels Backend

Backend API server for Lemaiyan's Travels website.

## Features

- Contact form handling
- Tour management
- Booking system
- Email notifications
- Database integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your actual values
```

3. Start development server:
```bash
npm run dev
```

4. Start production server:
```bash
npm start
```

## API Endpoints

- `POST /api/contact` - Contact form submissions
- `GET /api/tours` - Get all tours
- `GET /api/tours/:id` - Get specific tour
- `POST /api/bookings` - Create booking

## Technologies

- Node.js
- Express.js
- MongoDB
- JWT
- Nodemailer
