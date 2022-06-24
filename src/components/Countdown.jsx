import React, { useState, useEffect } from 'react';
import '../index.css';

function Countdown() {
    const [deadline, setDeadline] = useState(new Date("9/2/2022"));
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let diff = (deadline - new Date());
            setDay(Math.ceil(diff / (1000 * 60 * 60 * 24)));
            diff %= 1000 * 60 * 60 * 24;
            setHour(Math.ceil(diff / (1000 * 60 * 60)));
            diff %= 1000 * 60 * 60;
            setMinute(Math.ceil(diff / (1000 * 60)));
            diff %= 1000 * 60;
            setSecond(Math.ceil(diff / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div id="countdown" className="pt-5">
            <div className="d-flex justify-content-center py-5" style={{
                color: "#90745E", fontFamily: "Amatic SC, cursive", fontSize: "5rem", textShadow: "0 0 25px #90745E"}}>
              Live Countdown
          </div>
          <div className="d-flex flex-row justify-content-around flex-wrap w-100 p-3 pt-5">
              {(() => {
                  let fields = [];
                  let times = { "Days": day, "Hours": hour, "Minutes": minute, "Seconds": second };
                  for (let time in times) {
                      fields.push(
                          <div className="d-flex flex-column align-items-center">
                              <div style={{ color: "#90745E", fontFamily: "Amatic SC, cursive", fontSize: "6rem" }}>
                                  {String(times[time]).padStart(2, '0')}
                              </div>
                              <img
                                  className="highlight-background highlight"
                                  src="highlight.png"
                                  style={{ maxWidth: "16em" }}
                              />
                              <div style={{ position: "relative", bottom: "1.5em", color: "#90745E", fontFamily: "Amatic SC, cursive", fontSize: "4rem" }}>
                                  {time}
                              </div>
                          </div>
                      )
                  }
                  return (<>{fields}</>);
              }
              )()}
          </div>
    </div>
  );
}

export default Countdown;
