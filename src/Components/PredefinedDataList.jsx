import { withRouter } from "react-router"
import {
    Card,
    CardText,
    CardTitle,
    Button,
} from 'reactstrap';

const ListOfPredefinedData = (props) => {
    return (
        <>
            <Card>
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardText>{props.details}</CardText>
                <Button onClick={props.onSelectedData}>Utilizar estos datos</Button>
            </Card>
        </>
    )
}

export default withRouter(ListOfPredefinedData);