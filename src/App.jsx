import { useMemo, useState } from 'react';
import Result from './Result.jsx';

export default function App() {
  const [radius, setRadius] = useState('5');

  // Calculate the area whenever the radius changes.
  const area = useMemo(() => {
    const numericRadius = Number(radius);
    if (radius.trim() === '' || !Number.isFinite(numericRadius) || numericRadius < 0) {
      return null;
    }
    return Math.PI * numericRadius ** 2;
  }, [radius]);

  function handleRadiusChange(event) {
    setRadius(event.target.value);
  }

  return (
    <main className="page">
      <section className="calculator" aria-labelledby="page-title">
        <div className="eyebrow"><span className="eyebrow-dot" /> GEOMETRY TOOL</div>
        <h1 id="page-title">Circle area <span>calculator</span></h1>
        <p className="intro">
          Enter the radius of a circle and let the calculator find its area.
        </p>

        <div className="input-section">
          <label htmlFor="radius">Radius</label>
          <div className="input-wrap">
            <input
              id="radius"
              type="number"
              min="0"
              step="any"
              value={radius}
              onChange={handleRadiusChange}
              placeholder="Enter radius"
            />
            <span className="unit">units</span>
          </div>
          <p className="hint">Use any non-negative number.</p>
        </div>

        {/* The calculated area is passed to Result as a prop. */}
        <Result area={area} radius={radius} />

        <div className="formula">
          <span className="formula-label">FORMULA</span>
          <span className="equation">A = π × r²</span>
          <span className="formula-note">Area = pi × radius × radius</span>
        </div>
      </section>
      <footer>Built with React · Components · Props · useState</footer>
    </main>
  );
}
