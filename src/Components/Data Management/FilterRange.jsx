import { useState } from 'react';
import { Input, Button } from 'reactstrap';

const FilterRange = (props) => {
    
    function filterByRange(typeOfRange, limit, value) {
        if (value === undefined) {
            return false; //If there is no value inserted in the field, don't do anything.
        }
        
        if (props.filters[typeOfRange] === undefined) {
            props.filters[typeOfRange] = { [limit]: value };
        }
        else {
            props.filters[typeOfRange][limit] = value;
        }

        props.setFilters({...props.filters});
        props.toggle();
    }

    let [min, setMin] = useState();
    let [max, setMax] = useState();
    return (
        <>
            <Input type="number"
                name={"min-range-" + props.type}
                id={"min-range-" + props.type}
                bsSize="sm"
                onChange={e => setMin(e.target.value)} />

            <Button
                size="sm"
                onClick={e => filterByRange(
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
                onClick={e => filterByRange(
                    props.type,
                    "max",
                    max)}>

                Asignar máximo
            </Button>
        </>
    )
}

export default FilterRange;