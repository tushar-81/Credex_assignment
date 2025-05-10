# SoftSell - Software License Resale Platform

A responsive, single-page marketing website for a fictional software resale startup called SoftSell. This project showcases a modern React application built with Next.js and styled with Tailwind CSS.

## Features Implemented

- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean and professional design with coherent color palette
- **Component Architecture**: Well-organized component structure for maintainability
- **Dark/Light Mode**: Toggle between light and dark themes with persistent preference storage
- **Interactive Elements**: Animations and transitions using Framer Motion
- **Form Validation**: Frontend validation for the contact form
- **AI Chat Widget**: AI-powered customer chat integrated with Groq API (with fallback to simulated responses)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sections

1. **Hero Section**: Headline, subheading, and dual CTA buttons
2. **How It Works**: Three-step process with icons and descriptions
3. **Why Choose Us**: Four key benefits with icons and descriptions
4. **Customer Testimonials**: Two customer testimonials with profile images
5. **Contact Form**: Lead capture form with validation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **API Integration**: Groq AI API for chat functionality with Axios for API requests
- **Deployment**: Ready for deployment on Vercel, Netlify, or GitHub Pages
- **Frontend Validation**: Built-in form validation using React hooks

## Design Choices

- **Color Palette**: Used a primary indigo/blue palette with complementary accent colors for a professional, trustworthy feel
- **Typography**: Clean, modern sans-serif fonts for readability and professionalism
- **Layout**: Spacious layout with clear section separation for improved readability
- **Interactions**: Subtle animations and hover effects to enhance user experience
- **Accessibility**: Ensured proper contrast ratios and semantic HTML elements

## Bonus Features

- **Dark/Light Mode**: Toggle button for switching between dark and light modes
- **Animations**: Smooth transitions using Framer Motion
- **Chat Widget**: AI-powered customer support chat simulation
- **SEO Optimization**: Meta tags for improved search engine visibility
- **Custom Logo and Favicon**: Created custom SVG assets

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
GROQ_API_KEY=your_groq_api_key_here
```

For testing purposes, the application will fall back to simulated responses if no API key is provided.

## Deployment

This project is ready to be deployed on Vercel, Netlify, or GitHub Pages. Follow the respective platform's documentation for deployment instructions. Don't forget to set the environment variables on your hosting platform.
