import { Input } from 'reactstrap';

function getSolders(data) {
    let b = []
    function checkSolder(sampleElement) {
        if (!b.includes(sampleElement["vendedor"])) {
            b.push(sampleElement["vendedor"]);
        }
    }

    data.map(checkSolder);
    return b;
}

function setSolder(value, data, setData) {
    if (value==="Todos"){
        return false;
    }
    function filterFunction(sampleElement) {
        //sampleElement is the individual article
        if (sampleElement["vendedor"] === this) {
            return true;
        }
        return false;
    }

    setData(data.filter(filterFunction, value));
}

const FilterBySolder = (props) => {
    const solders = getSolders(props.rawData);
    return (
        <Input
            type="select"
            size="sm"
            key="solder-select"
            onChange={e => setSolder(e.target.value, props.rawData, props.setRawData)}>
            <option selected="selected">Todos</option>
            {
                solders.map((solder) => {
                    return (
                        <option key={solder}>{solder}</option>
                    )
                })
            }

        </Input>
    )
}

export default FilterBySolder;