import React, {useState, useEffect} from 'react';
import {
    Card,
    CardHeader,
    Button,
    ListGroup,
    ListGroupItem    
  } from "shards-react";

import api from '../../services/api';

import Avatar from '../../images/avatars/0.jpg'


export default function ListTeacher () {
    const ul ={
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '24px',
        listStyle: 'none'        
    };

    const li ={
        width: '350px',        
        maxWidth: '400px',
        padding: '24px',
        borderRadius: '8px',
        position: 'relative'
    }

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        api.get('teacher',{}).then(response => {
            setTeachers(response.data);            
        })
    },[]);

    return (
        <ul style={ul}>
            {teachers.map(teacher => (
                <li style={li}>
                    <Card small className="mb-4 pt-3" key={teacher.id}>
                    <CardHeader className="border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        <img
                        className="rounded-circle"
                        src={Avatar}
                        alt="prof"
                        width="110"
                        />
                    </div>
                    <h4 className="mb-0">{teacher.name}</h4>
                    <span className="text-muted d-block mb-2">Professor/Palestrante</span>
                    <Button pill outline size="sm" className="mb-2">
                        <i className="material-icons mr-1">person_add</i> Follow
                    </Button>
                    </CardHeader>
                    <ListGroup flush>
                    <ListGroupItem className="px-4">                    
                        <span className="d-flex mb-2">
                            <i className="material-icons mr-1">contact_mail</i>
                            <strong className="text-muted d-block mb-2">Email</strong>                        
                        </span>
                        <span>
                            {teacher.email}
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="p-4">
                    <span className="d-flex mb-2">
                            <i className="material-icons mr-1">description</i>
                            <strong className="text-muted d-block mb-2">Descrição</strong>                        
                        </span>
                        <span>
                            {teacher.description}
                        </span>
                    </ListGroupItem>
                    </ListGroup>
                </Card>
            </li>
            ))}
        </ul>
    );
}