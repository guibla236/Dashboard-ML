import { useState } from 'react';
import { Button, Card, Collapse, Col } from 'reactstrap';

function getDetailedFeatures(data) {
    /* Creates an object with all the unique keys and values from the data */
    var c = {}
    function obtener_caract_det(sampleElement) {
        Object.keys(sampleElement["caract_det"]).forEach((elem) => {
            //Selects all the detailed keys of detailed data if they aren't yet
            if (!Object.keys(c).includes(elem)) {
                c[elem] = {};
            }
            Object.keys(sampleElement["caract_det"][elem]).forEach((caract) => {
                //Selects all the subkeys of that key if they aren't saved yet
                if (!Object.keys(c[elem]).includes(caract)) {
                    c[elem][caract] = [];
                }
                //Saves all the values of that key and subkey if they aren't saved yet
                if (!c[elem][caract].includes(sampleElement["caract_det"][elem][caract])) {
                    c[elem][caract].push(sampleElement["caract_det"][elem][caract]);
                }
            })
        })
    }
    data.map(obtener_caract_det);
    return c;
}

function filterDataByDetailedFeatures(data, setData, item, subitem, value) {
    let query = [item, subitem, value];
    function filterFunction(sampleElement) {
        //sampleElement is the individual article
        if (sampleElement["caract_det"][this[0]][this[1]] === this[2]) {
            return true;
        }
        return false;
    }
    setData(data.filter(filterFunction, query));
}


const DetailedData = (props) => {
    const data = getDetailedFeatures(props.rawData);

    const state_base = {}
    const state_detailed = {}
    Object.keys(data).forEach((first_level) => {
        state_base[first_level] = false;
        state_detailed[first_level] = {}
        Object.keys(data[first_level]).forEach((second_level) => {
            state_detailed[first_level][second_level] = false;
        })
    })

    const [basicas, setBasicas] = useState(state_base);
    const [detalladas, setDetalladas] = useState(state_detailed);

    const toggle_basicas = (variable) => {
        const oldData = { ...basicas }
        oldData[variable] = !oldData[variable]
        setBasicas(oldData)
    };

    const toggle_detailed = (variable, subvariable) => {
        const oldData = { ...detalladas }
        oldData[variable][subvariable] = !oldData[variable][subvariable]
        setDetalladas(oldData)
    };

    const colorItem = { backgroundColor: 'lightgray' }
    const colorSub = { backgroundColor: 'silver' }
    
    return (
        Object.keys(data).map((item) => {
            return (
                <Col key={item}>
                    <Card className="capitalize" style={colorItem} onClick={e => toggle_basicas(item)}>
                        <h6>{item}</h6>
                    </Card>

                    <Col>
                        <Collapse isOpen={basicas[item]}>
                            <Col>
                                {
                                    Object.keys(data[item]).map((subitem) => {
                                        return (
                                            <div key={subitem}>
                                                <Card className="capitalize" style={colorSub} onClick={e => toggle_detailed(item, subitem)}>
                                                    <h7>{subitem}</h7>
                                                </Card>

                                                <Collapse isOpen={detalladas[item][subitem]}>
                                                    <Col>
                                                        {
                                                            Object.keys(data[item][subitem]).map((ssitem) => {
                                                                return (
                                                                    <div key={ssitem}>
                                                                        <Button
                                                                            color="secondary"
                                                                            className="capitalize"
                                                                            size="sm"
                                                                            onClick={e => filterDataByDetailedFeatures(props.rawData,
                                                                                props.setRawData,
                                                                                item,
                                                                                subitem,
                                                                                data[item][subitem][ssitem])}>
                                                                            {data[item][subitem][ssitem]}
                                                                        </Button>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </Col>
                                                </Collapse>
                                            </div>
                                        )
                                    })
                                }
                            </Col>
                        </Collapse>
                    </Col>
                </Col>
            )
        })
    )
}

export default DetailedData;