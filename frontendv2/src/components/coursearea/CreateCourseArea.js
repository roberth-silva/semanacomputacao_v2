import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

import {FiCheckCircle, FiChevronsLeft} from 'react-icons/fi';

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,  
  FormInput,  
  Button
} from "shards-react";


import api from '../../services/api';

export default function CreateCourseArea() {

    const [initials, setInitials] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();

    async function handleNewArea(e){
        e.preventDefault();

        const data = {initials, description};

        try {
            await api.post('coursearea', data);
            history.push('/coursearea');

        } catch (error) {
            alert('Erro ao cadastrar área.' + error);
        }
    }

    function backToAreaList(){
      history.push('/coursearea');
    }

return(
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Área</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form onSubmit={handleNewArea}>
              <Row form>                
                <Col md="12" className="form-group">
                  <label htmlFor="txtInitials">Sigla</label>
                  <FormInput                    
                    id="txtInitials"
                    placeholder="Sigla da área"
                    value={initials}
                    onChange={e => setInitials(e.target.value)}
                  />
                </Col>
              </Row>
              <Row form>                
                <Col md="12" className="form-group">
                  <label htmlFor="txtDescription">Descrição</label>
                  <FormInput                    
                    id="txtDescription"
                    placeholder="Área"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button theme="success" className="mb-2 mr-1" type="submit">
                      <FiCheckCircle size={18} color="#ffffff" />
                  </Button>
                </Col>
                <Col className="text-right view-report">                  
                  <Button theme="secondary" className="mb-2 mr-1" onClick={() => backToAreaList()} type="button">
                      <FiChevronsLeft size={18} color="#ffffff" />
                  </Button>
                </Col>
              </Row>              
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);
}