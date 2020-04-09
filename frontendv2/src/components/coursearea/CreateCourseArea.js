import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";


import api from '../../services/api';

export default function CreateCourseArea() {

    const [description, setDescription] = useState('');

    const history = useHistory();

    async function handleNewArea(e){
        e.preventDefault();

        const data = {description};

        try {
            await api.post('coursearea', data);
            history.push('/coursearea');

        } catch (error) {
            alert('Erro ao cadastrar área.' + error);
        }
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
                  <label htmlFor="txtDescription">Descrição</label>
                  <FormInput                    
                    id="txtDescription"
                    placeholder="Área"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </Col>
              </Row>              
              <Button type="submit" theme="accent">Salvar</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);
}