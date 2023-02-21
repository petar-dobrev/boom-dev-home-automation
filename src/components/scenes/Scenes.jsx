import classNames from "classnames";

import { Grid } from "@mui/material";
import Card from "../card/Card";

import styles from "./Scenes.module.scss";

export default function Scenes({ cards = [], selected }) {
  return (
    <Grid container gap={2} className={classNames(styles["scenes-container"])}>
      {cards.map((card) => (
        <Grid item key={card.id}>
          <Card iconUrl={card.iconUrl} />
        </Grid>
      ))}
    </Grid>
  );
}
