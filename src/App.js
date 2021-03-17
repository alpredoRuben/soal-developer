import {useState} from 'react';

function App() {
  const [attribute, setAttribute] = useState({
    startNumber: '',
    endNumber: ''
  });

  const [results, setResults] = useState([])

  const onChangeHandler = (e) => {
    
    setAttribute({
      ...attribute,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  const onClickSubmitHandler = (e) => {
    e.preventDefault();
    executeLoop();
  }

  const executeLoop = () => {
    var start = attribute.startNumber;
    var end = attribute.endNumber;
    var data = [];

    for (let a = start; a <= end; a++) {
      var str = '';
      var x = 0;

      //1, 4
      for (let b = a; b < end + a; b++) {
        if(b > end) {
          x = b - end
        }
        else {
          x = b;
        }

        str += x;

        if(b < (end + a) - 1) {
          str += ", "
        }
                
      }

      data.push(str);
    }

    setResults(data);
  }

  

  return (
    <div className="container mt-3">
      <h2 className="text-center">Soal Developer</h2>
      <div className="row">
        <div className="col-sm-3">
          <form>
            <div className="mb-3">
              <label className="form-label">Start</label>
              <input type="text" name="startNumber" className="form-control" value={attribute.startNumber} onChange={(e) => onChangeHandler(e)} />
            </div>

            <div className="mb-3">
              <label className="form-label">End</label>
              <input type="text" name="endNumber" className="form-control" value={attribute.endNumber} onChange={(e) => onChangeHandler(e)} />
            </div>

            <button type="button" className="btn btn-primary" onClick={onClickSubmitHandler}>
              PROSES
            </button>
          </form>
        </div>

        <div className="col-sm-4">
          {results.length > 0 && results.map((item, index) => (
            <p key={index} className="">{item}</p>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default App;
