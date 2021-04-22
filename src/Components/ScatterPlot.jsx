import React, { useContext, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ContextData from "./ContextInputData.jsx";
import { Row, Col } from "reactstrap";
import FiltersDropdown from './FiltersDropdown.jsx';

function preProcessData(dataset) {
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

    let [rawData, setRawData] = useState(useContext(ContextData)[0]);
    const data = preProcessData(rawData);
    return (
        <>
            <Row>
                <Col sm={6} className="border">
                    <ResponsiveContainer width={'100%'} height={500}>
                        <ScatterChart
                            margin={{
                                top: 20,
                                right: 20,
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
                                />

                            <YAxis
                                type="number"
                                dataKey="y"
                                name="Precio"
                                unit=""                                
                                />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="A school" data={data} fill="#8884d8" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </Col>
                <Col sm={6}>
                    <FiltersDropdown
                        rawData={rawData}
                        setRawData={setRawData}
                    />
                </Col>
            </Row>
            <Row>
                {/*
                <Col sm={6} className="border">
                    <Row>
                        <Col>
                            <Input
                                placeholder="Mínimo vertical"
                                onChange={e => setRangeData(setMinVert, e.target.value)}
                            />
                        </Col>

                        <Col>
                            <Input
                                placeholder="Máximo vertical"
                                onChange={e => setRangeData(setMaxVert, e.target.value)}
                            />
                        </Col>

                    </Row>

                    <Row>

                        <Col>
                            <Input
                                placeholder="Mínimo horizontal"
                                onChange={e => setRangeData(setMinHoriz, e.target.value)}
                            />
                        </Col>

                        <Col>
                            <Input
                                placeholder="Máximo horizontal"
                                onChange={e => setRangeData(setMaxHoriz, e.target.value)}
                            />
                        </Col>

                    </Row>
                </Col>
                */}
                <Col>No utilizado aún</Col>
            </Row>
        </>
    );
}

export default Plot;
