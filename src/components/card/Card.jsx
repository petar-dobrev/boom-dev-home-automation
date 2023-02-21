import classNames from "classnames";

import { CardContent } from "@mui/material";
import { Card as MUICard } from "@mui/material";

import styles from "./Card.module.scss";

export default function Card({ iconUrl, outlined = false }) {
  return (
    <div className={classNames(styles.card)}>
      <MUICard
        className={outlined ? styles.outlined : ""}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
        }}
      >
        <CardContent>
          <img src={iconUrl} alt="icon" />
        </CardContent>
      </MUICard>
    </div>
  );
}
