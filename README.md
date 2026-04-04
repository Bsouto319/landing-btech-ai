# Landing Page - React + Vite + Tailwind CSS

A modern, high-performance landing page template built with React, Vite, and Tailwind CSS. Optimized for Vercel deployment with analytics tracking and lead capture capabilities.

## Features

- Lightning-fast performance with Vite
- Beautiful responsive design with Tailwind CSS
- Modern React with Hooks
- Built-in analytics support (Google Analytics)
- Lead capture and newsletter subscription
- API integration ready
- Mobile-first approach
- SEO optimized
- One-click Vercel deployment

## Project Structure

```
project-root/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Problems.jsx
│   │   ├── Solutions.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── CTA.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── index.js
│   ├── utils/
│   │   ├── api.js
│   │   └── analytics.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── favicon.svg
│   ├── images/
│   └── videos/
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── package.json
├── index.html
├── .env.example
└── README.md
```

## Installation

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Setup

bash
git clone repository-url
cd landing-page
npm install
cp .env.example .env

## Development

bash
npm run dev

## Production Build

bash
npm run build
npm run preview

## Deployment to Vercel

1. Push to GitHub
2. Visit vercel.com
3. Click New Project
4. Select your repository
5. Configure environment variables
6. Deploy

Or use Vercel CLI:
bash
npm i -g vercel
vercel

## Components

- Hero: Hero section with statistics
- Problems: Customer pain points
- Solutions: Solution overview
- Features: Detailed features
- Pricing: Pricing tiers
- CTA: Newsletter signup
- FAQ: Frequently asked questions
- Footer: Footer with links

## Customization

### Change Colors

Edit tailwind.config.js to customize primary and secondary colors.

### Add New Sections

1. Create component in src/components/
2. Export from src/components/index.js
3. Add to src/components/Layout.jsx

## API Integration

The project includes utilities for:
- Lead capture
- Newsletter subscription
- Contact forms

Configure your API endpoint in .env:
REACT_APP_API_URL=https://your-api.com

## Analytics

The landing page supports:
- Google Analytics
- Meta Pixel for Facebook/Instagram Ads
- TikTok Pixel

Set these variables in `.env` or in Vercel Project Settings:

```env
VITE_GA_ID=G-XXXXXXXXXX
VITE_META_PIXEL_ID=123456789012345
VITE_TIKTOK_PIXEL_ID=CXXXXXXXXXXXXXXXXX
```

## License

MIT License

## Support

For questions or issues, please create an issue on GitHub.
