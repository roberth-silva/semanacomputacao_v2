import React, { useState } from "react";

import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,  
  FormInput,  
  FormTextarea,
  Button,
  Progress
} from "shards-react";

import Avatar from '../../images/avatars/0.jpg';

import {useHistory} from 'react-router-dom';

import api from '../../services/api';

import { FiChevronsLeft, FiCheckCircle } from "react-icons/fi";


export default function CreateTeacher() {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[description, setDescription] = useState('');

  const history = useHistory();

  async function handleNewTeacher(e){
    e.preventDefault();

    const data = {name, email, description};

    try {
        await api.post('teacher', data);
        history.push('/teacher-list');

    } catch (error) {
        alert('Erro ao cadastrar área.' + error);
    }
  }

  function backToAreaList(){
    history.push('/teacher-list');
  }
    return(
      <Row>
      <Col lg="4">
        <Card small className="mb-4 pt-3">
          <CardHeader className="border-bottom text-center">
            <div className="mb-3 mx-auto">
              <img
                className="rounded-circle"
                src={Avatar}
                alt=''
                width="110"
              />
            </div>
            <h4 className="mb-0">''</h4>
            <span className="text-muted d-block mb-2">''</span>
            <Button pill outline size="sm" className="mb-2">
              <i className="material-icons mr-1">person_add</i> Follow
            </Button>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="px-4">
              <div className="progress-wrapper">
                <strong className="text-muted d-block mb-2">
                  
                </strong>
                <Progress
                  className="progress-sm"
                  value=''
                >
                  <span className="progress-value">
                    87%
                  </span>
                </Progress>
              </div>
            </ListGroupItem>
            <ListGroupItem className="p-4">
              <strong className="text-muted d-block mb-2">
                dd
              </strong>
              <span>dd</span>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
      
      <Col lg="8">
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">
            <i className="material-icons mr-1">account_circle</i>Formulário de cadastro
          </h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form onSubmit = {handleNewTeacher}>
                  <Row form>
                    {/* Name */}
                    <Col md="12" className="form-group">
                      <i className="material-icons mr-1">spellcheck</i>
                      <label htmlFor="txtName">Nome</label>
                      <FormInput
                        id="txtName"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </Col>                
                  </Row>
                  <Row form>
                    {/* Email */}
                    <Col md="12" className="form-group">
                      <i className="material-icons mr-1">alternate_email</i>
                      <label htmlFor="txtEmail">Email</label>
                      <FormInput
                        type="email"
                        id="txtEmail"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
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
                      <Button theme="white" className="mb-2 mr-1" onClick={() => backToAreaList()} type="button">
                          <FiChevronsLeft size={18} color="#47476b" />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
      </Col>
    </Row>
);
}