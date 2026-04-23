interface RoadProps {
  scrollProgress: number;
}

interface CarColors {
  body: string;
  bodyDark: string;
  bodyDeep: string;
  roof: string;
  roofDark: string;
  tail: string;
  glow: string;
}

interface CarProps {
  colors: CarColors;
  duration: number;
  delay: number;
  direction: 'right' | 'left';
  bottom: number;
  scale: number;
}

const Car = ({ colors, duration, delay, direction, bottom, scale }: CarProps) => {
  const baseWidth = 180;
  const baseHeight = 80;
  const width = baseWidth * scale;
  const height = baseHeight * scale;

  return (
    <div
      className="absolute"
      style={{
        bottom: `${bottom}px`,
        left: direction === 'right' ? `-${width + 40}px` : undefined,
        right: direction === 'left' ? `-${width + 40}px` : undefined,
        width: `${width}px`,
        height: `${height}px`,
        animation: `${direction === 'right' ? 'carDrive' : 'carDriveReverse'} ${duration}s linear ${delay}s infinite`,
        filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.5))',
        transform: direction === 'left' ? 'scaleX(-1)' : undefined,
        zIndex: direction === 'right' ? 2 : 1
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: `${13 * scale}px`,
          left: `${8 * scale}px`,
          width: `${164 * scale}px`,
          height: `${36 * scale}px`,
          background: `linear-gradient(to bottom, ${colors.body} 0%, ${colors.bodyDark} 50%, ${colors.bodyDeep} 100%)`,
          borderRadius: `${10 * scale}px ${20 * scale}px ${6 * scale}px ${6 * scale}px`,
          boxShadow: `inset 0 -${5 * scale}px ${10 * scale}px rgba(0,0,0,0.3), inset 0 ${3 * scale}px ${6 * scale}px rgba(255,255,255,0.25)`
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: `${36 * scale}px`,
          left: `${36 * scale}px`,
          width: `${100 * scale}px`,
          height: `${28 * scale}px`,
          background: `linear-gradient(to bottom, ${colors.roof} 0%, ${colors.roofDark} 100%)`,
          borderRadius: `${16 * scale}px ${22 * scale}px ${3 * scale}px ${3 * scale}px`,
          boxShadow: `inset 0 -${3 * scale}px ${6 * scale}px rgba(0,0,0,0.3), inset 0 ${2 * scale}px ${3 * scale}px rgba(255,255,255,0.3)`
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: `${5 * scale}px`,
            left: `${6 * scale}px`,
            right: `${6 * scale}px`,
            bottom: `${3 * scale}px`,
            background:
              'linear-gradient(135deg, #c8e6fa 0%, #8ac4e8 50%, #5a95c4 100%)',
            borderRadius: `${10 * scale}px ${16 * scale}px ${2 * scale}px ${2 * scale}px`,
            boxShadow: `inset 0 ${2 * scale}px ${3 * scale}px rgba(255,255,255,0.5)`
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: `${2 * scale}px`,
              left: '48%',
              width: `${3 * scale}px`,
              bottom: `${2 * scale}px`,
              background: 'rgba(0,0,0,0.3)'
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: `${20 * scale}px`,
          left: `${12 * scale}px`,
          width: `${14 * scale}px`,
          height: `${9 * scale}px`,
          background: 'radial-gradient(circle, #fffacd, #f5d547)',
          borderRadius: '50%',
          boxShadow: `0 0 ${14 * scale}px #f5d547, 0 0 ${28 * scale}px rgba(245,213,71,0.7)`
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: `${20 * scale}px`,
          right: `${12 * scale}px`,
          width: `${10 * scale}px`,
          height: `${7 * scale}px`,
          background: colors.tail,
          borderRadius: '50%',
          boxShadow: `0 0 ${10 * scale}px ${colors.glow}`
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: `${3 * scale}px`,
          left: `${14 * scale}px`,
          width: `${12 * scale}px`,
          height: `${3 * scale}px`,
          background: 'rgba(0,0,0,0.5)',
          borderRadius: '2px'
        }}
      />
      {[
        { left: 24 },
        { left: 130 }
      ].map((w, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: '0',
            left: `${w.left * scale}px`,
            width: `${30 * scale}px`,
            height: `${30 * scale}px`,
            background:
              'radial-gradient(circle at 40% 40%, #555 0%, #1a1a1a 70%, #000 100%)',
            borderRadius: '50%',
            boxShadow: `inset -${2 * scale}px -${2 * scale}px ${4 * scale}px rgba(0,0,0,0.6), 0 ${3 * scale}px ${4 * scale}px rgba(0,0,0,0.5)`,
            animation: 'wheelSpin 0.3s linear infinite'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${13 * scale}px`,
              height: `${13 * scale}px`,
              background: 'radial-gradient(circle, #c8c8c8, #606060)',
              borderRadius: '50%',
              boxShadow: `inset 0 0 ${2 * scale}px rgba(0,0,0,0.5)`
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${4 * scale}px`,
              height: `${4 * scale}px`,
              background: '#2a2a2a',
              borderRadius: '50%'
            }}
          />
        </div>
      ))}

      <div
        style={{
          position: 'absolute',
          bottom: `${32 * scale}px`,
          left: `${baseWidth * scale}px`,
          height: '3px',
          width: `${70 * scale}px`,
          background: 'linear-gradient(to right, rgba(52,211,77,0) 0%, #34d34d 40%, #34d34d 100%)',
          transform: direction === 'left' ? 'scaleX(-1)' : undefined,
          transformOrigin: 'left center',
          boxShadow: '0 0 4px rgba(52,211,77,0.8)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '-2px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '7px solid transparent',
            borderBottom: '7px solid transparent',
            borderLeft: '12px solid #34d34d',
            filter: 'drop-shadow(0 0 3px rgba(52,211,77,0.8))'
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-8px',
            top: '-20px',
            color: '#34d34d',
            fontSize: `${13 * scale}px`,
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 6px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.9)',
            transform: direction === 'left' ? 'scaleX(-1)' : undefined,
            whiteSpace: 'nowrap'
          }}
        >
          F тяги
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: `${32 * scale}px`,
          right: `${baseWidth * scale - 20}px`,
          height: '3px',
          width: `${50 * scale}px`,
          background: 'linear-gradient(to left, rgba(255,107,107,0) 0%, #ff6b6b 40%, #ff6b6b 100%)',
          transform: direction === 'left' ? 'scaleX(-1)' : undefined,
          transformOrigin: 'right center',
          boxShadow: '0 0 4px rgba(255,107,107,0.8)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '-2px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: '10px solid #ff6b6b',
            filter: 'drop-shadow(0 0 3px rgba(255,107,107,0.8))'
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-10px',
            top: '-20px',
            color: '#ff6b6b',
            fontSize: `${12 * scale}px`,
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 6px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.9)',
            transform: direction === 'left' ? 'scaleX(-1)' : undefined,
            whiteSpace: 'nowrap'
          }}
        >
          F тр
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: `-${55 * scale}px`,
          left: '50%',
          width: '3px',
          height: `${55 * scale}px`,
          background: 'linear-gradient(to top, rgba(96,165,250,0) 0%, #60a5fa 40%, #60a5fa 100%)',
          boxShadow: '0 0 4px rgba(96,165,250,0.8)',
          transform: direction === 'left' ? 'translateX(-50%) scaleX(-1)' : 'translateX(-50%)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderBottom: '12px solid #60a5fa',
            filter: 'drop-shadow(0 0 3px rgba(96,165,250,0.8))'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-22px',
            left: '10px',
            color: '#60a5fa',
            fontSize: `${12 * scale}px`,
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 6px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.9)',
            transform: direction === 'left' ? 'scaleX(-1)' : undefined,
            whiteSpace: 'nowrap'
          }}
        >
          N
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: `${36 * scale}px`,
          left: '50%',
          width: '3px',
          height: `${55 * scale}px`,
          background: 'linear-gradient(to bottom, rgba(251,191,36,0) 0%, #fbbf24 40%, #fbbf24 100%)',
          boxShadow: '0 0 4px rgba(251,191,36,0.8)',
          transform: direction === 'left' ? 'translateX(-50%) scaleX(-1)' : 'translateX(-50%)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderTop: '12px solid #fbbf24',
            filter: 'drop-shadow(0 0 3px rgba(251,191,36,0.8))'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-22px',
            left: '10px',
            color: '#fbbf24',
            fontSize: `${12 * scale}px`,
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 6px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.9)',
            transform: direction === 'left' ? 'scaleX(-1)' : undefined,
            whiteSpace: 'nowrap'
          }}
        >
          mg
        </div>
      </div>
    </div>
  );
};

const Road = ({ scrollProgress }: RoadProps) => {
  const visible = scrollProgress > 0.75;
  const opacity = Math.min(1, Math.max(0, (scrollProgress - 0.75) * 5));

  const cars: Omit<CarProps, 'bottom'>[] = [
    {
      colors: {
        body: '#ff4757',
        bodyDark: '#e8313f',
        bodyDeep: '#a01a24',
        roof: '#ff5767',
        roofDark: '#d62838',
        tail: '#c91a2c',
        glow: 'rgba(255,50,50,0.7)'
      },
      duration: 15,
      delay: 0,
      direction: 'right',
      scale: 1
    },
    {
      colors: {
        body: '#4a90e2',
        bodyDark: '#2f6fb8',
        bodyDeep: '#1a4d87',
        roof: '#5ba3f0',
        roofDark: '#2a6cb0',
        tail: '#c91a2c',
        glow: 'rgba(255,50,50,0.7)'
      },
      duration: 15,
      delay: 5,
      direction: 'right',
      scale: 0.9
    },
    {
      colors: {
        body: '#ffd93d',
        bodyDark: '#e8b820',
        bodyDeep: '#a8840a',
        roof: '#ffe066',
        roofDark: '#d4a020',
        tail: '#c91a2c',
        glow: 'rgba(255,50,50,0.7)'
      },
      duration: 14,
      delay: 0,
      direction: 'left',
      scale: 0.95
    },
    {
      colors: {
        body: '#50c878',
        bodyDark: '#2fa85d',
        bodyDeep: '#1e7a42',
        roof: '#6bd88e',
        roofDark: '#3a9a50',
        tail: '#c91a2c',
        glow: 'rgba(255,50,50,0.7)'
      },
      duration: 14,
      delay: 7,
      direction: 'left',
      scale: 0.9
    },
    {
      colors: {
        body: '#a855f7',
        bodyDark: '#8438d0',
        bodyDeep: '#5a1ea0',
        roof: '#b968fa',
        roofDark: '#8040c8',
        tail: '#c91a2c',
        glow: 'rgba(255,50,50,0.7)'
      },
      duration: 15,
      delay: 10,
      direction: 'right',
      scale: 1.05
    }
  ];

  return (
    <div
      className="fixed bottom-0 left-0 right-0 pointer-events-none"
      style={{
        opacity,
        transition: 'opacity 600ms ease-out',
        zIndex: 3,
        height: '110px',
        display: visible ? 'block' : 'none'
      }}
    >
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: '5px',
          height: '90px',
          background:
            'linear-gradient(to bottom, #3a3a3a 0%, #2a2a2a 40%, #1e1e1e 100%)',
          boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.5), 0 -3px 10px rgba(0,0,0,0.3)'
        }}
      >
        <div
          className="absolute left-0 right-0"
          style={{
            top: '3px',
            height: '3px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)'
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            height: '5px',
            background:
              'repeating-linear-gradient(90deg, #f5d547 0px, #f5d547 50px, transparent 50px, transparent 100px)',
            boxShadow: '0 0 6px rgba(245,213,71,0.5)'
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: 0,
            height: '3px',
            background: '#e8e8e8',
            opacity: 0.9
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: 0,
            height: '3px',
            background: '#e8e8e8',
            opacity: 0.9
          }}
        />
      </div>

      {cars.map((car, i) => (
        <Car
          key={i}
          {...car}
          bottom={car.direction === 'right' ? 8 : 52}
        />
      ))}
    </div>
  );
};

export default Road;