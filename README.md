# Goodluck's Portfolio ??

A modern, interactive web development portfolio built with React and TypeScript. Features a Java-themed loading screen, responsive design, AI assistant chatbot, and a functional contact form.

## ? Features

- **Modern UI/UX**: Glassmorphism design with black, purple, and gold color scheme
- **Java Loading Animation**: Terminal-style loading screen before portfolio displays
- **Animated Background**: Java code visualization on home page
- **Multi-page SPA**: Home, About, Skills, Projects, and Contact pages
- **Project Carousel**: 6-project showcase with live links
- **Skills Display**: 12 technical skills with logos
- **AI Assistant**: Interactive chatbot for visitor guidance
- **Contact Form**: Email integration with Express backend
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion

## ??? Tech Stack

### Frontend
- **React** 19.2.5 - UI library
- **TypeScript** 4.9.5 - Type safety
- **React Router** 7.14.0 - Client-side routing
- **Framer Motion** 12.38.0 - Animations
- **react-icons** 5.6.0 - Icon library (Font Awesome, Simple Icons)

### Backend
- **Express.js** - Web server
- **Nodemailer** - Email sending
- **dotenv** - Environment variable management

### Build & Development
- **react-scripts** 5.0.1 - Create React App build tools
- **npm** - Package manager

## ?? Prerequisites

- Node.js 18+ and npm 9+
- SMTP credentials (for email functionality) - Gmail, SendGrid, or your email provider

## ?? Installation

1. **Navigate to the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit .env with your email credentials:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_RECEIVER=your-email@gmail.com
   ```

## ?? Development

Start the development server (runs on http://localhost:3000):
```bash
npm start
```

The backend Express server can be run separately:
```bash
npm run server
```

## ??? Build for Production

Create an optimized production build:
```bash
npm run build
```

This generates a \uild/\ folder with:
- Minified JavaScript (129 KB gzipped)
- Optimized CSS (2.86 KB gzipped)
- Static assets

## ?? Project Structure

\\\
portfolio/
+-- src/
¦   +-- components/
¦   ¦   +-- Layout.tsx              # Navigation & background
¦   ¦   +-- Layout.css
¦   ¦   +-- LoadingScreen.tsx       # Java terminal loading
¦   ¦   +-- LoadingScreen.css
¦   ¦   +-- AIAssistant.tsx         # Chatbot widget
¦   ¦   +-- AIAssistant.css
¦   +-- pages/
¦   ¦   +-- Home.tsx                # Hero with Java code background
¦   ¦   +-- Home.css
¦   ¦   +-- About.tsx               # Profile & bio
¦   ¦   +-- About.css
¦   ¦   +-- Skills.tsx              # 12 technical skills
¦   ¦   +-- Skills.css
¦   ¦   +-- Projects.tsx            # 6-project carousel
¦   ¦   +-- Projects.css
¦   ¦   +-- Contact.tsx             # Email contact form
¦   ¦   +-- Contact.css
¦   +-- App.tsx                     # Router setup with loading screen
¦   +-- App.css
¦   +-- index.tsx                   # React entry point
¦   +-- index.css
+-- public/
¦   +-- index.html
¦   +-- resume.pdf                  # (Add your resume here)
+-- server.js                       # Express backend
+-- .env.example                    # Environment template
+-- package.json
+-- tsconfig.json
+-- README.md
\\\

## ?? Design Highlights

### Color Scheme
- **Primary**: Black (#000000)
- **Secondary**: Purple (#9c27b0)
- **Accent**: Gold (#ffd700)

### Key Components

#### Loading Screen
- Java terminal simulation with green text
- Progress bar with gradient
- 3.5-second display time

#### Home Page
- Hero section with CTA button
- Animated Java code background
- AI Assistant widget

#### Skills
- Grid layout with 12 skills
- Glassmorphism cards
- Icon logos from react-icons

#### Projects
- Carousel with 6 projects (Elitetraders, Vuyar, Excel In School, Virally, Omni, Sentrix)
- Live/Coming Soon badges
- Previous/Next navigation

#### Contact
- Form validation
- Integration with Express backend
- Email sending via Nodemailer

## ?? Email Configuration

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character password in .env

### Other Email Providers
Update \EMAIL_HOST\, \EMAIL_PORT\, and credentials in \.env\ for:
- SendGrid
- Mailgun
- Your hosting provider's SMTP
- Custom email server

## ?? Deployment

### Frontend (Vercel/Netlify)
1. Build: \
pm run build\
2. Deploy the \uild/\ folder
3. Set environment variables in deployment platform

### Backend (Railway/Render/Heroku)
1. Deploy \server.js\ with \package.json\
2. Set environment variables in the platform
3. Update proxy URL in \package.json\ if needed

## ?? Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 768px
- **Desktop**: > 768px

All animations and layouts adapt fluidly using CSS clamp() and media queries.

## ?? AI Assistant

The chatbot responds to keywords:
- "skills" - Lists all technical skills
- "projects" - Shows project information
- "contact" - Provides contact details
- General greetings and questions

Future: Can be connected to a real API for dynamic responses.

## ?? Performance

- **Bundle Size**: 129.03 KB (gzipped JavaScript)
- **CSS Size**: 2.86 KB (gzipped)
- **Load Time**: ~3.5s (including Java loading screen)
- **Fully Responsive**: Mobile-first design

## ?? Troubleshooting

### Build fails
\\\ash
npm install
npm run build
\\\

### Email not sending
1. Check \.env\ file exists and has correct credentials
2. Verify SMTP port (usually 587 for TLS, 465 for SSL)
3. Check if Gmail requires App Password
4. Ensure backend is running: \
pm run server\

### Loading screen not showing
- Clear browser cache (Ctrl+Shift+Del)
- Hard refresh (Ctrl+Shift+R)

### Icons not displaying
\\\ash
npm install react-icons
npm run build
\\\

## ?? Customization

### Add Resume
Place your resume PDF in \public/resume.pdf\

### Update Projects
Edit \src/pages/Projects.tsx\ with:
- Project titles
- Descriptions
- URLs (set \live: true\ when ready)
- Technologies used

### Update Skills
Modify \src/pages/Skills.tsx\ to add/remove skills and logos

### Change Colors
Update color hex values in \*.css\ files:
- \#000000\ - Black
- \#9c27b0\ - Purple
- \#ffd700\ - Gold

## ?? Author

**Goodluck Oreoluwa Emmanuel**
- Computer Engineering Student
- Rivers State University
- Web Developer | Creative Technologist

## ?? License

Personal portfolio - All rights reserved

## ?? Acknowledgments

- React & TypeScript communities
- Framer Motion for smooth animations
- react-icons for comprehensive icon library
- Create React App for build tooling

---

**Last Updated**: April 2026
**Portfolio Status**: ? Production Ready
