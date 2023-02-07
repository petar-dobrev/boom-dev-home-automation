import styles from "./Time.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

export default function Time() {
  let date = new Date();
  const [hour, setHour] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());

  useEffect(() => {
    setInterval(() => {
      date = new Date();
      setHour(date.getHours());
      setMinutes(date.getMinutes());
    }, 1000);
  }, [minutes]);

  return (
    <div className={classNames(styles["time-wrapper"])}>
      <Typography className={classNames(styles.title)}>Time</Typography>
      <Typography variant="h1">
        {hour}:{minutes}
      </Typography>
    </div>
  );
}
