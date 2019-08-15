import React from "react";
// import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormState } from "react-use-form-state";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUpForm() {
  const [formState, { text }] = useFormState();
  const classes = useStyles();

  function handleSubmit() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl =
        "https://63uxgjbrf0.execute-api.us-east-1.amazonaws.com/dev/room";

    fetch(proxyUrl + targetUrl, {
      method: "post",
      body: JSON.stringify({
        name: formState.values["name"],
        publisher: formState.values["publisher"],
        image: formState.values["image"],
        type: formState.values["type"]
      })
    })
      .then(console.log(formState.values["name"]))
      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Room
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid>
            <Grid item xs={12}>
              <TextField
                {...text("name")}
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Description"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...text("publisher")}
                variant="outlined"
                required
                fullWidth
                id="publisher"
                label="publisher"
                name="publisher"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...text("image")}
                variant="outlined"
                required
                fullWidth
                type="url"
                name="image"
                label="image"
                id="image"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...text("type")}
                variant="outlined"
                required
                fullWidth
                type="text"
                name="type"
                label="type"
                id="type"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Room
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
