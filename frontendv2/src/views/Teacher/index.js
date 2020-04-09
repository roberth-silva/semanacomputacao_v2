import React from "react";
import { Container, Row, Col } from "shards-react";

import ListTeacher from "../../components/teacher/ListTeacher";
import PageTitle from "../../components/common/PageTitle";

export default function index (){

    return(
    <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Professores pelas pastas" subtitle="Ciência da Computação" className="text-sm-left" />
        </Row>

        <Row>      
        <Col lg="6" md="12">
            <ListTeacher />
        </Col>      
        </Row>
    </Container>
    );
}