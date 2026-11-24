export default function Result({ area, radius }) {
  const validRadius = radius.trim() !== '' && Number.isFinite(Number(radius)) && Number(radius) >= 0;

  return (
    <section className="result-card" aria-live="polite" aria-label="Circle area result">
      <div className="result-top">
        <span className="result-label">CALCULATED AREA</span>
        <span className="result-icon" aria-hidden="true">π</span>
      </div>

      {validRadius ? (
        <>
          <p className="result-value">{area.toLocaleString(undefined, {
            maximumFractionDigits: 4
          })}</p>
          <p className="result-unit">square units</p>
          <p className="result-detail">
            Radius: <strong>{Number(radius).toLocaleString()}</strong> units
          </p>
        </>
      ) : (
        <>
          <p className="result-value result-placeholder">—</p>
          <p className="result-unit">Enter a valid radius</p>
        </>
      )}
    </section>
  );
}
