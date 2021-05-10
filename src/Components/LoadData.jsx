import React, { useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import UserDataForm from "./UserDataForm.jsx";
import PredefinedDataList from "./PredefinedDataList.jsx";
import InputData from './Contexts/ContextInputData.jsx';
import cafeteras from '../extra_data/cafeteras.js';
import macs from '../extra_data/macs.js';
import televisores from '../extra_data/televisores.js';
import sillones from '../extra_data/sillones.js';

const LoadData = (props) => {
  let history = useHistory();
  const setValues = useContext(InputData)[1]

  function onInputedData(data) {
    setValues(JSON.parse(data));
    history.push('/analyse/');
  }

  function onSelectedData(data){
    setValues(data);
    history.push('/analyse/');
  }
  return (
    <Container>
      <Row>
        <Col>
          <UserDataForm onSelectedData={onInputedData} />
        </Col>

        <Col sm="3" className="scroll-list">
          <hr />
          <div className="scroll-list-title">
            Datos de ejemplo
          </div>
          <hr />
          <PredefinedDataList
            title="Cafeteras"
            details="Nuevas"
            onSelectedData={onSelectedData}
            data={cafeteras} />

          <PredefinedDataList
            title="Macbook Air"
            details="Nuevas"
            onSelectedData={onSelectedData}
            data={macs} />

          <PredefinedDataList
            title="Televisores Samsung"
            details="Nuevos, solo Montevideo"
            onSelectedData={onSelectedData}
            data={televisores} />

          <PredefinedDataList
            title="Sillones"
            details="Usados, solo Maldonado"
            onSelectedData={onSelectedData}
            data={sillones} />
          <hr />
        </Col>
      </Row>



    </Container>
  );
}


export default withRouter(LoadData);
