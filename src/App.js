import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.title.value;

    if (value.trim() === '') {
      alert('Value cannot be empty!');
      return;
    }

    const id = (Math.random() + 1).toString(36).substring(7);
    const data = { id, value };
    setItems([...items, data]);
    event.target.reset();

    event.target.reset();
  };
  const handleModification = (itemId) => {
    const value = prompt('Enter new value:');

    if (value !== null) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, value: value } : item
        )
      );
    }
  };

  const handleDelete = (itemId) => {
    if (window.confirm('Delete this row?')) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }
  };

  return (
    <div id="app">
      <h1>My Todo 🗒️</h1>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Add Item</h2>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="form-control"
            autoComplete="off"
          />
          <button type="submit">Add</button>
        </form>

        <div className="items">
          <h2>My Items</h2>
          <ol>
            {items.map((item) => (
              <li key={`item-${item.id}`}>
                <h3 onClick={() => handleModification(item.id)}>
                  {item.value}
                </h3>
                <button
                  className="delete"
                  onClick={() => handleDelete(item.id)}
                ></button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
