import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Row, Col, Card, CardHeader, CardBody, Button } from 'shards-react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { TiDocumentAdd } from 'react-icons/ti';

export default function ListaGlobalCourse(){

    const [courses, setCourses] = useState([]);

    const history = useHistory();

    useEffect(()=>{
        api.get('course', {}).then(response => {
            setCourses(response.data);
        });
    },[]);

    function handleNewCourse(){
        history.push('/course-create');
      }
  
      function handleEditCourse(id){
        localStorage.setItem('courseId', id);
        history.push('/course-edit');
      }
  
      async function handleDeleteCourse(id){
          try {
              await api.delete(`course/${id}`);
  
              setCourses(courses.filter(course => course.id !== id));
  
          } catch (err) {
              alert('Erro ao deletar curso/palestra, tente novamente.' + err + id);
          }
      }

    return (        
        <Row>
            <Col>
                <Card small className="mb-4">                    
                    <CardHeader className="border-bottom">
                        <Row>
                            <Col>
                                <h6 className="m-0">Cursos e palestras cadastrados</h6>
                            </Col>
                            <Col className="text-right view-report">
                                <Button theme="white" className="mb-2 mr-1" onClick={handleNewCourse} type="button">
                                    <TiDocumentAdd size={20} color="#8B2500" />
                                </Button>
                            </Col>
                        </Row>                        
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                        <thead className="bg-light">
                        <tr>
                            <th scope="col" className="border-0">
                                <i className="material-icons mr-1">done_outline</i>Id
                            </th>
                            <th scope="col" className="border-0">
                                <i className="material-icons mr-1">room</i>Local
                            </th>

                        </tr>
                        </thead>
                        <tbody>
                            {courses.map(course =>(
                            <tr>
                                <td>{course.id}</td>
                                <td>{course.local}</td>
                                <td>
                                    <Button theme="primary" className="mb-2 mr-1" onClick={() => handleEditCourse(course.id)} type="button">
                                        <FiEdit size={18} color="#ffffff" />
                                    </Button>
                                    <Button theme="danger" className="mb-2 mr-1" onClick={() => handleDeleteCourse(course.id)} type="button">
                                        <FiTrash2 size={18} color="#ffffff" />
                                    </Button>
                                </td>
                            </tr>
                            ))}                
                        </tbody>
                    </table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}