function App() {
    return (
        <>
            <div className="App">
                <div className="header">
                    <a
                        href="/"
                        className="logo"
                    ></a>
                    <div>Book Shop Catalog</div>

                    <div className="content">
                        <div className="card">
                            <div className="image">
                                <img src="https://example.com/book1.jpg" />
                            </div>
                            <div className="title">
                                <h2></h2>
                            </div>
                            <div className="author">
                                <p>Author: </p>
                            </div>
                            <div className="price">
                                <p>Price: $</p>
                            </div>
                        </div>
                    </div>

                    <div className="btn">
                        <button>Load More</button>
                    </div>

                    <div className="footer">
                        <div> © 2025 Book Shop</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
