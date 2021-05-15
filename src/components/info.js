const info = () => {
  return (
    <div className="info">
      <div className="info-box">
        <div className="info-bar not"></div>
        <div className="info-text">Not sorted</div>
      </div>
      <div className="info-box">
        <div className="info-bar sor"></div>
        <div className="info-text">Currently Active</div>
      </div>
      <div className="info-box">
        <div className="info-bar cur"></div>
        <div className="info-text">Sorted</div>
      </div>
    </div>
  );
};

export default info;
