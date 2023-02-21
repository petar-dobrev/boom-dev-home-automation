import { Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import styles from './Weather.module.scss'

export default function Weather({degrees, type}) {
    return (
        <div className={classNames(styles["weather-wrapper"])}>
            <Typography>
                <img src={type} alt="weather" />
                {degrees}&deg;
            </Typography>

        </div>
    )
}