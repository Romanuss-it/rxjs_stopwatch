import React from 'react';

function BtnComponent({ start, stop, reset, resume, status }) {
  return (
      <div>
          {(status === 0) ?
              <button className="stopwatch-btn stopwatch-btn-blu"
                      onClick={start}>start</button> : ""
          }

          {(status === 1) ?
              <div>
                  <button className="stopwatch-btn stopwatch-btn-red "
                  onDoubleClick={stop}>wait</button>

                  <button className="stopwatch-btn stopwatch-btn-yel"
                          onClick={reset}>reset</button>
              </div> : ""
          }

          {(status === 2) ?
              <div>
                  <button className="stopwatch-btn stopwatch-btn-blu"
                          onClick={resume}>resume</button>

                  <button className="stopwatch-btn stopwatch-btn-yel"
                          onClick={reset}>reset</button>
              </div> : ""
          }

      </div>
      
  );
  
}
//     

export default BtnComponent;