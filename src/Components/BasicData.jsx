import { useState } from 'react';
import { Card, Collapse, Col, Button } from 'reactstrap';

function getBasicFeatures(data) {
    let b = {}
    function obtener_caract_bas(sampleElement) {
        Object.keys(sampleElement["caract_bas"]).forEach((elem) => {
            if (!Object.keys(b).includes(elem)) {
                b[elem] = [];
            }
            if (!b[elem].includes(sampleElement["caract_bas"][elem])) {
                b[elem].push(sampleElement["caract_bas"][elem]);
            }
        })

    }
    data.map(obtener_caract_bas);
    return b;
}

function filterDataByBasicFeatures(data, setData, item, value) {
    let query = [item, value];
    function filterFunction(sampleElement) {
        //sampleElement is the individual article
        if (sampleElement["caract_bas"][this[0]] === this[1]) {
            return true;
        }
        return false;
    }
    setData(data.filter(filterFunction, query));
}

const BasicData = (props) => {
    const data = getBasicFeatures(props.rawData);

    const state_base = {}
    Object.keys(data).forEach((entry) => {
        state_base[entry] = false;
    })

    const [basicas, setBasicas] = useState(state_base);

    const toggle = (variable) => {
        console.log("TOGGLE")
        const oldBasicas = { ...basicas }
        oldBasicas[variable] = !oldBasicas[variable]
        setBasicas(oldBasicas)
    };
    
    const colorItem = { backgroundColor: 'lightgray' }

    return (
        Object.keys(data).map((item) => {
            return (
                <div key={item}>
                    <Card className="capitalize" style={colorItem} onClick={e => toggle(item)}>
                        <h6>{item}</h6>
                    </Card>
                    <Col>
                        <Collapse isOpen={basicas[item]}>
                            {
                                Object.keys(data[item]).map((subitem) => {
                                    return (
                                        <Button key={subitem}
                                            className="capitalize"
                                            color="secondary"
                                            onClick={e => filterDataByBasicFeatures(props.rawData,
                                                props.setRawData,
                                                item,
                                                data[item][subitem])}
                                            size="sm">
                                            {data[item][subitem]}
                                        </Button>
                                    )
                                })
                            }
                        </Collapse>
                    </Col>
                </div>
            )
        })
    )
}

export default BasicData;