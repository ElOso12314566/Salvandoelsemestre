"use client"
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {register} from "../../services/Firebase/auth";
import "./register.css"


export default function Register() {

    const [state, setState] = React.useState ({
    email: "",
    password: "",
    displayName: ""
    });

    
    function onChange(event){
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        setState({
            ...state,
            [name]: value
        })
    }

    function onRegister(event) {
        event.preventDefault(); 
        //const email = state.email;
        //const password = state.password;
        const {email, password, displayName} = state;
        const args = {
            email,
            password,
            displayName
        }

        register(args);
     }


    return (
        
        <Stack width="500px"
        spacing={3} // int 1 / donde 1 es 8px
        py="10px"
        m={4}
        >

        <form onSubmit={onRegister}>

        <TextField 
        onChange= {onChange}
        name="displayName" 
        value={state.displayName} 
        type="text"
        label="tu nombre" 
        sx={{ width: '100%' }} 
        />
<br></br>
<br></br>
    <TextField 
        onChange= {onChange}
        name="email"  
        value={state.email} 
        type="email"
        label="ejemplo@ejemplo.com" 
        required
        sx={{ width: '100%' }} 
    />
<br></br>
<br></br>
    <TextField 
        onChange= {onChange}
        name="password"  
        value={state.password} 
        type="password"
        label="123456" 
        required
        sx={{ width: '100%' }} 
    />
<br></br>
<br></br>
    <Button variant="outlined" sx={{ width: '100%' }} >Registrarse</Button>  
    </form>

    </Stack>
    )
}