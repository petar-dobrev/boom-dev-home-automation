
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import classNames from "classnames";
import React from "react";
import styles from './User.module.scss'
export default function User({ avatar, name, size }) {
    return (
        <div className={classNames(styles["user-container"])}>
            <Container className={classNames(styles.container)}>
                <Grid
                    className={classNames(styles.grid)}
                    container direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Stack direction="row" spacing="2">
                    <Avatar
                        src={avatar}
                        sx={{size}}

                        />
                        </Stack>
                    <Typography>{name}</Typography>

                </Grid>
            </Container>
        </div>
    );
}
