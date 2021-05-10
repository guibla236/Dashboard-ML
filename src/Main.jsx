import React, { useState } from "react";
import Plot from "./Components/ScatterPlot.jsx";
import InputData from "./Components/Contexts/ContextInputData.jsx";
import LoadData from "./Components/LoadData.jsx";
import Header from "./Components/Header.jsx";
import Info from "./Components/Info.jsx";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Main() {
    const [jsonData, setJsonData] = useState({ input: '' });

    return (
        <>
            <InputData.Provider value={[jsonData, setJsonData]}>
                <Router>
                    <div className="App">
                        <Header />
                        <Switch>
                            <Route path="/analyse/">
                                <Plot />
                            </Route>
                            <Route path="/how-to-generate-data">
                                <Info />
                            </Route>
                            <Route path="/">
                                <LoadData />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </InputData.Provider>
        </>

    )
}

export default Main;