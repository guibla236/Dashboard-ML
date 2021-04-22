import React, {useContext} from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import UserDataForm from "./UserDataForm.jsx";
import PredefinedDataList from "./PredefinedDataList.jsx";
import InputData from './ContextInputData.jsx';

const LoadData = (props) => {
  let history = useHistory();
  const setValues = useContext(InputData)[1]

  function onSelectedData(data) {
    const dataset = JSON.parse(data)
    setValues(dataset);
    history.push('/analyse/');
  }
  return (
    <Container>
      <Row>
        <Col>
          <UserDataForm onSelectedData={onSelectedData}/>
        </Col>

        <Col sm="3" className="scroll-list">
          <hr />

          <PredefinedDataList
            title="Datos 1"
            details="Detalles de datos 1" 
            onSelectedData={onSelectedData} />

          <PredefinedDataList
            title="Datos 2"
            details="Detalles de datos 2"
            onSelectedData={onSelectedData} />

          <PredefinedDataList 
           title="Datos 3"
           details="Detalles de datos 3"
           onSelectedData={onSelectedData} />

          <PredefinedDataList
           title="Datos 4" 
           details="Detalles de datos 4"
           onSelectedData={onSelectedData} />
          <hr />
        </Col>
      </Row>



    </Container>
  );
}


export default withRouter(LoadData);