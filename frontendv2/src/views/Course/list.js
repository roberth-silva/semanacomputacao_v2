import React from "react";
import { Container, Row} from "shards-react";

import ListGlobalCourse from '../../components/course/ListGlobalCourse';

import PageTitle from "../../components/common/PageTitle";

export default function list(){    

    return(
        <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Cursos e palestras" subtitle="Listagem" className="text-sm-left" />
            </Row>

            <ListGlobalCourse />

        </Container>
    );
}