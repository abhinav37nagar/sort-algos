import { useState, useEffect } from "react";

import Graph from "./components/graph";
import Info from "./components/info";
import Header from "./components/header";
import Footer from "./components/footer";
import Testing from "./components/testing";

function App() {
  const [speed, setSpeed] = useState("Normal");
  const [values, setValues] = useState(Array(100).fill(1));
  const [curr, setCurr] = useState(1);

  const onInit = () => {
    console.log("init ran");
    const temp = values.map((val, idx) => idx + 1);
    setValues(temp);
  };

  const onShuffle = () => {
    console.log("shuffle ran");
    var arr = values.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    setValues(arr);
  };

  const history = [];
  const currHistory = [];

  const onSelMinSort = () => {
    // const temp = values.slice();
    history.push(values);
    for (let i = 1; i < values.length; i++) {
      const bigArr = history[history.length - 1].slice();
      // console.log("test " + i);
      let lo = bigArr[i];
      let minidx = i;
      // let pre = bigArr.splice(0, i);
      for (let j = i; j < bigArr.length; j++) {
        if (bigArr[j] < lo) {
          lo = bigArr[j];
          minidx = j;
        }
      }
      // console.log("lo: " + lo);
      // console.log("idx: " + minidx);
      while (minidx !== 0 && bigArr[minidx - 1] > bigArr[minidx]) {
        var a = bigArr[minidx - 1];
        var b = bigArr[minidx];
        bigArr[minidx - 1] = b;
        bigArr[minidx] = a;
        minidx--;
      }
      const temp = bigArr.slice();
      // console.log(temp);
      history.push(temp);
      currHistory.push(lo);
      // console.log("bigArr: " + bigArr);
    }
  };

  const onSelMaxSort = () => {
    // const temp = values.slice();
    history.push(values);
    for (let i = values.length - 1; i >= 0; i--) {
      const bigArr = history[history.length - 1].slice();
      // console.log("test " + i);
      let hi = bigArr[i];
      let maxidx = i;
      // let pre = bigArr.splice(0, i);
      for (let j = 0; j < i; j++) {
        if (bigArr[j] > hi) {
          hi = bigArr[j];
          maxidx = j;
        }
      }
      // console.log("lo: " + lo);
      // console.log("idx: " + minidx);
      while (
        maxidx !== values.length - 1 &&
        bigArr[maxidx + 1] < bigArr[maxidx]
      ) {
        var a = bigArr[maxidx + 1];
        var b = bigArr[maxidx];
        bigArr[maxidx + 1] = b;
        bigArr[maxidx] = a;
        maxidx++;
      }
      const temp = bigArr.slice();
      // console.log(temp);
      history.push(temp);
      currHistory.push(hi);
      // console.log("bigArr: " + bigArr);
    }
  };

  const onBubbleSort = () => {
    // const temp = values.slice();
    history.push(values);
    for (let i = values.length; i >= 0; i--) {
      const bigArr = history[history.length - 1].slice();
      for (let j = 1; j < i; j++) {
        if (bigArr[j - 1] > bigArr[j]) {
          var a = bigArr[j - 1];
          var b = bigArr[j];
          bigArr[j - 1] = b;
          bigArr[j] = a;
        }
        const temp = bigArr.slice();
        // console.log(temp);
        history.push(temp);
        currHistory.push(bigArr[j]);
      }
      // const temp = bigArr.slice();
      // console.log(temp);
      // history.push(temp);
      // console.log("bigArr: " + bigArr);
    }
  };

  const onMergeSort = () => {
    console.log("merge called");
    const st = [[values.length, 0]];
    var cur = 0;
    while (cur < st.length) {
      console.log("test");
      console.log(st);
      var curval = st[cur][1];
      if (Math.pow(2, curval + 1) < values.length) {
        st.splice(
          cur + 1,
          0,
          [st[cur][0] - Math.floor(st[cur][0] / 2), st[cur][1] + 1],
          [Math.floor(st[cur][0] / 2), st[cur][1] + 1]
        );
      }
      cur++;
    }
    console.log(st);
    st.reverse();
    history.push(values);
    var sum = 0;
    var hi = 0;
    for (let p = 0; p < st.length; p++) {
      const bigArr = history[history.length - 1].slice();
      sum = 0;
      for (let q = 0; q < p; q++) if (st[q][1] === st[p][1]) sum += st[q][0];
      let left = sum;
      sum += st[p][0];
      let right = sum;
      let mid = Math.floor((left + right) / 2);
      let n1 = mid - left;
      let n2 = right - mid;
      console.log(n1 + "," + n2);
      console.log("Run: " + left + "," + right);
      console.log(left + "," + mid + "," + right);
      let L = Array(n1).fill(null);
      let R = Array(n2).fill(null);
      for (let i = 0; i < n1; i++) L[i] = bigArr[left + i];
      for (let i = 0; i < n2; i++) R[i] = bigArr[mid + i];
      let i = 0;
      let j = 0;
      let k = left;
      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          bigArr[k] = L[i];
          i++;
        } else {
          bigArr[k] = R[j];
          j++;
        }
        k++;
        const temp = bigArr.slice();
        history.push(temp);
        currHistory.push(bigArr[k]);
      }
      while (i < n1) {
        bigArr[k] = L[i];
        i++;
        k++;
        const temp = bigArr.slice();
        history.push(temp);
        currHistory.push(bigArr[k]);
      }
      while (j < n2) {
        bigArr[k] = R[j];
        j++;
        k++;
        const temp = bigArr.slice();
        history.push(temp);
        currHistory.push(bigArr[k]);
      }
      // console.log(temp);
      // const temp = bigArr.slice();
      // history.push(temp);
      // currHistory.push(bigArr[k]);
      sum %= 10;
    }
  };

  const onInsertionSort = () => {
    console.log("insertion called");
    history.push(values);
    for (let i = 0; i < values.length; i++) {
      const bigArr = history[history.length - 1].slice();
      let j = i;
      while (j > 0 && bigArr[j] < bigArr[j - 1]) {
        var a = bigArr[j - 1];
        var b = bigArr[j];
        bigArr[j - 1] = b;
        bigArr[j] = a;
        j--;
        const temp = bigArr.slice();
        // console.log(temp);
        history.push(temp);
        currHistory.push(bigArr[j]);
      }
      // const temp = bigArr.slice();
      // console.log(temp);
      // history.push(temp);
      // console.log("bigArr: " + bigArr);
    }
  };

  const runSort = async (arg) => {
    console.log("run called");
    var sorted = true;
    for (let i = 1; i < values.length; i++) {
      if (values[i] < values[i - 1]) {
        sorted = false;
        console.log(i);
        console.log(values[i - 1]);
        console.log(values[i]);
        break;
      }
    }
    console.log(sorted);
    var increment = 10;
    if (sorted) return;
    switch (arg) {
      case "sel-min":
        switch (values.length) {
          case 10:
            switch (speed) {
              case "Slow":
                increment = 500;
                break;
              case "Normal":
                increment = 200;
                break;
              case "Fast":
                increment = 50;
                break;

              default:
                break;
            }
            break;
          case 100:
            switch (speed) {
              case "Slow":
                increment = 150;
                break;
              case "Normal":
                increment = 75;
                break;
              case "Fast":
                increment = 25;
                break;

              default:
                break;
            }
            break;
          case 1000:
            increment = 10;
            break;
          default:
            break;
        }
        onSelMinSort();
        break;

      case "sel-max":
        switch (values.length) {
          case 10:
            switch (speed) {
              case "Slow":
                increment = 500;
                break;
              case "Normal":
                increment = 200;
                break;
              case "Fast":
                increment = 50;
                break;

              default:
                break;
            }
            break;
          case 100:
            switch (speed) {
              case "Slow":
                increment = 150;
                break;
              case "Normal":
                increment = 75;
                break;
              case "Fast":
                increment = 25;
                break;

              default:
                break;
            }
            break;
          case 1000:
            increment = 10;
            break;
          default:
            break;
        }
        onSelMaxSort();
        break;

      case "bubble":
        switch (values.length) {
          case 10:
            switch (speed) {
              case "Slow":
                increment = 500;
                break;
              case "Normal":
                increment = 100;
                break;
              case "Fast":
                increment = 25;
                break;

              default:
                break;
            }
            break;
          case 100:
            switch (speed) {
              case "Slow":
                increment = 10;
                break;
              case "Normal":
              case "Fast":
                increment = 0;
                break;

              default:
                break;
            }
            break;
          case 1000:
            alert("Too big for bubble sort to run in time!");
            return;
            break;
          default:
            break;
        }
        onBubbleSort();
        break;
      case "merge":
        switch (values.length) {
          case 10:
            switch (speed) {
              case "Slow":
                increment = 500;
                break;
              case "Normal":
                increment = 100;
                break;
              case "Fast":
                increment = 25;
                break;

              default:
                break;
            }
            break;
          case 100:
            // increment = 0;
            switch (speed) {
              case "Slow":
                increment = 100;
                break;
              case "Normal":
                increment = 25;
                break;
              case "Fast":
                increment = 10;
                break;

              default:
                break;
            }
            break;
          case 1000:
            increment = 0;
            break;
          default:
            break;
        }
        onMergeSort();
        break;
      case "insertion":
        // switch (values.length) {
        // case 10:
        //   switch (speed) {
        //     case "Slow":
        //       increment = 500;
        //       break;
        //     case "Normal":
        //       increment = 100;
        //       break;
        //     case "Fast":
        //       increment = 25;
        //       break;

        //     default:
        //       break;
        //   }
        //   break;
        // case 100:
        //   switch (speed) {
        //     case "Slow":
        //       increment = 10;
        //       break;
        //     case "Normal":
        //     case "Fast":
        //       increment = 0;
        //       break;

        //     default:
        //       break;
        //   }
        //   break;
        // case 1000:
        //   alert("Too big for bubble sort to run in time!");
        //   return;
        //   break;
        // default:
        //   break;
        // }
        increment = 10;
        onInsertionSort();
        break;

      default:
        break;
    }

    var offset = 0;
    // console.log(history);
    for (let i = 0; i < history.length; i++) {
      setTimeout(() => {
        runn(i);
      }, offset);
      offset += increment;
      // console.log(history);
    }
  };

  const runn = (i) => {
    console.log("test: " + i);
    console.log(history[i]);
    setValues(history[i]);
    setCurr(currHistory[i]);
  };

  return (
    <div className="App">
      <Header values={values} speed={speed} />
      <Graph values={values} curr={curr} size={values.length} />
      <Info />
      <Footer
        setValues={setValues}
        setSpeed={setSpeed}
        onInit={onInit}
        onShuffle={onShuffle}
        runSort={runSort}
      />
      <Testing testfunc={onMergeSort} />
    </div>
  );
}

export default App;
