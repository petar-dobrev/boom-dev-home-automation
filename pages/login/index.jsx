import React from "react";
import styles from './LoginPage.module.scss'
import { Paper, Container } from "@mui/material";
import Login from "../../src/components/login/Login";
import classNames from "classnames";

export default function LoginPage() {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)}>
                <Paper className={classNames(styles.paper)}>
                    <Login />
                </Paper>
            </Container>
        </div>
    );
}