import "./App.css";
import { useEffect } from "react";
import { interval, Observable, of, mapTo } from "rxjs";
import { useSelector, useDispatch, complete } from "react-redux";

// const stream$ = interval(100);
// stream$.subscribe((val) => dispacth({ type: "seconsd", payload: val }));

function App() {
  const dispacth = useDispatch();
  const hours = useSelector((state) => state.hours);
  const minutes = useSelector((state) => state.minutes);
  const seconds = useSelector((state) => state.seconds);
  let i = 0;

  const stream$ = new Observable((observer) => {
    const intervalId = setInterval(() => {
      i++;
      observer.next(i);
    }, 100);
    observer.complete();
  });

  const subscribtion = stream$.subscribe((val) =>
    dispacth({ type: "seconsd", payload: val })
  );

  function startFunc() {
    subscribtion.subscribe();
  }

  function resetFunc() {}

  function waitFunc() {
    clearInterval();
  }

  return (
    <div className="mainTimerBlock">
      <div className="timerNum">
        {hours} - {minutes} - {seconds}
      </div>
      <div className="mainBtnsBlock">
        <div className="startStopBtn" onClick={startFunc}>
          Start/Stop
        </div>
        <div className="waitBtn">Wait</div>
        <div className="resetBtn" onClick={resetFunc}>
          Reset
        </div>
      </div>
    </div>
  );
}

export default App;
