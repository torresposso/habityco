# HabityCo – Personal Habit Tracker

A modern, full-stack habit tracking application built with Astro, HTMX, Drizzle, and Turso. Track daily habits, view streaks, and analyze progress with a clean, responsive interface.

![HabityCo](https://img.shields.io/badge/Status-MVP-brightgreen) ![Astro](https://img.shields.io/badge/Astro-4.0+-purple) ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC)

## ✨ Features

- **🔐 Google OAuth Authentication** – Secure sign-in with Google accounts
- **📝 Habit Management** – Create, track, and delete daily habits
- **✅ Daily Check-ins** – One-click daily habit completion
- **🔥 Streak Tracking** – Visual streak counters with fire emojis
- **📊 Analytics Dashboard** – Personal and per-habit statistics
- **📅 Calendar Heatmap** – 30-day visual completion history
- **🌙 Dark Mode** – Complete light/dark theme support
- **📱 Mobile-First** – Responsive design for all devices
- **⚡ Fast Performance** – Server-side rendering with minimal JavaScript

## 🚀 Tech Stack

| Component      | Technology             | Description                                      |
| -------------- | ---------------------- | ------------------------------------------------ |
| **Frontend**   | Astro + HTMX           | Server-side rendering, lightweight interactivity |
| **Database**   | Turso (SQLite)         | Edge-ready, globally distributed database        |
| **ORM**        | Drizzle                | Type-safe database operations                    |
| **Auth**       | Better Auth            | Production-ready authentication                  |
| **Styling**    | Tailwind CSS + DaisyUI | Modern, component-based styling                  |
| **Language**   | TypeScript             | Type safety throughout                           |
| **Deployment** | Vercel                 | Optimized for Astro                              |

## 🏁 Quick Start

### Prerequisites

- Node.js 18+
- Turso database account
- Google OAuth credentials

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/torresposso/habityco.git
   cd habityco
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Add your credentials:

   ```env
   # Database
   TURSO_DATABASE_URL=your_turso_database_url
   TURSO_AUTH_TOKEN=your_turso_auth_token

   # Authentication
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   BETTER_AUTH_SECRET=your_better_auth_secret
   BETTER_AUTH_URL=http://localhost:4321
   ```

4. **Set up the database**

   ```bash
   npm run db:generate
   npm run db:migrate
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:4321`

## 📋 Development Roadmap

This project follows a structured 4-week development plan:

### Phase 1: Foundation (Week 1) ✅

- [x] Astro project setup with Node adapter
- [x] TypeScript strict mode configuration
- [x] Turso database connection
- [x] Drizzle schema and migrations
- [x] Better Auth with Google OAuth
- [x] Tailwind CSS + DaisyUI integration
- [x] Protected route middleware
- [x] Authentication flow testing
- [x] Initial Vercel deployment

### Phase 2: Core Features (Week 2)

- [ ] Habit creation form with validation
- [ ] Dashboard habit display
- [ ] Daily check-in functionality
- [ ] Habit deletion with confirmation
- [ ] Test suite implementation

### Phase 3: Analytics (Week 3)

- [ ] Habit detail pages/modals
- [ ] Calendar heatmap component
- [ ] Statistics dashboard
- [ ] Per-habit analytics
- [ ] Visual refinement

### Phase 4: Polish & Deploy (Week 4)

- [ ] Dark mode implementation
- [ ] Mobile responsiveness optimization
- [ ] Error handling and edge cases
- [ ] Performance optimization
- [ ] Final testing and deployment
- [ ] Documentation completion

## 🎯 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── NavBar.astro
│   ├── LoginButton.astro
│   └── Userinfo.astro
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # File-based routing
│   ├── index.astro     # Landing page
│   ├── login.astro     # Authentication
│   ├── dashboard/      # Protected dashboard
│   └── api/            # API endpoints
├── db/                 # Database configuration
│   ├── schemas/        # Database schemas
│   └── migrations/     # Database migrations
└── lib/                # Utility functions
    ├── auth.ts         # Authentication setup
    └── auth-client.ts  # Client-side auth
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run db:generate  # Generate database types
npm run db:migrate   # Run database migrations
npm run db:push      # Push schema to database
npm run db:studio    # Open database studio
```

## 🌟 Key Features Explained

### Authentication

- Google OAuth integration via Better Auth
- Automatic user creation on first login
- Session management and protected routes
- User profile display with avatar

### Habit Management

- Create habits with name and optional description
- View all habits on dashboard with current status
- Delete habits with confirmation dialog
- Real-time streak calculation

### Analytics

- Personal dashboard with summary statistics
- Per-habit completion percentages (7-day, 30-day)
- Calendar heatmap showing 30-day history
- Longest streak tracking across all habits

### Design System

- Mobile-first responsive design
- DaisyUI component library
- Dark/light theme support
- WCAG AA accessibility compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) for the amazing framework
- [Turso](https://turso.tech/) for the edge database
- [Drizzle](https://orm.drizzle.team/) for the type-safe ORM
- [Better Auth](https://better-auth.com/) for authentication
- [DaisyUI](https://daisyui.com/) for beautiful components

## 📞 Support

If you have questions or need help:

- 📧 Email: your-email@example.com
- 💬 Discord: [Join our community](https://discord.gg/habityco)
- 🐛 Issues: [GitHub Issues](https://github.com/torresposso/habityco/issues)

---

**Built with ❤️ by [Your Name](https://github.com/torresposso)**

_Ready to build better habits? Start tracking today! 🚀_
