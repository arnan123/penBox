import React, { useState } from 'react';
import './App.css';

function App() {
  const [array, setArray] = useState('');
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<number[][]>([]);

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const getArr = (a: string) => {
    return a.split(',');
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let resArray = getArr(array);
    let arr: number[][] = [];
    let interval: number[] = [];
    let flag = 0;

    if (!isNaN(Number(number))) {
      for (let x = 0; x < resArray.length; x++) {
        if (
          specialChars.test(resArray[x]) ||
          isNaN(Number(resArray[x]))
        ) {
          flag = 1;
          break;
        }
        if (
          Number(resArray[x]) < 5 &&
          Number(resArray[x]) + Number(resArray[x + 1]) ===
            Number(number)
        ) {
          interval.push(Number(resArray[x]), Number(resArray[x + 1]));
          arr.push(interval);
          interval = [];
          x++;
        }
      }

      if (flag === 0 && !isNaN(Number(number))) {
        setResult(arr);
        console.log(arr);
      } else {
        setResult([]);
      }
    } else {
      setResult([]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Add Array and Number</p>
        <form onSubmit={onSubmit}>
          <div className="inputBox">
            <input
              placeholder="Array here"
              onChange={(e) => {
                setArray(e.target.value);
              }}
            />
            <input
              placeholder="Number here"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
        <p>Array: {array}</p>
        <p>K: {number}</p>
        {result.length !== 0 && (
          <>
            <p>Check console for full result</p>
            <div className="resultBox">
              {result.map((res) => (
                <div key={Math.random()} className="resultBox">
                  {res.map((r) => (
                    <p key={Math.random()}>{`${r} `}</p>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
