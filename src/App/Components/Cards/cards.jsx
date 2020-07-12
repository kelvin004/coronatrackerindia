import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./cards.module.css";
import Grid from "@material-ui/core/Grid";
import cx from "classnames";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  infected: {
    background: "rgba(0, 0, 255, 0.5)",
    border: 3,
    borderRadius: 5,
    //boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "10px 10px 10px 10px"
  },
  active: {
    background: "#CCCC00",
    border: 3,
    borderRadius: 5,
    //boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "10px 10px 10px 10px"
  },
  death: {
    background: "rgba(255, 0, 0, 0.7)",
    border: 3,
    borderRadius: 5,
    //boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "10px 10px 10px 10px"
  },
  recovered: {
    background: "rgba(0, 255, 0, 0.7)",
    border: 3,
    borderRadius: 5,
    //boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "10px 10px 10px 10px"
  }
});

const Cardinfo = props => {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Grid container spacing={3}>
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.Infected)}
        >
          <CardContent className={classes.infected}>
            <Typography className={styles.fontSize}>
              Infected People:
            </Typography>
            <Typography variant="h5">
              <CountUp
                end={
                  typeof props.data.confirmed !== "undefined"
                    ? props.data.confirmed
                    : 0
                }
                duration={0.5}
              ></CountUp>
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.active)}
        >
          <CardContent className={classes.active}>
            <Typography className={styles.fontSize}>Active Case:</Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                end={
                  typeof props.data.active !== "undefined"
                    ? props.data.active
                    : 0
                }
                duration={0.5}
              ></CountUp>
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.Deaths)}
        >
          <CardContent className={classes.death}>
            <Typography className={styles.fontSize}>Deaths:</Typography>
            <Typography variant="h5">
              {
                <CountUp
                  end={
                    typeof props.data.deaths !== "undefined"
                      ? props.data.deaths
                      : 0
                  }
                  duration={0.5}
                ></CountUp>
              }
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.Recovered)}
        >
          <CardContent className={classes.recovered}>
            <Typography className={styles.fontSize}>Recovered:</Typography>
            <Typography variant="h5">
              {
                <CountUp
                  end={
                    typeof props.data.recovered !== "undefined"
                      ? props.data.recovered
                      : 0
                  }
                  duration={0.5}
                ></CountUp>
              }
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cardinfo;
