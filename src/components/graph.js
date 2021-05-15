import Bar from "./bar";

const graph = ({ values, curr, size }) => {
  return (
    <div className="graph-container">
      <div className="graph">
        {values.map((val, idx) => (
          <Bar
            key={idx}
            value={val}
            size={size}
            active={val === curr ? "active" : ""}
            sorted={val === idx + 1 ? "sorted" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default graph;
