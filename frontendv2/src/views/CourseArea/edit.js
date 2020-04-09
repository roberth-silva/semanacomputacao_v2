import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import EditCourseArea from "../../components/coursearea/EditCourseArea";

export default function edit(){

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
            <PageTitle title="Edição de área" subtitle="Editar" md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>
            <Row>
            <Col lg="10">
                <EditCourseArea />
            </Col>
            </Row>
        </Container>
    );
}