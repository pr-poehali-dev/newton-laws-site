import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / scrollHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const laws = [
    {
      number: 1,
      title: 'Первый закон Ньютона',
      subtitle: 'Закон инерции',
      description: 'Всякое тело продолжает удерживаться в состоянии покоя или равномерного прямолинейного движения, пока и поскольку оно не понуждается приложенными силами изменить это состояние.',
      formula: 'ΣF = 0 ⇒ v = const',
      icon: 'Rocket'
    },
    {
      number: 2,
      title: 'Второй закон Ньютона',
      subtitle: 'Основной закон динамики',
      description: 'Ускорение тела прямо пропорционально приложенной к нему силе и обратно пропорционально его массе. Сила равна произведению массы на ускорение.',
      formula: 'F = ma',
      icon: 'Zap'
    },
    {
      number: 3,
      title: 'Третий закон Ньютона',
      subtitle: 'Закон действия и противодействия',
      description: 'Действию всегда есть равное и противоположное противодействие. Силы, с которыми два тела действуют друг на друга, равны по модулю и противоположны по направлению.',
      formula: 'F₁ = -F₂',
      icon: 'ArrowLeftRight'
    }
  ];

  const examples = [
    {
      title: 'Движение автомобиля',
      law: 'Первый закон',
      description: 'Когда автомобиль резко тормозит, пассажиры продолжают двигаться вперёд по инерции. Поэтому необходимо пристёгиваться ремнём безопасности.',
      icon: 'Car'
    },
    {
      title: 'Запуск ракеты',
      law: 'Второй закон',
      description: 'Чем больше масса ракеты, тем большая сила двигателя нужна для её ускорения. Ускорение обратно пропорционально массе.',
      icon: 'Rocket'
    },
    {
      title: 'Отдача при выстреле',
      law: 'Третий закон',
      description: 'При выстреле из ружья пуля летит вперёд, а стрелок ощущает отдачу назад. Это проявление равных и противоположных сил.',
      icon: 'Target'
    },
    {
      title: 'Ходьба человека',
      law: 'Третий закон',
      description: 'Когда мы идём, мы отталкиваемся ногой от земли назад, а земля толкает нас вперёд с равной силой.',
      icon: 'FootprintsIcon'
    },
    {
      title: 'Плавание',
      law: 'Третий закон',
      description: 'Пловец отталкивает воду назад, и вода толкает его вперёд. Действие и противодействие.',
      icon: 'Waves'
    },
    {
      title: 'Торможение поезда',
      law: 'Второй закон',
      description: 'Чем больше масса поезда, тем больший тормозной путь ему требуется при одинаковой силе торможения.',
      icon: 'Train'
    }
  ];

  const videos = [
    {
      title: 'Законы Ньютона простыми словами',
      url: 'https://www.youtube.com/embed/kKKM8Y-u7ds',
      description: 'Понятное объяснение всех трёх законов Ньютона с наглядными примерами'
    },
    {
      title: 'Эксперименты с законами Ньютона',
      url: 'https://www.youtube.com/embed/1ksm2u0AAII',
      description: 'Интересные физические эксперименты, демонстрирующие законы механики'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <div 
        className="fixed inset-0 transition-opacity duration-1000 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(10, 10, 30, ${Math.max(0, 1 - scrollProgress * 1.5)}) 0%, 
            rgba(15, 20, 45, ${Math.max(0, 0.9 - scrollProgress * 1.3)}) 20%,
            rgba(20, 30, 60, ${Math.max(0, 0.8 - scrollProgress * 1.2)}) 35%,
            rgba(25, 50, 100, ${Math.max(0, 0.7 - scrollProgress * 1.0)}) 45%,
            rgba(40, 60, 120, ${Math.min(0.9, Math.max(0, scrollProgress - 0.2) * 2)}) 55%,
            rgba(60, 80, 140, ${Math.min(0.9, Math.max(0, scrollProgress - 0.3) * 2)}) 65%,
            rgba(100, 130, 180, ${Math.min(0.8, Math.max(0, scrollProgress - 0.4) * 2)}) 75%,
            rgba(135, 170, 210, ${Math.min(0.7, Math.max(0, scrollProgress - 0.45) * 2)}) 82%,
            rgba(140, 120, 90, ${Math.min(0.3, Math.max(0, scrollProgress - 0.5) * 1.5)}) 88%,
            rgba(110, 150, 90, ${Math.min(0.4, Math.max(0, scrollProgress - 0.55) * 1.5)}) 95%,
            rgba(90, 140, 80, ${Math.min(0.5, Math.max(0, scrollProgress - 0.6) * 1.5)}) 100%
          )`,
          opacity: 1
        }}
      />
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: scrollProgress > 0.3 ? `
            radial-gradient(circle at 80% 25%, rgba(255, 220, 100, ${Math.min(0.9, Math.max(0, scrollProgress - 0.3) * 3)}) 0%, rgba(255, 240, 150, ${Math.min(0.6, Math.max(0, scrollProgress - 0.3) * 2)}) 3%, transparent 8%),
            radial-gradient(circle at 20% 80%, rgba(255,255,255,${Math.min(0.8, Math.max(0, scrollProgress - 0.5) * 2)}) 0%, transparent 15%),
            radial-gradient(circle at 60% 85%, rgba(255,255,255,${Math.min(0.7, Math.max(0, scrollProgress - 0.5) * 2)}) 0%, transparent 20%),
            radial-gradient(circle at 85% 75%, rgba(255,255,255,${Math.min(0.6, Math.max(0, scrollProgress - 0.5) * 2)}) 0%, transparent 18%),
            radial-gradient(circle at 40% 90%, rgba(255,255,255,${Math.min(0.9, Math.max(0, scrollProgress - 0.5) * 2)}) 0%, transparent 12%)
          ` : 'none',
          opacity: 1
        }}
      />
      <div 
        className="fixed pointer-events-none"
        style={{
          width: '150px',
          height: '150px',
          top: '20%',
          right: '15%',
          background: 'radial-gradient(circle, rgba(255, 255, 100, 0.4) 0%, transparent 70%)',
          opacity: scrollProgress > 0.3 && scrollProgress < 0.7 ? Math.min(1, (scrollProgress - 0.3) * 3) : 0,
          filter: 'blur(30px)',
          transition: 'opacity 500ms'
        }}
      />
      {Array.from({ length: 100 }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const topPos = Math.random() * 100;
        const leftPos = Math.random() * 100;
        const animDuration = Math.random() * 3 + 2;
        return (
          <div
            key={i}
            className="fixed rounded-full bg-white pointer-events-none"
            style={{
              width: size + 'px',
              height: size + 'px',
              top: topPos + '%',
              left: leftPos + '%',
              opacity: Math.max(0, Math.min(1, (0.3 - scrollProgress) * 3)),
              animation: `twinkle ${animDuration}s infinite`,
              transition: 'opacity 800ms ease-out',
              willChange: 'opacity'
            }}
          />
        );
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const startX = 20 + Math.random() * 60;
        const startY = 10 + Math.random() * 30;
        const duration = 2 + Math.random() * 1.5;
        const delay = i * 1.5 + Math.random() * 2;
        return (
          <div
            key={`meteor-${i}`}
            className="fixed pointer-events-none transition-opacity duration-500"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              opacity: Math.max(0, Math.min(1, (0.25 - scrollProgress) * 4)),
              animation: `shootingStar ${duration}s ease-in ${delay}s infinite`
            }}
          >
            <div 
              className="relative"
              style={{
                width: '5px',
                height: '5px',
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 15px 3px rgba(255,255,255,1), 0 0 30px 6px rgba(200,200,255,0.6), 0 0 50px 10px rgba(150,150,255,0.3)'
              }}
            >
              <div 
                className="absolute"
                style={{
                  width: '120px',
                  height: '2px',
                  background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.6) 30%, transparent)',
                  top: '0',
                  left: '0',
                  transform: 'rotate(-135deg)',
                  transformOrigin: 'left top',
                }}
              />
            </div>
          </div>
        );
      })}
      {Array.from({ length: 5 }).map((_, i) => {
        const startX = 10 + Math.random() * 80;
        const startY = 5 + Math.random() * 20;
        const duration = 15 + Math.random() * 10;
        const delay = i * 5;
        return (
          <div
            key={`satellite-${i}`}
            className="fixed pointer-events-none transition-opacity duration-500"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              opacity: Math.max(0, Math.min(1, (0.25 - scrollProgress) * 4)),
              animation: `satelliteMove ${duration}s linear ${delay}s infinite`
            }}
          >
            <div 
              className="relative flex items-center gap-1"
            >
              <div 
                style={{
                  width: '8px',
                  height: '6px',
                  background: 'linear-gradient(135deg, rgba(200,200,255,0.9), rgba(150,150,200,0.8))',
                  borderRadius: '2px',
                  boxShadow: '0 0 8px 2px rgba(150,150,255,0.5)'
                }}
              />
              <div 
                style={{
                  width: '12px',
                  height: '1px',
                  background: 'rgba(100,150,255,0.6)'
                }}
              />
              <div 
                style={{
                  width: '12px',
                  height: '1px',
                  background: 'rgba(100,150,255,0.6)'
                }}
              />
            </div>
          </div>
        );
      })}
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

      <section id="home" className="pt-32 pb-20 px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          visibleSections.has('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
            color: scrollProgress < 0.5 ? 'white' : 'hsl(220, 20%, 10%)'
          }}>
            Три закона, изменившие мир
          </h2>
          <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto" style={{
            color: scrollProgress < 0.5 ? 'rgba(255, 255, 255, 0.9)' : 'hsl(215.4, 16.3%, 46.9%)'
          }}>
            Исаак Ньютон сформулировал три фундаментальных закона механики,
            которые легли в основу классической физики и описывают движение
            всех объектов — от яблок до планет.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('laws')}
            className="gap-2"
          >
            Изучить законы
            <Icon name="ArrowDown" size={20} />
          </Button>
        </div>
      </section>

      <section id="laws" className="py-20 px-6 bg-secondary/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-all duration-700 ${
            visibleSections.has('laws') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Три закона Ньютона</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {laws.map((law, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                  visibleSections.has('laws') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={law.icon} size={32} className="text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      {law.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{law.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {law.description}
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Формула:</div>
                    <div className="text-2xl font-mono font-semibold text-primary">
                      {law.formula}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-700 ${
            visibleSections.has('examples') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Примеры применения</h2>
          <p className={`text-center text-muted-foreground mb-16 text-lg transition-all duration-700 delay-100 ${
            visibleSections.has('examples') ? 'opacity-100' : 'opacity-0'
          }`}>
            Законы Ньютона окружают нас повсюду в повседневной жизни
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((example, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                  visibleSections.has('examples') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={example.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-xs font-semibold text-primary mb-2">
                    {example.law}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{example.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {example.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 px-6 bg-secondary/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-700 ${
            visibleSections.has('videos') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Видеоматериалы</h2>
          <p className={`text-center text-muted-foreground mb-16 text-lg transition-all duration-700 delay-100 ${
            visibleSections.has('videos') ? 'opacity-100' : 'opacity-0'
          }`}>
            Наглядные объяснения и эксперименты
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {videos.map((video, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                  visibleSections.has('videos') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground">{video.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            И.П. 2026 Прокошина Никиты
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;