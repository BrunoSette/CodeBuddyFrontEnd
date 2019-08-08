// eslint-disable-next-line no-unused-vars
import React from "react";
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

const mediaStyle = {
  height: 0,
  paddingTop: "56.25%" // 16:9
};

const containerAll = {
  maxWidth: 345,
  minWidth: 345,
  margin: 6
};

const roomCard = ({ description, image, language, name, link, publisher }) => {
  return (
    <div style={containerAll}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <img
                src={"https://avatars0.githubusercontent.com/u/5710346?v=4"}
                height="40"
                width="40"
                alt={description}
              />
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
            {description}
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
    </div>
  );
};

export default roomCard;
