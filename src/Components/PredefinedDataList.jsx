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
            <Card style={{"background-color":"#282c34"}}>
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardText>{props.details}</CardText>
                <Button onClick={e=>props.onSelectedData(props.data)}>Utilizar estos datos</Button>
            </Card>
        </>
    )
}

export default withRouter(ListOfPredefinedData);