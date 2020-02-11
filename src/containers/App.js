import React, { Component } from "react";
import CardList from "../components/components/CardList.js";
import Search from "../components/components/SearchBox";
import Scroll from "../components/components/Scroll";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import "../index";
import "tachyons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner);

const mapStateToProps = state => {
  return {
    searchField: state.searchRobot.searchField,
    robots: state.requestRobotReducer.robots,
    isPending: state.requestRobotReducer.isPending,
    error: state.requestRobotReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, robots, isPending, handleChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !isPending ? (
      <FontAwesomeIcon icon="spinner" />
    ) : (
      <div className="main-body">
        <h2>ROBOFRIENDS</h2>
        <Search handleChange={handleChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
