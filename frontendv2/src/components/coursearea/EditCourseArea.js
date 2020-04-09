import React, {useState, useEffect} from "react";

import {useHistory} from 'react-router-dom';

import {FiCheckCircle, FiChevronsLeft} from 'react-icons/fi';

import api from '../../services/api';

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

import {FiEdit} from 'react-icons/fi';

export default function EditCourseArea(e) {

  const [courseareas, setCourseArea] = useState([]);

  const [description, setDescription] = useState('');  

  const id = localStorage.getItem('courseAreaId');

  useEffect(()=>{    
      api.get(`coursearea/${id}`, {}).then(response => {
        setCourseArea(response.data);
      });
  },[]);  

  const history = useHistory();

  async function handleEditArea(e){
      e.preventDefault();

      const data = {id, description};

      try {
          await api.put('coursearea', data);
          history.push('/coursearea');          

      } catch (error) {
          alert('Erro ao editar área.' + error);
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
            <Form onSubmit={handleEditArea}>
              <Row form>                
                <Col md="12" className="form-group">
                  <label htmlFor="txtDescription">Descrição</label>
                  {courseareas.map(coursearea => (
                    <FormInput                    
                      id="txtDescription"
                      defaultValue={coursearea.description}
                      placeholder="Área"
                      onChange={e => setDescription(e.target.value)}
                    />
                  ))}
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