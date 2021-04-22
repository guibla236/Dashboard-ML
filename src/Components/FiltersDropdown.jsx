import { useState } from 'react';
import { Card, Collapse, Row, Col, CardTitle,CardBody } from 'reactstrap';
import BasicData from './BasicData.jsx';
import DetailedData from './DetailedData.jsx';
import FilterRange from './FilterRange.jsx';
import FilterBySolder from './FilterBySolder.jsx';

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

    const [solder, setSolder] = useState(false);
    const toggleSolder = () => setSolder(!solder);

    const color = { backgroundColor: 'ghostwhite' }


    return (
        <div>
            <Row sm={5}>
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
                                        setRawData={props.setRawData} />
                                </Collapse>
                            </Col>

                            <Card onClick={toggleDetailed} style={color}>
                                <h5>Características detalladas</h5>
                            </Card>
                            <Collapse isOpen={detailedDiv}>
                                <DetailedData
                                    rawData={props.rawData}
                                    setRawData={props.setRawData} />
                            </Collapse>

                            <Card onClick={toggleDollarInterval} style={color}>
                                <h5>Intervalo de precios en dólares</h5>
                            </Card>
                            <Collapse isOpen={dollarInterval}>
                                <FilterRange
                                    type="dollars"
                                    rawData={props.rawData}
                                    setRawData={props.setRawData} />
                            </Collapse>

                            <Card onClick={togglePesosInterval} style={color}>
                                <h5>Intervalo de precios en pesos</h5>
                            </Card>
                            <Collapse isOpen={pesosInterval}>
                                <FilterRange
                                    type="pesos"
                                    rawData={props.rawData}
                                    setRawData={props.setRawData} />
                            </Collapse>

                            <Card onClick={toggleSoldedAmount} style={color}>
                                <h5>Intervalo de cantidad de ventas</h5>
                            </Card>
                            <Collapse isOpen={soldedAmount}>
                                <FilterRange
                                    type="amount-solded"
                                    rawData={props.rawData}
                                    setRawData={props.setRawData} />
                            </Collapse>

                            <Card onClick={toggleSolder} style={color}>
                                <h5>Nombre de usuario del Vendedor</h5>
                            </Card>
                            <Collapse isOpen={solder}>
                                {/* ACÁ HAY QUE GENERAR UN COMPONENTE QUE RECORRA TODOS LOS ELEMENTOS, 
                            EXTRAIGA LOS VENDEDORES, LOS META EN EL SELECT Y MANEJE LA SELECCIÓN DE ELLOS
                            TAL CUAL SE HIZO CON LOS DE LAS CARACTERÍSTICAS */}
                                <FilterBySolder
                                    rawData={props.rawData}
                                    setRawData={props.setRawData} />
                            </Collapse>
                        </CardBody>
                    </Card>

                </Col>
            </Row>

        </div>

    );
}
//SE HACE CON SELECT LIST, ver "Bootstrap Select List" en (https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp)
export default FiltersDropdown;