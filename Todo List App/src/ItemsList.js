import React from "react";
import LineItem from "./LineItem";

const ItemsList = ({ items, handleDelete, handleEvent }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <LineItem
            item={item}
            key={item.id}
            handleEvent={handleEvent}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
