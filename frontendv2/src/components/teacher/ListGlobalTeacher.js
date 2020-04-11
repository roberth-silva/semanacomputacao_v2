import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import {useHistory} from 'react-router-dom';

import {TiDocumentAdd} from 'react-icons/ti';

import api from '../../services/api';
import { FiTrash2, FiEdit } from "react-icons/fi";


export default function ListGlobalTeacher(){

    const [teachers, setTeachers] = useState([]);

    const history = useHistory();

    useEffect(()=>{
        api.get('teacher', {}).then(response => {
            setTeachers(response.data);            
        });
    },[]);

    function handleNewTeacher(){
      history.push('/teacher-create');
    }

    function handleEditTeacher(id){
      localStorage.setItem('teacherId', id);
      history.push('/teacher-edit');
    }

    async function handleDeleteTeacher(id){
        try {
            await api.delete(`teacher/${id}`);

            setTeachers(teachers.filter(teacher => teacher.id !== id));

        } catch (err) {
            alert('Erro ao deletar professor/palestrante, tente novamente.' + err + id)
        }
    }

    return(  
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <Row>
              <Col>
                <h6 className="m-0">Professores e palestrantes cadastrados</h6>
              </Col>
              <Col className="text-right view-report">
                <Button theme="white" className="mb-2 mr-1" onClick={handleNewTeacher} type="button">
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
                    <i className="material-icons mr-1">account_circle</i>Nome
                  </th>
                  <th scope="col" className="border-0">
                    <i className="material-icons mr-1">alternate_email</i>Email
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  {teachers.map(teacher =>(
                    <tr>
                        <td>{teacher.id}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.email}</td>
                        <td>
                          <Button theme="primary" className="mb-2 mr-1" onClick={() => handleEditTeacher(teacher.id)} type="button">
                              <FiEdit size={18} color="#ffffff" />
                          </Button>
                          <Button theme="danger" className="mb-2 mr-1" onClick={() => handleDeleteTeacher(teacher.id)} type="button">
                              <FiTrash2 size={18} color="#ffffff" />
                          </Button>
                        </td>
                    </tr>
                  ))}                
              </tbody>
            </table>
          </CardBody>
        </Card>
);
}