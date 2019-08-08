// eslint-disable-next-line no-unused-vars
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
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
import { flexbox } from "@material-ui/system";
import Container from "@material-ui/core/Container";

const mediaStyle = {
  height: 0,
  paddingTop: "56.25%" // 16:9
};

const containerAll = {
  display: "flex",
  flexbox: "row"
};
const cardStyle = {
  maxWidth: 345,
  margin: 10
};

const roomCard = ({ description, image, language, name, link, publisher }) => {
  return (
    <Container style={containerAll}>
      <Card style={cardStyle}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <img src={image} height="40" width="40" alt={description} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={description}
          subheader={name}
        />
        <CardMedia
          style={mediaStyle}
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
    </Container>
  );
};

export default roomCard;
