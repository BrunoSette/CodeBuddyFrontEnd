/* eslint-disable react/prop-types */
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
import Box from "@material-ui/core/Box";
import Moment from "react-moment";
import "moment-timezone";
import Chip from "@material-ui/core/Chip";

const mediaStyle = {
  height: 140,
  paddingTop: "56.25%" // 16:9
};

const containerAll = {
  maxWidth: 345,
  minWidth: 345,
  margin: 6,
  cursor: "pointer"
};

const cardStyle = {
  height: "100%"
};

const cardActionsStyle = {
  alignItems: "flex-end",
  marginBottom: 15,
  marginTop: "auto"
};

const roomCard = ({
  description,
  // schedule,
  image,
  // language,
  name,
  // link,
  publisher,
  begining,
  tags
}) => {
  return (
    <div style={containerAll}>
      <Card style={cardStyle}>
        <CardMedia style={mediaStyle} image={image} title={description} />
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <img
                src="https://github.com/brunosette.png?size=40"
                alt={publisher}
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={publisher}
          subheader={name}
        />
        <CardContent>
          {/* <Typography variant="body2" color="textSecondary" component="p"> */}
          <Typography variant="h5" color="textPrimary" component="p">
            <Box fontWeight="fontWeightBold" fontSize={28}>
              {description}
            </Box>
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Starting at <Moment parse="YY-MM-DD HH:mm">{begining}</Moment>
          </Typography>
          <Typography
            variant="h7"
            color="textPrimary"
            component="p"
          ></Typography>
          <Chip
            variant="outlined"
            size="small"
            color="primary"
            label={tags.join(", ")}
          />
        </CardContent>

        <CardActions disableSpacing style={cardActionsStyle}>
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
