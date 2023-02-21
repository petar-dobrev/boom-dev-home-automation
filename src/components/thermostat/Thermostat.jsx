import { AddCircle, RemoveCircle, Rotate90DegreesCcw } from "@mui/icons-material";
import { CircularProgress, Container, ListItem } from "@mui/material";
import classNames from "classnames";
import React from "react";
import styles from './Thermostat.module.scss'
import { ComposedChart, Line } from 'recharts';
import { useState } from "react";




export default function Thermostat({ data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
] }) {
    const [temperatureValue, setTemperatureValue] = useState(10);
    return (
        <div>


            <Container className={classNames(styles.container)}>
                <CircularProgress className={classNames(styles.progress)} size={250} sx={{ color: "white", }} variant="determinate" value={25}>

                </CircularProgress>
                <AddCircle className={classNames(styles.add)} fontSize="large" />
                <div className={classNames(styles.temperature)}>{temperatureValue}</div>
                <RemoveCircle className={classNames(styles.remove)} fontSize="large" />
                <ComposedChart
                    width={800}
                    height={200}
                    color="white"
                    margin={{top:0, right:20, bottom:90, left: 20}}
                    data={data} >
                    <Line type="monotone" dataKey="temperature" stroke="#ffffff" />
                </ComposedChart>
            </Container>
        </div>
    );

}