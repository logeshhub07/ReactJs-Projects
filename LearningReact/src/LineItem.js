import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleDelete, handleEvent }) => {
  return (
    <>
      <li className="item" key={item.id}>
        <input
          type="checkbox"
          onChange={() => handleEvent(item.id)}
          checked={item.checked}
        />
        <label
          style={item.checked ? { textDecoration: "line-through" } : null}
          onClick={() => handleEvent(item.id)}
        >
          {item.item}
        </label>
        <FaRegTrashAlt
          role="button"
          onClick={() => handleDelete(item.id)}
          tabIndex="0"
        />
      </li>
    </>
  );
};

export default LineItem;
