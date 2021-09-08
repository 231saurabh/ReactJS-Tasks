import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBg, changeBg1, changeBg2, changeBg3, changeBg4, resetBg } from "../redux/actions";
import { BG_KEY } from "../redux/reducer";
import { Button, Container, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mybox: {
    width: "auto",
    height: 450,
    marginBottom: 25
  }
})

const Background = () => {
  const classes = useStyles();

  let dispatch = useDispatch();

  let clickChangeColor = () => {
    dispatch(changeBg());
  };

  let clickChangeColor1 = () => {
    dispatch(changeBg1());
  };
  let clickChangeColor2 = () => {
    dispatch(changeBg2());
  };
  let clickChangeColor3 = () => {
    dispatch(changeBg3());
  };
  let clickChangeColor4 = () => {
    dispatch(changeBg4());
  };
  let clickResetBg = () => {
    dispatch(resetBg());
  };

  let viewBg = useSelector((state) => {
    return state[BG_KEY];
  });

  return (
    <Container>
      <Card>
        <Box textAlign="center">
          <h1>CHANGE BACKGROUND COLOR</h1>
        </Box> &nbsp; &nbsp;

        <Button variant="contained" color="primary" onClick={clickChangeColor}>Change Color</Button> &nbsp; &nbsp;
        <Button variant="contained" color="primary" onClick={clickChangeColor1}>Change Color</Button> &nbsp; &nbsp;
        <Button variant="contained" color="primary" onClick={clickChangeColor2}>Change Color</Button> &nbsp; &nbsp;
        <Button variant="contained" color="primary" onClick={clickChangeColor3}>Change Color</Button> &nbsp; &nbsp;
        <Button variant="contained" color="primary" onClick={clickChangeColor4}>Change Color</Button> &nbsp; &nbsp;

        <Button variant="contained" color="secondary" onClick={clickResetBg}>RESET</Button>
        <p>COLOR CODE:<span style={{ color: viewBg.color }}> {viewBg.color}</span></p>

        <Container fixed>
          <div className={classes.mybox}
            style={{ backgroundColor: viewBg.color }}>
          </div>
        </Container>

      </Card>
    </Container>
  );
};

export default Background;
