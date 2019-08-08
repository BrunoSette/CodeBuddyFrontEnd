/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";

const CardList = ({ rooms }) => {
  return (
    <div>
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
          />
        );
      })}
    </div>
  );
};

export default CardList;
