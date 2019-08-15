import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class Top extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="sm" style={{ marginTop: 30, marginBottom: 30 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Find an Awsome Code Buddie Today
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          <div>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button href="/signup" variant="contained" color="primary">
                  Create my Room (It is Free!)
                </Button>
              </Grid>
              <Grid item>
                <Button href="#rooms" variant="outlined" color="primary">
                  Search for a great Buddie
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        ;
      </div>
    );
  }
}
