import React, { useContext, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';
import ContextData from "./Contexts/ContextInputData";
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from "reactstrap";
import FiltersDropdown from './FiltersDropdown';
import AppliedFiltersButtons from './Data Management/AppliedFiltersButtons';

function processData(dataset) {
    let rows = [];
    const ordenador = (element) => {
        const point = {
            x: parseInt(element.ventas),
            y: parseInt(element.pesos),
            titulo: element.titulo,
            precio_uy: element.pesos,
            precio_us: element.dolares,
        }
        rows.push(point)
    }
    dataset.forEach(ordenador);
    return rows
}
function filterBasicDataFunction(sampleElement) {
    if (sampleElement["caract_bas"][this[0]] === this[1] || sampleElement["caract_bas"][this[0]] !== undefined) {
        return true;
    }
    return false;
}
function filterDetailedDataFunction(sampleElement) {
    if (sampleElement["caract_det"][this[0]] === undefined || sampleElement["caract_det"][this[0]][this[1]] === undefined) {
        return false;
    }
    if (sampleElement["caract_det"][this[0]][this[1]] === this[2]) {
        return true;
    }
    return false;
}

function filterByRangeFunction(sampleElement) {
    if (this[0] === "dollars") {
        this[0] = "dolares";
    }
    if (this[0] === "amount-solded") {
        this[0] = "ventas"
    }

    if (this[1] === "min") {
        if (sampleElement[this[0]] >= this[2]) {
            return true;
        }
    }
    if (this[1] === "max") {
        if (sampleElement[this[0]] <= this[2]) {
            return true;
        }
    }
    return false;
}

function filterBySeller(sampleElement) {
    if (sampleElement["vendedor"] === this) {
        return true;
    }
    return false;
}

function applyFilters(data, filters) {

    if (filters.seller !== undefined) {
        let final_data = [];
        filters.seller.forEach((i_seller) => {
            final_data = final_data.concat(data.filter(filterBySeller, i_seller));
        })
        data = final_data; //Since now, we will work only with the subset of selected sellers.
        //After this, we can apply the rest of the filters in a more efficient way.

    }

    if (filters.basic !== undefined) {
        filters.basic.forEach((i_filter) => {
            data = data.filter(filterBasicDataFunction, i_filter);
        })
    }

    if (filters.detailed !== undefined) {
        filters.detailed.forEach((i_filter) => {
            data = data.filter(filterDetailedDataFunction, i_filter)
        })
    }

    // TODO: put this next three filter's types into one type (ranges) and three subtypes (pesos, dolares and ventas).
    // This allow me to not repeat code.
    if (filters.pesos !== undefined) {
        if (filters.pesos.min !== undefined) {
            data = data.filter(filterByRangeFunction, ["pesos", "min", filters.pesos.min])
        }
        if (filters.pesos.max !== undefined) {
            data = data.filter(filterByRangeFunction, ["pesos", "max", filters.pesos.max])
        }
    }

    if (filters.dolares !== undefined) {
        if (filters.dolares.min !== undefined) {
            data = data.filter(filterByRangeFunction, ["dolares", "min", filters.dolares.min])
        }
        if (filters.dolares.max !== undefined) {
            data = data.filter(filterByRangeFunction, ["dolares", "max", filters.dolares.max])
        }
    }

    if (filters.ventas !== undefined) {
        if (filters.ventas.min !== undefined) {
            data = data.filter(filterByRangeFunction, ["ventas", "min", filters.ventas.min])
        }
        if (filters.ventas.max !== undefined) {
            data = data.filter(filterByRangeFunction, ["ventas", "max", filters.ventas.max])
        }
    }

    return data;
}

const Plot = () => {
    /*
        Input data is the data introduced by the user.
        Raw data is the raw data used for ploting.
        What is the difference?
        The raw data could be manipulated with filters 
        (for example: prices between $1000 and $2000)
        but the input data (saved in the context) don't.

        TLDR: the raw data is mutable, the context don't.
    */

    const [filters, setFilters] = useState({
        basic: undefined,
        detailed: undefined,
        dolares: undefined,
        pesos: undefined,
        amountSolded: undefined,
        seller: undefined,
    });
    //console.log("filters")
    //console.log(filters)

    let history = useHistory();
    function goHome() {
        history.push('/')
    }

    let [rawData, setRawData] = useState(useContext(ContextData)[0]);
    //console.log(rawData);
    if (rawData.input === "") {
        return (
            <div className="error">
                <hr />
                No ha ingresado ningun dato
                <hr />
                <Button onClick={goHome}>Volver</Button>
            </div>
        )
    }
    const data = processData(applyFilters(rawData, filters));

    return (
        <>
            <Row>
                <Col sm={6}>
                    <ResponsiveContainer width={'100%'} height={500}>
                        <ScatterChart
                            margin={{
                                top: 20,
                                right: 0,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis
                                type="number"
                                dataKey="x"
                                name="Ventas"
                                unit=""
                                style={{ fill: "white" }}
                            ><Label value="Cantidad de ventas" color="white" offset={-10} position="insideBottom" style={{ fill: "white" }} /></XAxis>

                            <YAxis
                                type="number"
                                dataKey="y"
                                name="Precio"
                                unit=""
                                style={{ fill: "white" }}
                            ><Label value='Precio ($U)' angle={-90} position='insideLeft' offset={-10} style={{ fill: "white" }} /></YAxis>
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="A school" data={data} fill="#8884d8" />
                        </ScatterChart>
                    </ResponsiveContainer>
                    <div class="applied-filters">
                        <AppliedFiltersButtons
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </div>
                </Col>
                <Col sm={6}>
                    <FiltersDropdown
                        rawData={rawData}
                        setRawData={setRawData}
                        filters={filters}
                        setFilters={setFilters}
                    />
                </Col>
            </Row>
        </>
    );



}

export default Plot;
