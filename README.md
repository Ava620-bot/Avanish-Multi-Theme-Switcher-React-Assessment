# Multi-Theme Switcher App

A sophisticated React application showcasing advanced theming capabilities with TypeScript, Context API, and modern UI patterns.

## 🚀 Features

- **Dynamic Theme Switching**: Three distinct themes with different layouts, typography, and color schemes
- **Persistent State**: Theme preferences saved to localStorage
- **Responsive Design**: Optimized for all device sizes
- **API Integration**: Real-time product data from Fake Store API
- **TypeScript**: Full type safety and enhanced developer experience
- **Modern Architecture**: Context API, custom hooks, and clean component structure
- **Smooth Animations**: Seamless transitions between themes
- **Accessibility**: WCAG compliant with proper focus management

## 🎨 Themes

### Theme 1: Minimalist
- Clean, light design with subtle shadows
- Sans-serif typography (Inter)
- Traditional grid layout
- Compact spacing

### Theme 2: Dark Professional
- Dark mode with warm accent colors
- Serif typography (Playfair Display)
- Sidebar layout with dashboard elements
- Spacious padding

### Theme 3: Colorful Creative
- Vibrant colors with playful design
- Decorative typography (Pacifico + Inter)
- Card-based grid layout
- Generous spacing and rounded corners

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data Fetching**: Custom hooks with Fetch API
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display, Pacifico)

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/multi-theme-switcher.git
cd multi-theme-switcher
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Layout.tsx         # Theme-aware layout wrapper
│   └── ProductCard.tsx    # Product display component
├── contexts/              # React Context providers
│   └── ThemeContext.tsx   # Theme management context
└── hooks/                 # Custom React hooks
    └── useProducts.ts     # Product data fetching hook
\`\`\`

## 🎯 Key Implementation Details

### Theme Management
- **Context API**: Centralized theme state management
- **TypeScript Interfaces**: Strongly typed theme configurations
- **CSS Custom Properties**: Dynamic style injection
- **localStorage**: Persistent theme preferences

### Performance Optimizations
- **Memoized Context Values**: Prevents unnecessary re-renders
- **Efficient State Updates**: Minimal DOM manipulations
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Next.js Image component with proper sizing

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant color combinations

## 🔧 Customization

### Adding New Themes
1. Define theme configuration in \`contexts/ThemeContext.tsx\`
2. Add theme-specific styles in components
3. Update theme selector dropdown

### Modifying Layouts
- Edit layout logic in \`components/Layout.tsx\`
- Adjust responsive breakpoints in Tailwind config
- Update component styling based on theme layout property

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
- **Netlify**: Drag and drop build folder
- **AWS Amplify**: Connect GitHub repository
- **Docker**: Use provided Dockerfile

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/amazing-feature\`
3. Commit changes: \`git commit -m 'Add amazing feature'\`
4. Push to branch: \`git push origin feature/amazing-feature\`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for product data
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Next.js](https://nextjs.org/) for the amazing React framework
\`\`\`
