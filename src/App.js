
import './App.css';

import React from "react";
import Main from "./Components/Main"

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <Main/>
  )
}

/*

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
            <CSVReader 
              onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} 
              label="Ingrese el archivo con los datos"
              />
          </div>
        </div>
      </div>
    );
  }
}*/

export default App;
