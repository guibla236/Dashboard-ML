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

const BasicData = (props) => {
    const data = getBasicFeatures(props.rawData);

    const state_base = {}
    Object.keys(data).forEach((entry) => {
        state_base[entry] = false;
    })

    const [basicas, setBasicas] = useState(state_base);

    const toggle = (variable) => {
        const oldBasicas = { ...basicas }
        oldBasicas[variable] = !oldBasicas[variable]
        setBasicas(oldBasicas)
    };

    function filterDataByBasicFeatures(item, value) {
        
        if (props.filters.basic === undefined) {
            props.filters.basic = [[item, value]]
        }
        
        else {
            props.filters.basic.push([item, value]);
        }

        props.setFilters({...props.filters});
        props.toggle();
        setBasicas(state_base);
    }


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
                                            onClick={e => filterDataByBasicFeatures(
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