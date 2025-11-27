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
      {Array.from({ length: 5 }).map((_, i) => {
        const startX = 20 + Math.random() * 60;
        const startY = 10 + Math.random() * 30;
        const duration = 3.5 + Math.random() * 2;
        const delay = i * 3 + Math.random() * 4;
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
        <div className="relative" style={{ transform: 'rotate(10deg)' }}>
          <div 
            style={{
              width: '20px',
              height: '28px',
              background: 'linear-gradient(180deg, rgba(230,230,245,1) 0%, rgba(200,200,220,0.95) 40%, rgba(180,180,210,0.9) 100%)',
              borderRadius: '3px 3px 6px 6px',
              boxShadow: '0 0 12px 2px rgba(120,150,255,0.4), inset -1px -2px 4px rgba(0,0,0,0.25), inset 1px 1px 3px rgba(255,255,255,0.4)',
              position: 'relative',
              border: '0.5px solid rgba(180,180,220,0.5)'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                width: '14px',
                height: '8px',
                background: 'linear-gradient(135deg, rgba(80,120,200,0.3), rgba(100,140,220,0.5))',
                borderRadius: '2px',
                top: '6px',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 6px 1px rgba(100,140,220,0.3)',
                border: '0.5px solid rgba(120,160,240,0.4)'
              }}
            />
          </div>
          <div 
            style={{
              position: 'absolute',
              top: '-3px',
              left: '-28px',
              width: '28px',
              height: '18px',
              background: 'linear-gradient(90deg, rgba(80,120,200,0.2) 0%, rgba(100,140,220,0.3) 50%, rgba(80,120,200,0.2) 100%)',
              border: '1px solid rgba(120,160,240,0.5)',
              boxShadow: '0 0 8px 1px rgba(100,140,220,0.25)',
              transform: 'perspective(100px) rotateY(-15deg)',
              borderRadius: '1px'
            }}
          >
            <div style={{ 
              position: 'absolute', 
              inset: '2px', 
              background: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(120,160,240,0.2) 4px, rgba(120,160,240,0.2) 5px)',
              borderRadius: '1px'
            }} />
          </div>
          <div 
            style={{
              position: 'absolute',
              top: '-3px',
              right: '-28px',
              width: '28px',
              height: '18px',
              background: 'linear-gradient(90deg, rgba(80,120,200,0.2) 0%, rgba(100,140,220,0.3) 50%, rgba(80,120,200,0.2) 100%)',
              border: '1px solid rgba(120,160,240,0.5)',
              boxShadow: '0 0 8px 1px rgba(100,140,220,0.25)',
              transform: 'perspective(100px) rotateY(15deg)',
              borderRadius: '1px'
            }}
          >
            <div style={{ 
              position: 'absolute', 
              inset: '2px', 
              background: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(120,160,240,0.2) 4px, rgba(120,160,240,0.2) 5px)',
              borderRadius: '1px'
            }} />
          </div>
          <div 
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1.5px',
              height: '14px',
              background: 'linear-gradient(to bottom, rgba(200,200,230,0.8), rgba(180,180,210,0.4))',
            }}
          >
            <div 
              style={{
                position: 'absolute',
                bottom: '-3px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                borderTop: '6px solid rgba(200,200,230,0.7)',
              }}
            />
          </div>
          <div 
            style={{
              position: 'absolute',
              top: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '6px',
              height: '6px',
              background: 'radial-gradient(circle, rgba(255,220,100,1), rgba(255,180,80,0.8))',
              borderRadius: '50%',
              boxShadow: '0 0 10px 3px rgba(255,200,100,0.7)'
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SpaceBackground;