import { useState } from 'react';
import { Card, Collapse, Row, Col, CardTitle, CardBody } from 'reactstrap';
import BasicData from './Data Management/BasicData.jsx';
import DetailedData from './Data Management/DetailedData.jsx';
import FilterRange from './Data Management/FilterRange.jsx';
import FilterBySeller from './Data Management/FilterBySeller.jsx';

const FiltersDropdown = (props) => {

    const [basicDiv, setBasicDiv] = useState(false);
    const toggleBasic = () => setBasicDiv(!basicDiv);

    const [detailedDiv, setDetailedDiv] = useState(false);
    const toggleDetailed = () => setDetailedDiv(!detailedDiv);

    const [pesosInterval, setPesosInterval] = useState(false);
    const togglePesosInterval = () => setPesosInterval(!pesosInterval);

    const [dollarInterval, setDollarInterval] = useState(false);
    const toggleDollarInterval = () => setDollarInterval(!dollarInterval);

    const [soldedAmount, setSoldedAmount] = useState(false);
    const toggleSoldedAmount = () => setSoldedAmount(!soldedAmount);

    const [seller, setSeller] = useState(false);
    const toggleSeller = () => setSeller(!seller);

    const color = { backgroundColor: 'ghostwhite' }

    return (
        <div>
            <Row sm={5} style={{ 'marginTop': '20px' }}>
                <Col sm={5}>
                    <Card>
                        <CardTitle><h3>Filtros disponibles</h3></CardTitle>
                        <CardBody>
                            <Card onClick={toggleBasic} style={color}>
                                <h5>Características básicas</h5>
                            </Card>
                            <Col>
                                <Collapse isOpen={basicDiv}>
                                    <BasicData
                                        rawData={props.rawData}
                                        setRawData={props.setRawData}
                                        toggle={toggleBasic}
                                        filters={props.filters}
                                        setFilters={props.setFilters} />
                                </Collapse>
                            </Col>

                            <Card onClick={toggleDetailed} style={color}>
                                <h5>Características detalladas</h5>
                            </Card>
                            <Collapse isOpen={detailedDiv}>
                                <DetailedData
                                    rawData={props.rawData}
                                    toggle={toggleDetailed}
                                    filters={props.filters}
                                    setFilters={props.setFilters} />
                            </Collapse>
                                <Card onClick={toggleDollarInterval} style={color}>
                                    <h5>Intervalo de precios en dólares</h5>
                                </Card>
                                <Collapse isOpen={dollarInterval}>
                                    <FilterRange
                                        type="dolares"
                                        toggle={toggleDollarInterval}
                                        filters={props.filters}
                                        setFilters={props.setFilters} />
                                </Collapse>

                                <Card onClick={togglePesosInterval} style={color}>
                                    <h5>Intervalo de precios en pesos</h5>
                                </Card>
                                <Collapse isOpen={pesosInterval}>
                                    <FilterRange
                                        type="pesos"
                                        toggle={togglePesosInterval}
                                        filters={props.filters}
                                        setFilters={props.setFilters} />
                                </Collapse>

                                <Card onClick={toggleSoldedAmount} style={color}>
                                    <h5>Intervalo de cantidad de ventas</h5>
                                </Card>
                                <Collapse isOpen={soldedAmount}>
                                    <FilterRange
                                        type="ventas"
                                        toggle={toggleSoldedAmount}
                                        filters={props.filters}
                                        setFilters={props.setFilters} />
                                </Collapse>
                            <Card onClick={toggleSeller} style={color}>
                                <h5>Nombre de usuario del Vendedor</h5>
                            </Card>
                            <Collapse isOpen={seller}>
                                <FilterBySeller
                                    rawData={props.rawData}
                                    toggle={toggleSeller}
                                    filters={props.filters}
                                    setFilters={props.setFilters} />
                            </Collapse>
                        </CardBody>
                    </Card>

                </Col>
            </Row>

        </div>

    );
}

export default FiltersDropdown;