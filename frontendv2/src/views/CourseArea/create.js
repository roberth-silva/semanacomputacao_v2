import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import CreateCourseArea from "../../components/coursearea/CreateCourseArea";


export default function create(){

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
            <PageTitle title="Cadastro de área" subtitle="Cadastro" md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>
            <Row>
            <Col lg="10">
                <CreateCourseArea />
            </Col>
            </Row>
        </Container>
    );
}