import React from "react";
import "./Listitems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

export default function ListItems({ items, deleteItem, updateItem }) {
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        {console.log(item.key)}
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(event) => updateItem(event.target.value, item.key)}
          />
          <span>
            <FontAwesomeIcon
              onClick={() => deleteItem(item)}
              className="faicons"
              icon="trash"
            />
          </span>
        </p>
      </div>
    );
  });

  return (
    <FlipMove duration={300} easing="ease-in-out">
      {listItems}
    </FlipMove>
  );
}
