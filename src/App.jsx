import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { ApplicationsList } from './components/Applications/ApplicationsList';
import { SkillsGrid } from './components/Skills/SkillsGrid';
import { AppProvider } from './context/AppContext';
import './styles/globals.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'applications':
        return <ApplicationsList />;
      case 'skills':
        return <SkillsGrid />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <AppProvider>
      <div className={isDarkMode ? 'dark' : ''}>
        <Header
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
        <main className="bg-primary-50 min-h-screen">
          {renderPage()}
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
