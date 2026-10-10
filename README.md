# বাজার দর (BazarDor)

**বাজার দর** is a Bengali market price tracking website that helps users explore the latest prices of essential products and compare prices across different markets in Bangladesh.

## Features

- **Live Market Price Display:** Browse product prices and price changes.
- **Price Trend Sections:** Explore products with rising and falling prices.
- **Product Details:** View historical prices and market-wise price information.
- **Category Filtering:** Browse products by category, such as rice, lentils, vegetables, fish, and meat.
- **Price Sorting:** Sort products from lowest to highest price or highest to lowest price.
- **User Authentication:** Register, sign in, and sign out using Better Auth.
- **Profile Management:** View and update your profile name.
- **Responsive Design:** Use the website on mobile, tablet, and desktop screens.

## Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- Better Auth
- SQLite with better-sqlite3
- React Toastify
- REST API

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

### Installation

1. Clone the repository after it has been published to GitHub:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project folder:

   ```bash
   cd bazardor
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Configure the required environment variables in `.env.local`. Never commit secrets or private environment values to GitHub.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

Check the production build with:

```bash
npm run build
```

## Project Structure

- `app/` — Pages, layouts, API routes, and loading states.
- `components/` — Reusable interface components.
- `lib/` — API integration and authentication configuration.
- `public/` — Static images and other public assets.

## Important Note

Product prices depend on the connected API and may change according to market conditions. Authentication and deployment require the appropriate configuration.

## Author

Developed as a web development project using Next.js and Better Auth.