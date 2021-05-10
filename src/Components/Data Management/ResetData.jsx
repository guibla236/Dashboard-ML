import { useContext } from 'react';
import { Button } from 'reactstrap';
import ContextInputData from '../Contexts/ContextInputData.jsx';

function restoreDefault(setRawData,contextData) {
    setRawData(contextData);
}

const ResetData = (props) => {
    const contextData = useContext(ContextInputData)[0];
    const haveChanged = props.rawData !== contextData;

    if (haveChanged) {
        return (
            <div className="reset-data">
                <Button onClick={(e) => restoreDefault(props.setRawData,contextData)}>Restablecer datos</Button>
            </div>
        )
    }
    else {
        return false;
    }
}

export default ResetData;