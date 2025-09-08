import BookCard from "./BookCard";

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
                                link: "https://itbook.store/books/9781491910771",
                            }}
                        />
                        <BookCard
                            book={{
                                title: "Native Mobile Development",
                                author: "Shaun Lewis, Mike Dunn",
                                price: "$32.77 - $38.70",
                                image: "/images/book2.jpg",
                                link: "https://itbook.store/books/9781492052876",
                            }}
                        />
                        <BookCard
                            book={{
                                title: "ScratchJr Coding Cards",
                                author: "Marina Umaschi Bers, Amanda Sullivan",
                                price: "$14.99 - $19.37",
                                image: "/images/book3.jpg",
                                link: "https://itbook.store/books/9781593278991",
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

export default App;
