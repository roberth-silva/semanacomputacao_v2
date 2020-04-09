import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Button } from "shards-react";
import {FiEdit, FiTrash2} from 'react-icons/fi';

import {useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function IndexCourseArea(){
        
    const [courseareas, setCourseArea] = useState([]);

    const history = useHistory();    

    useEffect(()=>{
        api.get('coursearea', {}).then(response => {
          setCourseArea(response.data);
        });
    },[]);

    function handleEditArea(id){
      localStorage.setItem('courseAreaId', id);
      history.push('/coursearea-edit');      
    }

    async function handleDeleteArea(id){
        try {
            await api.delete(`coursearea/${id}`);

            setCourseArea(courseareas.filter(coursearea => coursearea.id !== id));

        } catch (err) {
            alert('Erro ao deletar área, tente novamente.' + err + id)
        }
    }

    return(
  
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Áreas cadastradas</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    Id
                  </th>
                  <th scope="col" className="border-0">
                    Nome
                  </th>
                  <th scope="col" className="border-0">
                    Data de cadastro
                  </th>
                  <th></th>                  
                </tr>
              </thead>
              <tbody>
                  {courseareas.map(coursearea =>(
                    <tr key={coursearea.id}>
                        <td>{coursearea.id}</td>
                        <td>{coursearea.description}</td>
                        <td>{coursearea.created_at}</td>
                        <td>
                          <Button theme="primary" className="mb-2 mr-1" onClick={() => handleEditArea(coursearea.id)} type="button">
                              <FiEdit size={18} color="#ffffff" />
                          </Button>
                          <Button theme="danger" className="mb-2 mr-1" onClick={() => handleDeleteArea(coursearea.id)} type="button">
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