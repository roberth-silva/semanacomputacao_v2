import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../../components/common/PageTitle";

import api from '../../services/api';

export default function ListTeacher(){

    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{
        api.get('teacher', {}).then(response => {
            setTeachers(response.data);
        });
    },[]);

    return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Listagem de professores e palestras" subtitle="Ciência da Computação" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Professores e palestrantes cadastrados</h6>
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
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                  {teachers.map(teacher =>(
                    <tr>
                        <td>{teacher.id}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.email}</td>
                    </tr>
                  ))}                
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);
}