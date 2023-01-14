import "./styles/card.style.css";

export default function ({ src, alt, count, boldText, smallText, index }) {
  return (
    <div className={`card-${++index}`}>
      <div className="card-content">
        <div className="card-image-wrapper">
          <img src={src} alt={alt} />
        </div>
        <div className="card-text">
          <p className="card-number">{count}</p>
          <div>
            <h4 className="card-text-bold" style={{ fontWeight: "700" }}>
              {boldText}
            </h4>
            <p className="card-text-small">{smallText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
