/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../Card/Card";

// eslint-disable-next-line react/prop-types
const CardList = ({ rooms }) => {
  return (
    <div style={{ display: "flex", height: "100%", flexWrap: "wrap" }}>
      {rooms.map((description, i) => {
        return (
          <Card
            key={i}
            description={rooms[i].description}
            publisher={rooms[i].publisher}
            name={rooms[i].name}
            image={rooms[i].image}
            link={rooms[i].link}
            language={rooms[i].language}
            schedule={rooms[i].schedule}
            begining={rooms[i].begining}
            tags={rooms[i].tags}
          />
        );
      })}
    </div>
  );
};

export default CardList;
