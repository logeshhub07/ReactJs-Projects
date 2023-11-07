import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo_list"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setLocalValues = (e) => {
    setItems(e);
    localStorage.setItem("todo_list", JSON.stringify(e));
  };

  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setLocalValues(listItems);
  };

  const handleEvent = (id) => {
    const arr = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setLocalValues(arr);
  };

  const handleDelete = (id) => {
    const arr = items.filter((item) => item.id !== id);
    setLocalValues(arr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItems(newItem);
    if (!newItem) return;
    setNewItem("");
  };  
  const filterValues = (items)=>{
    const values = items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))
    return values;
  }

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={filterValues(items)}
        handleEvent={handleEvent}
        handleDelete={handleDelete}
      />
      <Footer item={items.length} />
    </div>
  );
}

export default App;
