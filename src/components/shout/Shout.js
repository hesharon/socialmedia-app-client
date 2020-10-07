import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs"; // Could also use moment but this is more lightweight
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";

// Components
import MyButton from "../../util/MyButton";
import DeleteShout from "./DeleteShout";
import ShoutDialog from "./ShoutDialog";
import LikeButton from "./LikeButton";

// Icons
import ChatIcon from "@material-ui/icons/Chat";

//MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

// Redux
import { connect } from "react-redux";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: "cover", // To prevent image from getting stretched by changes of dimensions of div
  },
};

export class Shout extends Component {
  render() {
    dayjs.extend(relativeTime);
    // const classes = this.props.classes
    const {
      classes,
      shout: {
        body,
        createdAt,
        userImage,
        userHandle,
        shoutId,
        likeCount,
        commentCount,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;
    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteShout shoutId={shoutId} />
      ) : null;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
          <LikeButton shoutId={shoutId} />
          <span>{likeCount} Likes</span>
          <MyButton tip="Comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} Comments</span>
          <ShoutDialog
            shoutId={shoutId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          />
        </CardContent>
      </Card>
    );
  }
}

Shout.propTypes = {
  user: PropTypes.object.isRequired,
  shout: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(withStyles(styles)(Shout));
