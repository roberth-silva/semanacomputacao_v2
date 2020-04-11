import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import ListGlobalTeacher from "../../components/teacher/ListGlobalTeacher";
import PageTitle from "../../components/common/PageTitle";

import api from '../../services/api';

export default function list(){
  return(
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Professores e palestrantes" subtitle="Ciência da Computação" className="text-sm-left" />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <ListGlobalTeacher />
        </Col>
      </Row>
    </Container>
  );
}