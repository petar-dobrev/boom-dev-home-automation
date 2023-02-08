import { Button, Container, Grid, Icon, InputAdornment, Paper } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import classNames from "classnames";
import React from "react";
import TextField from '@material-ui/core/TextField';
import styles from '../Login/Login.module.scss'



export default function LoginInput() {

    
    return (
        <form className={classNames(styles.form)} noValidate autoComplete="on">
            <div>
                <TextField className={classNames(styles.text)}
                    id="input-email"
                    type="text"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField className={classNames(styles.pwd)}
                id="input-email"
                type="text"
                InputProps={{
                    startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }}
                    />
                
                <Button className={classNames(styles.button)} type="login" variant="contained">Login</Button>

            </div>
        </form>
    );
}