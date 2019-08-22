import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Header from "./node_modules/components/Header/Header.jsx.js";
import Footer from "./node_modules/components/Footer/Footer.jsx.js";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  div: {}
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img
                src={"https://avatars0.githubusercontent.com/u/5710346?v=4"}
                height="40"
                width="40"
                alt="Bruno"
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://hackernoon.com/hn-images/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <Badge />
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Footer />
    </div>
  );
}
