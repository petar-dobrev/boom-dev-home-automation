import { Avatar, Grid, Container, Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import styles from './User.module.scss'
export default function User(props) {

    const { avatar, name, size } = props;

    return (
        <div className={classNames(styles["user-container"])}>
            <Container className={classNames(styles.container)}>
                <Grid
                    className={classNames(styles.grid)}
                    container direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Avatar
                        src={avatar}
                        size={size}>

                    </Avatar>
                    <Typography>
                        {name}
                    </Typography>
                </Grid>
            </Container>
        </div>
    );
}