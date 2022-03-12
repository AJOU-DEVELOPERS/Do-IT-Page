const Arrow = () => {
  return (
    <svg
      style={{ width: "40px", height: "40px" }}
      stroke="rgba(0,0,0,0.4)"
      onClick={() => window.scroll({ top: 900, behavior: "smooth" })}
    >
      <line x1="10%" y1="0%" x2="50%" y2="30%" style={{ strokeWidth: 2 }} />
      <line x1="50%" y1="30%" x2="90%" y2="0%" style={{ strokeWidth: 2 }} />
      <line x1="10%" y1="20%" x2="50%" y2="50%" style={{ strokeWidth: 2 }} />
      <line x1="50%" y1="50%" x2="90%" y2="20%" style={{ strokeWidth: 2 }} />
      <line x1="10%" y1="40%" x2="50%" y2="70%" style={{ strokeWidth: 2 }} />
      <line x1="50%" y1="70%" x2="90%" y2="40%" style={{ strokeWidth: 2 }} />
    </svg>
  );
};

export default Arrow;
