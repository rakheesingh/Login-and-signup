import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {SimpleSnackbar} from './Components/Snackbar';

const useStyles = makeStyles((theme)=>({
    root: {
      minWidth: 275,
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#FFFDD0',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

export const Welcome =()=>{
    const classes = useStyles();
    return (
        <>
     <SimpleSnackbar/>
    <Container component="main" maxWidth="xs">
     <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         UserName: {window.localStorage.getItem('name')}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
         Email: {window.localStorage.getItem('email')}
        </Typography>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  </Container>
        </>
    );

}