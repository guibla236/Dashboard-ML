import { useState } from 'react';
import { Input, Button } from 'reactstrap';

function filterByRange(data, setData, typeOfRange, limit, value) {
    if (value === undefined) {
        return false; //If there is no value inserted in the field, don't do anything.
    }
    let variable;
    switch (typeOfRange) {
        case "dollar":
            variable = "dolares";
            break;
        case "pesos":
            variable = typeOfRange;
            break;
        case "amount-solded":
            variable = "ventas";
            break;
        default:
            console.log("Switch with error, check at FilterRange")
    }

    const query = [limit, value, variable];

    function filterFunction(sampleElement) {
        //sampleElement is the individual article
        if (this[0] === "min") {
            if (sampleElement[this[2]] >= this[1]) {
                return true;
            }
        }
        if (this[0] === "max") {
            if (sampleElement[this[2]] <= this[1]) {
                return true;
            }
        }
        return false;
    }

    setData(data.filter(filterFunction, query));
}

const FilterRange = (props) => {
    //Obtener la variable con el props, además del conjunto de datos, tal cual se hacía con los Basic/DetailedData
    console.log(props.rawData)
    let [min, setMin] = useState();
    let [max, setMax] = useState();
    return (
        <>
            <Input type="number"
                name={"min-range-" + props.type}
                id={"min-range-" + props.type}
                size="sm"
                onChange={e => setMin(e.target.value)} />

            <Button
                size="sm"
                onClick={e => filterByRange(props.rawData,
                                            props.setRawData,
                                            props.type,
                                            "min",
                                            min)}>
                Asignar mínimo
            </Button>

            <Input type="number"
                name={"max-range-" + props.type}
                id={"max-range-" + props.type}
                size="sm"
                onChange={e => setMax(e.target.value)} />

            <Button
                size="sm"
                onClick={e => filterByRange(props.rawData, 
                                            props.setRawData,
                                            props.type,
                                            "max",
                                            max)}>

                Asignar máximo
            </Button>
        </>
    )
    /*
    return (
        <Label for="select-solder">
            <Input type="select" name="select-solder" id="select-solder">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
        </Label>
    )*/
}

export default FilterRange;