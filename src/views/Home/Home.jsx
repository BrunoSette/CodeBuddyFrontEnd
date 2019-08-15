import React, { Component } from "react";
import CardList from "../../components/CardList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Top from "../Top/Top";

class Home extends Component {
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
    const styles = { example: { position: "fixed", top: 0 } };
    return (
      <div>
        <Header title="Example" style={styles.example} />
        <Top />
        <CardList rooms={rooms} />
        <Footer />
      </div>
    );
  }
}

export default Home;
