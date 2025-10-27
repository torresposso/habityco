# Product Requirements Document (PRD)

## HabityCo – Individual Habit Tracker MVP

**Version:** 1.0
**Date:** October 24, 2025
**Status:** Ready for Development
**Target Launch:** November 21, 2025 (4 weeks)

---

## Executive Summary

HabityCo is a personal habit tracking application that enables users to create daily habits, track completion streaks, and view analytics through a clean, responsive web interface. Built with modern full-stack technologies (Astro, HTMX, Drizzle, Turso), this MVP demonstrates professional development practices and full-stack capabilities suitable for a portfolio project.

**Key Differentiator:** Simplicity + polish over feature complexity. Every feature is essential; nothing is extraneous.

---

## Product Goals

1. **Functional Goal:** Enable users to track daily habits with visual streaks and basic analytics
2. **Portfolio Goal:** Showcase full-stack development competency using modern tech stack
3. **Code Quality Goal:** Demonstrate professional practices (planning, testing, clean code)
4. **Delivery Goal:** Ship a complete, production-ready MVP in exactly 4 weeks

---

## User Persona

**Name:** Alex (28 years old)
**Background:** Busy professional wanting to build consistent habits
**Pain Point:** Lacks accountability and visibility into progress
**Goal:** Build 3-5 habits (fitness, reading, meditation) and maintain consistent streaks
**Device:** Primarily mobile, sometimes desktop

---

## Core User Flows

### Flow 1: New User Onboarding

```
1. Land on app
2. Click "Sign in with Google"
3. Authenticate via Google OAuth
4. See empty dashboard
5. Click "Create First Habit"
6. Enter habit name
7. Habit appears on dashboard
8. See check-in button ready for today
```

### Flow 2: Daily User Routine

```
1. Log in with Google
2. See dashboard with all habits
3. View today's status (completed/not completed)
4. Click habit to check in for today
5. Streak updates and displays
6. Click habit name to view calendar/analytics
7. Logout
```

### Flow 3: Habit Management

```
1. View all habits on dashboard
2. Click on habit for details
3. See calendar heatmap and statistics
4. Option to delete habit
5. Return to dashboard
```

---

## Feature Set (MVP Only)

### ✅ INCLUDED Features

#### 1. Authentication

- **Google OAuth via Better Auth**
  - Users sign in with Google account
  - Automatic user creation on first login
  - Session management and logout
  - User profile display (name, avatar)
  - Protected routes (only authenticated users see dashboard)

#### 2. Habit Management

- **Create Habit**
  - Enter habit name (required, 3-50 characters)
  - Optional description (max 200 characters)
  - Habit created with timestamp
  - Displayed on dashboard immediately

- **View Habits**
  - Dashboard shows all user's habits
  - Each habit displays:
    - Name
    - Current streak (days)
    - Today's check-in status (completed/pending)
  - Sort by creation date (newest first)

- **Delete Habit**
  - Users can delete any habit
  - Confirmation dialog prevents accidents
  - All related check-in data deleted
  - Other habits unaffected

#### 3. Daily Check-in System

- **Check-in Functionality**
  - One-click "Check In" button per habit
  - Only one check-in allowed per habit per day
  - After check-in, button shows "Done for today"
  - Updating streak calculation in real-time
  - No double-submission possible

- **Check-in Status Display**
  - Visual indicator: ✓ (completed) or empty (pending)
  - Quick glance at daily progress
  - Time-aware: "Check in" button only available during calendar day

#### 4. Streak Tracking

- **Streak Definition**
  - Consecutive days where habit was checked in
  - Resets to 0 if user misses a day
  - Displays as number with 🔥 emoji

- **Display Locations**
  - Dashboard habit card (prominent)
  - Habit detail view (full statistics)
  - Calendar heatmap (visual history)

#### 5. Basic Analytics

- **Personal Dashboard Statistics**
  - Total habits count
  - Longest current streak (across all habits)
  - Average completion rate (last 7 days)

- **Per-Habit Analytics** (in habit detail view)
  - Current streak
  - Completion percentage (last 7 days)
  - Completion percentage (last 30 days)
  - Total check-ins (all-time)
  - First check-in date

- **Calendar Heatmap** (habit detail view)
  - Visual 30-day calendar grid
  - Green = checked in that day
  - Gray = missed that day
  - Hover tooltip shows date and details
  - Legend explaining color coding

#### 6. Responsive Design

- **Mobile-First Approach**
  - Primary design targets mobile (iPhone, Android)
  - Works perfectly on screens 320px+ (minimum iPhone SE)
  - Touch targets minimum 44px (accessibility)
  - Readable text without zooming

- **Desktop Support**
  - Multi-column layout on larger screens
  - Same functionality, optimized spacing
  - Tested at 1024px, 1440px, 2560px

- **Tablet Support**
  - Tested at iPad dimensions (768px, 1024px)
  - Balanced layout for landscape and portrait

#### 7. Dark Mode

- **Theme Toggle**
  - Button in header/navigation
  - Toggles between light and dark theme
  - Preference persisted to browser (localStorage)
  - Applies to all components

- **Theme Support**
  - Light theme: Clean, professional appearance
  - Dark mode: Eye-friendly, low blue light
  - Both meet WCAG AA color contrast requirements
  - DaisyUI native theme support

#### 8. User Profile

- **Profile Display**
  - Name (from Google account)
  - Avatar image (from Google account)
  - Email address (read-only)
  - Logout button

#### 9. Error Handling

- **User-Friendly Errors**
  - Form validation errors (habit name required, length limits)
  - Network error messages
  - Database error handling (graceful degradation)
  - 404 pages for non-existent habits
  - Clear, helpful error text

- **Toast Notifications**
  - Success: "Habit created" / "Check-in recorded" / "Habit deleted"
  - Error: "Something went wrong, please try again"
  - Auto-dismiss after 3-5 seconds

---

### ❌ NOT INCLUDED (Post-MVP)

- ❌ Habit categories or tags
- ❌ Reminders or notifications
- ❌ Notes or details on check-ins
- ❌ Multiple check-ins per day
- ❌ Weekly/monthly habit frequencies (daily only)
- ❌ Habit editing (only create/delete)
- ❌ Photo/proof uploads
- ❌ Social sharing or comparison
- ❌ Gamification (badges, points, leaderboards)
- ❌ Data export
- ❌ Mobile app (web-only)
- ❌ Integration with external services

---

## Technical Requirements

### Tech Stack

| Component              | Technology                 | Rationale                                     |
| ---------------------- | -------------------------- | --------------------------------------------- |
| **Frontend Framework** | Astro + HTMX               | Server-side rendering, minimal JavaScript     |
| **Runtime**            | Node.js (Astro SSR)        | Full-stack capability                         |
| **Interactivity**      | HTMX                       | Lightweight AJAX without React/Vue bloat      |
| **Database**           | Turso (SQLite)             | Edge-ready, globally distributed              |
| **ORM**                | Drizzle                    | Type-safe, TypeScript-first                   |
| **Authentication**     | Better Auth + Google OAuth | Production-ready, secure                      |
| **Styling**            | Tailwind CSS + DaisyUI     | Fast component development, consistent design |
| **Language**           | TypeScript                 | Type safety throughout                        |
| **Deployment**         | Vercel                     | Astro-native, free tier, custom domain ready  |

### Database Schema (Minimal)

```
USERS (Managed by Better Auth)
├─ id: uuid
├─ name: string
├─ email: string (unique)
├─ image: string (avatar URL)
└─ created_at: timestamp

HABITS (Custom)
├─ id: uuid
├─ user_id: uuid (FK → USERS)
├─ name: string (required, 3-50 chars)
├─ description: string (optional, max 200 chars)
├─ created_at: timestamp
└─ active: boolean

CHECKINS (Custom)
├─ id: uuid
├─ habit_id: uuid (FK → HABITS)
├─ user_id: uuid (FK → USERS)
├─ date: date (YYYY-MM-DD format)
├─ completed: boolean
└─ UNIQUE(habit_id, date)
```

### Key Calculations

**Streak:** Count consecutive days from today backwards where `checkins.completed = true`

**Completion %:** `(completed_checkins / total_days) × 100`

**Reset conditions:**

- Miss one day → streak resets to 0
- Delete habit → all related check-ins deleted

---

## Page Structure

### Public Pages

- **Landing/Login Page** (minimal, optional for MVP)
  - App description
  - "Sign in with Google" button

### Authenticated Pages

- **Dashboard** (primary page)
  - User greeting
  - Statistics summary
  - All habits list with quick check-in
  - "Create New Habit" button
  - Dark mode toggle
  - User profile menu (logout)

- **Habit Detail** (modal or separate page)
  - Habit name and description
  - Current streak (prominent)
  - Calendar heatmap (30 days)
  - Statistics (7-day, 30-day completion %)
  - Delete habit button
  - Back/close button

- **Settings** (optional, minimal)
  - Profile information (read-only from Google)
  - Theme preference
  - Logout button

---

## User Interface Components (DaisyUI)

### Cards

- Habit cards on dashboard with check-in button
- Statistics cards
- Profile card

### Buttons

- "Check In" button (primary action)
- "Create Habit" button
- "Delete Habit" button (danger style)
- Theme toggle
- Sign in / Logout buttons

### Forms

- Habit creation form (name + optional description)
- Validation feedback (inline error messages)

### Modals

- Habit detail view (calendar + analytics)
- Delete confirmation dialog
- Create habit form (optional)

### Visual Elements

- Calendar heatmap (30-day grid)
- Progress indicators (streak counter)
- Loading spinners (during API calls)
- Empty states (no habits, no data)

### Accessibility

- ARIA labels on all buttons
- Semantic HTML
- Color contrast WCAG AA
- Keyboard navigation
- Mobile touch-friendly (44px+ targets)

---

## Development Phases & Milestones

### Phase 1: Foundation (Week 1)

**Goal:** Infrastructure setup, ready to build features

**Deliverables:**

- [ ] Astro project initialized with Node adapter
- [ ] TypeScript strict mode configured
- [ ] Turso database created, connected
- [ ] Drizzle schema defined and migrated
- [ ] Better Auth configured with Google OAuth
- [ ] Tailwind + DaisyUI integrated
- [ ] Protected route middleware working
- [ ] User authentication flow end-to-end tested
- [ ] Project deployed to Vercel (empty state)

**Success Criteria:**

- User can sign in with Google
- User can access dashboard (empty state)
- Environment variables configured
- No errors in browser console

---

### Phase 2: Core Features (Week 2)

**Goal:** Working habit tracker with basic functionality

**Deliverables:**

- [ ] Create habit form with Astro Actions
  - Form validation (Zod schema)
  - HTMX form submission
  - Real-time validation feedback
  - Success/error toast notifications

- [ ] Display habits on dashboard
  - Query user's habits
  - Render habit cards with DaisyUI
  - Show today's check-in status
  - Update without page reload

- [ ] Daily check-in functionality
  - Check-in button (Astro Action)
  - Prevent double-submission
  - Update UI optimistically
  - Streak calculation on check-in

- [ ] Delete habit functionality
  - Confirmation dialog
  - Delete from database
  - Remove from UI
  - Cascade delete check-ins

- [ ] Test suite for Week 2 work
  - Form validation tests
  - Streak calculation tests
  - Check-in flow tests

**Success Criteria:**

- User can create 3+ habits
- All habits persist across page reloads
- Streaks calculate correctly
- No duplicate check-ins
- Mobile layout looks good
- Zero console errors

---

### Phase 3: Analytics (Week 3)

**Goal:** Habit detail page with visual analytics

**Deliverables:**

- [ ] Habit detail page / modal
  - Display habit name, description
  - Show current streak (prominent)
  - Display all statistics

- [ ] Calendar heatmap component
  - 30-day calendar grid
  - Green = checked in, gray = missed
  - Hover tooltip with date + details
  - Legend for color coding
  - Responsive on mobile

- [ ] Statistics dashboard
  - Total habits count
  - Longest current streak
  - Average completion rate (last 7 days)
  - Average completion rate (last 30 days)

- [ ] Per-habit statistics
  - Completion percentage (7 days)
  - Completion percentage (30 days)
  - Total check-ins (all-time)
  - First check-in date
  - Habit creation date

- [ ] Visual refinement
  - Statistics cards with icons
  - Color-coded metrics
  - Clear typography hierarchy

**Success Criteria:**

- Habit detail page loads quickly (<500ms)
- Calendar heatmap displays correctly for all edge cases
- Statistics calculations are accurate
- Mobile-optimized layout works well
- All colors meet WCAG AA contrast

---

### Phase 4: Polish & Deploy (Week 4)

**Goal:** Production-ready, polished MVP ready for portfolio

**Deliverables:**

- [ ] Dark mode implementation
  - Toggle in header
  - Persist preference (localStorage)
  - All components tested in dark mode

- [ ] Mobile responsiveness refinement
  - Tested on iPhone SE (375px)
  - Tested on Pixel 6a (412px)
  - Tested on iPad (768px, 1024px)
  - Touch targets >= 44px
  - No horizontal scrolling

- [ ] Error handling & edge cases
  - Form validation edge cases
  - Deleted habits with existing check-ins
  - Large datasets (100+ habits)
  - Network failures
  - Session expiration

- [ ] Performance optimization
  - Lighthouse audit (target: 90+ score)
  - Database query optimization
  - Image optimization (profile avatars)
  - CSS/JS minification

- [ ] Final testing
  - Cross-browser testing (Chrome, Safari, Firefox, Edge)
  - Manual testing checklist
  - Accessibility audit (WCAG AA)
  - Security review

- [ ] Deployment
  - Production Vercel deployment
  - Environment variables secured
  - Custom domain (optional)
  - Demo user account
  - Monitoring/error tracking setup (Sentry optional)

- [ ] Documentation
  - Comprehensive README with:
    - Feature description
    - Tech stack justification
    - Setup instructions
    - Screenshots
    - Architecture notes
  - Inline code comments for complex logic
  - Environment variables documented

**Success Criteria:**

- App loads in <1 second
- No errors in production
- All features work on mobile/desktop/tablet
- Zero accessibility violations (WCAG AA)
- Code is clean, readable, well-commented
- README is comprehensive and professional

---

## Development Constraints

### Scope Constraints

- **4 weeks total development time** (no extensions)
- **Solo developer** (no team)
- **Daily habits only** (no weekly/monthly frequencies)
- **No social features** (individual tracking only)
- **No notifications** (user self-reminds)

### Technical Constraints

- **Astro as framework** (no React/Vue alternatives)
- **HTMX for interactivity** (not Alpine.js)
- **Turso as database** (single writer, edge architecture)
- **Better Auth for authentication** (no custom auth)
- **TypeScript strict mode** (enforced)

### Quality Constraints

- **TypeScript strict mode** required
- **Mobile-first design** (not desktop-first)
- **No external analytics** (privacy-first)
- **Accessibility WCAG AA minimum**
- **Test coverage on business logic** (70%+ target)

---

## Success Metrics

### Delivery Metrics

- ✅ All features from Phase 1-4 implemented
- ✅ Deployed to production by November 21, 2025
- ✅ All 20+ issues closed

### Quality Metrics

- ✅ Lighthouse score: 90+
- ✅ WCAG AA accessibility compliance
- ✅ TypeScript strict mode: 0 errors
- ✅ Console errors in production: 0
- ✅ Test coverage on business logic: 70%+

### Portfolio Metrics

- ✅ Professional README with tech justification
- ✅ GitHub Milestones: 4/4 complete
- ✅ 20+ issues with clear descriptions
- ✅ Clean commit history (linked to issues)
- ✅ Live demo with test account

### UX Metrics (self-assessment)

- ✅ Dashboard loads in <1 second
- ✅ Check-in completes in <500ms
- ✅ Mobile layout intentional and polished
- ✅ Dark mode works perfectly
- ✅ Error messages are helpful

---

## Assumptions & Dependencies

### Assumptions

- Google OAuth will be available and working
- Turso database service remains stable
- Vercel free tier sufficient for MVP
- No major browser incompatibilities

### Dependencies

- Google Cloud Console account (for OAuth credentials)
- Turso account (free tier)
- Vercel account (free tier)
- GitHub for version control

### Known Risks & Mitigations

| Risk                             | Probability | Impact | Mitigation                                         |
| -------------------------------- | ----------- | ------ | -------------------------------------------------- |
| Turso connection issues          | Low         | High   | Test connections early, have fallback local SQLite |
| HTMX learning curve              | Medium      | Medium | Reference docs upfront, test patterns early        |
| Mobile optimization takes longer | Medium      | High   | Design mobile-first from week 1                    |
| Scope creep                      | High        | High   | Ruthlessly defer all post-MVP features             |
| Deployment issues                | Low         | High   | Test Vercel deployment in week 1                   |

---

## Acceptance Criteria (MVP Complete)

The MVP is **done** when:

- ✅ All Phase 1-4 deliverables are shipped
- ✅ User can sign in, create habits, check in daily, view analytics
- ✅ App works on mobile (iPhone), desktop (Mac/PC), tablet (iPad)
- ✅ Dark mode works perfectly
- ✅ Zero errors in production
- ✅ Lighthouse score: 90+
- ✅ Professional README with screenshots
- ✅ GitHub Milestones show 100% completion
- ✅ Live demo at `habitycco.vercel.app` (or custom domain)
- ✅ Demo user account available for testing

---

## Post-MVP Roadmap (Future Releases)

- **v1.1:** Categories/tags, habit editing, habit import
- **v1.2:** Email reminders, push notifications
- **v1.3:** Public habits marketplace, habit suggestions
- **v1.4:** Community features (leaderboards, challenges)
- **v2.0:** Mobile app, offline capability, advanced analytics

---

## Sign-Off

**PRD Owner:** Full Stack Developer
**Review Date:** October 24, 2025
**Status:** ✅ Ready for Development
**Next Step:** Create GitHub Milestones and Issues from this PRD

---

## Appendix: Glossary

- **Habit:** A daily action user wants to track (e.g., "Morning Run")
- **Check-in:** User marking that they completed the habit on a given day
- **Streak:** Consecutive days of check-ins without missing
- **Heatmap:** Visual 30-day calendar showing completion history
- **Completion %:** Percentage of days user checked in (out of available days)
- **MVP:** Minimum Viable Product (4-week version 1.0)
- **Production:** Live, public version available to users
- **HTMX:** Lightweight library for AJAX requests without heavy JavaScript
- **Astro:** Modern frontend framework with server-side rendering
- **Turso:** Managed SQLite database service with global distribution
