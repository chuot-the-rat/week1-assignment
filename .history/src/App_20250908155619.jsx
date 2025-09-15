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
                                title: "Head First Java, 3rd Edition",
                                author: "Kathy Sierra, Bert Bates, Trisha Gee",
                                price: "$42.27 - $45.00",
                                image: "/images/book1.jpg",
                                link: "/book1",
                            }}
                        />
                        <BookCard
                            book={{
                                title: "Native Mobile Development",
                                author: "Shaun Lewis, Mike Dunn
",
                                price: "$12.99",
                                image: "/images/book2.jpg",
                                link: "/book2",
                            }}
                        />
                        <BookCard
                            book={{
                                title: "ScratchJr Coding Cards",
                                author: "Marina Umaschi Bers, Amanda Sullivan",
                                price: "$14.99",
                                image: "/images/book3.jpg",
                                link: "/book3",
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
