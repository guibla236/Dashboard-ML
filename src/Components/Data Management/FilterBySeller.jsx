import { Input } from 'reactstrap';

function getSellers(data) {
    let b = []
    function checkSeller(sampleElement) {
        if (!b.includes(sampleElement["vendedor"])) {
            b.push(sampleElement["vendedor"]);
        }
    }

    data.map(checkSeller);
    return b;
}



const FilterBySeller = (props) => {

    function setSeller(value) {
        if (value==="Todos"){
            props.filters.seller = undefined;
        }
        else{
            if (props.filters.seller === undefined) {
                props.filters.seller = [value];
            }
            else {
                props.filters.seller.push(value);
            }
        }
        
        props.setFilters({...props.filters});
        props.toggle();
    }

    const sellers = getSellers(props.rawData);
    return (
        <Input
            type="select"
            size="sm"
            key="seller-select"
            onChange={e => setSeller(e.target.value)}>
            <option selected="selected">Todos</option>
            {
                sellers.map((seller) => {
                    return (
                        <option key={seller}>{seller}</option>
                    )
                })
            }

        </Input>
    )
}

export default FilterBySeller;