# Deployment Guide

## Quick Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/aravind45/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a React app
   - Click "Deploy"

### Option 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy:**
   ```bash
   vercel login
   vercel --prod
   ```

### Option 3: Manual Build Upload

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload build folder:**
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop the `build` folder

## Environment Setup

Make sure you have:
- Node.js 14+ installed
- npm or yarn package manager

## Build Commands

- Development: `npm start`
- Production build: `npm run build`
- Test: `npm test`

## Custom Domain

After deployment, you can add a custom domain in your Vercel dashboard.

## GitHub Repository

Your portfolio is ready to be pushed to: https://github.com/aravind45/portfolio

## Live Demo

Once deployed, your portfolio will be available at:
- Vercel URL: `https://your-project-name.vercel.app`
- Custom domain (if configured)

## Features Included

✅ Responsive design
✅ Modern animations
✅ Contact form
✅ Project showcase
✅ Skills section
✅ Experience timeline
✅ Education section
✅ GitHub integration
✅ SEO optimized
✅ Fast loading
✅ Mobile-friendly

## Customization

Update your personal information in:
- `src/components/Home.tsx` - Personal intro
- `src/components/Contact.tsx` - Contact details
- `src/components/Projects.tsx` - Your projects
- `src/components/Experience.tsx` - Work experience
- `src/components/Education.tsx` - Educational background
- `src/components/Skills.tsx` - Technical skills

Your GitHub profile (https://github.com/aravind45) is already integrated in the Building section!