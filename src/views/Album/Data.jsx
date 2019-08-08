import React, { Component } from "react";
import CardList from "../../components/CardList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Box from "@material-ui/core/Box";

class Data extends Component {
  constructor() {
    super();
    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl =
        "https://63uxgjbrf0.execute-api.us-east-1.amazonaws.com/dev/room";

    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(description => {
        this.setState({ rooms: description });
      });
  }

  render() {
    const rooms = this.state.rooms;

    return (
      <div className="tc">
        <Header />
        <Box display="flex" flexDirection="row">
          <CardList rooms={rooms} />
        </Box>
        <Footer />
      </div>
    );
  }
}

export default Data;
