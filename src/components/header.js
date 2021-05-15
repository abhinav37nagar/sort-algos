const header = ({ values, speed }) => {
  return (
    <div className="header">
      <div className="head">{`Size = ${values.length}`}</div>
      <div className="head">{`Speed = ${speed}`}</div>
      <div className="head">{`${
        values[0] === values[1] ? "Not Initialized" : "Ready"
      }`}</div>
    </div>
  );
};

export default header;
