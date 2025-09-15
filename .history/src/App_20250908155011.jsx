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
                        <BookCard
                            book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                price: "$10.99",
                                image: "/",
                                link: "/book1"
                            }}
                        />
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

function BookCard({ book }) {
    return (
        <div className="card">
            <a href={book.link}>
                <div className="image">
                    <img
                        src={book.image}
                        alt={book.title}
                    />
                </div>
                <div className="title">
                    <h2>{book.title}</h2>
                </div>
                <div className="author">
                    <p>Author: {book.author}</p>
                </div>
                <div className="price">
                    <p>Price: {book.price}</p>
                </div>
            </a>
        </div>
    );
}

export default App;
