import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import EditTeacher from "../../components/teacher/EditTeacher";

export default function edit(){

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
            <PageTitle title="Professor/palestrante" subtitle="Edição" md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>            

            <EditTeacher />
            
        </Container>
    );
}