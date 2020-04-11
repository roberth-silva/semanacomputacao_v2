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
  Button,
  FormTextarea
} from "shards-react";


import api from '../../services/api';

export default function CreateCourse() {

    const [initials, setInitials] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();

    async function handleNewCourse(e){
        e.preventDefault();

        const data = {initials, description};

        try {
            await api.post('course', data);
            history.push('/course-list');

        } catch (error) {
            alert('Erro ao cadastrar área.' + error);
        }
    }

    function backToCourseList(){
      history.push('/course-list');
    }

return(
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Formulário de cadastro</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form onSubmit={handleNewCourse}>
              <Row form>                
                <Col md="12" className="form-group">
                  <label htmlFor="txtName">Nome</label>
                  <FormInput                    
                    id="txtName"
                    placeholder="Sigla da área"
                    value={initials}
                    onChange={e => setInitials(e.target.value)}
                  />
                </Col>
              </Row>
              <Row form>                
                <Col md="12" className="form-group">
                  <label htmlFor="txtName">Local</label>
                  <FormInput                    
                    id="txtLocal"
                    placeholder="Sigla da área"
                    value={initials}
                    onChange={e => setInitials(e.target.value)}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                    <i className="material-icons mr-1">face</i>
                    <label htmlFor="txtDescription">Description</label>
                    <FormTextarea 
                    id="txtDescription" 
                    rows="5"
                    value={description}
                    onChange = {e => setDescription(e.target.value)} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button theme="success" className="mb-2 mr-1" type="submit">
                      <FiCheckCircle size={18} color="#ffffff" />
                  </Button>
                </Col>
                <Col className="text-right view-report">                  
                  <Button theme="secondary" className="mb-2 mr-1" onClick={() => backToCourseList()} type="button">
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