# Aravind Thiyagarajan - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive across all devices
- ⚡ Smooth animations with Framer Motion
- 🎯 Optimized performance
- 🔧 Built with TypeScript for type safety
- 🚀 Ready for Vercel deployment

## Sections

- **Home**: Introduction and hero section
- **Education**: Academic background and qualifications
- **Skills**: Technical skills organized by categories
- **Building**: Portfolio of projects and work
- **Experience**: Professional work experience
- **Contact**: Contact form and social links

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3 with custom properties
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a React app and deploy it

### Method 3: Drag and Drop

1. Build the project:
```bash
npm run build
```

2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the `build` folder

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Home.tsx` - Name, title, description, social links
- `src/components/Education.tsx` - Educational background
- `src/components/Skills.tsx` - Technical skills
- `src/components/Projects.tsx` - Your projects
- `src/components/Experience.tsx` - Work experience
- `src/components/Contact.tsx` - Contact information

### Styling

- Colors and themes can be customized in the CSS files
- The main color scheme uses CSS custom properties for easy theming
- Responsive breakpoints are defined in each component's CSS file

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/App.tsx`
3. Update the navigation in `src/components/Navbar.tsx`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Performance Optimizations

- Lazy loading of images
- Optimized animations with Framer Motion
- Responsive images and assets
- Minified CSS and JavaScript in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Aravind Thiyagarajan - [aravind45@gmail.com](mailto:aravind45@gmail.com)

Project Link: [https://github.com/aravind/portfolio](https://github.com/aravind/portfolio)