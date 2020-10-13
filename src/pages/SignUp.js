import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const  SignUp = () => {

  const [fields, setFields]=useState({});
  const [error, setError]=useState({});

  const classes = useStyles();

      const contactSubmit =(fields, error, e)=>{
         let errors={};
          e.preventDefault();
           if(!fields["email"]){
                errors["email"] = "Email is not valid";
                setError(errors)
            }
            if(!fields["password"]){
                errors["password"] = "Password Cannot be empty"; 
                setError(errors)
             }
             if(!fields["name"]){
              errors["name"] = "Name Cannot be empty"; 
              setError(errors)
           }
           if(!fields["userName"]){
            errors["userName"] = "UserName Cannot be empty"; 
            setError(errors)
         }
         fields["name"] && window.localStorage.setItem('name', fields["name"]);
         fields["email"] && window.localStorage.setItem('email', fields["email"]);
            }
            

         const handleChange = (field, fields, e)=>{   
            let newfields =fields;
            let errors = {};
            newfields[field] = e.target.value;
         //password
         if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            errors["email"] = "Email is not valid";
            } }

           if(!fields[field]){
            errors[field] = field +" Cannot be empty";}

            setError(errors);
            setFields(newfields);
        }

  return (
    <React.Fragment>
       <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={(e)=> contactSubmit(fields,error,e)}>
        <TextField
           error={error.name}
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            helperText={error.name}
            onChange={(e) => handleChange("name",fields,e)}
          />
           <TextField
           error={error.userName}
            variant="outlined"
            margin="normal"
            fullWidth
            id="userName"
            label="UserName"
            name="userName"
            autoComplete="userName"
            helperText={error.userName}
            onChange={(e) => handleChange("userName",fields,e)}
            
          />
          <TextField
           error={error.email}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={error.email}
            onChange={(e) => handleChange("email",fields,e)}
          />
          <TextField
            error={error.password}
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText={error.password}
            onChange={(e) => handleChange("password",fields,e)}
            autoComplete="current-password"
          />
          {Object.keys(error).length>0 || Object.keys(fields).length!==4 ? 
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            {"Sign In"}
            </Button>
         :  
         <NavLink to="/auth/welcome"  variant="body2">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           {"Register"}
          </Button>
          </NavLink>}

        </form>
      </div>
    </Container>
    </React.Fragment>
  );
}

export default SignUp;
