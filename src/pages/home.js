import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import ShoutSkeleton from "../util/ShoutSkeleton";

// Components
import Shout from "../components/shout/Shout";
import Profile from "../components/profile/Profile";

// Redux
import { connect } from "react-redux";
import { getShouts } from "../redux/actions/dataActions";

class home extends Component {
  componentDidMount() {
    this.props.getShouts();
  }

  render() {
    const { shouts, loading } = this.props.data;
    let recentShoutsMarkup = !loading ? (
      shouts.map((shout) => (
        // Whenever we're looping through an array and
        // showing some data, each child needs a unique key property
        <Shout key={shout.shoutId} shout={shout} />
      ))
    ) : (
      <ShoutSkeleton />
    );

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          {recentShoutsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

home.propTypes = {
  getShouts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getShouts })(home);
