interface GroundProps {
  scrollProgress: number;
}

const Ground = ({ scrollProgress }: GroundProps) => {
  const visible = scrollProgress > 0.75;
  const opacity = Math.min(1, Math.max(0, (scrollProgress - 0.75) * 5));

  const trees = [
    { left: '3%', size: 200, delay: 0 },
    { left: '15%', size: 170, delay: 0.05 },
    { left: '28%', size: 220, delay: 0.1 },
    { left: '42%', size: 185, delay: 0.15 },
    { left: '56%', size: 210, delay: 0.2 },
    { left: '68%', size: 175, delay: 0.25 }
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 pointer-events-none"
      style={{
        opacity,
        transition: 'opacity 600ms ease-out',
        zIndex: 1,
        height: '320px',
        display: visible ? 'block' : 'none'
      }}
    >
      {trees.map((tree, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: tree.left,
            bottom: '55px',
            width: `${tree.size * 0.5}px`,
            height: `${tree.size}px`,
            transform: `translateY(${(1 - opacity) * 40}px)`,
            transition: `transform 700ms ease-out ${tree.delay}s`
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${tree.size * 0.08}px`,
              height: `${tree.size * 0.4}px`,
              background: 'linear-gradient(to right, #3d2810 0%, #6b4423 40%, #4a2f15 100%)',
              borderRadius: '2px',
              boxShadow: '2px 0 4px rgba(0,0,0,0.3)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: `${tree.size * 0.3}px`,
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${tree.size * 0.5}px`,
              height: `${tree.size * 0.5}px`,
              background:
                'radial-gradient(circle at 35% 35%, #6fa83c 0%, #4a7c2a 40%, #2d5016 80%, #1e3a0e 100%)',
              borderRadius: '50%',
              boxShadow:
                '0 4px 10px rgba(0,0,0,0.3), inset -4px -6px 10px rgba(0,0,0,0.2), inset 3px 3px 6px rgba(255,255,255,0.15)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: `${tree.size * 0.55}px`,
              left: '30%',
              width: `${tree.size * 0.38}px`,
              height: `${tree.size * 0.38}px`,
              background:
                'radial-gradient(circle at 35% 35%, #7fb84c 0%, #56922f 50%, #2d5016 100%)',
              borderRadius: '50%',
              boxShadow: 'inset -3px -4px 8px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.15)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: `${tree.size * 0.55}px`,
              left: '50%',
              width: `${tree.size * 0.35}px`,
              height: `${tree.size * 0.35}px`,
              background:
                'radial-gradient(circle at 35% 35%, #7fb84c 0%, #56922f 50%, #2d5016 100%)',
              borderRadius: '50%',
              boxShadow: 'inset -3px -4px 8px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.15)'
            }}
          />
        </div>
      ))}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '80px',
          background:
            'linear-gradient(to bottom, rgba(139,100,60,0) 0%, #8b6a3a 15%, #6b4d24 40%, #4a3518 70%, #2e2010 100%)',
          boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.3)'
        }}
      >
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: '14px',
            background:
              'linear-gradient(to bottom, #5a8a2a 0%, #4a7c2a 40%, #3d6820 100%)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        />
        <div
          className="absolute top-3 left-0 right-0"
          style={{
            height: '8px',
            background:
              'repeating-linear-gradient(90deg, transparent 0px, transparent 3px, rgba(90,138,42,0.7) 3px, rgba(90,138,42,0.7) 4px, transparent 4px, transparent 7px, rgba(74,124,42,0.6) 7px, rgba(74,124,42,0.6) 8px)'
          }}
        />
      </div>
    </div>
  );
};

export default Ground;