interface GroundProps {
  scrollProgress: number;
}

type TreeType = 'oak' | 'pine' | 'birch' | 'bush' | 'apple';

interface TreeData {
  left: string;
  size: number;
  delay: number;
  type: TreeType;
}

const Ground = ({ scrollProgress }: GroundProps) => {
  const visible = scrollProgress > 0.75;
  const opacity = Math.min(1, Math.max(0, (scrollProgress - 0.75) * 5));

  const trees: TreeData[] = [
    { left: '2%', size: 210, delay: 0, type: 'oak' },
    { left: '13%', size: 240, delay: 0.05, type: 'pine' },
    { left: '24%', size: 190, delay: 0.1, type: 'birch' },
    { left: '34%', size: 120, delay: 0.12, type: 'bush' },
    { left: '42%', size: 220, delay: 0.15, type: 'apple' },
    { left: '54%', size: 230, delay: 0.2, type: 'pine' },
    { left: '66%', size: 180, delay: 0.22, type: 'oak' },
    { left: '76%', size: 110, delay: 0.27, type: 'bush' },
    { left: '82%', size: 220, delay: 0.3, type: 'pine' },
    { left: '90%', size: 190, delay: 0.32, type: 'birch' },
    { left: '96%', size: 140, delay: 0.35, type: 'bush' }
  ];

  const renderTree = (tree: TreeData) => {
    const { size, type } = tree;

    if (type === 'pine') {
      return (
        <>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${size * 0.07}px`,
              height: `${size * 0.2}px`,
              background: 'linear-gradient(to right, #3d2810 0%, #6b4423 40%, #4a2f15 100%)',
              borderRadius: '2px'
            }}
          />
          {[0, 1, 2, 3].map((i) => {
            const w = size * (0.55 - i * 0.1);
            const b = size * (0.15 + i * 0.18);
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  bottom: `${b}px`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: `${w / 2}px solid transparent`,
                  borderRight: `${w / 2}px solid transparent`,
                  borderBottom: `${size * 0.3}px solid`,
                  borderBottomColor: i === 0 ? '#2d5016' : i === 1 ? '#35601c' : i === 2 ? '#3d6b22' : '#467428',
                  filter: 'drop-shadow(2px 3px 3px rgba(0,0,0,0.3))'
                }}
              />
            );
          })}
        </>
      );
    }

    if (type === 'birch') {
      return (
        <>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${size * 0.06}px`,
              height: `${size * 0.55}px`,
              background:
                'linear-gradient(to right, #d8d4c8 0%, #f5f0e6 40%, #e8e3d4 100%)',
              borderRadius: '2px',
              boxShadow: '1px 0 3px rgba(0,0,0,0.2)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'repeating-linear-gradient(0deg, transparent 0px, transparent 6px, #2a2a2a 6px, #2a2a2a 8px, transparent 8px, transparent 18px, #1a1a1a 18px, #1a1a1a 19px)',
                opacity: 0.7
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: `${size * 0.45}px`,
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${size * 0.55}px`,
              height: `${size * 0.55}px`,
              background:
                'radial-gradient(circle at 35% 30%, #b5d84a 0%, #8ebd3a 40%, #5a8a2a 80%, #3d6820 100%)',
              borderRadius: '50% 60% 55% 50% / 55% 50% 60% 50%',
              boxShadow:
                '0 4px 10px rgba(0,0,0,0.3), inset -4px -6px 10px rgba(0,0,0,0.15), inset 3px 3px 6px rgba(255,255,255,0.2)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: `${size * 0.7}px`,
              left: '20%',
              width: `${size * 0.3}px`,
              height: `${size * 0.3}px`,
              background:
                'radial-gradient(circle at 35% 35%, #c8e65c 0%, #8ebd3a 60%, #5a8a2a 100%)',
              borderRadius: '50%',
              boxShadow: 'inset -3px -4px 8px rgba(0,0,0,0.15)'
            }}
          />
        </>
      );
    }

    if (type === 'bush') {
      return (
        <>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '20%',
              width: `${size * 0.55}px`,
              height: `${size * 0.7}px`,
              background:
                'radial-gradient(circle at 35% 30%, #6fa83c 0%, #4a7c2a 50%, #2d5016 100%)',
              borderRadius: '50%',
              boxShadow:
                '0 4px 8px rgba(0,0,0,0.3), inset -3px -4px 8px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.15)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '45%',
              width: `${size * 0.55}px`,
              height: `${size * 0.85}px`,
              background:
                'radial-gradient(circle at 35% 30%, #7fb84c 0%, #56922f 50%, #2d5016 100%)',
              borderRadius: '50%',
              boxShadow:
                '0 4px 8px rgba(0,0,0,0.3), inset -3px -4px 8px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.15)'
            }}
          />
        </>
      );
    }

    if (type === 'apple') {
      return (
        <>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${size * 0.1}px`,
              height: `${size * 0.4}px`,
              background: 'linear-gradient(to right, #3d2810 0%, #7a5028 40%, #4a2f15 100%)',
              borderRadius: '2px',
              boxShadow: '2px 0 4px rgba(0,0,0,0.3)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: `${size * 0.3}px`,
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${size * 0.6}px`,
              height: `${size * 0.6}px`,
              background:
                'radial-gradient(circle at 35% 30%, #7fb84c 0%, #4a7c2a 40%, #2d5016 80%, #1e3a0e 100%)',
              borderRadius: '50%',
              boxShadow:
                '0 4px 10px rgba(0,0,0,0.3), inset -4px -6px 10px rgba(0,0,0,0.2), inset 3px 3px 6px rgba(255,255,255,0.15)'
            }}
          />
          {[
            { top: 25, left: 20, s: 10 },
            { top: 35, left: 65, s: 9 },
            { top: 50, left: 40, s: 11 },
            { top: 60, left: 75, s: 8 }
          ].map((a, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                bottom: `${size * (0.3 + (100 - a.top) / 100 * 0.4)}px`,
                left: `${a.left}%`,
                width: `${a.s}px`,
                height: `${a.s}px`,
                background:
                  'radial-gradient(circle at 30% 30%, #ff8a8a 0%, #e03131 60%, #8b1a1a 100%)',
                borderRadius: '50%',
                boxShadow: '0 1px 2px rgba(0,0,0,0.4), inset -1px -1px 2px rgba(0,0,0,0.3), inset 1px 1px 2px rgba(255,255,255,0.4)'
              }}
            />
          ))}
        </>
      );
    }

    return (
      <>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: `${size * 0.1}px`,
            height: `${size * 0.35}px`,
            background: 'linear-gradient(to right, #2d1a08 0%, #5c3a1a 40%, #3a230f 100%)',
            borderRadius: '2px',
            boxShadow: '2px 0 4px rgba(0,0,0,0.3)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: `${size * 0.25}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            width: `${size * 0.7}px`,
            height: `${size * 0.6}px`,
            background:
              'radial-gradient(circle at 35% 30%, #6fa83c 0%, #3d6820 50%, #1e3a0e 100%)',
            borderRadius: '55% 50% 50% 55% / 60% 55% 55% 50%',
            boxShadow:
              '0 4px 10px rgba(0,0,0,0.35), inset -4px -6px 10px rgba(0,0,0,0.25), inset 3px 3px 6px rgba(255,255,255,0.15)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: `${size * 0.5}px`,
            left: '5%',
            width: `${size * 0.4}px`,
            height: `${size * 0.4}px`,
            background:
              'radial-gradient(circle at 35% 35%, #7fb84c 0%, #4a7c2a 60%, #2d5016 100%)',
            borderRadius: '50%',
            boxShadow: 'inset -3px -4px 8px rgba(0,0,0,0.2)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: `${size * 0.55}px`,
            left: '55%',
            width: `${size * 0.38}px`,
            height: `${size * 0.38}px`,
            background:
              'radial-gradient(circle at 35% 35%, #7fb84c 0%, #4a7c2a 60%, #2d5016 100%)',
            borderRadius: '50%',
            boxShadow: 'inset -3px -4px 8px rgba(0,0,0,0.2)'
          }}
        />
      </>
    );
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 pointer-events-none"
      style={{
        opacity,
        transition: 'opacity 600ms ease-out',
        zIndex: 1,
        height: '460px',
        display: visible ? 'block' : 'none'
      }}
    >
      {trees.map((tree, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: tree.left,
            bottom: '150px',
            width: `${tree.size * 0.6}px`,
            height: `${tree.size}px`,
            transform: `translateY(${(1 - opacity) * 40}px)`,
            transition: `transform 700ms ease-out ${tree.delay}s`
          }}
        >
          {renderTree(tree)}
        </div>
      ))}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: '95px',
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