import React from "react";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

import Avatar from '../../images/avatars/0.jpg';

export default function CreateTeacher ({ userDetails }){



    return(
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={Avatar}
          alt=''
          width="110"
        />
      </div>
      <h4 className="mb-0">''</h4>
      <span className="text-muted d-block mb-2">''</span>
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
             
          </strong>
          <Progress
            className="progress-sm"
            value=''
          >
            <span className="progress-value">
              87%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          dd
        </strong>
        <span>dd</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);
}