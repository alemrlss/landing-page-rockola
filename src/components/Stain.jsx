const Stain = ({ top, left, size, color }) => {
  const stainStyle = {
    background: `radial-gradient(ellipse at center, ${color})`,
    top: `${top}px`,
    left: `${left}px`,
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div
      className="absolute z-0 to-transparent rounded-full blur-xl"
      style={stainStyle}
    ></div>
  );
};

export default Stain;
