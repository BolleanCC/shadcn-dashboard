# shadcn Dashboard

A modern, feature-rich admin dashboard built with Next.js 15, shadcn/ui, and TypeScript. This project showcases a complete UI/UX implementation with user management, payments tracking, data visualization, and a responsive design system.

## Features

### Core Functionality
- **User Management System**
  - Browse all users with searchable, filterable grid layout
  - Dynamic user profiles with unique badges, avatars, and activity metrics
  - Profile completion tracking
  - Real-time search across name, email, role, and location
  - 12 pre-populated demo users with realistic data

- **Payments Dashboard**
  - Interactive data table with sorting and filtering
  - Payment status tracking (pending, success, failed)
  - Pagination support
  - Detailed transaction information

- **Data Visualization**
  - Bar charts for transaction analytics
  - Area charts for trend analysis
  - Pie charts for category distribution
  - Line charts for user activity tracking
  - Built with Recharts library

- **Navigation System**
  - Quick access cards on homepage for direct navigation
  - Breadcrumb navigation for easy page hierarchy tracking
  - Responsive sidebar with collapsible sections
  - Sticky navbar with theme toggle

### UI/UX Features
- **Dark/Light Theme Support** - System-aware theme switching with next-themes
- **Responsive Design** - Mobile-first approach with breakpoints for all screen sizes
- **Smooth Animations** - Hover effects, transitions, and scale animations
- **Modern Components** - Built entirely with shadcn/ui component library
- **Professional Avatars** - Real human photos from Unsplash API
- **Badge System** - Dynamic user badges with hover tooltips
- **Form Validation** - React Hook Form with Zod schema validation

## Tech Stack

### Framework & Language
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### UI & Styling
- **shadcn/ui** - High-quality, accessible component library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme switching functionality

### Data & Forms
- **Recharts** - Data visualization library
- **TanStack Table** - Powerful table library for React
- **React Hook Form** - Performant form management
- **Zod** - TypeScript-first schema validation
- **date-fns** - Modern JavaScript date utility library

### Development Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS processing and optimization
- **Turbopack** - Fast bundler for development

## Project Structure

```
shadcn-dashboard/
├── public/                      # Static assets
│   ├── *.svg                   # SVG icons and images
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with sidebar & navbar
│   │   ├── page.tsx           # Homepage with dashboard overview
│   │   ├── payments/
│   │   │   └── page.tsx       # Payments data table page
│   │   └── users/
│   │       ├── page.tsx       # Users list page with search
│   │       └── [username]/
│   │           └── page.tsx   # Dynamic single user profile page
│   │
│   ├── components/             # React components
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── table.tsx
│   │   │   └── ... (30+ UI components)
│   │   │
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx  # Theme context provider
│   │   │
│   │   ├── AppSidebar.tsx         # Main navigation sidebar
│   │   ├── Navbar.tsx             # Top navigation bar
│   │   ├── NavigationCards.tsx    # Homepage quick access cards
│   │   ├── AppBarChart.tsx        # Bar chart component
│   │   ├── AppAreaChart.tsx       # Area chart component
│   │   ├── AppPieChart.tsx        # Pie chart component
│   │   ├── AppLineChart.tsx       # Line chart component
│   │   ├── CardList.tsx           # Transaction/content card list
│   │   ├── TodoList.tsx           # Todo list component
│   │   ├── EditUser.tsx           # User edit form sheet
│   │   └── TablePagination.tsx    # Table pagination controls
│   │
│   ├── data/
│   │   └── users.ts               # Fake user data with TypeScript types
│   │
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions
│   │   └── utils.ts              # Helper functions (cn, etc.)
│   │
│   └── globals.css                # Global styles and Tailwind imports
│
├── package.json                   # Dependencies and scripts
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.mjs              # ESLint configuration
└── postcss.config.mjs             # PostCSS configuration
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shadcn-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
# Development with Turbopack (faster builds)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Pages & Routes

### Homepage (`/`)
- Dashboard overview with charts and analytics
- Quick access navigation cards for Payments and Users sections
- Bar chart, area chart, pie chart visualizations
- Latest transactions and popular content lists
- Todo list widget

### Payments Page (`/payments`)
- Sortable and filterable data table
- 34+ sample payment records
- Status indicators (pending, success, failed)
- User information with email addresses
- Pagination controls

### Users Page (`/users`)
- Grid layout with 12 user cards
- Real-time search across multiple fields
- User avatars with role badges
- Contact information (email, phone, location)
- Responsive grid (1-4 columns based on screen size)
- Empty state for no search results

### Single User Page (`/users/[username]`)
- Dynamic route for each user
- User profile with avatar and bio
- Dynamic badge system (1-4 badges per user)
- Profile completion progress bar
- User information card with editable form
- Recent transactions list
- User activity line chart
- Breadcrumb navigation

## Key Components

### Navigation
- **AppSidebar**: Collapsible sidebar with navigation menu
- **Navbar**: Top bar with breadcrumbs, search, and theme toggle
- **NavigationCards**: Quick access cards for major sections

### Data Visualization
- **AppBarChart**: Transaction analytics visualization
- **AppAreaChart**: Trend analysis over time
- **AppPieChart**: Category distribution
- **AppLineChart**: User activity tracking

### User Management
- **EditUser**: Form sheet for editing user information
- **User Cards**: Grid cards with avatars, badges, and details
- **User Profile**: Comprehensive user detail page

### Data Display
- **CardList**: Reusable list component for transactions/content
- **TodoList**: Task management widget
- **TablePagination**: Custom pagination for data tables

## Configuration

### Next.js Config (`next.config.ts`)
```typescript
{
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }
    ]
  }
}
```

### Theme Configuration
- Default theme: System preference
- Supports dark and light modes
- Persistent theme selection
- Smooth transitions between themes

### Sidebar State
- Persists sidebar open/closed state in cookies
- Responsive collapse on mobile devices

## Data Management

### User Data Structure
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  role: "Admin" | "Developer" | "Designer" | "Manager";
  avatar: string;
  initials: string;
  bio: string;
  joinedDate: string;
  profileCompletion: number;
  badges: {
    name: string;
    description: string;
    color: string;
  }[];
}
```

### Payment Data Structure
```typescript
interface Payment {
  id: string;
  amount: number;
  status: "pending" | "success" | "failed";
  username: string;
  email: string;
}
```

## Design System

### Color Palette
- Uses CSS variables for theme-aware colors
- Primary, secondary, accent colors
- Muted variants for backgrounds and text
- Destructive colors for errors/warnings

### Typography
- Primary font: Geist Sans
- Monospace font: Geist Mono
- Responsive font sizes
- Proper line heights and letter spacing

### Spacing
- Consistent spacing scale using Tailwind
- Responsive padding and margins
- Gap utilities for flex/grid layouts

### Components
- Rounded corners (rounded-md, rounded-lg)
- Soft shadows for elevation
- Smooth transitions and animations
- Hover states for interactive elements

## Development Notes

### Adding New Users
Edit `src/data/users.ts` to add or modify user data. Each user requires:
- Unique ID
- Complete profile information
- Array of badges
- Profile completion percentage (0-100)

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add `page.tsx` file
3. Update sidebar navigation in `AppSidebar.tsx`

### Customizing Theme
- Modify `src/app/globals.css` for theme colors
- Update Tailwind config for custom utilities
- Use CSS variables for consistency

### Adding UI Components
```bash
# Use shadcn CLI to add new components
npx shadcn@latest add [component-name]
```

## Performance Optimizations

- **Turbopack**: Fast development builds
- **Server Components**: Default RSC for better performance
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Google Fonts with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential features to add:
- Authentication system
- Real database integration
- User CRUD operations
- Advanced filtering and sorting
- Export data functionality
- Real-time notifications
- More chart types and customization
- Dashboard customization
- Mobile app version

## Contributing

This is a demo project showcasing modern web development practices. Feel free to fork and customize for your needs.

## License

This project is open source and available for educational and demonstration purposes.

## Credits

- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Avatars**: [Unsplash](https://unsplash.com/)
- **Framework**: [Next.js](https://nextjs.org/)

---

Built with ❤️ using Next.js and shadcn/ui
