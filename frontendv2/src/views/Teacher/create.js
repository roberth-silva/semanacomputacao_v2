import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import CreateTeacher from "../../components/teacher/CreateTeacher";
import CreateTeacherAccount from "../../components/teacher/CreateTeacherAccount";

export default function create(){

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
            <PageTitle title="User Profile pela pasta" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>
            <Row>
            <Col lg="4">
                <CreateTeacher />
            </Col>
            <Col lg="8">
                <CreateTeacherAccount />
            </Col>
            </Row>
        </Container>
    );
}