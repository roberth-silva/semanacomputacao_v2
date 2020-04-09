import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../../components/common/PageTitle";

import api from '../../services/api';

export default function ListCourse(){

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        api.get('course', {}).then(response => {
            setCourses(response.data);
        });
    },[]);

    return(
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Listagem de cursos e palestras" subtitle="Ciência da Computação" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Cursos e palestras cadastrados</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>                  
                </tr>
              </thead>
              <tbody>
                  {courses.map(course =>(
                    <tr>
                        <td>{course.id}</td>
                        <td>{course.local}</td>
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