import React, { useState } from "react";
import Plot from "./ScatterPlot.jsx";
import InputData from "./ContextInputData.jsx";
import LoadData from "./LoadData.jsx";
import Header from "./Header.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Main() {
    const [jsonData, setJsonData] = useState({input:''});

    return (
        <InputData.Provider value={[jsonData, setJsonData]}>
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/analyse/">
                            <Plot />
                        </Route>
                        <Route path="/">
                            <LoadData />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </InputData.Provider>
    )
}

export default Main;