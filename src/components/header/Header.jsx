import styles from "./Header.module.scss";
import classNames from "classnames";
import Paper from "@mui/material/Paper";

export default function Header({ right, left }) {
  return (
    <div className={classNames(styles["header-wrapper"])}>
      <Paper className={classNames(styles.header)}>
        <div className={classNames(styles.left)}>{left}</div>
        <div className={classNames(styles.right)}>{right}</div>
      </Paper>
    </div>
  );
}
