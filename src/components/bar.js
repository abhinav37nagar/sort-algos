const bar = ({ value, size, active, sorted }) => {
  return (
    <div
      className={`bar sz-${size} ${active} ${sorted}`}
      style={{ height: 100 * (value / size) + "%" }}
    >
      {/* {value}
      {size}
      active:
      {active} */}
    </div>
  );
};

export default bar;
