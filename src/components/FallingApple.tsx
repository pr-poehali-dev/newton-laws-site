interface FallingAppleProps {
  scrollProgress: number;
}

const FallingApple = ({ scrollProgress }: FallingAppleProps) => {
  const fallProgress = Math.min(scrollProgress / 0.9, 1);
  const topPosition = fallProgress * 85;
  const isLanded = scrollProgress >= 0.9;
  const rotation = isLanded ? 90 : fallProgress * 540;
  const swayX = isLanded ? 0 : Math.sin(fallProgress * Math.PI * 3) * 20;

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        right: '8%',
        top: `${topPosition}vh`,
        transform: `translateX(${swayX}px) rotate(${rotation}deg)`,
        transition: isLanded
          ? 'top 0.4s ease-out, transform 0.4s ease-out'
          : 'top 0.1s linear, transform 0.1s linear',
        opacity: scrollProgress > 0.02 ? 1 : 0,
        zIndex: 0
      }}
    >
      <div className="relative" style={{ width: '50px', height: '55px' }}>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '8px',
            background: 'linear-gradient(to bottom, #5a3a1a, #3d2810)',
            borderRadius: '1px',
            zIndex: 2
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: '58%',
            width: '14px',
            height: '8px',
            background: 'linear-gradient(135deg, #4a7c2a 0%, #2d5016 100%)',
            borderRadius: '0 100% 0 60%',
            transform: 'rotate(30deg)',
            boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.3)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '6px',
            left: '0',
            width: '50px',
            height: '48px',
            background:
              'radial-gradient(circle at 35% 30%, #ff6b6b 0%, #e03131 40%, #a61e1e 80%, #6b1111 100%)',
            borderRadius: '50% 50% 45% 45% / 45% 45% 55% 55%',
            boxShadow:
              '0 4px 12px rgba(0,0,0,0.4), inset -4px -4px 10px rgba(0,0,0,0.2), inset 3px 3px 8px rgba(255,255,255,0.2)',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '6px',
              left: '10px',
              width: '12px',
              height: '18px',
              background:
                'radial-gradient(ellipse, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 40%, transparent 75%)',
              borderRadius: '50%',
              filter: 'blur(1.5px)',
              transform: 'rotate(-20deg)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '9px',
              left: '13px',
              width: '5px',
              height: '8px',
              background:
                'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
              borderRadius: '50%',
              filter: 'blur(0.5px)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              width: '8px',
              height: '10px',
              background:
                'radial-gradient(ellipse, rgba(255,200,180,0.5) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(2px)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '28px',
              width: '3px',
              height: '5px',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '50%',
              filter: 'blur(0.8px)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FallingApple;
