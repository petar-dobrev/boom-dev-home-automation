import { Avatar, Grid, Container, Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import styles from './User.module.scss'
export default function User(props) {

    let user = { avatar:"/public/avatar.png", name: 'Arif', size:'height: 15px, width: 24px' };

    return (
        <div className={classNames(styles["user-container"])}>
            <Container className={classNames(styles.container)}>
                <Grid
                    className={classNames(styles.grid)}
                    container direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Avatar
                        img={user.avatar}
                        sizes={user.size}>

                    </Avatar>
                    <Typography>
                        {user.name}
                    </Typography>
                </Grid>
            </Container>
        </div>
    );
}