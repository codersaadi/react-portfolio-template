# Syed's Portfolio - React Version

A modern, interactive portfolio website built with React and Vite, showcasing software engineering expertise and projects.

## ✨ Features

- **Modern React Architecture**: Built with functional components and hooks
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Animations**: Smooth scroll animations and hover effects
- **Custom Cursor**: Desktop-specific custom cursor for enhanced UX
- **Optimized Performance**: Lazy loading and optimized assets
- **Accessibility**: Full keyboard navigation and screen reader support
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technology Stack

- **Frontend**: React 19, JavaScript ES6+
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Animations**: CSS animations + React state management
- **Development**: ESLint for code quality

## 📂 Project Structure

```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── CustomCursor/
│   ├── Experience/
│   ├── Footer/
│   ├── Hero/
│   ├── Loader/
│   ├── Navigation/
│   ├── Projects/
│   ├── ScrollProgress/
│   └── Testimonials/
├── App.jsx
├── App.css
└── main.jsx
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/App.css`:

```css
:root {
  --accent: #16C47F;        /* Primary accent color */
  --accent-secondary: #f7931e; /* Secondary accent */
  --bg-primary: #0a0a0a;    /* Dark background */
  --text-primary: #ffffff;  /* Primary text */
}
```

### Content
Update the data in each component file:
- Personal info in `Hero/Hero.jsx`
- Skills in `About/About.jsx`
- Projects in `Projects/Projects.jsx`
- Work history in `Experience/Experience.jsx`
- Testimonials in `Testimonials/Testimonials.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Performance Features

- Component-based architecture for better code splitting
- Lazy loading of images and components
- Optimized CSS with modern features
- Debounced scroll events
- Reduced motion support for accessibility

## 🌐 Deployment

### Netlify/Vercel
```bash
npm run build
# Upload the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📈 Performance Metrics

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Accessibility Score: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- Email: userid925925@gmail.com
---

Built with ❤️ using React and Vite# react-portfolio-template
