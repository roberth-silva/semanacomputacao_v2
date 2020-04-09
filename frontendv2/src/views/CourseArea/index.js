import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import IndexCourseArea from "../../components/coursearea/IndexCourseArea";

export default function edit(){

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
              <PageTitle sm="4" title="Área do curso/palestra" subtitle="Listagem" className="text-sm-left" />
            </Row>
            <Row>
              <Col lg="10">
                  <IndexCourseArea />
              </Col>
            </Row>
        </Container>
    );
}