interface NavigationProps {
  activeSection: string;
  scrollProgress: number;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ activeSection, scrollProgress, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm border-b z-50" style={{
      background: scrollProgress < 0.5 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.95)'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Законы Ньютона</h1>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('laws')}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 ${
                activeSection === 'laws' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Законы
            </button>
            <button
              onClick={() => scrollToSection('examples')}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 ${
                activeSection === 'examples' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Примеры
            </button>
            <button
              onClick={() => scrollToSection('videos')}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 ${
                activeSection === 'videos' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Видео
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
