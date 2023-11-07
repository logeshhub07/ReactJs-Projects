import React from "react";
import ItemsList from "./ItemsList";

const Content = ({ items, handleDelete, handleEvent }) => {
  return (
    <div>
      <main>
        {items.length ? (
          <ItemsList
            items={items}
            handleEvent={handleEvent}
            handleDelete={handleDelete}
          />
        ) : (
          <p>Your list is empty</p>
        )}
      </main>
    </div>
  );
};

export default Content;
