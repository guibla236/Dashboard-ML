
import { useContext } from 'react';
import { withRouter } from "react-router";
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import InputData from './ContextInputData.jsx';

const UserDataForm = (props) => {
    const [data, setData] = useContext(InputData)
    return (
        <>
            <Card>
                <CardTitle>
                    <hr />
                Información recolectada
                <hr />
                </CardTitle>
                <Card>
                    <CardBody>
                        <textarea
                            value={data.input}
                            onChange={e => setData({ input: e.target.value })}
                            className="form-control"
                            rows="4">
                        </textarea>
                    </CardBody>
                </Card>
            </Card>
            <Button className="btn btn-primary" onClick={() => props.onSelectedData(data.input)}>
                Utilizar datos
        </Button>
        </>
    )
}
export default withRouter(UserDataForm);