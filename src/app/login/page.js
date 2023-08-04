'use client'
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./login.css"

export default function Login() {

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <Stack
            width="500px"
            spacing={2} // int 1 / donde 1 es 8px
            py="10px"
            m={4}
        >

            <TextField 
                onChange={handleChange} 
                name="email" 
                value={state.email} 
                type="text" 
                label="email" 
            />

            <TextField 
                name="password" 
                onChange={handleChange} 
                type="password" 
                label="123456" 
            />

            <Button variant="outlined">Login</Button>

        </Stack>
    )

}