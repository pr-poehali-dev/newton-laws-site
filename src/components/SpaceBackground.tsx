interface SpaceBackgroundProps {
  scrollProgress: number;
}

const SpaceBackground = ({ scrollProgress }: SpaceBackgroundProps) => {
  return (
    <>
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
            radial-gradient(circle at 80% 25%, rgba(255, 240, 80, ${Math.min(1, Math.max(0, scrollProgress - 0.3) * 4)}) 0%, rgba(255, 220, 100, ${Math.min(0.9, Math.max(0, scrollProgress - 0.3) * 3)}) 2%, rgba(255, 200, 80, ${Math.min(0.7, Math.max(0, scrollProgress - 0.3) * 2.5)}) 4%, transparent 10%),
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
          width: '200px',
          height: '200px',
          top: '20%',
          right: '15%',
          background: 'radial-gradient(circle, rgba(255, 255, 150, 0.8) 0%, rgba(255, 240, 100, 0.5) 40%, transparent 70%)',
          opacity: scrollProgress > 0.3 && scrollProgress < 0.7 ? Math.min(1, (scrollProgress - 0.3) * 3) : 0,
          filter: 'blur(40px)',
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
              opacity: Math.max(0, Math.min(1, (0.2 - scrollProgress) * 5)),
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
      <div
        className="fixed pointer-events-none transition-opacity duration-500"
        style={{
          left: '70%',
          top: '15%',
          opacity: Math.max(0, Math.min(1, (0.25 - scrollProgress) * 4)),
          animation: 'sputnikOrbit 25s linear infinite'
        }}
      >
        <div className="relative" style={{ transform: 'rotate(-15deg)' }}>
          <div 
            style={{
              width: '32px',
              height: '24px',
              background: 'linear-gradient(135deg, rgba(240,240,250,1) 0%, rgba(200,200,220,0.95) 50%, rgba(160,160,190,0.9) 100%)',
              borderRadius: '4px',
              boxShadow: '0 0 15px 3px rgba(150,200,255,0.5), inset -2px -2px 6px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.3)',
              position: 'relative',
              border: '1px solid rgba(180,180,220,0.6)'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                width: '6px',
                height: '4px',
                background: 'rgba(100,150,255,0.6)',
                borderRadius: '1px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 4px 1px rgba(100,150,255,0.4)'
              }}
            />
          </div>
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '-5px',
              transform: 'translateY(-50%)',
              width: '45px',
              height: '32px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(100,150,255,0.15) 30%, rgba(100,150,255,0.25) 50%, rgba(100,150,255,0.15) 70%, transparent 100%)',
              borderRadius: '50%',
              border: '1px solid rgba(150,180,255,0.4)',
              boxShadow: '0 0 10px 2px rgba(100,150,255,0.3)'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              right: '-5px',
              transform: 'translateY(-50%)',
              width: '45px',
              height: '32px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(100,150,255,0.15) 30%, rgba(100,150,255,0.25) 50%, rgba(100,150,255,0.15) 70%, transparent 100%)',
              borderRadius: '50%',
              border: '1px solid rgba(150,180,255,0.4)',
              boxShadow: '0 0 10px 2px rgba(100,150,255,0.3)'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '18px',
              background: 'linear-gradient(to bottom, rgba(200,200,230,0.9), rgba(200,200,230,0.5))',
              boxShadow: '0 0 4px 1px rgba(150,150,255,0.3)'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '8px',
                height: '8px',
                background: 'radial-gradient(circle, rgba(255,100,100,0.9), rgba(200,50,50,0.7))',
                borderRadius: '50%',
                boxShadow: '0 0 8px 2px rgba(255,100,100,0.6)'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceBackground;