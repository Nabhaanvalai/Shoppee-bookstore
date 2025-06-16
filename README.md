# Shoppee - E-commerce Book Store

A simple React-based e-commerce application for buying books online.

## Project Overview

Shoppee is a lightweight e-commerce platform built with React that allows users to:
- Browse a collection of books
- Add books to their shopping cart
- Manage items in the cart (increase/decrease quantity, remove items)
- View the total price of items in the cart

## Features

- **Book Catalog**: Display of available books with images, titles, authors, and prices
- **Shopping Cart**: Fully functional cart with add, remove, and quantity adjustment capabilities
- **Responsive Design**: Works on various screen sizes
- **Real-time Price Calculation**: Automatic calculation of total price based on items in cart

## Tech Stack

- React 19
- CSS3 for styling
- Font Awesome for icons

## Project Structure

```
shoppee/
├── public/             # Static files
├── src/                # Source files
│   ├── components/     # React components
│   │   ├── Card.jsx    # Individual book display component
│   │   ├── Cart.jsx    # Shopping cart component
│   │   ├── Navbar.jsx  # Navigation bar component
│   │   └── Shop.jsx    # Main shop display component
│   ├── styles/         # CSS styles
│   │   ├── card.css    # Styles for book cards
│   │   ├── cart.css    # Styles for shopping cart
│   │   └── navbar.css  # Styles for navigation bar
│   ├── App.jsx         # Main application component
│   ├── List.js         # Book data
│   └── index.js        # Application entry point
└── package.json        # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/shoppee.git
   cd shoppee
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects the app from Create React App

## Future Enhancements

- User authentication
- Payment gateway integration
- Product categories and filtering
- Search functionality
- User reviews and ratings

## License

This project is licensed under the MIT License.
