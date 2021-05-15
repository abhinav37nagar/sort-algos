const footer = ({ setValues, setSpeed, onInit, onShuffle, runSort }) => {
  return (
    <div className="footer">
      <div className="big size-big" onClick={() => {}}>
        <div className="front">SET SIZE</div>
        <div className="back">
          <div
            onClick={() => {
              setValues(Array(10).fill(null));
            }}
          >
            10
          </div>
          <div
            onClick={() => {
              setValues(Array(100).fill(null));
            }}
          >
            {" "}
            100
          </div>
          <div
            onClick={() => {
              setValues(Array(1000).fill(null));
            }}
          >
            1000
          </div>
        </div>
      </div>
      <div className="big speed-big" onClick={() => {}}>
        <div className="front">SET SPEED</div>
        <div className="back">
          <div
            onClick={() => {
              setSpeed("Slow");
            }}
          >
            Slow
          </div>
          <div
            onClick={() => {
              setSpeed("Normal");
            }}
          >
            Normal
          </div>
          <div
            onClick={() => {
              setSpeed("Fast");
            }}
          >
            Fast
          </div>
        </div>
      </div>
      <div className="big init-big" onClick={() => {}}>
        <div className="front">INITIALIZE</div>
        <div className="back">
          <div
            onClick={() => {
              onInit();
            }}
          >
            Initialize
          </div>
          <div
            onClick={() => {
              onShuffle();
            }}
          >
            Shuffle
          </div>
        </div>
      </div>
      <div className="big selection-big" onClick={() => {}}>
        <div className="front">SELECTION SORT</div>
        <div className="back">
          <div
            onClick={() => {
              runSort("sel-min");
            }}
          >
            Min
          </div>
          <div
            onClick={() => {
              runSort("sel-max");
            }}
          >
            Max
          </div>
        </div>
      </div>
      <div
        className="btn"
        onClick={() => {
          runSort("bubble");
        }}
      >
        BUBBLE SORT
      </div>
      <div
        className="btn"
        onClick={() => {
          runSort("merge");
        }}
      >
        Merge SORT
      </div>
      <div
        className="btn"
        onClick={() => {
          runSort("insertion");
        }}
      >
        Insertion SORT
      </div>
      <div
        className="btn"
        onClick={() => {
          runSort("insertion");
        }}
      >
        Insertion SORT
      </div>
    </div>
  );
};

export default footer;
