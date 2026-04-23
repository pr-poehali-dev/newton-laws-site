interface RoadProps {
  scrollProgress: number;
}

const Road = ({ scrollProgress }: RoadProps) => {
  const visible = scrollProgress > 0.75;
  const opacity = Math.min(1, Math.max(0, (scrollProgress - 0.75) * 5));

  return (
    <div
      className="fixed bottom-0 left-0 right-0 pointer-events-none"
      style={{
        opacity,
        transition: 'opacity 600ms ease-out',
        zIndex: 3,
        height: '60px',
        display: visible ? 'block' : 'none'
      }}
    >
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: '5px',
          height: '38px',
          background:
            'linear-gradient(to bottom, #3a3a3a 0%, #2a2a2a 40%, #1e1e1e 100%)',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.5), 0 -2px 8px rgba(0,0,0,0.3)'
        }}
      >
        <div
          className="absolute left-0 right-0"
          style={{
            top: '2px',
            height: '2px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)'
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            height: '4px',
            background:
              'repeating-linear-gradient(90deg, #f5d547 0px, #f5d547 40px, transparent 40px, transparent 80px)',
            boxShadow: '0 0 4px rgba(245,213,71,0.4)'
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: 0,
            height: '2px',
            background: '#e8e8e8',
            opacity: 0.85
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: 0,
            height: '2px',
            background: '#e8e8e8',
            opacity: 0.85
          }}
        />
      </div>

      <div
        className="absolute"
        style={{
          bottom: '14px',
          left: '-120px',
          width: '110px',
          height: '50px',
          animation: 'carDrive 9s linear infinite',
          filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.5))'
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '5px',
            width: '100px',
            height: '22px',
            background:
              'linear-gradient(to bottom, #ff4757 0%, #e8313f 50%, #a01a24 100%)',
            borderRadius: '6px 12px 4px 4px',
            boxShadow:
              'inset 0 -3px 6px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.25)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '22px',
            left: '22px',
            width: '60px',
            height: '16px',
            background:
              'linear-gradient(to bottom, #ff5767 0%, #d62838 100%)',
            borderRadius: '10px 14px 2px 2px',
            boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.3)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '3px',
              left: '4px',
              right: '4px',
              bottom: '2px',
              background:
                'linear-gradient(to bottom, #a8d8f5 0%, #6ba8d4 60%, #3a6a9a 100%)',
              borderRadius: '6px 10px 1px 1px',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '1px',
                left: '48%',
                width: '2px',
                bottom: '1px',
                background: 'rgba(0,0,0,0.3)'
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '8px',
            width: '8px',
            height: '5px',
            background: 'radial-gradient(circle, #fffacd, #f5d547)',
            borderRadius: '50%',
            boxShadow: '0 0 10px #f5d547, 0 0 20px rgba(245,213,71,0.6)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '8px',
            width: '6px',
            height: '4px',
            background: '#c91a2c',
            borderRadius: '50%',
            boxShadow: '0 0 6px rgba(255,50,50,0.6)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '15px',
            width: '18px',
            height: '18px',
            background:
              'radial-gradient(circle at 40% 40%, #444 0%, #1a1a1a 70%, #000 100%)',
            borderRadius: '50%',
            boxShadow: 'inset -1px -1px 3px rgba(0,0,0,0.6), 0 2px 3px rgba(0,0,0,0.5)',
            animation: 'wheelSpin 0.4s linear infinite'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '8px',
              height: '8px',
              background: 'radial-gradient(circle, #b0b0b0, #606060)',
              borderRadius: '50%'
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            right: '15px',
            width: '18px',
            height: '18px',
            background:
              'radial-gradient(circle at 40% 40%, #444 0%, #1a1a1a 70%, #000 100%)',
            borderRadius: '50%',
            boxShadow: 'inset -1px -1px 3px rgba(0,0,0,0.6), 0 2px 3px rgba(0,0,0,0.5)',
            animation: 'wheelSpin 0.4s linear infinite'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '8px',
              height: '8px',
              background: 'radial-gradient(circle, #b0b0b0, #606060)',
              borderRadius: '50%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Road;