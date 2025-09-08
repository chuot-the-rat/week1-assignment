import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="App">
              <div className="header">
                <a href="/" className="logo"></a>
                <h1>Book Shop Catalog</h1>
              <div className="content">
                <div className="card">
                  <h2>Book Title 1</h2>
                  <p>Author: Author Name 1</p>
                  <p>Price: $10.00</p>
                </div>
                <div className="card">
                  <h2>Book Title 2</h2>
                  <p>Author: Author Name 2</p>
                  <p>Price: $15.00</p>
                </div>
                <div className="card">
            </div>

            </div>
        </>
    );
}

export default App;
