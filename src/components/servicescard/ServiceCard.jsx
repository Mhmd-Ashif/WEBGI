import "./servicecard.css";

export function ServiceCard({ svg, title, description, features }) {
  return (
    <>
      <div className="service-outer">
        <div className="svg-container">{svg}</div>
        <h3 className="service-head">{title}</h3>
        <h4 className="feature-title">{description}</h4>
        <ul>
          <li>{features[0]}</li>
          <li>{features[1]}</li>
          <li>{features[2]}</li>
        </ul>
      </div>
    </>
  );
}
