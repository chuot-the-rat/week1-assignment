import { useState } from "react";
import "./App.css";

function App() {

    return (
        <>
            <div className="App">
                <div className="header">
                    <a
                        href="/"
                        className="logo"
                    ></a>
                    <h1>Book Shop Catalog</h1>
                    <div className="content">
                        <div className="card">
                            <h2>Book Title 1</h2>
                            <p>Author: Author Name 1</p>
                            <p>Price: $10.00</p>
                        </div>
                    </div>
                    <div className="footer">
                        <p> © 2025 Book Shop</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
