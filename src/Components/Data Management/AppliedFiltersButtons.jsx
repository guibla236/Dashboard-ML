
const MinIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
        </svg>
    )
}

const MaxIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
        </svg>
    )
}

const FilterElement = (props) => {
    const XCircle = (props) => {
        return (
            <div className="delete-filter" onClick={() => props.deleteFilter(props.filterName, props.data)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
            </div>
        )
    }

    let symbol;
    if (props.filterName === "pesos") {
        symbol = "$";
    }
    else if (props.filterName === "dolares") {
        symbol = "U$S";
    }

    switch (props.filterName) {
        case "basic":
        case "detailed":
            return (
                props.i_filter.map((element) => {
                    return (
                        <div className="feature-filter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            {element[element.length - 2]}: {element[element.length - 1]}  <XCircle filterName={props.filterName} data={element} deleteFilter={props.deleteFilter} />
                        </div>
                    )
                })
            )
        case "pesos":
        case "dolares":
        case "ventas":
            return (
                Object.keys(props.i_filter).map((filterType) => {
                    return (
                        <div className="range-filter">
                            {filterType === "min" ? <MinIcon /> : <MaxIcon />}
                            {symbol} {props.i_filter[filterType]} {props.filterName==="ventas" ? "ventas" : false}  <XCircle filterName={props.filterName} data={filterType} deleteFilter={props.deleteFilter} />
                        </div>
                    )

                })
            )

        case "seller":
            return (
                props.i_filter.map((seller) => {
                    return (
                        <div className="seller-filter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                            </svg>
                            {seller}  <XCircle filterName={"seller"} data={seller} deleteFilter={props.deleteFilter} />
                        </div>
                    )
                })
            )
        default:
            return ("El filtro de nombre " + props.filterName + " no se corresponde con un tipo conocido.")
    }
}


const AppliedFiltersButtons = (props) => {
    function deleteFilter(filterName, data) {
        if (filterName === "seller") {
            if (props.filters.seller.length === 1) {
                props.filters.seller = undefined;
            }
            else {
                props.filters.seller.pop(data);
            }
            props.setFilters({ ...props.filters });
        }
        else if ((filterName === "pesos") || (filterName === "dolares") || (filterName === "ventas")) {
            if (props.filters[filterName].length === 1) {
                props.filters[filterName] = undefined;
            }
            else {
                delete props.filters[filterName][data];
            }
            props.setFilters({ ...props.filters })
        }

        else if (filterName === "basic") {
            if (props.filters.basic.length === 1) {
                props.filters.basic = undefined;
            }
            else {
                props.filters.basic.forEach((element, index) => {
                    if (element[0] === data[0]) {
                        delete props.filters.basic[index];
                    }
                })
            }
            props.setFilters({ ...props.filters })
        }

        else if (filterName === "detailed") {
            if (props.filters.detailed.length === 1) {
                props.filters.detailed = undefined;
            }
            else {
                props.filters.detailed.forEach((element, index) => {
                    if (element === data) {
                        delete props.filters.detailed[index];
                    }
                })
            }
            props.setFilters({ ...props.filters })
        }
    }

    return (
        <div className="applied-filters">
            {
                Object.keys(props.filters).map((filterName) => {
                    return (
                        props.filters[filterName] !== undefined ?
                            <FilterElement
                                i_filter={props.filters[filterName]}
                                filterName={filterName}
                                deleteFilter={deleteFilter}
                            />
                            : null
                    )

                })
            }
        </div>
    )
}

export default AppliedFiltersButtons;