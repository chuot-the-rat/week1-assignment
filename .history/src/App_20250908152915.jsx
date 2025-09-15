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
              </div>

            </div>
        </>
    );
}

export default App;
