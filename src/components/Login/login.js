import { Grid, Icon, Paper } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import React from "react";

const Login = () => {
    return (
        <Grid>
            <Paper>
                <form>
                   <EmailIcon /><input  type="text" ></input>
                    <input type="password" ></input>
                </form>
            </Paper>
        </Grid>
    )
}
export default Login