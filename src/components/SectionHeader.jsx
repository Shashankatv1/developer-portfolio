function SectionHeader({ number, eyebrow, title, description }) {
  return (
    <div className="section-header">
      <div className="section-meta">
        <span className="section-number">
          {number}
        </span>

        <span className="section-eyebrow">
          {eyebrow}
        </span>
      </div>

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;