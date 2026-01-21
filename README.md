# SkillBridge – Internship & Skill Tracker Dashboard

A modern, responsive web application designed to help aspiring interns and junior developers track their internship applications, monitor skill development, and visualize their career progress with an interactive dashboard.

**Live Demo:** [Coming Soon - Deploy to Vercel]

## 🎯 Project Overview

SkillBridge solves a common problem for students and job seekers: managing the chaos of multiple internship applications while tracking skill development. The app provides a centralized dashboard to:

- ✅ Track internship applications across companies (status, dates, notes)
- 📊 Visualize application progress through interactive charts
- 🛠️ Maintain a portfolio of technical skills with proficiency levels
- 📈 Monitor growth and stay motivated with real-time statistics
- 💾 Persist data locally with automatic save to browser storage

## 🚀 Features

### Core Features (MVP)
- **Application Tracking** - Add, edit, delete internship applications with status tracking (Applied → Reviewing → Interviewed → Offered/Rejected)
- **Skills Portfolio** - Manage technical and soft skills with proficiency levels (1-5 scale)
- **Dashboard Overview** - Real-time stats, status breakdown charts, recent activity feed
- **Local Data Persistence** - All data saved to localStorage automatically
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Modern UI** - Clean, professional interface with smooth animations

### Nice-to-Have Features
- Dark mode toggle
- Search and filter applications
- Interview preparation checklist
- Application funnel visualization
- Keyboard shortcuts for power users

## 🛠️ Tech Stack

**Frontend:**
- **React 18** - UI library with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Interactive data visualizations
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Lucide Icons** - Beautiful SVG icons
- **Context API + useReducer** - State management

**Data:**
- **localStorage** - Client-side persistence (no backend required)

**Deployment:**
- **Vercel** - Fast, serverless deployment with automatic GitHub integration

## 📋 Project Structure

```
skillbridge/
├── src/
│   ├── components/
│   │   ├── Common/              # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Select.jsx
│   │   │   └── Modal.jsx
│   │   ├── Dashboard/           # Dashboard page
│   │   │   ├── Dashboard.jsx
│   │   │   └── StatCard.jsx
│   │   ├── Applications/        # Application tracking
│   │   │   ├── ApplicationsList.jsx
│   │   │   ├── ApplicationCard.jsx
│   │   │   └── ApplicationModal.jsx
│   │   ├── Skills/              # Skills management
│   │   │   ├── SkillsGrid.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   └── SkillModal.jsx
│   │   ├── Charts/              # Data visualizations
│   │   │   └── StatusBreakdownChart.jsx
│   │   └── Header.jsx           # Navigation header
│   ├── context/
│   │   ├── AppContext.jsx       # Context provider
│   │   └── appReducer.js        # State reducer logic
│   ├── hooks/
│   │   ├── useAppContext.js
│   │   ├── useApplications.js
│   │   └── useSkills.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── formatters.js
│   │   └── validators.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.tsx
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Clone the repository** (or download the project)
   ```bash
   git clone https://github.com/yourusername/skillbridge.git
   cd skillbridge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

## 📖 Usage

### Adding an Application
1. Click "Add Application" button on the Applications page
2. Fill in company name, position, date, status, and optional details
3. Click "Add Application" to save

### Managing Skills
1. Go to the Skills page
2. Click "Add Skill" to create a new skill entry
3. Set proficiency level using the slider (1=Beginner, 5=Expert)
4. Optionally add learning resources
5. Edit or delete skills anytime

### Dashboard Insights
- View real-time statistics (total applications, interviews, offers)
- See application status distribution in the pie chart
- Monitor recent activity
- Check skill summary and growth

## 🎨 Design & Styling

**Color Scheme (Tech Blue Theme):**
- Primary Navy: `#0F172A`
- Secondary Blue: `#3B82F6`
- Success Green: `#10B981`
- Warning Amber: `#F59E0B`
- Danger Red: `#EF4444`

**Design Principles:**
- Clean, modern aesthetic inspired by contemporary SaaS products
- Responsive mobile-first design
- Accessible components with semantic HTML
- Smooth transitions and micro-interactions

## 🔄 Data Structure

### Application Schema
```javascript
{
  id: "unique-id",
  company: "Google",
  position: "Frontend Engineer Intern",
  dateApplied: "2025-01-21",
  status: "interviewed",
  location: "Mountain View, CA",
  jobUrl: "https://...",
  notes: "Interview scheduled for Jan 28"
}
```

### Skill Schema
```javascript
{
  id: "unique-id",
  name: "React",
  category: "frontend",
  level: 4,
  dateAdded: "2025-01-01",
  lastUpdated: "2025-01-21",
  resources: [
    { title: "React Official Docs", url: "https://react.dev" }
  ]
}
```

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and adapt it for your own use!

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙋 About

Built as a portfolio project to demonstrate modern React development practices, including:
- Component architecture and reusability
- State management with Context API and useReducer
- Custom hooks for logic extraction
- Responsive design with Tailwind CSS
- Form validation and error handling
- Data persistence with localStorage
- Interactive data visualizations
- Production-ready deployment

## 📞 Contact

Have questions or feedback? Feel free to reach out!

---

**Made with ❤️ for aspiring interns and junior developers**
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
