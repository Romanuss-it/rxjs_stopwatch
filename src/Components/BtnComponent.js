import React from 'react';

function BtnComponent({ start, wait, reset, resume, stop, status }) {
  return (
      <div>
          {(status === 0) ?
              <button className="stopwatch-btn stopwatch-btn-blu"
                      onClick={start}>start</button> : ""
          }

          {(status === 1) ?
              <div>
                  <button className="stopwatch-btn stopwatch-btn-red "
                  onDoubleClick={wait}>wait</button>

                  <button className="stopwatch-btn stopwatch-btn-yel"
                          onClick={reset}>reset</button>
                <button className="stopwatch-btn stopwatch-btn-red "
                  onClick={stop}>stop</button>
              </div> : ""
          }

          {(status === 2) ?
              <div>
                  <button className="stopwatch-btn stopwatch-btn-blu"
                          onClick={resume}>resume</button>

                  <button className="stopwatch-btn stopwatch-btn-yel"
                          onClick={reset}>reset</button>
             <button className="stopwatch-btn stopwatch-btn-red "
                  onClick={stop}>stop</button>
              </div> : ""
          }

      </div>
      
  );
  
}
//     

export default BtnComponent;