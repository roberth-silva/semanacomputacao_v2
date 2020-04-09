import React, {useState, useEffect} from 'react';

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import api from '../../services/api';

import './styles.css';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Teacher(){
    const [teachers, setTeachers] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        api.get('teacher',{}).then(response => {
            setTeachers(response.data);
            console.log(response.data);
        })
    },[]);    

    function handleLogout(){
        localStorage.clear();
        //history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vindo, </span>

                <Link className="button" to="/incidents/new">Cadastrar novo professor</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Professores</h1>

            <ul>                
                {teachers.map(teacher => (                
                    
                    <Card id={teacher.id} className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={logoImg}
                        title="Contemplative Reptile"
                        />
                      <CardHeader>
                        as
                      </CardHeader>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {teacher.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {teacher.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {teacher.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                ))}
            </ul>
        </div>
    );
}