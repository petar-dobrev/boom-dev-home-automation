import { Button, InputAdornment } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import classNames from "classnames";
import React from "react";
import TextField from '@material-ui/core/TextField';
import styles from './Login.module.scss'



export default function Login() {

    React.createElement('div', {className: "login-form"}, [
        // Your form elements go here
     ])


    return (
        <div className={classNames(styles.login)}>
            <form className={classNames(styles.form)} noValidate autoComplete="on">
                <TextField className={classNames(styles.text)}
                    id="input-email"
                    type="text"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon className={classNames(styles.icon)}
                                    style={{
                                        color: "black"
                                    }} />
                            </InputAdornment>
                        ),
                        disableUnderline: true,
                    }}
                />
                <TextField className={classNames(styles.password)}
                    id="input-email"
                    type="password"
                    style={{
                        color: "black",
                        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)"
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon style={{
                                    color: "black"
                                }}
                                    className={classNames(styles.icon)} />
                            </InputAdornment>
                        ),
                        disableUnderline: true,
                    }}
                />

                <Button className={classNames(styles.button)} type="login" variant="contained">Login</Button>


            </form>
        </div>
    );
}