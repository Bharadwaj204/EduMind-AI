# 🧠 EduMind AI - Personalized Learning Platform

A modern, AI-powered educational platform that adapts to your learning style and provides personalized tutoring, smart quizzes, and comprehensive analytics.

![EduMind AI](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css)

## ✨ Features

### 🤖 AI-Powered Learning
- **Smart AI Tutor**: Chat-based learning companion for any subject
- **Adaptive Quizzes**: AI-generated quizzes that match your skill level
- **Personalized Recommendations**: Learning paths tailored to your progress

### 📊 Progress Tracking
- **Real-time Analytics**: Track study time, scores, and learning patterns
- **Subject Progress**: Visual progress bars for each learning area
- **Achievement System**: Gamified learning with badges and milestones
- **Learning Streaks**: Maintain motivation with daily learning streaks

### 🎯 Interactive Learning
- **Multi-subject Support**: Mathematics, Science, Programming, Literature, History, Art
- **Difficulty Levels**: Beginner, Intermediate, and Advanced content
- **Visual Learning**: Charts, graphs, and interactive elements
- **Quick Actions**: Easy access to common learning tasks

### 📱 Modern Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Beautiful UI**: Modern gradient design with smooth animations
- **Intuitive Navigation**: Easy-to-use sidebar and header navigation
- **Dark/Light Mode Ready**: Built with accessibility in mind

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edumind-ai-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ai/             # AI tutor and chat components
│   ├── analytics/      # Analytics and charts
│   ├── common/         # Shared components (Header, Sidebar)
│   ├── dashboard/      # Dashboard and stats components
│   ├── quiz/           # Quiz generation and taking
│   ├── subjects/       # Subject management
│   └── achievements/   # Achievement system
├── data/               # Mock data and sample content
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Linting**: ESLint with TypeScript support

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Add any environment variables here
VITE_APP_TITLE=EduMind AI
```

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`.

### TypeScript
TypeScript configuration is split across multiple files:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js specific settings

## 📊 Features in Detail

### AI Tutor
- Chat-based interface for asking questions
- Support for multiple subjects
- Quick prompt suggestions
- Real-time responses (simulated)

### Smart Quizzes
- AI-generated questions based on subject and difficulty
- Multiple choice format with explanations
- Real-time scoring and feedback
- Progress tracking

### Analytics Dashboard
- Study time tracking
- Performance metrics
- Subject distribution charts
- Progress trends over time
- AI-powered insights

### Achievement System
- Unlockable badges for milestones
- Progress tracking
- Motivation through gamification

## 🎯 Learning Subjects

The platform supports learning in various subjects:

- **Mathematics** 📊 - Algebra, Calculus, Statistics
- **Science** 🧪 - Physics, Chemistry, Biology
- **Programming** 💻 - JavaScript, Python, Web Development
- **Literature** 📚 - Reading, Writing, Analysis
- **History** 🕐 - World History, Events, Figures
- **Art** 🎨 - Creative Expression, Design

## 🔮 Future Enhancements

- [ ] Real AI integration (OpenAI, Groq, etc.)
- [ ] User authentication and profiles
- [ ] Database integration
- [ ] Real-time collaboration
- [ ] Mobile app development
- [ ] Advanced analytics
- [ ] Custom learning paths
- [ ] Social learning features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ for better education** 