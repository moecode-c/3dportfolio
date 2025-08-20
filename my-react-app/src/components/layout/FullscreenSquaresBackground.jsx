import Squares from '../../blocks/Squares/Squares';

export default function FullscreenSquaresBackground() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      zIndex: 0,       
    }}>
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#fff"
        hoverFillColor="#222"
        className="squares-bg"
      />
    </div>
  );
}
